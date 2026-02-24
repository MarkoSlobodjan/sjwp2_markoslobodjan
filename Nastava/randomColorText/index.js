import { generate, count } from "random-words";
import {randomColor} from "randomcolor";

import names from "starwars-names";


var randomName = names.random();


var color = randomColor();

console.log(generate(),color, randomName);