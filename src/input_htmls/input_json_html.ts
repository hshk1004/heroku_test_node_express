import express from "express";
import path from "path";

const router = express.Router();
const route_html = path.resolve(__dirname, "../../htmls", "input_html.html")

router.use(function(req,res,next){
    console.log('메인 페이지 입니다.');
    res.sendFile(route_html);
});

module.exports = router;