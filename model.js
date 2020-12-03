const { Pool } = require('pg');
require('dotenv').config();


const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});

function getData(callback, id){


    let sql = "SELECT words.word, hints.hint FROM hints JOIN words ON hints.word_id=words.id WHERE hints.word_id =" + id;

    pool.query(sql, function(err, result) {
    if (err) {
        console.log("Error in query: ")
        console.log(err);
    }
 

    callback(result.rows);
 
})
}

function postData(callback) {

    let sql = "INSERT into scores (username, score) values"


}


module.exports = {
    getData: getData,
    postData: postData
}