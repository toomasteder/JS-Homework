let word = prompt('Sisesta sõna või fraas. Mina kontrollin, kas on palindroom:').toLowerCase().replace(/\s+/g,' ').trim();
let wordReversed = word.split('').reverse().join('');
if (word === wordReversed) {
    console.log(word + ' on palindroom!');
} else {
    console.log(word + ' ei ole palindroom!');
}


