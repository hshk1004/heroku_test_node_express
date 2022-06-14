import express from "express";
import bodyParser from "body-parser";


const app = express();

const PORT = process.env.PORT || 8080;

const router = require('./router/index');
const input_json = require('./input_htmls/input_json_html');
const input_data = require('./input_htmls/input_json_data');


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', input_json);
app.use('/router/', router);
app.use('/data_input', input_data);


app.listen(PORT, ()=>{
    console.log('서버 돌아가는중...' + PORT);
});