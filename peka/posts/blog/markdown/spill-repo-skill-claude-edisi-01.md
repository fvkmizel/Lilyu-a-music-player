---
title: "Spill Repo Skill Claude Edisi #01: 5 Repo Skill Siap Pakai yang Lagi Ramai"
slug: "spill-repo-skill-claude-edisi-01"
date: "2026-10-20"
datetime: "2026-10-20 21:30"
excerpt: "Edisi perdana seri bernomor Spill Repo: lima repo GitHub berisi skill siap pakai untuk Claude, dari marketplace plugin multi-harness sampai pustaka skill riset sains, dibedah satu satu lengkap dengan spek resminya."
image: "https://blog.peka.ai.id/covers/spill-repo-skill-claude-edisi-01.png"
url: "https://blog.peka.ai.id/p/spill-repo-skill-claude-edisi-01"
reading_time: "4 menit baca"
---

# Spill Repo Skill Claude Edisi #01: 5 Repo Skill Siap Pakai yang Lagi Ramai

*Dipublikasikan pada 2026-10-20 · 4 menit baca*

![Cover](https://blog.peka.ai.id/covers/spill-repo-skill-claude-edisi-01.png)

[← arsip](/)
[AI Agent](/?tag=AI%20Agent)[Claude](/?tag=Claude)

# Spill Repo Skill Claude Edisi #01: 5 Repo Skill Siap Pakai yang Lagi Ramai

![Peka AI](/static/logo.png) Peka AI ·  20 Oktober 2026  · 4 menit baca

![Spill Repo Skill Claude Edisi #01: 5 Repo Skill Siap Pakai yang Lagi Ramai](/covers/spill-repo-skill-claude-edisi-01.png)![Spill Repo Skill Claude Edisi #01: 5 Repo Skill Siap Pakai yang Lagi Ramai](/covers/spill-repo-skill-claude-edisi-01-2.png)![Spill Repo Skill Claude Edisi #01: 5 Repo Skill Siap Pakai yang Lagi Ramai](/covers/spill-repo-skill-claude-edisi-01-3.png)![Spill Repo Skill Claude Edisi #01: 5 Repo Skill Siap Pakai yang Lagi Ramai](/covers/spill-repo-skill-claude-edisi-01-4.png)![Spill Repo Skill Claude Edisi #01: 5 Repo Skill Siap Pakai yang Lagi Ramai](/covers/spill-repo-skill-claude-edisi-01-5.png)![Spill Repo Skill Claude Edisi #01: 5 Repo Skill Siap Pakai yang Lagi Ramai](/covers/spill-repo-skill-claude-edisi-01-6.png)![Spill Repo Skill Claude Edisi #01: 5 Repo Skill Siap Pakai yang Lagi Ramai](/covers/spill-repo-skill-claude-edisi-01-7.png)
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

* [1. wshobson/agents](#1-wshobson-agents)
* [2. travisvn/awesome-claude-skills](#2-travisvn-awesome-claude-skills)
* [3. nextlevelbuilder/ui-ux-pro-max-skill](#3-nextlevelbuilder-ui-ux-pro-max-skill)
* [4. coreyhaines31/marketingskills](#4-coreyhaines31-marketingskills)
* [5. K-Dense-AI/scientific-agent-skills](#5-k-dense-ai-scientific-agent-skills)

Ini dia **Spill Repo Edisi #01**, seri harian terbaru dari Peka yang bedah repo GitHub berisi skill siap pakai buat AI agent, satu edisi satu agent, gilirannya muter tiap hari. Edisi perdana ini giliran **Claude**, dan besok giliran Hermes.

Kenapa repo skill? Karena skill adalah cara paling cepat bikin AI agent terasa jauh lebih pintar tanpa ganti model. Skill adalah paket instruksi dan contoh kerja yang dipasang ke agent, misalnya skill bikin UI, skill riset pasar, atau skill bantu kerja ilmiah. Agent yang sama, dipasang skill yang tepat, hasilnya bisa beda jauh.

Lima repo di bawah ini semuanya sudah aku verifikasi langsung ke GitHub API: nama, deskripsi, jumlah star, bahasa utama, lisensi, dan tanggal update terakhirnya asli, bukan karangan. Semua data per 20 Oktober 2026.

### 1. wshobson/agents

Repo: [github.com/wshobson/agents](https://github.com/wshobson/agents)

Ini marketplace plugin agen yang mendukung banyak harness sekaligus: Claude Code, Codex, Cursor, OpenCode, GitHub Copilot, Google Antigravity, sampai Pi. Jadi kalau kamu pakai lebih dari satu coding agent, kamu tidak perlu cari plugin di tempat yang beda beda. Satu katalog, tinggal pilih plugin yang cocok dengan harness yang kamu pakai.

Cara pakainya secara umum: buka repo ini, telusuri katalog plugin yang tersedia, pilih yang sesuai kebutuhanmu, lalu pasang mengikuti instruksi di README tiap plugin. Umumnya pemasangan plugin skill itu sederhana, antara satu perintah terminal atau menyalin file skill ke folder konfigurasi agent.

**SPEK:** 41.223 star, bahasa utama Python, lisensi MIT License, terakhir diupdate 20 Oktober 2026.

**Cocok buat:** developer yang pakai beberapa coding agent sekaligus dan mau pasang plugin dari satu tempat.

### 2. travisvn/awesome-claude-skills

Repo: [github.com/travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)

Daftar kurasi berisi skill, resource, dan tools buat kustomisasi workflow Claude AI, terutama Claude Code. Isinya kumpulan link pilihan komunitas yang dikelompokkan rapi, jadi kamu tidak perlu trial and error sendiri buat nemu skill yang bagus. Ini titik mulai yang ideal sebelum kamu nyemplung lebih dalam.

Cara pakainya secara umum: buka daftarnya, pilih kategori yang kamu butuhkan, ikuti link ke repo aslinya, lalu instal skill mengikuti petunjuk di tiap repo. Karena ini daftar kurasi, tiap entri punya cara instal sendiri, tapi semuanya didokumentasikan di repo sumbernya.

**SPEK:** 15.479 star, bahasa utama tidak terdeteksi (repo berisi daftar kurasi), lisensi tidak terdaftar, terakhir diupdate 20 Oktober 2026.

**Cocok buat:** pemula Claude Code yang mau mulai dari skill pilihan komunitas.

### 3. nextlevelbuilder/ui-ux-pro-max-skill

Repo: [github.com/nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

Skill AI yang berisi design intelligence buat bikin UI/UX profesional di banyak platform. Masalah klasik waktu minta AI bikin tampilan adalah hasilnya fungsional tapi terlihat asal jadi. Skill ini dipasang ke coding agent supaya agent punya panduan desain yang jelas: layout, spacing, tipografi, sampai pola komponen yang umum dipakai di produk beneran.

Cara pakainya secara umum: pasang skill ini ke coding agent yang kamu pakai, kemudian minta agent membangun atau memperbaiki UI seperti biasa. Skill ini bekerja di balik layar sebagai panduan, jadi kamu tetap prompt seperti biasa, tapi outputnya mengikuti standar desain yang dibawa skill ini.

**SPEK:** 137.853 star, bahasa utama Python, lisensi MIT License, terakhir diupdate 20 Oktober 2026.

**Cocok buat:** developer yang mau hasil UI dari AI terlihat profesional tanpa hire desainer.

### 4. coreyhaines31/marketingskills

Repo: [github.com/coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)

Kumpulan skill marketing buat Claude Code dan AI agent: CRO (optimasi konversi), copywriting, SEO, analitik, sampai growth engineering. Ini bukti bahwa skill agent tidak cuma buat ngoding. Dengan skill yang tepat, agent bisa bantu kerja marketing yang biasanya makan waktu: riset kata kunci, audit copy landing page, analisis funnel, sampai nyusun strategi growth.

Cara pakainya secara umum: pasang skill ini ke agent, lalu delegasikan tugas marketing satu per satu. Contoh: minta agent audit copy di landing page kamu berdasarkan prinsip CRO, atau minta riset kata kunci untuk topik tertentu. Agent akan bekerja mengikuti framework yang dibawa tiap skill.

**SPEK:** 55.628 star, bahasa utama JavaScript, lisensi MIT License, terakhir diupdate 20 Oktober 2026.

**Cocok buat:** marketer dan solo founder yang mau delegasi kerja marketing ke AI agent.

### 5. K-Dense-AI/scientific-agent-skills

Repo: [github.com/K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)

Pustaka skill sains yang berisi 177 skill siap pakai yang sudah divalidasi plus akses ke 100+ database ilmiah, dan menurut klaim repo ini dipakai oleh 250.000+ ilmuwan di seluruh dunia. Tujuannya ambisius: mengubah AI agent biasa jadi asisten ilmuwan. Cakupannya luas, dari biologi sampai berbagai bidang riset lain yang butuh rujukan data ilmiah.

Cara pakainya secara umum: pilih skill yang sesuai dengan bidang risetmu, pasang ke agent, lalu minta bantuan untuk pekerjaan riset seperti pencarian literatur, analisis data, atau penyusunan draft ilmiah. Skill yang tervalidasi ini penting karena kerja ilmiah menuntut akurasi, bukan sekadar jawaban yang terdengar meyakinkan.

**SPEK:** 53.171 star, bahasa utama Python, lisensi MIT License, terakhir diupdate 20 Oktober 2026.

**Cocok buat:** peneliti dan mahasiswa yang butuh bantuan riset ilmiah dari AI agent.

Itu dia lima repo skill Claude di edisi perdana ini. Kalau kamu baru mulai, saranku: mulai dari nomor 2 buat orientasi, lalu pasang nomor 1 biar instal plugin berikutnya gampang, dan pilih satu skill spesialis (desain, marketing, atau sains) sesuai kerjaanmu sehari hari.

Besok, **Selasa 21 Oktober, giliran repo skill Hermes di Spill Repo Edisi #02**. Pantengin terus biar tidak ketinggalan.

tayang juga di: [facebook](https://facebook.com/61594934228841/posts/pfbid02t5R3owCDgdip3cCSDwHUpAicFUF2mzhp2pUaAPtWARCfBP9upwg9SqxA7wRr2EKSl/)[instagram](https://www.instagram.com/peka.ai.id/)[threads](https://www.threads.net/t/18159143923509383)
bagikan: [WhatsApp](https://wa.me/?text=Spill%20Repo%20Skill%20Claude%20Edisi%20%2301%3A%205%20Repo%20Skill%20Siap%20Pakai%20yang%20Lagi%20Ramai%20https%3A//blog.peka.ai.id/p/spill-repo-skill-claude-edisi-01)[X](https://twitter.com/intent/tweet?text=Spill%20Repo%20Skill%20Claude%20Edisi%20%2301%3A%205%20Repo%20Skill%20Siap%20Pakai%20yang%20Lagi%20Ramai&url=https%3A//blog.peka.ai.id/p/spill-repo-skill-claude-edisi-01)[Telegram](https://t.me/share/url?url=https%3A//blog.peka.ai.id/p/spill-repo-skill-claude-edisi-01&text=Spill%20Repo%20Skill%20Claude%20Edisi%20%2301%3A%205%20Repo%20Skill%20Siap%20Pakai%20yang%20Lagi%20Ramai) salin tautan   (function(){var b=document.querySelector("[data-copy]");if(!b)return;b.addEventListener("click",function(){navigator.clipboard.writeText(b.dataset.copy);b.textContent="disalin!";});})();

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
[ ← lebih lama  Spill Skill Agent AI: Claude dan Hermes, Lengkap dengan Repo GitHub-nya ](/p/spill-skill-agent-claude-hermes)[ lebih baru →  Robot AI Bantu Terapi Pasien Stroke, Tiru Tangan Fisioterapis ](/p/robot-ai-bantu-terapi-pasien-stroke)
