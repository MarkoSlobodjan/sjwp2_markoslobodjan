import fs from "fs";
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "input",
      name: "duljina",
      message: "Unesite duljinu pravokutnika:"
    },
    {
      type: "input",
      name: "sirina",
      message: "Unesite širinu pravokutnika:"
    }
  ])
  .then((answers) => {
    const duljina = parseFloat(answers.duljina);
    const sirina = parseFloat(answers.sirina);

    const povrsina = duljina * sirina;

    const tekst = `Duljina: ${duljina}
Širina: ${sirina}
Površina pravokutnika: ${povrsina}`;

    fs.writeFile("izracun.txt", tekst, (err) => {
      if (err) {
        console.log("Greška pri spremanju datoteke.");
      } else {
        console.log("Rezultat je spremljen u izracun.txt");
      }
    });
  });