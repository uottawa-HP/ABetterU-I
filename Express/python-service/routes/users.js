// var express = require('express');
// var router = express.Router();

// /* GET users listing. */

//      // this should be out of the router
// const {spawn} = require('child_process');

// router.get('/', (req, res) => {


//     const py = spawn('python', ['./routes/getResources.py']);

//     let output = ""
//     py.stdout.on("data", (data) => {
//           output += `${data}`
//           console.log(output)
//     });
//     py.stderr.on('data',(data)=>{
//       console.error(`stderr: ${data}`)
//     });

//     py.on("close", (code) => {                     // this differs
//         console.log(`child process exited with code ${code}`);
//         // res.sendStatus(200);
//     });
// });

// module.exports = router;
const { spawn } = require('child_process');

// const py = spawn('python', ['--version']);


var someObject = require('./resources.json')


var express = require('express');
const { syncBuiltinESMExports } = require('module');
const { send } = require('process');
var router = express.Router();

var x;
var jsonResponse;





/* GET users listing. */
router.get('/', function(req, res, next) {
  // function y(){
  //   res.send(x);

  // }
  // const py = spawn('python3', ['./routes/getResources.py']);
  // py.stdout.on("data", (data) => {
  //   // console.log(`${data}`);
  //   x =`${data}`
  //   console.log(x)






  // });

  let jsonResponse={
    "resources": someObject



  }



  res.json(jsonResponse);




});

module.exports = router;
