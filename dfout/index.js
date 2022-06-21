"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
const router = require('./router/index');
const input_json = require('./input_htmls/input_json_html');
const input_data = require('./input_htmls/input_json_data');
app.use((0, cors_1.default)({
    origin: '*',
    credentials: true
}));
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', input_json);
app.use('/router/', router);
app.use('/data_input', input_data);
app.listen(PORT, () => {
    console.log('서버 돌아가는중...' + PORT);
});
