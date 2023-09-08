const dataPenjualanPakAldi = [
    {
        namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Black Brown High - Original',
        hargaSatuan : 960000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Maron High - Original',
        hargaSatuan : 360000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original',
        hargaSatuan : 120000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
]

function hitungTotalPenjualan(dataPenjualan) {
    let totalPenjualan = 0;
    for (let i = 0; i < dataPenjualan.length; i++) {
        if (dataPenjualan[i].hasOwnProperty("totalTerjual")) {
            totalPenjualan += dataPenjualan[i].totalTerjual;
        }
    }
    return totalPenjualan;
}

console.log("Total penjualan seluruh sepatu: " , hitungTotalPenjualan(dataPenjualanPakAldi));

//EXPECTED OUTPUT => 307
// 307 dari mana? dari setiap value property 'totalTerjual', yaitu 90+37+90+90