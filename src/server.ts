import express from 'express';

const app = express(); // => new Express()

app
.route('/')
.get((req, res) => {
    console.log(req.method);

    res.send('Hello world!');
});

app.listen(3000, console.log('http://localhost:3000/'));