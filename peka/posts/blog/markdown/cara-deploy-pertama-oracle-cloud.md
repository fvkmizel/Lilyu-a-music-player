---
title: "Cara Deploy Pertama di Oracle Cloud Always Free: Dari Console Sampai Aplikasi Online"
slug: "cara-deploy-pertama-oracle-cloud"
date: "2026-10-22"
datetime: "2026-10-22 22:45"
excerpt: "Sudah dapat Oracle Cloud Always Free tapi bingung console-nya di mana dan deploy-nya lewat mana? Ini panduan lengkapnya: masuk console yang benar, bikin instance, buka port, sampai aplikasi pertamamu online."
image: "https://blog.peka.ai.id/covers/oracle-deploy-01.png"
url: "https://blog.peka.ai.id/p/cara-deploy-pertama-oracle-cloud"
reading_time: "4 menit baca"
---

# Cara Deploy Pertama di Oracle Cloud Always Free: Dari Console Sampai Aplikasi Online

*Dipublikasikan pada 2026-10-22 · 4 menit baca*

![Cover](https://blog.peka.ai.id/covers/oracle-deploy-01.png)

[← arsip](/)
[Tutorial](/?tag=Tutorial)[VPS](/?tag=VPS)[Oracle Cloud](/?tag=Oracle%20Cloud)

# Cara Deploy Pertama di Oracle Cloud Always Free: Dari Console Sampai Aplikasi Online

![Peka AI](/static/logo.png) Peka AI ·  22 Oktober 2026  · 4 menit baca

![Cara Deploy Pertama di Oracle Cloud Always Free: Dari Console Sampai Aplikasi Online](/covers/oracle-deploy-01.png)![Cara Deploy Pertama di Oracle Cloud Always Free: Dari Console Sampai Aplikasi Online](/covers/oracle-deploy-02.png)![Cara Deploy Pertama di Oracle Cloud Always Free: Dari Console Sampai Aplikasi Online](/covers/oracle-deploy-03.png)![Cara Deploy Pertama di Oracle Cloud Always Free: Dari Console Sampai Aplikasi Online](/covers/oracle-deploy-04.png)![Cara Deploy Pertama di Oracle Cloud Always Free: Dari Console Sampai Aplikasi Online](/covers/oracle-deploy-05.png)![Cara Deploy Pertama di Oracle Cloud Always Free: Dari Console Sampai Aplikasi Online](/covers/oracle-deploy-06.png)![Cara Deploy Pertama di Oracle Cloud Always Free: Dari Console Sampai Aplikasi Online](/covers/oracle-deploy-07.png)
‹
›
1 / 7

(function(){var s=document.querySelector('.slider');if(!s)return;
var track=s.querySelector('.strack'),n=track.children.length,i=0;
var cnt=s.querySelector('.scounter'),dots=s.querySelectorAll('.sdots button');
function go(j){i=(j+n)%n;track.style.transform='translateX(-'+(i*100)+'%)';cnt.textContent=(i+1)+' / '+n;dots.forEach(function(d,k){d.classList.toggle('on',k===i);});}
s.querySelector('.prev').addEventListener('click',function(){go(i-1);});
s.querySelector('.next').addEventListener('click',function(){go(i+1);});
dots.forEach(function(d,k){d.addEventListener('click',function(){go(k);});});
var sx=null;s.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});
s.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>42)go(i+(dx

daftar isi

* [1. Masuk ke Console yang Benar](#1-masuk-ke-console-yang-benar)
* [2. Buat Instance (Server Kamu)](#2-buat-instance-server-kamu)
* [3. Konek ke Server](#3-konek-ke-server)
* [4. Buka Port Aplikasi](#4-buka-port-aplikasi)
* [5. Deploy Aplikasi Pertamamu](#5-deploy-aplikasi-pertamamu)
* [6. Yang Wajib Diingat Soal Always Free](#6-yang-wajib-diingat-soal-always-free)
* [Pertanyaan yang Sering Muncul](#pertanyaan-yang-sering-muncul)

Edisi bansos VPS Oracle kemarin ramai yang berhasil dapat akun Oracle Cloud Always Free, tapi banyak juga yang berhenti di pertanyaan yang sama: console panelnya di mana, dan deploy programnya lewat mana. Artikel ini jawaban lengkapnya, dari login sampai aplikasi pertamamu online.

Belum punya akunnya? Baca dulu edisi bansosnya: [VPS Oracle Gratis Selamanya](/p/vps-oracle-gratis-selamanya).

### 1. Masuk ke Console yang Benar

Kesalahan paling umum: membuka oracle.com. Itu situs marketing Oracle, isinya penjelasan produk dan kolom chat penjualan, bukan panel server. Panel yang benar ada di **cloud.oracle.com**.

Buka cloud.oracle.com, klik Sign In. Kalau diminta *Cloud Account Name*, isi nama tenancy yang ada di email pendaftaran akunmu, lalu login pakai email dan password yang kamu buat saat daftar. Halaman yang terbuka setelah itu namanya OCI Console, dan semua urusan server ada di sini.

### 2. Buat Instance (Server Kamu)

* Di console, buka menu garis tiga di kiri atas, pilih **Compute**, lalu **Instances**, lalu klik **Create Instance**.

* Isi nama bebas, misalnya "server-pertama". Untuk image, pilih **Canonical Ubuntu** versi terbaru.

* Di bagian Shape, klik Change shape, pilih tab **Ampere**, lalu **VM.Standard.A1.Flex**. Cari yang ada label **Always Free Eligible**. Jatah gratis A1 adalah total 4 OCPU dan 24 GB RAM untuk semua instance di akunmu. Buat mulai, atur 2 OCPU dan 12 GB RAM, itu sudah lega buat kebanyakan proyek. Alternatif mungilnya VM.Standard.E2.1.Micro (RAM 1 GB, maksimal 2 instance).

* Di bagian Networking, biarkan console membuatkan jaringan baru (Create new virtual cloud network) dan pastikan opsi **Assign a public IPv4 address** aktif. Tanpa IP publik, servermu tidak bisa diakses dari internet.

* Di bagian SSH keys, pilih **Generate a key pair for me**, lalu unduh private key-nya dan simpan di tempat aman. File ini adalah kunci masuk servermu, tidak bisa diunduh ulang.

* Klik **Create** dan tunggu status instance berubah jadi RUNNING berwarna hijau. Catat alamat **Public IP address** yang muncul di halaman instance.

Kalau muncul pesan *out of capacity*, itu hal yang sangat wajar di region yang ramai. Coba lagi di jam lain, atau ganti pilihan Availability Domain di formulir yang sama.

### 3. Konek ke Server

Dari terminal di komputermu, konek pakai SSH:

******  terminal  salin    ssh -i namafile.key ubuntu@IP-PUBLIK-KAMU

Username untuk image Ubuntu adalah  ubuntu . Kalau kamu memilih image Oracle Linux, username-nya  opc . Tidak mau ribet setup di komputer sendiri? Console punya terminal bawaan bernama **Cloud Shell**, ikonnya di kanan atas halaman console. Dari situ kamu juga bisa SSH ke instance setelah mengunggah private key.

Setelah berhasil masuk, jalankan  sudo apt update  biar daftar paket servermu segar.

### 4. Buka Port Aplikasi

Ini bagian yang paling sering bikin orang mengira servernya rusak. Port di Oracle Cloud dijaga dua lapis, dan dua-duanya harus dibuka:

* **Di console:** buka halaman instance, klik VNIC yang terpasang, masuk ke subnet, pilih Security List, lalu Add Ingress Rules. Isi Source CIDR  0.0.0.0/0 , protocol TCP, dan destination port sesuai aplikasimu, misalnya 80 untuk web.

* **Di dalam server:** image Ubuntu dari Oracle membawa aturan firewall bawaan yang menolak hampir semua port. Buka dari dalam dengan perintah ini, ganti 80 dengan port aplikasimu:

******  terminal  salin    sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo netfilter-persistent save

### 5. Deploy Aplikasi Pertamamu

Cara tercepat buat deploy adalah Docker:

******  terminal  salin    curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker ubuntu

Keluar dan masuk lagi lewat SSH, lalu jalankan tes pertama:

******  terminal  salin    docker run -d --name web -p 80:80 nginx

Buka  http://IP-PUBLIK-KAMU  di browser. Kalau halaman nginx tampil, selamat, aplikasi pertamamu sudah online di server gratis. Buat proyek sendiri, polanya sama: clone repo kamu ke server, lalu jalankan pakai Docker Compose, atau jalankan langsung (Node, Python, dan lainnya) dibungkus service systemd supaya aplikasinya hidup lagi sendiri setiap server restart.

### 6. Yang Wajib Diingat Soal Always Free

* **Reklamasi idle.** Oracle bisa mengambil kembali instance gratis yang menganggur, patokannya pemakaian CPU, jaringan, dan memori yang rendah terus selama 7 hari. Pakai servernya beneran buat proyekmu, jangan cuma dibiarkan diam berminggu-minggu.

* **Home region tidak bisa diganti.** Region yang kamu pilih saat pendaftaran bersifat permanen buat akun gratis.

* **Jatah total.** Selain 4 OCPU dan 24 GB RAM tadi, ada juga jatah storage blok gabungan 200 GB buat semua volume.

### Pertanyaan yang Sering Muncul

**Kenapa buka situs Oracle malah diajak diskusi?** Karena yang kamu buka situs marketingnya. Console ada di cloud.oracle.com.

**Cloud Account Name itu nyarinya di mana?** Itu nama tenancy yang kamu buat pas pendaftaran. Cek email welcome dari Oracle, namanya tertulis di situ, dan tombol Sign In di email itu bisa langsung masuk tanpa mengisi nama tenancy lagi. Kalau sudah berhasil login, klik ikon profil di kanan atas console, di situ tertulis Tenancy beserta namanya.

**Private key kemarin lupa diunduh, gimana?** Kunci yang hilang tidak bisa diunduh ulang. Solusinya buat pasangan key baru lalu pasang public key-nya ke instance lewat console, atau buat instance baru dari awal.

**Port sudah dibuka di console tapi aplikasi tetap tidak bisa diakses?** Hampir selalu penyebabnya firewall di dalam server. Ulangi langkah iptables di bagian 4.

**Instance-ku hilang sendiri?** Cek email dan notifikasi di console. Kemungkinan besar kena reklamasi idle seperti dijelaskan di bagian 6.

Masih mentok di langkah tertentu? Gabung ke komunitas Peka lewat url.peka.ai.id dan tanya di grup, banyak yang lagi jalanin proses yang sama. Selamat deploy.

tayang juga di: [instagram](https://www.instagram.com/p/De00xVxjxxC/)[threads](https://www.threads.com/@peka.ai.id/post/De01BpVDy1c)[facebook](https://facebook.com/61594934228841/posts/pfbid0tBrvc4BVFXmTtDSbL3nGL8SrQ6LNwcLWPLR5BUkc2HLXdSNoBK58WpbQ2wjJRiYUl/)
bagikan: [WhatsApp](https://wa.me/?text=Cara%20Deploy%20Pertama%20di%20Oracle%20Cloud%20Always%20Free%3A%20Dari%20Console%20Sampai%20Aplikasi%20Online%20https%3A//blog.peka.ai.id/p/cara-deploy-pertama-oracle-cloud)[X](https://twitter.com/intent/tweet?text=Cara%20Deploy%20Pertama%20di%20Oracle%20Cloud%20Always%20Free%3A%20Dari%20Console%20Sampai%20Aplikasi%20Online&url=https%3A//blog.peka.ai.id/p/cara-deploy-pertama-oracle-cloud)[Telegram](https://t.me/share/url?url=https%3A//blog.peka.ai.id/p/cara-deploy-pertama-oracle-cloud&text=Cara%20Deploy%20Pertama%20di%20Oracle%20Cloud%20Always%20Free%3A%20Dari%20Console%20Sampai%20Aplikasi%20Online) salin tautan   (function(){var b=document.querySelector("[data-copy]");if(!b)return;b.addEventListener("click",function(){navigator.clipboard.writeText(b.dataset.copy);b.textContent="disalin!";});})();

kasih rating tulisan ini

5.0 dari 5 · 2 penilaian

(function(){var box=document.querySelector('.rate');if(!box)return;
var slug=box.dataset.slug,stars=box.querySelector('[data-role=stars]'),info=box.querySelector('[data-role=info]');
function paint(n){stars.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',+b.dataset.stars

baca juga

→
23 Oktober 2026
OpenAI Siap Galang Dana 30 Miliar Dolar di Valuasi 1,25 Triliun Dolar
![OpenAI Siap Galang Dana 30 Miliar Dolar di Valuasi 1,25 Triliun Dolar](/covers/openai-galang-dana-30-miliar-dolar-valuasi-125-triliun.png)
→
22 Oktober 2026
Biasanya Dipakai untuk Counter Buzzer, Kini Meta AI Diblokir di Threads
![Biasanya Dipakai untuk Counter Buzzer, Kini Meta AI Diblokir di Threads](/covers/meta-ai-diblokir-di-threads.png)
→
22 Oktober 2026
Domain .CV Gratis dari CodeHost, Ini Cara Klaimnya
![Domain .CV Gratis dari CodeHost, Ini Cara Klaimnya](/covers/domain-cv-gratis.png)
[ ← lebih lama  Biasanya Dipakai untuk Counter Buzzer, Kini Meta AI Diblokir di Threads ](/p/meta-ai-diblokir-di-threads)[ lebih baru →  OpenAI Siap Galang Dana 30 Miliar Dolar di Valuasi 1,25 Triliun Dolar ](/p/openai-galang-dana-30-miliar-dolar-valuasi-125-triliun)
