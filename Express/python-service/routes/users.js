var express = require('express');
var router = express.Router();

/* GET users listing. */

     // this should be out of the router
const {spawn} = require('child_process');

router.get('/', (req, res) => {


    const py = spawn('python', ['./routes/getResources.py']);

    let output = ""
    py.stdout.on("data", (data) => {
          output += `${data}`
          console.log(output)
    });
    py.stderr.on('data',(data)=>{
      console.error(`stderr: ${data}`)
    });

    py.on("close", (code) => {                     // this differs
        console.log(`child process exited with code ${code}`);
        // res.sendStatus(200);
    });
});

module.exports = router;

// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//
//   let jsonResponse = {
//     "handsetCards":[
//       {title: 'card 1', cols: 2, rows: 1},
//       {title: 'card 2', cols: 2, rows: 1},
//       {title: 'card 3', cols: 2, rows: 1},
//       {title: 'card 4', cols: 2, rows: 1},
//       {title: 'card 5', cols: 2, rows: 1},
//       {title: 'card 6', cols: 2, rows: 1},
//     ]
//
//   }
//
//   res.json(jsonResponse);
// });
//
// module.exports = router;
