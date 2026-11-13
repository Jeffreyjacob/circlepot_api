import { NestFactory } from "@nestjs/core";
import { AppModule, ObserveInstrument } from "./app.module";
import { ConfigService } from "@nestjs/config";
import helmet from "helmet";
import { ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);

  if (config.get("NODE_ENV") === "production") {
    app.set("trust proxty", 1); // trust exactly one proxy (Render)
  }

  app.use(helmet());
  app.use(cookieParser());
  app.enableCors({
    origin: config.getOrThrow<string>("FRONTEND_URL"),
    credentials: true,
  });
  app.setGlobalPrefix("api/v1");
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.enableShutdownHooks();
  await app.listen(config.getOrThrow<number>("PORT"));
}
void bootstrap();
