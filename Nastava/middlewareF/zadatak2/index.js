const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    // primjer provjere
    if (username === "admin" && password === "1234") {
        res.send("Prijava uspješna");
    } else {
        res.send("Prijava neuspješna");
    }

});

app.listen(3000, () => {
    console.log("Server radi na portu 3000");
});