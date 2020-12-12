const {
    Pool
} = require('pg');
require('dotenv').config();
const https = require("https");



const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: connectionString
});

function getData(callback, id) {


    let sql = "SELECT words.word, hints.hint FROM hints JOIN words ON hints.word_id=words.id WHERE hints.word_id =" + id;

    pool.query(sql, function (err, result) {
        if (err) {
            console.log("Error in query: ")
            console.log(err);
        }


        callback(result.rows);

    })
}

function postData(username, score) {

    let sql = `INSERT into scores (username, score) values ('${username}' , ${score})`;

    pool.query(sql, function (err, result) {
        if (err) {
            console.log("Error in query: ")
            console.log(err);
        }
    })
}

function viewScores(callback) {

    let sql = "SELECT username, score FROM scores ORDER BY score DESC, username LIMIT 10";

    pool.query(sql, function (err, result) {
        if (err) {
            console.log("Error in query: ")
            console.log(err);
        }


        callback(result.rows);

    })
}


function dictionaryCall(callback, word) {


const app_id = "86222f4a";
const app_key = "46b000f81bdd16e18d064ad7d7a98329"; //
const wordId = word;
const fields = "pronunciations";
const strictMatch = "false";
const options = {
   host: 'od-api.oxforddictionaries.com',
   port: '443',
   path: '/api/v2/lemmas/en/' + wordId, //+ '?fields=' + fields + '&strictMatch=' + strictMatch
   method: "GET",
   headers: {
     'app_id': app_id,
     'app_key': app_key
   }
 };
https.get(options, (resp) => {
  let body = '';
  resp.on('data', (d) => {
    body += d;
  });
  resp.on('end', () => {
    let parsed = JSON.stringify(body);
    callback(parsed);
  });
});

}



module.exports = {
    getData: getData,
    postData: postData,
    viewScores: viewScores,
    dictionaryCall: dictionaryCall
}