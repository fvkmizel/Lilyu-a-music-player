---
title: "Spill Repo Skill Hermes Edisi #02: Lima repo GitHub buat bikin Hermes Agent makin pintar"
slug: "spill-repo-skill-hermes-edisi-02"
date: "2026-10-21"
datetime: "2026-10-21 21:30"
excerpt: "Edisi kedua Spill Repo giliran skill Hermes: lima repo GitHub terverifikasi, dari repo resmi Nous Research sampai katalog skill komunitas. Simpan, siapa tahu kepakai besok."
image: "https://blog.peka.ai.id/covers/spill-repo-skill-hermes-edisi-02.png"
url: "https://blog.peka.ai.id/p/spill-repo-skill-hermes-edisi-02"
reading_time: "4 menit baca"
---

# Spill Repo Skill Hermes Edisi #02: Lima repo GitHub buat bikin Hermes Agent makin pintar

*Dipublikasikan pada 2026-10-21 · 4 menit baca*

![Cover](https://blog.peka.ai.id/covers/spill-repo-skill-hermes-edisi-02.png)

[← arsip](/)
[AI Agent](/?tag=AI%20Agent)[Hermes](/?tag=Hermes)

# Spill Repo Skill Hermes Edisi #02: Lima repo GitHub buat bikin Hermes Agent makin pintar

![Peka AI](/static/logo.png) Peka AI ·  21 Oktober 2026  · 4 menit baca

![Spill Repo Skill Hermes Edisi #02: Lima repo GitHub buat bikin Hermes Agent makin pintar](/covers/spill-repo-skill-hermes-edisi-02.png)![Spill Repo Skill Hermes Edisi #02: Lima repo GitHub buat bikin Hermes Agent makin pintar](/covers/spill-repo-skill-hermes-edisi-02-2.png)![Spill Repo Skill Hermes Edisi #02: Lima repo GitHub buat bikin Hermes Agent makin pintar](/covers/spill-repo-skill-hermes-edisi-02-3.png)![Spill Repo Skill Hermes Edisi #02: Lima repo GitHub buat bikin Hermes Agent makin pintar](/covers/spill-repo-skill-hermes-edisi-02-4.png)![Spill Repo Skill Hermes Edisi #02: Lima repo GitHub buat bikin Hermes Agent makin pintar](/covers/spill-repo-skill-hermes-edisi-02-5.png)![Spill Repo Skill Hermes Edisi #02: Lima repo GitHub buat bikin Hermes Agent makin pintar](/covers/spill-repo-skill-hermes-edisi-02-6.png)![Spill Repo Skill Hermes Edisi #02: Lima repo GitHub buat bikin Hermes Agent makin pintar](/covers/spill-repo-skill-hermes-edisi-02-7.png)
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

* [1. NousResearch/hermes-agent](#1-nousresearch-hermes-agent)
* [2. 0xNyk/awesome-hermes-agent](#2-0xnyk-awesome-hermes-agent)
* [3. NousResearch/hermes-agent-self-evolution](#3-nousresearch-hermes-agent-self-evolution)
* [4. kerpopule/hermes-jev-skills](#4-kerpopule-hermes-jev-skills)
* [5. ksimback/hermes-ecosystem](#5-ksimback-hermes-ecosystem)

Ini dia **Spill Repo Edisi #02**, seri harian Peka yang bedah repo GitHub berisi skill siap pakai buat AI agent. Satu edisi, satu agent, gilirannya muter tiap hari. Kemarin giliran Claude, hari ini giliran **Hermes**, besok giliran Claude lagi.

Kenapa repo skill? Karena skill adalah cara paling cepat bikin AI agent terasa jauh lebih pintar tanpa ganti model. Skill adalah paket instruksi dan contoh kerja yang dipasang ke agent. Agent yang sama, dipasang skill yang tepat, hasilnya bisa beda jauh.

Lima repo di bawah ini semuanya sudah aku verifikasi langsung ke GitHub API: nama, deskripsi, jumlah star, bahasa utama, lisensi, dan tanggal update terakhirnya asli, bukan karangan. Semua data per 21 Oktober 2026.

### 1. NousResearch/hermes-agent

Repo: [github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

Ini repo resmi Nous Research, pembuat model Hermes, dan juga repo paling populer di daftar ini. Isinya Hermes Agent: agent open source yang didesain bisa tumbuh bareng penggunanya. Deskripsi resminya cuma satu kalimat, "The agent that grows with you", dan itu memang konsep utamanya: makin lama kamu pakai, makin nyambung agent-nya dengan cara kerjamu.

Cara pakainya secara umum: clone repo, ikuti panduan instalasi di README, lalu jalankan Hermes Agent sebagai asisten harianmu. Karena ini proyek open source aktif (diupdate per hari ini), ikuti terus commit terbarunya kalau kamu mau fitur paling baru.

Spek: 255.771 star di GitHub, bahasa utama Python, lisensi MIT, terakhir diupdate 21 Oktober 2026.

Cocok buat: siapa pun yang mau agent open source yang terus berkembang mengikuti kebiasaan kamu.

### 2. 0xNyk/awesome-hermes-agent

Repo: [github.com/0xNyk/awesome-hermes-agent](https://github.com/0xNyk/awesome-hermes-agent)

Direktori independen berisi skill, plugin, penyedia memori, tools, permukaan antarmuka, dan panduan buat Hermes Agent dari Nous Research. Ini bukan repo resmi, tapi disusun komunitas, jadi isinya justru lebih luas: skill bikinan komunitas, provider memori alternatif, sampai panduan setup yang tidak ada di dokumentasi resmi.

Cara pakainya secara umum: jadikan repo ini sebagai titik awal berburu. Telusuri daftarnya per kategori (skill, plugin, memori, tools), lalu loncat ke repo aslinya untuk instalasi. Enak buat bookmark dan balik lagi tiap ada skill baru.

Spek: 5.876 star di GitHub, lisensi Other, terakhir diupdate 22 September 2026.

Cocok buat: yang mau berburu skill dan tools Hermes dari satu titik tanpa keliling banyak repo.

### 3. NousResearch/hermes-agent-self-evolution

Repo: [github.com/NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution)

Ini repo resmi kedua dari Nous Research di edisi ini, dan mungkin yang paling menarik buat yang suka eksperimen. Isinya sistem evolusi diri buat Hermes Agent: agent-nya mengoptimalkan skill, prompt, dan kodenya sendiri memakai teknik DSPy dan GEPA. Jadi performanya naik terus tanpa kamu harus mengutak-atik prompt manual.

Cara pakainya secara umum: pelajari arsitektur evolusinya dari README dan contoh kodenya, lalu terapkan loop optimasinya ke agent Hermes-mu sendiri. Cocok juga buat referensi riset kalau kamu lagi mengembangkan sistem agent yang bisa memperbaiki diri.

Spek: 5.539 star di GitHub, bahasa utama Python, lisensi tidak tercantum, terakhir diupdate 17 Juni 2026.

Cocok buat: yang penasaran sama agent yang bisa memperbaiki dirinya sendiri, bukan cuma menunggu diupgrade.

### 4. kerpopule/hermes-jev-skills

Repo: [github.com/kerpopule/hermes-jev-skills](https://github.com/kerpopule/hermes-jev-skills)

Kumpulan skill Jev buat routing model, memori, kompresi konteks (compaction), pemilihan skill otomatis, plus kemampuan computer use dan browser use buat agent Hermes. Skill-skill di sini bikin agent bisa memilih model yang tepat per tugas, mengingat konteks lama tanpa boros token, dan bahkan mengoperasikan komputer dan browser. Bonus: skill-nya juga bisa dipakai bareng Claude Code dan Codex, bukan cuma Hermes.

Cara pakainya secara umum: clone repo, pilih skill yang kamu butuh (misalnya routing atau computer use), lalu pasang ke agent-mu mengikuti instruksi tiap skill. Mulai dari satu skill dulu, rasakan bedanya, baru tambah yang lain.

Spek: 1.147 star di GitHub, bahasa utama Python, lisensi MIT, terakhir diupdate 20 Oktober 2026.

Cocok buat: pengguna Hermes yang mau agent-nya makin mandiri mengoperasikan komputer dan browser.

### 5. ksimback/hermes-ecosystem

Repo: [github.com/ksimback/hermes-ecosystem](https://github.com/ksimback/hermes-ecosystem)

Hermes Atlas, lapisan keputusan buat Hermes Agent. Isinya panduan instalasi, rekomendasi pemilihan mode dan skill, plus katalog kurasi berisi 240+ tools ekosistem dengan data GitHub yang hidup (diperbarui mengikuti data asli repo). Kalau empat repo sebelumnya adalah bahan bakunya, repo ini adalah peta buat menavigasinya: mulai dari mana, pilih mode apa, skill mana yang duluan.

Cara pakainya secara umum: buka panduan instalasinya dulu, tentukan mode dan skill awal lewat rekomendasinya, lalu jelajahi katalog 240+ tools-nya buat menemukan yang sesuai kebutuhanmu. Simpan repo ini sebagai referensi jangka panjang.

Spek: 1.325 star di GitHub, bahasa utama HTML, lisensi tidak tercantum, terakhir diupdate 21 Oktober 2026.

Cocok buat: yang mau panduan terstruktur dan katalog lengkap sebelum mulai serius dengan Hermes Agent.

Itu dia lima repo skill Hermes edisi #02. Kalau kamu cuma mau coba satu, mulai dari **NousResearch/hermes-agent** (agent-nya sendiri) lalu pakai **ksimback/hermes-ecosystem** sebagai petanya. Kalau suka eksperimen, **hermes-agent-self-evolution** bakal bikin kamu betah ngoprek.

Besok giliran repo skill **CLAUDE**, edisi #03, jam 21:30. Repo favoritmu apa? Spill juga di komentar ya. Semua edisi Spill Repo tayang tiap hari di Instagram, Threads, dan Facebook Peka.

tayang juga di: [facebook](https://facebook.com/61594934228841/posts/pfbid02eQ1DAngevEqw2tBscZkWfX8E97bmfoebAooibADL8tyR8rD2aeqaW6YABHGxEAFhl/)[instagram](https://www.instagram.com/peka.ai.id/)[threads](https://www.threads.net/t/18117672151806921)
bagikan: [WhatsApp](https://wa.me/?text=Spill%20Repo%20Skill%20Hermes%20Edisi%20%2302%3A%20Lima%20repo%20GitHub%20buat%20bikin%20Hermes%20Agent%20makin%20pintar%20https%3A//blog.peka.ai.id/p/spill-repo-skill-hermes-edisi-02)[X](https://twitter.com/intent/tweet?text=Spill%20Repo%20Skill%20Hermes%20Edisi%20%2302%3A%20Lima%20repo%20GitHub%20buat%20bikin%20Hermes%20Agent%20makin%20pintar&url=https%3A//blog.peka.ai.id/p/spill-repo-skill-hermes-edisi-02)[Telegram](https://t.me/share/url?url=https%3A//blog.peka.ai.id/p/spill-repo-skill-hermes-edisi-02&text=Spill%20Repo%20Skill%20Hermes%20Edisi%20%2302%3A%20Lima%20repo%20GitHub%20buat%20bikin%20Hermes%20Agent%20makin%20pintar) salin tautan   (function(){var b=document.querySelector("[data-copy]");if(!b)return;b.addEventListener("click",function(){navigator.clipboard.writeText(b.dataset.copy);b.textContent="disalin!";});})();

kasih rating tulisan ini

belum ada penilaian

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
Cara Deploy Pertama di Oracle Cloud Always Free: Dari Console Sampai Aplikasi Online
![Cara Deploy Pertama di Oracle Cloud Always Free: Dari Console Sampai Aplikasi Online](/covers/oracle-deploy-01.png)
→
22 Oktober 2026
Biasanya Dipakai untuk Counter Buzzer, Kini Meta AI Diblokir di Threads
![Biasanya Dipakai untuk Counter Buzzer, Kini Meta AI Diblokir di Threads](/covers/meta-ai-diblokir-di-threads.png)
[ ← lebih lama  VPS Gratis Selamanya dari Oracle Cloud ](/p/vps-oracle-gratis-selamanya)[ lebih baru →  Buzzer Ini Bukan Manusia: AI Agent Kepergok di Threads ](/p/buzzer-ai-agent-threads)
