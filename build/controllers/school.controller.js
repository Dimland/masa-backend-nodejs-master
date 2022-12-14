"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const school_services_1 = require("../services/school.services");
const schoolService = new school_services_1.SchoolService();
const getBoardTypes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    schoolService.getBoardTypes()
        .then((result) => {
        return res.status(200).json({
            message: result
        });
    })
        .catch((error) => {
        switch (error.code) {
            case constants_1.ErrorCodes.ConnectionError:
                return res.status(408).json({
                    errorMessage: error.message
                });
            case constants_1.ErrorCodes.queryError:
                return res.status(406).json({
                    errorMessage: error.message
                });
            default:
                return res.status(400).json({
                    errorMessage: error.message
                });
        }
    });
});
const getBoardType = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = -1;
    const sId = req.params.id;
    if (isNaN(Number(req.params.id))) {
        // ToDO: Error handling
    }
    if (sId !== null && sId !== undefined) {
        id = parseInt(sId);
    }
    else {
        // TODO: Error handling
    }
    if (id > 0) {
        schoolService.getBoardType(id)
            .then((result) => {
            return res.status(200).json({
                result
            });
        })
            .catch((error) => {
            switch (error.code) {
                case constants_1.ErrorCodes.ConnectionError:
                    return res.status(408).json({
                        errorMessage: error.message
                    });
                case constants_1.ErrorCodes.queryError:
                    return res.status(406).json({
                        errorMessage: error.message
                    });
                default:
                    return res.status(400).json({
                        errorMessage: error.message
                    });
            }
        });
    }
    else {
        // TODO: Error handling
    }
});
exports.default = { getBoardTypes, getBoardType };
