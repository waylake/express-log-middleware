import express from "express";
import loggingMiddleware from "./middlewares/loggingMiddleware";
import LoggerService from "./services/loggerService";
import routes from "./routes";

const app = express();
const logger = new LoggerService();

app.use(express.json());
app.use(loggingMiddleware(logger));
app.use("/", routes);

export default app;
