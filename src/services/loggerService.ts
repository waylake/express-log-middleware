import { createLogger, format, transports } from "winston";

const { combine, timestamp, printf } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(timestamp(), logFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "combined.log" }),
  ],
});

class LoggerService {
  private logger;

  constructor() {
    this.logger = logger;
  }

  log(level: string, message: any) {
    this.logger.log(level, message);
  }
}

export default LoggerService;
