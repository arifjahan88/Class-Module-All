//about includes
const lyrics = 'tumi bondhu kala pakhi. ami jeno ki. bosonto kale ami dhorte parini.'

const searchstring = 'Pakhi';

// const doeesexist = lyrics.includes('pakhi');
// const doeesexist = lyrics.includes(searchstring);

const doeesexist = lyrics.toLowerCase().includes(searchstring.toLowerCase());

console.log(doeesexist);

//--------------------------
// about index of

console.log(lyrics.indexOf('pakhi'));

if (lyrics.indexOf('Pakhi') !== -1){
    console.log("Existed to String")
}
else{
    console.log('not existed to string')
}

//started with
console.log(lyrics.startsWith('tumi'));

// ends with
console.log(lyrics.endsWith('kala'));