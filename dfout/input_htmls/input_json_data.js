"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
//데이터 베이스 연결
const db = require('../db');
const data = mysql_1.default.createConnection(db);
//업로드 경로
const uploaddir = '../../uploads/';
//multer 설정
const storage = multer_1.default.diskStorage({
    destination(req, file, cb) {
        cb(null, uploaddir);
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}__${file.originalname}`);
    }
});
const upload = (0, multer_1.default)({ dest: uploaddir });
const uploadoriginalname = (0, multer_1.default)({ dest: uploaddir, storage: storage });
//쿼리 삽입문 기본
const jsonquery = 'INSERT INTO jsontable VALUES ';
const dataquery = 'INSERT INTO just_data VALUES ';
//받을 데이터 json으로 설정, 
router.use(express_1.default.json());
router.use(express_1.default.urlencoded({ extended: true }));
router.get('/', function (req, res, next) {
    console.log('겟');
    res.send('get');
});
router.post('/json', uploadoriginalname.single('jsonfile'), function (req, res, next) {
    var _a;
    console.log('post');
    const jsonfile = req.file;
    console.log(jsonfile);
    const jsonfilename = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    console.log(jsonfilename);
    //데이터베이스 연결후 쿼리 시전후 데이터베이스 연결 끊기
    //data.connect();
    data.query(jsonquery, ['(SELECT IFNULL(MAX(id) + 1, 1) FROM jsontable b)', jsonfile], function (err, results, fields) {
        console.log(err);
    });
    //data.end();
    console.log(jsonfile);
    res.send(jsonfile);
});
router.post('/data', function (req, res, next) {
    console.log('post');
    const word = req.body.word;
    console.log(word);
    const classification = req.body.classification;
    console.log(classification);
    const frequency = req.body.frequency;
    console.log(frequency);
    //데이터베이스 연결후 쿼리 시전후 데이터베이스 연결 끊기
    //data.connect();
    data.query(dataquery, ['(SELECT IFNULL(MAX(id) + 1, 1) FROM just_data b)', frequency, classification, word], function (err, results, fields) {
    });
    //data.end();
    console.log(word + classification + frequency);
    res.send(word + classification + frequency);
});
module.exports = router;
