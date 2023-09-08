const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86008,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];
  
function getInfoPenjualan(dataPenjualan) {
  // Memeriksa apakah parameter yang diberikan adalah array
  if (!Array.isArray(dataPenjualan)) {
    return "Error: Parameter harus berupa array";
  }
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkBukuTerlaris = "";
  let penulisBukuTerlaris = "";
  let terlarisTerjual = 0;
  
  for (let i = 0; i < dataPenjualan.length; i++) {
    if (
      dataPenjualan[i].hasOwnProperty("hargaBeli") &&
      dataPenjualan[i].hasOwnProperty("hargaJual") &&
      dataPenjualan[i].hasOwnProperty("totalTerjual")
      ) {
        let hargaBeli = dataPenjualan[i].hargaBeli;
        let hargaJual = dataPenjualan[i].hargaJual;
        let totalTerjual = dataPenjualan[i].totalTerjual;
        let sisaStok = dataPenjualan[i].sisaStok;
        
        // Menghitung total modal
        totalModal += hargaBeli * (totalTerjual + sisaStok);
  
        // Menghitung total keuntungan
        totalKeuntungan += (hargaJual - hargaBeli) * totalTerjual;
  
        // Memeriksa apakah produk ini adalah yang terlaris
        if (totalTerjual > terlarisTerjual) {
          terlarisTerjual = totalTerjual;
          produkBukuTerlaris = dataPenjualan[i].namaProduk;
          penulisBukuTerlaris = dataPenjualan[i].penulis;
        }
      }
    }
    // Menghitung persentase keuntungan
    let persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;
    persentaseKeuntungan = persentaseKeuntungan.toFixed(2) + "%"

    //Mengubah number ke rupiah
    let rupiah = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    });
    
    return {
    totalKeuntungan : rupiah.format(totalKeuntungan),
    totalModal : rupiah.format(totalModal),
    persentaseKeuntungan,
    produkBukuTerlaris,
    penulisBukuTerlaris,
    }
  } 
  
  console.log(getInfoPenjualan(dataPenjualanNovel));
