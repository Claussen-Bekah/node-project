const model = require('./model.js')

function newWord(req, res) {

    let id = Math.floor(Math.random() * 33) + 1;

    model.getData(function (result) {
        res.json(result);
    }, id);




}

function postScore(req, res) {

    let username = req.body.username;
    let score = req.body.score;

    model.postData(username, score);
}


function viewScores(req, res) {
    model.viewScores(function (result) {
        res.json(result);
    })
}

function dictionaryCall(req, res) {
    model.dictionaryCall(function(result){
        res.json(result);
    }, req.query.answer);
}




module.exports = {
    newWord: newWord,
    postScore: postScore,
    viewScores: viewScores,
    dictionaryCall: dictionaryCall
}