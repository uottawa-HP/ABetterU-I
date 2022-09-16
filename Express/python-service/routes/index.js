var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// const express = require('express')
// const { spawn } = require('child_process')
// const app = express()
// const port = 8080
// var router = express.Router();
//
// app.get('/', (req, res) => {
//   let dataToSend
//   let largeDataSet = []
//   // spawn new child process to call the python script
//   const python = spawn('python', ['getResources.py'])
//
//   // collect data from script
//   python.stdout.on('data', function (data) {
//     console.log('Pipe data from python script ...')
//     //dataToSend =  data;
//     largeDataSet.push(data)
//   })
//
//   // in close event we are sure that stream is from child process is closed
//   python.on('close', (code) => {
//     console.log(`child process close all stdio with code ${code}`)
//     // send data to browser
//     res.send(largeDataSet.join(''))
//   })
// })
//
// app.listen(port, () => {
//   console.log(`App listening on port ${port}!`)
// })
//
// module.exports = router;
