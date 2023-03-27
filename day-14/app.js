const players = ["Diego", "Juan", "Luca", "Fer", "Emi"];

const team = players;
team[3] = "beto";

const team2 = players.slice();  

const team3 = [].concat(players);

const team4 = [...players];

const person = {
    name: 'delian',
    age: 22
};

capitan = person;
capitan.number = 99;

const cap2 = Object.assign({}, person, {number: 99, age: 21});

//const cap3 = {... person};


const delian = {
    name: "Diego", 
    edad: 22,
    social: {
        twitter: 'di3goeli4n',
        insta: 'delian.py'
    }
}

const dev = Object.assign({}, delian);

dev.name = "Diego Elian";

const dev2 = JSON.parse(JSON.stringify(delian));

