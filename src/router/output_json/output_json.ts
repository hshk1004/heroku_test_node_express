import mysql from 'mysql';
import express from 'express';

const db = require('../../db');

//데이터베이스 연결 만들기
const data = mysql.createConnection(db);


//라우터 사용
const router = express.Router();

//쿼리문 작성
const queryselect = 'SELECT'; 
const querytable = 'FROM jsontable;';
const queryselectall = ' * ';
const queryselectjsontable = ' jsontable ';
const queryselectid = ' id ';

//모든 테이블 데이터
router.use('/', (req,res)=>{
    console.log('겟');

    //테이블 모든 데이터 불러오는 쿼리문 
    const allquery = queryselect + queryselectall + querytable;

    console.log('쿼리문' + allquery);

    //데이터베이스 연결후 쿼리 시전후 데이터베이스 연결 끊기
    

   
    data.query(allquery,function(err, results, fields){
        if(err){
            console.log(err);
        }else{
            res.send(results);
        }
    });
    

    

    console.log('데이터 보내고 끝냄');

});

//모든 테이블 데이터
router.get('/', (req,res)=>{
    console.log('겟');

    //테이블 모든 데이터 불러오는 쿼리문 
    const allquery = queryselect + queryselectall + querytable;

    console.log('쿼리문' + allquery);

    //데이터베이스 연결후 쿼리 시전후 데이터베이스 연결 끊기
    

   
    data.query(allquery,function(err, results, fields){
        if(err){
            console.log(err);
        }else{
            res.send(results);
        }
    });
    

    

    console.log('데이터 보내고 끝냄');

});

//id 열의 데이터들
router.get('/id', (req,res)=>{

    //테이블 id 데이터만 가져오는 쿼리문
    const idquery = queryselect + queryselectid + querytable;

    //데이터베이스 연결후 쿼리 시전후 데이터베이스 연결 끊기
    

   
    data.query(idquery,function(err, results, fields){
        if(err){
            console.log(err);
        }else{
            res.send(results);
        }
    });
    

    
    
});

//jsontable 열의 데이터들
router.get('/jsontable', (req,res)=>{

    //테이블 jsontable 데이터만 가져오는 쿼리문
    const jsontablequery = queryselect + queryselectjsontable + querytable;

    //데이터베이스 연결후 쿼리 시전후 데이터베이스 연결 끊기
    

   
    data.query(jsontablequery,function(err, results, fields){
        if(err){
            console.log(err);
        }else{
            res.send(results);
        }
    });
    

    
    
});

module.exports = router;