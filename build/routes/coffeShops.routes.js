"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** source/routes/posts.ts */
const express_1 = __importDefault(require("express"));
const coffeShops_controller_1 = __importDefault(require("../controllers/coffeShops.controller"));
const router = express_1.default.Router();
router.get('/all-stores', coffeShops_controller_1.default.getCoffeShops);
// router.get('/stores/:id', controller.getCoffeShopById);
// router.post('/addstore',  controller.addStore);
exports.default = { router };
