import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
app.use(express.static('public')); // created a get request route for each static asset so that can be requested as relative paths as though puvlic is root
app.use(express.json()); // JSON.parse(req.bdoy)

app
.route('/') // HTML representing the HOME page / landing
.get((req, res) => {
    console.log(req.method);

    res.sendFile(path.join(__dirname, '../public/index.html')); // send method allows server to send any content which should be int. as HTML by the browser
});

app.route('/routes') // routes that are named without refence data/api are usually HTML
.get((req, res) => {
    res.sendFile(path.join(__dirname, '../public/routes.html'));
});

app.route('/send')
.get((req, res) => {
    res.sendFile(path.join(__dirname, '../public/send.html'));
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