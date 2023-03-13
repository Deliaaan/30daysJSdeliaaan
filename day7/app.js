
const people = [
	{ name: 'Wes', year: 1988},
	{ name: 'Kait', year: 1986},
	{ name: 'Irv', year: 1970},
	{ name: 'Lux', year: 2015},
];

const comments = [
	{ text: 'Love this', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 203984 },
	{ text: 'Ramen is my favorite food', id: 123523 },
	{ text: 'Nice nice nice', id: 542328 },
];
 // some and every Checks
 // Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(function(person) {
	const currenYear = (new Date()).getFullYear();
	if (currenYear - person.year >= 19) {
		return true;
	} 
});
console.log(isAdult);


 // Array.prototype.every() // is everyone 19 or older?

const isNine = people.every(function(person){

	const currentYear = (new Date().getFullYear());
	if (currentYear - person.year >= 19){
		return true;
	}
});
console.log(isNine);

 // Array.prototype.find()
 // Find is like filter, but instead returns just the one you are looking for
 // find the comment with the ID of 823423

 // Array.prototype.findIndex()
 // Find the comment with this ID
 // delete the comment with de ID of 823423