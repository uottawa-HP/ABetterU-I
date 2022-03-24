const { spawn } = require('child_process');

// const py = spawn('python', ['--version']);
const py = spawn('python3', ['./routes/getResources.py']);

  py.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`)
  });
  py.stderr.on('data',(data)=>{
    console.error(`stderr: ${data}`)
  });

  py.on("close", (code) => {                     // this differs
      console.log(`child process exited with code ${code}`);
      // res.sendStatus(200);
  });
