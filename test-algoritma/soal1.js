// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

// Sample Input
// "NEGIE1"
// Sample Output
// "EIGEN1"

function transformString(input) {
    const letters = input.slice(0, -1);
    const number = input.slice(-1);
  
    const reversedLetters = letters.split('').reverse().join('');
  
    const result = reversedLetters + number;
  
    return result;
  }
  

  const input = "NEGIE1";
  const output = transformString(input);
  console.log(output);
  
  
