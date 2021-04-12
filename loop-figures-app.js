
document.querySelector('#clear').addEventListener('click',() => {
    field.innerHTML = ' ';
});

const field = document.querySelector('#field');

function loopNormal(x,y,z) {
        for (let i = 1; i < 10; i++) {
            for (let j = 1; j <= (10 - i); j++) {
                field.innerHTML += x
            }
            for (let k = 1; k <= i; k++) {
                field.innerHTML += y
            }
            field.innerHTML += '<br>';
        }
}

document.querySelector('#reversed-triangle').addEventListener('click', () => {
    loopNormal(' *','&nbsp',true)
});
document.querySelector('#pyramid').addEventListener('click',() => {
    loopNormal('&nbsp',' *',true)
});
document.querySelector('#triangle').addEventListener('click',() => {
    loopReversed(' *','&nbsp')
});

function loopReversed(x,y) {
    for (let i = 1; i < 10; i++) {
        for (let k = 1; k <= i; k++) {
            field.innerHTML += x
        }
        for (let j = 1; j <= (10 - i); j++) {
            field.innerHTML += y
        }
        field.innerHTML += '<br>';
    }
}

document.querySelector('#reversed-pyramid').addEventListener('click',() => {
    loopReversed('&nbsp',' *')
});

document.querySelector('#diff-pyramid').addEventListener('click',() => {
    for ( let i = 0; i < 14; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < (14 - i); j++) {
                field.innerHTML += '&nbsp'
            }
            for (let k = 0; k <= i; k++) {
                field.innerHTML += '* '
            }
            field.innerHTML += '<br>'
        }
    }
});