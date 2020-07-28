import { Repository, SelectQueryBuilder } from "typeorm";
import { PaginatedData } from "../models/paginated-data";

export class Paginator<Entity> {

  repository: Repository<Entity>

  constructor (repository: Repository<Entity>) {
    this.repository = repository;
  }

  public async paginate(
    page: number = 1,
    size?: number,
    customQuery?: SelectQueryBuilder<Entity>
  ): Promise<PaginatedData<Entity>> {

    if (!customQuery) customQuery = this.repository.createQueryBuilder();

    const offset = size && (page - 1)*size;

    const [data, count] = await customQuery
      .skip(offset)
      .take(size)
      .getManyAndCount()

    const pageSize = size || count;

    return {
      total: count,
      currentPage: page,
      lastPage: Math.ceil(count/pageSize),
      pageSize,
      data
    };
  }
}
