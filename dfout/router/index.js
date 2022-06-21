"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const output = require('./output_json/output_json');
router.use('/output/', function (req, res, next) {
    console.log('라우터 인덱스');
    next();
});
router.get('/output/', output);
module.exports = router;
