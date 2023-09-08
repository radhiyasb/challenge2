function getAngkaTerbesarKedua(personName){
  // Memeriksa apakah parameter yang diberikan adalah array
  if (!Array.isArray(personName)) {
    return "Error: parameter yang diberikan bukan merupakan array";
  }
  
  // Menghapus nilai duplikat dengan cara mengonversi array ke Set
  const uniqueNumbers = [...new Set(personName)];
  
  // Mengurutkan array dalam urutan menaik
  const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);
    
  // Memeriksa apakah array memiliki setidaknya dua elemen
  if (sortedNumbers.length < 2) {
    return "Error: array harus memiliki setidaknya dua angka";
  }
    
  // Mengembalikan angka terbesar kedua
  return sortedNumbers[sortedNumbers.length - 2];
}

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka))

console.log(getAngkaTerbesarKedua(0))

console.log(getAngkaTerbesarKedua())

console.log(getAngkaTerbesarKedua([]))
