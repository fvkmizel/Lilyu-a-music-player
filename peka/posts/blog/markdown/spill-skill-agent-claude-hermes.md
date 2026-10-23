---
title: "Spill Skill Agent AI: Claude dan Hermes, Lengkap dengan Repo GitHub-nya"
slug: "spill-skill-agent-claude-hermes"
date: "2026-10-20"
datetime: "2026-10-20 21:05"
excerpt: "Versi lengkap seri SPILL Peka: apa itu skill agent AI, skill Claude dan Hermes yang kepakai beneran buat ngoding dan produktivitas, plus daftar repo GitHub terverifikasi buat ambil skill siap pakai."
image: "https://blog.peka.ai.id/covers/spill-skill-agent-claude-hermes.png"
url: "https://blog.peka.ai.id/p/spill-skill-agent-claude-hermes"
reading_time: "5 menit baca"
---

# Spill Skill Agent AI: Claude dan Hermes, Lengkap dengan Repo GitHub-nya

*Dipublikasikan pada 2026-10-20 · 5 menit baca*

![Cover](https://blog.peka.ai.id/covers/spill-skill-agent-claude-hermes.png)

[← arsip](/)
[AI Agent](/?tag=AI%20Agent)[Claude](/?tag=Claude)[Hermes](/?tag=Hermes)

# Spill Skill Agent AI: Claude dan Hermes, Lengkap dengan Repo GitHub-nya

![Peka AI](/static/logo.png) Peka AI ·  20 Oktober 2026  · 5 menit baca

![Spill Skill Agent AI: Claude dan Hermes, Lengkap dengan Repo GitHub-nya](/covers/spill-skill-agent-claude-hermes.png)![Spill Skill Agent AI: Claude dan Hermes, Lengkap dengan Repo GitHub-nya](/covers/spill-skill-agent-claude-hermes-2.png)![Spill Skill Agent AI: Claude dan Hermes, Lengkap dengan Repo GitHub-nya](/covers/spill-skill-agent-claude-hermes-3.png)![Spill Skill Agent AI: Claude dan Hermes, Lengkap dengan Repo GitHub-nya](/covers/spill-skill-agent-claude-hermes-4.png)![Spill Skill Agent AI: Claude dan Hermes, Lengkap dengan Repo GitHub-nya](/covers/spill-skill-agent-claude-hermes-5.png)
‹
›
1 / 5

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

* [Skill Itu Apa?](#skill-itu-apa)
* [Claude: Paling Matang buat Ngoding dan Dokumen](#claude-paling-matang-buat-ngoding-dan-dokumen)
* [Repo Skill Claude yang Kepakai Beneran](#repo-skill-claude-yang-kepakai-beneran)
* [Hermes: Agent Otonom yang Belajar dari Pengalaman](#hermes-agent-otonom-yang-belajar-dari-pengalaman)
* [Repo Skill Hermes yang Kepakai Beneran](#repo-skill-hermes-yang-kepakai-beneran)
* [Jadi, Pilih yang Mana?](#jadi-pilih-yang-mana)
* [Tips Aman Sebelum Memasang Skill](#tips-aman-sebelum-memasang-skill)
* [Penutup](#penutup)

Kalau kamu sudah pernah pakai agent AI buat ngoding atau ngerjain tugas harian, kamu pasti sadar satu hal: model yang sama bisa terasa jauh lebih pintar di tangan orang yang workflow-nya rapi. Bedanya sering bukan di modelnya, tapi di **skill** yang dipasang ke agent itu.

Artikel ini adalah versi lengkap dari seri SPILL di akun Peka. Kita bedah apa itu skill, skill apa saja yang kepakai beneran di Claude dan Hermes, dan repo GitHub mana saja yang layak kamu buka kalau mau ambil skill siap pakai. Semua repo di bawah ini sudah diverifikasi satu per satu ke GitHub, termasuk jumlah star-nya per Oktober 2026.

## Skill Itu Apa?

Skill adalah folder berisi file bernama **SKILL.md**. Isinya instruksi langkah demi langkah yang ditulis dalam bahasa manusia, kadang ditemani script, template, atau file pendukung lain. Begini cara kerjanya:

* **Agent membaca skill hanya saat topiknya relevan.** Nama dan deskripsi skill selalu terlihat oleh agent, tapi isi lengkapnya baru dimuat ketika tugasmu cocok. Teknik ini disebut progressive disclosure, dan gunanya besar: konteks agent tidak kepenuhan hal yang tidak perlu.

* **Sekali bikin, dipakai berkali-kali.** Workflow yang berulang, misalnya format laporan mingguan atau standar review kode tim kamu, cukup ditulis sekali. Setelah itu agent menjalankannya sendiri tanpa perlu kamu jelaskan dari awal.

* **Formatnya standar terbuka.** Spesifikasi skill diterbitkan di agentskills.io, jadi skill yang sama bisa berjalan di Claude, Hermes, dan agent lain yang mendukung standar ini.

* **Tidak harus menulis sendiri.** Ada banyak skill bikinan komunitas yang dibagikan lewat GitHub. Tinggal clone, baca isinya, pasang yang cocok.

## Claude: Paling Matang buat Ngoding dan Dokumen

Claude dari Anthropic mendukung Agent Skills di Claude.ai, Claude Code, dan API. Buat urusan programming dan kerja kantoran, ekosistem skill Claude saat ini yang paling rapi. Skill yang paling kepakai:

* **Skill dokumen Office.** Skill resmi untuk membuat dan mengedit file Word, Excel, PowerPoint, dan PDF langsung dari percakapan, lengkap dengan tabel, rumus, dan format yang rapi.

* **Code review dan debugging.** Di Claude Code, skill dan perintah bawaan membantu meninjau perubahan kode, mencari bug, dan memberi usulan perbaikan sebelum kode di-merge.

* **Frontend design.** Skill desain yang bikin antarmuka web tidak terasa generik: tipografi, layout, dan detail visualnya lebih niat daripada hasil template pasaran.

* **Testing aplikasi web.** Skill testing menjalankan aplikasi web secara otomatis: klik, isi form, ambil screenshot, lalu melaporkan bug. Berguna sebelum rilis.

* **Skill kustom untuk tim.** Kamu bisa menulis SKILL.md sendiri berisi standar commit, cara deploy, atau format laporan tim. Sekali tulis, hasilnya konsisten seterusnya.

### Repo Skill Claude yang Kepakai Beneran

[**anthropics/skills**](https://github.com/anthropics/skills) (182 ribu star). Repo resmi milik Anthropic. Isinya skill dokumen Office dan contoh skill standar yang aman dijadikan titik awal sekaligus referensi kalau kamu mau menulis skill sendiri.

[**obra/superpowers**](https://github.com/obra/superpowers) (302 ribu star). Framework skill plus metodologi software development untuk Claude Code. Skill di dalamnya mengajarkan agent cara brainstorming fitur, menulis test sebelum ngoding, debugging sistematis, dan review kode.

[**alirezarezvani/claude-skills**](https://github.com/alirezarezvani/claude-skills) (28 ribu star). Satu repo berisi 380+ skill dan plugin Claude Code, dari engineering, marketing, product, sampai operasi bisnis. Cocok buat yang mau stok banyak dalam sekali ambil.

[**kepano/obsidian-skills**](https://github.com/kepano/obsidian-skills) (49 ribu star). Skill yang mengajarkan agent memakai Obsidian dengan benar: Markdown, Bases, JSON Canvas, dan Obsidian CLI. Vault catatanmu bisa dirapikan dan dikelola agent.

[**wshobson/agents**](https://github.com/wshobson/agents) (41 ribu star). Marketplace plugin dan skill untuk Claude Code dan beberapa agent lain. Isinya terkurasi per kategori, enak buat berburu kemampuan baru.

[**ComposioHQ/awesome-claude-skills**](https://github.com/ComposioHQ/awesome-claude-skills) (77 ribu star). Daftar kurasi bergaya awesome list berisi link skill, resource, dan tools Claude. Simpan sebagai bookmark; dari sini kamu bisa loncat ke ratusan repo lain.

## Hermes: Agent Otonom yang Belajar dari Pengalaman

Hermes adalah agent open source dari Nous Research. Kalau Claude unggul sebagai partner kerja yang kamu ajak ngobrol, Hermes unggul sebagai pekerja latar yang jalan terus. Kelebihan utamanya:

* **Skill yang menulis dirinya sendiri.** Setelah menyelesaikan tugas yang berat, Hermes menuliskan pengalamannya menjadi SKILL.md baru. Tugas serupa berikutnya dikerjakan lebih cepat karena prosedurnya sudah terdokumentasi.

* **Memory persisten.** Hermes mengingat preferensi, proyek, dan pelajaran dari sesi sebelumnya. Kamu tidak mulai dari nol setiap kali membuka chat.

* **Jalan 24/7 di server.** Hermes enak ditinggal di VPS: cron, monitoring, backup, dan laporan otomatis berjalan sendiri tanpa kamu tunggu.

* **Satu otak di banyak aplikasi.** Gateway yang sama melayani Telegram, WhatsApp, Discord, Slack, sampai email. Ganti aplikasi, ingatannya tetap nyambung.

* **Model bebas.** Hermes tidak terikat satu provider. Claude, GPT, Gemini, sampai model lokal bisa dipakai dan diganti tanpa mengganti agent-nya.

### Repo Skill Hermes yang Kepakai Beneran

[**NousResearch/hermes-agent**](https://github.com/NousResearch/hermes-agent) (255 ribu star). Repo utama Hermes. Skill bawaannya ada di sini, termasuk mekanisme penulisan skill otomatis dari pengalaman.

[**0xNyk/awesome-hermes-agent**](https://github.com/0xNyk/awesome-hermes-agent) (5,8 ribu star). Direktori independen berisi skill, plugin, penyedia memory, dan tools pilihan untuk Hermes. Titik awal yang bagus buat menjelajah ekosistemnya.

[**NousResearch/hermes-agent-self-evolution**](https://github.com/NousResearch/hermes-agent-self-evolution) (5,5 ribu star). Proyek resmi Nous Research untuk mengoptimasi skill dan prompt Hermes secara otomatis memakai DSPy dan GEPA. Ini dapurnya fitur belajar sendiri Hermes.

[**kerpopule/hermes-jev-skills**](https://github.com/kerpopule/hermes-jev-skills) (1,1 ribu star). Kumpulan skill praktis: routing model, memory, compaction, pemilihan skill, sampai computer use dan browser use untuk Hermes.

[**ksimback/hermes-ecosystem**](https://github.com/ksimback/hermes-ecosystem) (1,3 ribu star). Hermes Atlas: panduan memilih mode dan skill yang cocok untuk kebutuhanmu, lengkap dengan panduan install. Enak dibaca sebelum mulai utak-atik.

## Jadi, Pilih yang Mana?

* **Ngoding dan dokumen serius:** Claude. Ekosistem skill-nya paling matang dan repo resminya paling aman buat pemula.

* **Asisten 24/7 yang belajar sendiri:** Hermes. Dia tinggal di server, ingatannya awet, dan skill-nya bertambah seiring pemakaian.

* **Keduanya sekaligus:** bisa. Format skill-nya mirip karena sama-sama mengikuti standar terbuka, jadi investasi belajar nulis skill tidak terbuang.

## Tips Aman Sebelum Memasang Skill

* **Baca dulu isi SKILL.md-nya.** Skill pada dasarnya adalah instruksi yang akan diikuti agent kamu, kadang ditemani script yang akan dijalankan. Luangkan dua menit untuk membaca sebelum memasang.

* **Utamakan sumber tepercaya.** Mulai dari repo resmi dan repo dengan star besar serta maintainer jelas. Ekosistem skill pernah kecolongan skill berbahaya yang menyusup di marketplace, jadi jangan asal install.

* **Mulai dari satu skill.** Pasang, coba di tugas beneran, rasakan bedanya. Menumpuk puluhan skill sekaligus justru bikin perilaku agent susah ditebak.

## Penutup

Produktivitas agent AI tidak ditentukan oleh modelnya saja. Skill yang terpasang di dalamnya yang membedakan agent yang sekadar bisa menjawab dan agent yang benar-benar bisa bekerja dengan caramu.

Seri SPILL repo skill tayang tiap hari jam 21.30 WIB di akun Peka, bergantian antara Claude dan Hermes, satu slide per repo. Follow @peka.ai.id biar tidak ketinggalan, dan simpan artikel ini sebagai contekan jangka panjang.

tayang juga di: [threads](https://www.threads.net/t/18387105736224802)[facebook](https://facebook.com/61594934228841/posts/pfbid06yWNPtZqioZGy5ntbSQi6KKNyryvyc6hpQRryDUac2x4HobunZz6w2yad9Garyq6l/)
bagikan: [WhatsApp](https://wa.me/?text=Spill%20Skill%20Agent%20AI%3A%20Claude%20dan%20Hermes%2C%20Lengkap%20dengan%20Repo%20GitHub-nya%20https%3A//blog.peka.ai.id/p/spill-skill-agent-claude-hermes)[X](https://twitter.com/intent/tweet?text=Spill%20Skill%20Agent%20AI%3A%20Claude%20dan%20Hermes%2C%20Lengkap%20dengan%20Repo%20GitHub-nya&url=https%3A//blog.peka.ai.id/p/spill-skill-agent-claude-hermes)[Telegram](https://t.me/share/url?url=https%3A//blog.peka.ai.id/p/spill-skill-agent-claude-hermes&text=Spill%20Skill%20Agent%20AI%3A%20Claude%20dan%20Hermes%2C%20Lengkap%20dengan%20Repo%20GitHub-nya) salin tautan   (function(){var b=document.querySelector("[data-copy]");if(!b)return;b.addEventListener("click",function(){navigator.clipboard.writeText(b.dataset.copy);b.textContent="disalin!";});})();

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
[ ← lebih lama  3 Kursus Columbia Gratis pakai Kode GRADGIFT2026 ](/p/kursus-columbia-gratis)[ lebih baru →  Spill Repo Skill Claude Edisi #01: 5 Repo Skill Siap Pakai yang Lagi Ramai ](/p/spill-repo-skill-claude-edisi-01)
