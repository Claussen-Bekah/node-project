const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const controller = require('./controller.js')


const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({extended:true}))
    .use(bodyParser.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/newWord', controller.newWord)
  .get('/viewScores', controller.viewScores)
  .post('/postScore', controller.postScore)

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))






