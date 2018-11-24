Sebelum melangkah lebih lanjut, ada baiknya saya berterima kasih kepada:

1. Allah SWT. Tanpa ijin-Nya, proyek ini tidak akan berjalan dengan semestinya.
2. Pak Andy ([SMKS Mutiara Ilmu](http://mutiarailmu.sch.id/)) yang memberikan amanah kepada saya untuk membuat aplikasi ini pada mata pelajaran Pemodelan Perangkat Lunak di semester 3.
3. [Pak Yasir](https://web.facebook.com/yasirsensei) ([SMKS Mutiara Ilmu](http://mutiarailmu.sch.id/)) yang memberikan bayangan dan logika kedepan untuk urusan animasi.
4. [Aghits Nidallah](https://web.facebook.com/aghits.nidallah) ([github/NikarashiHatsu](https://github.com/NikarashiHatsu) **contrib**), terima kasih untuk template design sekaligus *teman curhat dikala [suicidal](https://en.wikipedia.org/wiki/Suicide_crisis) menghadang, mungkin gua bakal mati kalau gaada elu*.
5. [Raden Galih Prastian](https://web.facebook.com/prazeblaze) ([github/prazeblaze](https://github.com/prazeblaze) **contrib**) yang mengingatkan kembali cara memakai package yang dulu saya pakai sewaktu saya dan dia membangun bot discord.
6. Mohammad Vrio ([fb/Sainsologi](https://web.facebook.com/Sainsologi/)), thanks untuk nyemangatin hidup gua dengan hiburanmu.
7. Teman-teman dari Discord-Bots-Indonesia, tanpa kalian gua gabisa menggunakan Node.JS.
8. Teman-teman dari XI-RPL 1, kalian semua terhebat!
9. Keluarga saya semua, tanpa kalian gua ga makan XD
10. Kakak pertama saya, [Amirullah](https://web.facebook.com/mamingamirullah.latif), makasih buat video pembelajarannya walau cuma dikit yang masuk di kepala saya.
11. DAN SEMUA YANG GA SAYA SEBUT TAPI MERASA ANDA MEMBANTU SAYA, SAYA UCAPKAN MAKASIH BANGET YAAA!

Jujur, saya merasa malu untuk bertanya kepada beliau karena saya tau saya telah memangkas waktu yang berharga mereka demi proyek ini. Terima kasih banyak!

# Jadwal Sholat

*Aplikasi ini dilindungi oleh GNU Affero General Public License v3.0, apabila di temukan beberapa pelanggaran terhadap lisensi ini maka bagi pelanggar akan mendapatkan hukuman yang setimpal. Untuk lebih jelasnya silahkan mengunjungi https://www.gnu.org/licenses/*

Aplikasi Jadwal Sholat ini merupakan aplikasi untuk mengingatkan Hamba Allah untuk senantiasa tepat waktu untuk mengerjakan sholat. Aplikasi ini hanya dapat diterapkan di Masjid saja karena aplikasi ini berbentuk seperti papan pengumuman yang canggih.

![Footage_of_JadwalSholat](https://images2.imgbox.com/cf/8f/GcGdoZEA_o.png)

Dengan bahasa paling dominan yaitu JavaScript sebagai backend memungkinkan aplikasi ini stabil pada browser. Web Server aplikasi ini menggunakan Node.JS yang merupakan salah satu JavaScript Runtime yang berjalan pada komputer server. Akan tetapi, untuk penggunakan seperti komputer biasa, kalian masih dapat menggunakan aplikasi ini seperti biasanya.

## Fitur

1. Jam adzan yang automatis dengan metode hizab bulan.
2. Sistem pengingat waktu shalat tiap 30-20-10 menit.
3. Tombol **iqomah** yang biasanya ada dalam jam digital.
4. Hadist yang telah diatur sedemikian rupa sehingga dapat berubah-ubah sesuai keinginan anda.

## Cara Install

1. [Download NodeJS disini!](https://nodejs.org/en/)

Catatan sedikit, **TOLONG JANGAN CENTANG INI (BOXSTARTER) KALAU PAKET DATA ANDA TAK INGIN DIKURAS SEKURAS-KURASNYA!**

![Boxstarter Installer](https://images2.imgbox.com/73/55/16qmu0Dl_o.png)

2. [Clone repository ini!](https://github.com/skymunn/jadwal-sholat-web/archive/master.zip)
3. Ekstrak zip, kemudian jalankan **run_installer.bat** untuk penggunaan pertama kali.
4. Untuk menjalankan aplikasinya, jalankan **run_only.bat**

Sedikit penjelasan, **run_istaller.bat** berguna untuk menginstal dependensi/paket yang digunakan dalam aplikasi ini. Pastikan ketika anda menjalankan file tersebut anda terkoneksi dengan internet.

5. Dan, biarkan konsol bekerja sendiri hingga aplikasi peramban (Chrome) terbuka sendiri
6. Untuk keluar dari aplikasi, aktifkan konsol (Alt + Tab hingga mencapai cmd.exe) kemudian tekan Ctrl + C, kemudian tulis Y dan tekan Enter.

*Catatan: Apabila anda tidak mempunyai Google Chrome, coba peramban yang lain dan buka http://localhost:3030/ dalam peramban anda.*

## Cara Mengatur Aplikasi

1. Navigasikan ke folder /public/settings/.
2. Di dalam folder itu ada dua file yakni.
   - hadist_list.js (Daftar hadist yang selalu berputar tiap saat)
   - setting.js (Beberapa pengaturan penting yang harus diatur demi kelangsungan aplikasi)

Kalian dapat mengubah kodenya tersebut menggunakan aplikasi Notepad. Tapi, mohon agar **tidak menghapus koma, kurung kurawal, maupun titik dua di dalam pengaturan tersebut, karena akan berakibat fatal bagi aplikasi**.

### Yang harus diperhatikan

Adapun yang harus diperhatikan ketika mengatur setting tersebut yaitu:

Output/Keluaran | Keterangan | Yang Mesti Diperhatikan
----------------|------------|------------------------
Number | Angka | Dalam menulis pengaturannya, dalam menulis koma menggunakan tanda titik `.` dan untuk pengisian value/isinya tidak usah menyertakan tanda kutip `""`.
String | Karakter/Huruf | Dalam menulis pengaturannya, anda wajib menyertakan tanda kutip `""` sebelum dan sesudah karakter .
String[] | Array<String>/Himpunan Karakter | Dalam menulis pengaturannya, sama seperti String.

### settings.js (Umum)

*Untuk longitude dan latitude, cobalah untuk mencari di Google cara mengkonversi lintang dan bujur menjadi longitude dan latitude.*

Nama Method | Output | Keterangan | Contoh
------------|--------|------------|-------
city_name | String | Kota tempat anda mengatur aplikasi ini | "city_name": "Makassar"
longitude | Number | Lintang tempat anda berada | "longitude": -5.1548145
latitude | Number | Bujur tempat anda berada | "latitude": 119.46666666667
hadist_duration | Number | Durasi untuk hadist berganti dengan hadist yang lain | "hadist_duration": 1.5

### setting.js (iqomah_duration)

Nama Method | Output | Keterangan | Contoh
------------|--------|------------|-------
minute | Number | Durasi (dalam menit) untuk iqomah | "minute": 10
second | Number | Durasi (dalam detik) untuk iqomah | "second": 0

### setting.js (adhan_settings)

Nama Method | Output | Keterangan | Contoh
------------|--------|------------|-------
madhab | Number | Liat tabel "Mazhab" setelah tabel ini | "madhab": 1
fajrAngle | Number | Kemiringan matahari ketika subuh (derajat) | "fajrAngle": 20
ishaAngle | Number | Kemiringan matahari ketika Isya (derajat) | "ishaAngle": 18

Untuk Mazhab, sesuaikan dengan tempat berada anda.

Angka | Mazhab | Keterangan
------|--------|-----------
1 | Shafi/Syafi'i | Panjang bayangan = tinggi benda
2 | Hanafi | Panjang bayangan = 2x tinggi benda

### setting.js (time_adjustment)

Untuk bagian ini, hanya penambahan beberapa menit untuk tiap waktu. Apabila angkanya bernilai `+` maka menitnya maju ke depan, namun apabila angkanya bernilai `-` maka menitnya mundur ke belakang.

### hadist-list (hadist_list: String[])

Untuk bagian ini, kalian cukup menambahkan koma kemudian tambahkan string baru sesudah koma.
Contoh Awal:
```js
var hadist_list = [
    "hadist1",
    "hadist2"
]
```
Ketika ditambah:
```js
var hadist_list = [
    "hadist1",
    "hadist2",
    "hadist3",
    "hadist4"
]
```

## Beberapa Hal yang Harus Diketahui

1. Untuk shortcut iqomah:
   - `W` = Paksa sholat, maksudnya mode sholat tanpa aba-aba iqomah.
   - `S` = Hitung mundur iqomah
   - Anda harus menekannya kembali apabila anda telah menekannya, untuk keluar dari mode itu tentunya.
   - Catatan: *Apabila anda lupa tadi menekan apa, tolong tekan **Ctrl + R** saja daripada menekan sembarang tombol. Takutnya, anda akan menemukan bug*
2. Kalian dapat mengganti warna background/masjid dengan navigasikan ke /public/package dan edit photonya dengan aplikasi manipulasi gambar (contohnya Photoshop/GIMP).

## Kritik, Saran, atau Menemukan Bug

Anda dapat mengadukan kritik, saran, ataupun bug ke tab [Issues](https://github.com/skymunn/jadwal-sholat-web/issues).
