const model = require('./model.js')

function newWord(req, res) {

    let id = Math.floor(Math.random() * 33) + 1;

   model.getData(function(result){
        res.json(result);
   }, id);




}

function postScore(req, res) {
    
    let username = req.body.username;
    let score = req.body.score;

    

    model.postData(function(result){
        res.json(result);
    }, username, score)
}

module.exports = {
    newWord: newWord,
    postScore: postScore
}