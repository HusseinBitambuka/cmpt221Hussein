const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser'); // Add cookie-parser
const app = express()

// Middleware
app.use(express.static("./staticFiles"));
app.use(bodyParser.json());
app.use(cookieParser("dfsahbdjfhjahjfduhauihfjbfjdsf")); // Add cookie middleware

function createHTMLResponse(userData) {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Dashboard</title>
        </head>
        <body>
            <h2>You are logged in as ${userData.username}</h2>
            <h2>Your balance is: $${userData.balance}</h2>
            <p>Welcome back!</p>
        </body>
        </html>
    `;
    return html;
}

const users = {
    "bitambukahoussein@gmail.com": "tuoneivi",
    "Hussein.Bitambuka1@marist.edu": "buyenzi"
};

const balances = {
    "bitambukahoussein@gmail.com": "5000",
    "Hussein.Bitambuka1@marist.edu": "7000"
};

app.get("/", (req, res) => {
    const username = req.signedCookies.username
    if (username){
        const userData = {
        username: username,
        balance: balances[username] || '0'
        }
        res.send(createHTMLResponse(userData));
    }
    res.sendFile("login.html", {root: "./staticFiles"});
});

app.post("/post/login", (req, res) => {
    const {username, password} = req.body;
    
    if (!username || !users[username]) {
        return res.status(400).json({
            "error": "The user does not exist in the database"
        });
    }
    
    if (!password || users[username] !== password) {
        return res.status(400).json({
            "error": "The password does not match the current user"
        });
    }

    // Set secure cookie with httpOnly flag
    res.cookie('username', username, {
        signed:true
    });
    res.redirect('/')
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});