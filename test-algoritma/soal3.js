// Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
// Contoh:
// INPUT = ['xc', 'dz', 'bbb', 'dz']
// QUERY = ['bbb', 'ac', 'dz']

// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT

function countOccurrences(INPUT, QUERY) {
  const countMap = {};
  INPUT.forEach((word) => {
    countMap[word] = (countMap[word] || 0) + 1;
  });
  const result = QUERY.map((word) => countMap[word] || 0);

  return result;
}

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
console.log(countOccurrences(INPUT, QUERY));
