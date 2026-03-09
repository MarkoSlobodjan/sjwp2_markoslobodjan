import inquirer from "inquirer";
import fs from "fs";

const questions = [
  {
    type: "input",
    name: "ime",
    message: "Unesite ime:"
  },
  {
    type: "input",
    name: "prezime",
    message: "Unesite prezime:"
  }
];

inquirer.prompt(questions).then((answers) => {

  const ime = answers.ime;
  const prezime = answers.prezime;

  const userName = `${ime}${prezime}`;

  fs.appendFile("users.txt", userName + "\n", (err) => {
    if (err) {
      console.log("Greška pri spremanju!");
    } else {
      console.log("Kreiran username:", userName);
      console.log("Spremljeno u users.txt");
    }
  });

});