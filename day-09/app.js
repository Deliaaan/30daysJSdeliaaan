const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
        const p = document.querySelector('p');
        p.style.color = '#BADA55';
        p.style.fontSize = '50px';
    }

    // Regular
console.log("hola");
    // Interpolated
console.log("hola", "crayola");
    // Styled
console.log("%c hola crayola", 'font-size: 50px;');
    // warning!
console.warn("aaaaaaaa");
    // Error :|
console.error('buenas buenas');
    // Info
console.info('dato graioso jaja');
    // Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('xd'), 'ta mal eso crack');
    // clearing
console.clear();
    // Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();
    // Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log(`this is ${dog.age}`);
    console.log(`this is ${dog.age * 7}`);
    console.groupEnd(`${dog.name}`);
});
    // counting
console.count('a');
console.count('a');
console.count('a');
console.count('a');
console.count('a');
console.count('a');
console.count('a');
    // timing
console.time('fetching data');
fetch('https://api/github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });