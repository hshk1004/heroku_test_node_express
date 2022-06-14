import express from 'express';

const router = express.Router();
const output = require('./output_json/output_json')

router.use('/output/', function(req, res, next){
    console.log('라우터 인덱스인거시와요 하와와');
    next();
});

router.get('/output/', output);

module.exports = router;