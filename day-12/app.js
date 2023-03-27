

// lo convertimos en array 
const pressed = [];
const secretCode = 'delian'; //son 6 letras

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);

    // Para siempre tener 6 caracteres en el array
    // y sacar el ultimo escrito
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.join('').includes(secretCode)) {
        console.log("Wellcum");1
    }
    
    console.log(pressed);
});