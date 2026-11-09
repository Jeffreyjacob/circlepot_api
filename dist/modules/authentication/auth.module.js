"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModules = void 0;
const common_1 = require("@nestjs/common");
const database_modules_1 = require("../../infra/database/database.modules");
const mail_module_1 = require("../mail/mail.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const auth_tokens_service_1 = require("./auth.tokens.service");
let AuthModules = class AuthModules {
};
exports.AuthModules = AuthModules;
exports.AuthModules = AuthModules = __decorate([
    (0, common_1.Module)({
        imports: [
            database_modules_1.DatabaseModue,
            mail_module_1.MailModule,
            jwt_1.JwtModule.registerAsync({
                global: true,
                inject: [config_1.ConfigService],
                useFactory: (confifg) => ({
                    secret: confifg.getOrThrow("JWT_ACCESS_SECRET"),
                    signOptions: {
                        algorithm: "HS256",
                        expiresIn: confifg.getOrThrow("JWT_ACCESS_TTL_SECONDS"),
                    },
                    verifyOptions: { algorithms: ["HS256"] },
                }),
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, auth_tokens_service_1.TokenService],
    })
], AuthModules);
//# sourceMappingURL=auth.module.js.map