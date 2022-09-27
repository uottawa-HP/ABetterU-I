import express from './express'

const express = require('express')
const app = express()

let runPy = new Promise(function(success, nosuccess) {

    const { spawn } = require('child_process');
    const pyprog = spawn('python', ['./getResource.py']);

    pyprog.stdout.on('data', function(data) {

        success(data);
    });

    pyprog.stderr.on('data', (data) => {

        nosuccess(data);
    });
});

app.get('/', (req, res) => {

    res.write('welcome\n');

    runPy.then(function(fromRunpy) {
        console.log(fromRunpy.toString());
        res.end(fromRunpy);
    });
})

app.listen(3000, () => console.log('Application listening on port 3000!'))
