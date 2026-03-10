const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));


app.post("/register", (req, res) => {

    const { username, email, password } = req.body;

  
    if (!username || !email || !password) {
        return res.send("Sva polja moraju biti ispunjena.");
    }

  
    console.log("Novi korisnik:");
    console.log(username, email, password);

    res.send("Registracija uspješna");
});

app.listen(PORT, () => {
    console.log(`Server pokrenut na http://localhost:${PORT}`);
});