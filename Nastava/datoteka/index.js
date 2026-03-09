import inquirer from "inquirer";
import fs from "fs"
import { type } from "os";

inquirer.prompt(
    [
        {
            type: "input",
            name: "ime",
            message: "Unesii ime ucenika:"
        },
        {
            type:"number",
            name:"ocjena",
            message:"Unesi ocjenu:"
        }
    ]
).then(anwsers) -> {
    
}