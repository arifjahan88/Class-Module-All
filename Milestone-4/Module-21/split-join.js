const lyrics = 'tumi bondhu kala pakhi. ami jeno ki. bosonto kale ami dhorte parini.'

const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const word = lyrics.split('');

// console.log(word);

const partial = lyrics.slice(5,8);
// console.log(partial);

const lines = ['tumi bondhu kala pakhi',
                ' ami jeno ki',
                ' bosonto kale ami dhorte parini']

const newsong = lines.join(' : ');
console.log(newsong);