import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { IsEmail } from "class-validator";
import { PRIVATE_KEY } from "../config/auth";
import LoginError from "../helpers/errors/LoginError";

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  @IsEmail()
  email: string;

  @Column({ nullable: false })
  private passwordHash: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  set password(password: string) {
    this.passwordHash = bcrypt.hashSync(password, 12);
  }

  private generateToken(): string {
    const token = jwt.sign({ sub: this.id }, PRIVATE_KEY, {
      expiresIn: '1h',
      algorithm: "RS256"
    });
    return token;
  }

  login(password: string): string {
    const isCorrectPassword = bcrypt.compareSync(password, this.passwordHash);
    if (isCorrectPassword) {
      return this.generateToken();
    }
    throw new LoginError();
  }

}
