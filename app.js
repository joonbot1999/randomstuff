// everything starts from here
import fs from 'fs'
import express from 'express'
import pluralize from 'pluralize'
const app = express()

app.get('/', async (req, res) => {
  res.type('html')
  let fileContents = await fs.readFileSync("index.html")
  res.send(fileContents)
})

app.get('/style.css', async (req, res) => {
    res.type('css')
    let fileContentCSS = await fs.readFileSync("style.css")
    res.send(fileContentCSS)
})

app.get('/index.js', async (req, res) => {
  res.type('js')
  let fileContent = await fs.readFileSync("index.js")
  res.send(fileContent)
})

app.get('/api/getTime', (req, res) => {
  let time = new Date()
  res.type('txt')
  res.send(time)
})

app.get('/api/pluralize', (req, res) => {
  let someword = req.query.word
  let pluralword = pluralize(someword)
  res.type('txt')
  res.send(pluralword)
})

app.get('/no', (req, res) => {
  res.type('text')
  res.send('NOOOOOOOOOOOOOOO')
})

app.get('/user', (req, res) => {
  res.type('')
  res.send(req.query)
  console.log(req.query)
})

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000')
})