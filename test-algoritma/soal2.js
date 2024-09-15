// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

// Contoh:
// const sentence = "Saya sangat senang mengerjakan soal algoritma"
// longest(sentence)
// mengerjakan: 11 character
function longest(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return {
    word: longestWord,
    length: longestWord.length,
  };
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const result = longest(sentence);
console.log(`${result.word} : ${result.length} character`);
