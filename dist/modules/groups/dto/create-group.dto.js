"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGroupDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../generated/prisma/enums");
const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;
class CreateGroupDto {
    name;
    potKobo;
    seats;
    frequency;
    startDate;
    endDate;
    heldPercent;
    lateFeeKobo;
    acceptRules;
}
exports.CreateGroupDto = CreateGroupDto;
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => (typeof value === "string" ? value.trim() : value)),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateGroupDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(100_000),
    (0, class_validator_1.Max)(1_000_000_000),
    __metadata("design:type", Number)
], CreateGroupDto.prototype, "potKobo", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(2),
    (0, class_validator_1.Max)(20),
    __metadata("design:type", Number)
], CreateGroupDto.prototype, "seats", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.Frequency),
    __metadata("design:type", String)
], CreateGroupDto.prototype, "frequency", void 0);
__decorate([
    (0, class_validator_1.Matches)(DATE_ONLY, { message: "startDate must look like 2027-01-31" }),
    __metadata("design:type", String)
], CreateGroupDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.Matches)(DATE_ONLY, { message: "endDate must look like 2027-06-30" }),
    __metadata("design:type", String)
], CreateGroupDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(35),
    (0, class_validator_1.Max)(50),
    __metadata("design:type", Number)
], CreateGroupDto.prototype, "heldPercent", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(35),
    (0, class_validator_1.Max)(50),
    __metadata("design:type", Number)
], CreateGroupDto.prototype, "lateFeeKobo", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.Equals)(true, { message: "You must accept the group rules" }),
    __metadata("design:type", Boolean)
], CreateGroupDto.prototype, "acceptRules", void 0);
//# sourceMappingURL=create-group.dto.js.map