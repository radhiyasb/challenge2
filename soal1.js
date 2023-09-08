const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

function changeWord (selectedText, changedText, text){
  // Membagi kalimat menjadi array kata-kata
  var words = text.split(" ");
  
  // Melakukan iterasi melalui array kata-kata
  for (var i = 0; i < words.length; i++) {
    // Jika kata saat ini sama dengan kata yang ingin diganti
    if (words[i] === selectedText) {
      // Ganti kata dengan kata yang baru
      words[i] = changedText;
    }
  }
  
  // Menggabungkan kembali array kata-kata menjadi kalimat
  var updatedText = words.join(" ");
  return updatedText;
}

//ketika function tersebut dipanggil dengan variabel kalimat1
console.log(changeWord('mencintai','membenci',kalimat1))

//ketika function tersebut dipanggil dengan variabel kalimat2
console.log(changeWord('bromo','semeru',kalimat2))
