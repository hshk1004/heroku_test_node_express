"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
const route_html = path_1.default.resolve(__dirname, "../../htmls", "input_html.html");
router.use(function (req, res, next) {
    console.log('메인 페이지 입니다.');
    res.sendFile(route_html);
});
module.exports = router;
