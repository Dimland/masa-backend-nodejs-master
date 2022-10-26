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
const coffeShops_services_1 = require("../services/coffeShops.services");
const coffeShopsService = new coffeShops_services_1.CoffeShopsService();
const getCoffeShops = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    coffeShopsService.getCoffeShops()
        .then((result) => {
        return res.status(200).json({
            Coffe_Shops: result
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
// const getBoardType = async (req: Request, res: Response, next: NextFunction) => {
//     let id: number = -1;
//     const sId: string = req.params.id;
//     if (isNaN(Number(req.params.id))) {
//         // ToDO: Error handling
//     }
//     if (sId !== null && sId !== undefined) {
//         id = parseInt(sId);
//     }
//     else {
//         // TODO: Error handling
//     }
//     if (id > 0) {
//         schoolService.getBoardType(id)
//             .then((result: whiteBoardType) => {
//                 return res.status(200).json({
//                     result
//                 });
//             })
//             .catch((error: systemError) => {
//                 switch (error.code) {
//                     case ErrorCodes.ConnectionError:
//                         return res.status(408).json({
//                             errorMessage: error.message
//                         });
//                     case ErrorCodes.queryError:
//                         return res.status(406).json({
//                             errorMessage: error.message
//                         });
//                     default:
//                         return res.status(400).json({
//                             errorMessage: error.message
//                         });
//                 }
//             });
//     }
//     else {
//         // TODO: Error handling
//     }
// };
exports.default = { getCoffeShops };
