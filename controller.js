const model = require('./model.js')

function newWord(req, res) {

    let id = Math.floor(Math.random() * 3) + 1;

   model.getData(function(result){
        res.json(result);
   }, id);

//    model.getHint(function(result){
//     res.json(result);
// }, id);


}

module.exports = {
    newWord: newWord
}