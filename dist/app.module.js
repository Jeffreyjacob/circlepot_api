"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.ObserveInstrument = exports.ObserveModule = void 0;
const common_1 = require("@nestjs/common");
const observe_1 = require("@nestjs/observe");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const env_validator_1 = require("./config/env.validator");
const health_module_1 = require("./modules/health/health.module");
const database_modules_1 = require("./infra/database/database.modules");
const auth_module_1 = require("./modules/authentication/auth.module");
const queue_module_1 = require("./infra/queue/queue.module");
const user_module_1 = require("./modules/users/user.module");
const redis_module_1 = require("./infra/redis/redis.module");
_a = (0, observe_1.createObserveModule)(), exports.ObserveModule = _a.ObserveModule, exports.ObserveInstrument = _a.ObserveInstrument;
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            exports.ObserveModule.forRoot({
                appKey: "YOUR_APP_KEY",
                appSecret: "YOUR_APP_SECRET",
                serviceId: "circlepot_api",
            }),
            config_1.ConfigModule.forRoot({ isGlobal: true, validate: env_validator_1.validateEnv }),
            database_modules_1.DatabaseModue,
            health_module_1.HealthModule,
            auth_module_1.AuthModules,
            queue_module_1.QueueModule,
            user_module_1.UserModule,
            redis_module_1.RedisModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map