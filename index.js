const express = require('express')
const path = require('path')
const controller = require('./controller.js');

const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/newWord', controller.newWord)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))








//get results on the same page with client-side js
//get hint based on id of currently displayed word



//only serve up a word once (array?)????
//display score

