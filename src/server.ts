import express from 'express';

const users = [
    {
        first_name: 'Rachel',
        last_name: 'Lastname',
        email: 'rachel@email.com',
        password: 'password1234' // don't send passwords over network
    }
];

const app = express(); // => new Express()

// middleware function
app.use(express.json()); // JSON.parse(req.bdoy)

app
.route('/') // HTML representing the HOME page / landing
.get((req, res) => {
    console.log(req.method);

    res.send('<h1>Hello world!</h1>'); // send method allows server to send any content which should be int. as HTML by the browser
});

app.route('/contact') // routes that are named without refence data/api are usually HTML
.get((req, res) => {
    res.send("Hello world #2");
});

app.get('/api/users', (req, res) => { // api or data or a specific object reference suggest we want to receive JSON as resonse
    res.json(users);
});

app.post('/api/users', (req, res) => { // post suggests creating data /api/users suggests user data
    const newUser = req.body;

    users.push(newUser);

    res.json(users);
});

app.listen(process.env.PORT || 3000, console.log('In development: http://localhost:3000/'));