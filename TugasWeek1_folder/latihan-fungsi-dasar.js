// 1. Menghitung luas persegi panjang (pakai arrow function)
const hitungLuasPersegiPanjang = (p, l) => p * l;
console.log("Luas persegi panjang:", hitungLuasPersegiPanjang(5, 3));

// 2. Menghitung diameter, keliling, dan luas lingkaran (pakai const dan template literal)
function propertiLingkaran(r) {
    const d = r * 2;
    const k = 2 * Math.PI * r;
    const a = Math.PI * r ** 2;
    return { d, k, a };
}
const hasilLingkaran = propertiLingkaran(5);
console.log(`Diameter: ${hasilLingkaran.d}, Keliling: ${hasilLingkaran.k.toFixed(4)}, Luas: ${hasilLingkaran.a.toFixed(3)}`);

// 3. Menentukan sudut ketiga dari segitiga (pakai default parameter)
function hitungSudutKetiga(sudut1 = 0, sudut2 = 0) {
    return 180 - sudut1 - sudut2;
}
console.log("Sudut ketiga segitiga:", hitungSudutKetiga(80, 65));

// 4. Menghitung selisih hari antara dua tanggal (pakai const dan toLocaleDateString)
function selisihHari(tgl1, tgl2) {
    const waktu1 = new Date(tgl1).getTime();
    const waktu2 = new Date(tgl2).getTime();
    const selisihMs = Math.abs(waktu2 - waktu1);
    return selisihMs / (24 * 60 * 60 * 1000);
}
console.log("Selisih hari:", selisihHari("2024-03-19", "2024-03-21"));

// 5. Mengubah nama menjadi inisial kapital (pakai for loop untuk latihan logika dasar)
function ambilInisial(nama) {
    let hasil = "";
    const kata = nama.split(" ");
    for (let i = 0; i < kata.length; i++) {
        hasil += kata[i][0].toUpperCase();
    }
    return hasil;
}
console.log("Inisial Nama:", ambilInisial("Muhamad Helmi Ramadhan"));
