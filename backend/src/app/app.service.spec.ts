import {Test, TestingModule} from "@nestjs/testing";

import { AppService } from "./app.service";
import * as process from "node:process";
import {AppModule} from "./app.module";
import {ConfigModule} from "@nestjs/config";
/**
import {Connection, getConnection} from "typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {AppModule} from "./app.module";
**/
describe("AppService", () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe("getData", () => {
    it('should return "Hello API"', () => {
      expect(service.getData()).toEqual({ message: "Hello API" });
    });
  });
});



/**  TEST 2: Check if Environment Variable Exists

describe('Environment Variables', () => {
  let configService: ConfigService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
    }).compile();

    configService = module.get<ConfigService>(ConfigService);
  });

  it('should have NODE_ENV set to development', () => {
    expect(process.env.NODE_ENV).toBe('development');
  });

  it('should have DATABASE_URL environment variable set', () => {
    const databaseUrl = configService.get<string>('DB_HOST');
    expect(databaseUrl).toBeDefined();
  });
});


//Check if Database Connection is Working
describe('Database Connection', () => {
  let app;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should establish database connection', async () => {
    const connection = getConnection();
    expect(connection.isConnected).toBeTruthy();
  });
});

**/
