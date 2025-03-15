// Deklarasi Variabel
let panjang, lebar, radius, sudut1, sudut2, tanggal1, tanggal2, namaLengkap;
let luas, hasilLingkaran, sudutKetiga, selisih, inisial;

// 1. Menghitung Luas Persegi Panjang
panjang = 5;
lebar = 3;
luas = panjang * lebar;

// 2. Menghitung Diameter, Keliling, dan Luas Lingkaran
radius = 5;
hasilLingkaran = {
  diameter: 2 * radius,
  keliling: (2 * Math.PI * radius).toFixed(4),
  luas: (Math.PI * Math.pow(radius, 2)).toFixed(4),
};

// 3. Menghitung Sudut Ketiga Segitiga
sudut1 = 80;
sudut2 = 65;
sudutKetiga = 180 - (sudut1 + sudut2);

// 4. Menghitung Selisih Hari Antara Dua Tanggal
tanggal1 = "2024-03-19";
tanggal2 = "2024-03-21";
const satuHari = 24 * 60 * 60 * 1000; // Milidetik dalam 1 hari
selisih = Math.round(Math.abs(new Date(tanggal2) - new Date(tanggal1)) / satuHari);

// 5. Mencetak Inisial Nama dalam Huruf Kapital
namaLengkap = "John Doe";
inisial = namaLengkap
  .split(" ")
  .map((kata) => kata[0].toUpperCase())
  .join("");

// Output Hasil
console.log("1. Luas Persegi Panjang (panjang=5, lebar=3):", luas);
console.log("2. Hasil Lingkaran (radius=5):");
console.log("   Diameter:", hasilLingkaran.diameter);
console.log("   Keliling:", hasilLingkaran.keliling);
console.log("   Luas:", hasilLingkaran.luas);
console.log("3. Sudut Ketiga Segitiga (sudut1=80, sudut2=65):", sudutKetiga);
console.log("4. Selisih Hari (2024-03-19 dan 2024-03-21):", selisih);
console.log("5. Inisial Nama (John Doe):", inisial);# Tugas-1
