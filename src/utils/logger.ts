import { createLogger, format, level, transports } from "winston";

export const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.json(),
    format.prettyPrint(),
    format.colorize()
  ),
  transports: [new transports.File({ level: "error", filename: "logger.log" })],
});
