import express from 'express';
import mysql from 'mysql';
//import multer from 'multer';


const router = express.Router();

//데이터 베이스 연결
const db = require('../db');
const data = mysql.createConnection(db);

//업로드 경로
const uploaddir = '../../uploads/'

//multer 설정
//const storage = multer.diskStorage({
//    destination(req, file, cb) {
//        cb(null, uploaddir);
//    },
//    filename(req, file, cb){
//        cb(null, `${Date.now()}__${file.originalname}`);
//    }
//});
//const upload = multer({ dest: uploaddir});
//const uploadoriginalname = multer({ dest: uploaddir, storage:storage });

//쿼리 삽입문 기본
const jsonquery = 'INSERT INTO jsontable VALUES ';
const dataquery = 'INSERT INTO just_data VALUES ';

//받을 데이터 json으로 설정, 
router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.get('/', function(req,res,next){
    console.log('겟');
    res.send('get');
});

router.post('/json', /*uploadoriginalname.single('jsonfile') ,*/  function(req,res,next){
    console.log('post');

    
    const jsonfile = req.file;
    console.log(jsonfile);

    const jsonfilename = req.file?.filename;
    console.log(jsonfilename);


    //데이터베이스 연결후 쿼리 시전후 데이터베이스 연결 끊기
    //data.connect();

    //data.query(jsonquery,['(SELECT IFNULL(MAX(id) + 1, 1) FROM jsontable b)', jsonfile],function(err,results,fields){
    //    console.log(err);
    //});

    //data.end();

    console.log(jsonfile);

    res.send(jsonfile);
});

router.post('/data', function(req,res,next){
    console.log('post');
    const word = req.body.word;
    console.log(word);
    const classification = req.body.classification;
    console.log(classification);
    const frequency = req.body.frequency;
    console.log(frequency);


   

    //데이터베이스 연결후 쿼리 시전후 데이터베이스 연결 끊기
    //data.connect();

    data.query(dataquery,['(SELECT IFNULL(MAX(id) + 1, 1) FROM just_data b)', frequency, classification, word],function(err,results,fields){

    });

    //data.end();

    console.log(word+classification+frequency);

    res.send(word+classification+frequency);
});

module.exports = router;