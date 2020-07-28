import winston from 'winston';
const { combine, timestamp, ms, errors, json } = winston.format;

const formatter = combine(
    errors({ stack: true }),
    timestamp(),
    ms(),
    json()
);

export const logger = winston.createLogger({
    format: formatter,
    transports: [
        new winston.transports.Console(),
    ]
});
