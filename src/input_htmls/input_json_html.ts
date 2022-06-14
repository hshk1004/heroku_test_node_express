import express from "express";

const router = express.Router();

router.use(function(req,res,next){
    console.log('메인 페이지 입니다.');
    res.sendFile(__dirname + '/input_html.html');
});

module.exports = router;