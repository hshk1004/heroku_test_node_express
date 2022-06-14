import express from 'express';
import mysql from 'mysql';


const router = express.Router();

const db = require('../db');
const data = mysql.createConnection(db);

const query = 'INSERT INTO year_word_classification_frequency_json VALUES (?,?,?,?,?);';

router.use(express.json());
router.use(express.urlencoded({extended: true}));


router.get('/', function(req,res,next){
    console.log('겟또다제~ 우효~');
    res.send('?게이 지뭐');
});

router.post('/', function(req,res,next){
    console.log('야스각?');
    const year = req.body.year;
    console.log(year);
    const json_input = req.body.jsonfile;
    console.log(json_input);


    //데이터베이스 연결후 쿼리 시전후 데이터베이스 연결 끊기
    //data.connect();

    //data.query(query,[,,,,],function(err,results,fields){

    //});
    

    //data.end();

    console.log(year+json_input);

    res.send(year+'이게 야스지'+json_input);
});

module.exports = router;