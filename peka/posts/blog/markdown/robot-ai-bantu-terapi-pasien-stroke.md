---
title: "Robot AI Bantu Terapi Pasien Stroke, Tiru Tangan Fisioterapis"
slug: "robot-ai-bantu-terapi-pasien-stroke"
date: "2026-10-21"
datetime: "2026-10-21 09:36"
excerpt: "Robot AI yang belajar dari fisioterapis manusia buat bantu terapi pasien stroke: AI generatif + umpan balik gaya real-time, tujuannya memperluas jangkauan terapis."
image: "https://blog.peka.ai.id/covers/hm-robot-ai-bantu-terapi-pasien-stroke.png"
url: "https://blog.peka.ai.id/p/robot-ai-bantu-terapi-pasien-stroke"
reading_time: "3 menit baca"
---

# Robot AI Bantu Terapi Pasien Stroke, Tiru Tangan Fisioterapis

*Dipublikasikan pada 2026-10-21 · 3 menit baca*

![Cover](https://blog.peka.ai.id/covers/hm-robot-ai-bantu-terapi-pasien-stroke.png)

[← arsip](/)
[AI](/?tag=AI)[Robot](/?tag=Robot)[Kesehatan](/?tag=Kesehatan)

# Robot AI Bantu Terapi Pasien Stroke, Tiru Tangan Fisioterapis

![Peka AI](/static/logo.png) Peka AI ·  21 Oktober 2026  · 3 menit baca

![Robot AI Bantu Terapi Pasien Stroke, Tiru Tangan Fisioterapis](/covers/hm-robot-ai-bantu-terapi-pasien-stroke.png)![Robot AI Bantu Terapi Pasien Stroke, Tiru Tangan Fisioterapis](/covers/hm-robot-ai-bantu-terapi-pasien-stroke-2.png)![Robot AI Bantu Terapi Pasien Stroke, Tiru Tangan Fisioterapis](/covers/hm-robot-ai-bantu-terapi-pasien-stroke-3.png)![Robot AI Bantu Terapi Pasien Stroke, Tiru Tangan Fisioterapis](/covers/hm-robot-ai-bantu-terapi-pasien-stroke-4.png)
‹
›
1 / 4

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

* [Latar belakang: 5 juta pasien baru tiap tahun, terapis makin langka](#latar-belakang-5-juta-pasien-baru-tiap-tahun-ter)
* [Cara kerja: robot yang belajar dari sentuhan terapis asli](#cara-kerja-robot-yang-belajar-dari-sentuhan-tera)
* [Tujuan: memperluas jangkauan, bukan menggantikan terapis](#tujuan-memperluas-jangkauan-bukan-menggantikan-t)
* [Apa selanjutnya: model per terapis dan uji klinis jangka panjang](#apa-selanjutnya-model-per-terapis-dan-uji-klinis)

Bayangin kamu pasien stroke yang lagi latihan gerakin lengan. Di sampingmu ada robot yang nggak kaku kayak robot pabrik: dia ngikutin gerakanmu, ngerasain seberapa kuat tenagamu, terus ngasih bantuan yang pas banget. Kurang dikit nggak dibantu asal-asalan, kelebihan juga nggak. Dan yang bikin keren: robot ini belajar caranya dari fisioterapis manusia sungguhan.

Ini bukan konsep di atas kertas. Tim peneliti yang dipimpin Johannes Lachner, mantan postdoc MIT yang sekarang jadi asisten profesor di Purdue University, bareng Noah Geiger, mantan mahasiswa tamu di MIT, udah ngembangin sistem robotik buat terapi fisik pasien stroke yang pakai AI generatif dan umpan balik gaya real-time. Beritanya dilaporin MIT Technology Review pada 20 Oktober 2026, dan eksperimen robotik awalnya udah nunjukin pendekatan ini bisa jalan.

### Latar belakang: 5 juta pasien baru tiap tahun, terapis makin langka

Stroke ninggalin sekitar 5 juta orang dengan kecacatan jangka panjang setiap tahunnya. Buat mereka, terapi fisik itu kunci buat balik bisa gerak, tapi di sisi lain jumlah fisioterapis makin nggak nutupin kebutuhan. Akibatnya banyak pasien yang nggak dapet perawatan sebanyak yang mereka butuhkan.

Di sinilah robot masuk. Bukan buat gantiin terapis, tapi buat ngebantu mereka ngelayanin lebih banyak pasien. Masalahnya, terapi fisik itu pekerjaan yang halus: terapis harus ngerasain lewat tangan berapa banyak bantuan yang dikasih ke pasien di tiap gerakan. Robot biasa yang cuma ngulang gerakan yang diprogram nggak bisa ngelakuin ini. Makanya tim ini pakai pendekatan yang beda: robot yang belajar dari terapis manusia.

### Cara kerja: robot yang belajar dari sentuhan terapis asli

Sistem yang dikembangin Lachner dan Geiger ini menggabungin dua teknologi: AI generatif dan umpan balik gaya real-time. Sederhananya, robot dilatih dengan data dari terapis sungguhan: gimana mereka megang pasien, seberapa kuat dorongannya, kapan mereka nambah atau ngurangin bantuan. Dari situ, robot belajar ngasih jumlah bantuan yang tepat selama latihan rehabilitasi fisik.

Latihannya sendiri adalah gerakan-gerakan dasar yang penting buat kehidupan sehari-hari: meraih benda, mengangkat lengan, dan tugas-tugas harian lainnya. Ini gerakan yang kelihatannya sederhana tapi butuh koordinasi dan kekuatan yang buat pasien stroke bisa jadi perjuangan berat. Dengan robot yang ngasih bantuan yang pas, pasien bisa latihan lebih banyak dan lebih sering, bahkan saat terapis manusia lagi nggak ada di sampingnya.

Yang menarik, pendekatan ini nggak cuma soal otot dan sendi. Karena robotnya belajar dari terapis nyata, dia mewarisi semacam intuisi terapis: kapan pasien butuh didorong sedikit, kapan harus dibiarin usaha sendiri. Ini beda jauh dari robot rehabilitasi konvensional yang gerakannya kaku dan seragam buat semua pasien.

### Tujuan: memperluas jangkauan, bukan menggantikan terapis

Quote paling penting dari Lachner soal proyek ini: tujuannya "bukan menggantikan terapis, tapi memperluas jangkauan mereka". Ini poin yang sering hilang di berita-berita soal robot dan AI: teknologinya dirancang buat nambah kapasitas manusia, bukan nyingkirin mereka.

Logikanya masuk akal. Kalau satu terapis bisa ngawasin beberapa pasien sekaligus karena tiap pasien dibantu robot yang udah belajar dari dia, jumlah pasien yang kebagian terapi bisa naik berkali-kali lipat tanpa nambah jumlah terapis. Buat negara yang kekurangan tenaga kesehatan, termasuk Indonesia, model kayak gini bisa jadi jawaban jangka panjang.

### Apa selanjutnya: model per terapis dan uji klinis jangka panjang

Eksperimen robotik awal udah nunjukin pendekatan ini feasible, alias bisa jalan di dunia nyata. Tahap berikutnya yang direncanain tim ini ada dua: pertama, ngembangin model yang spesifik per terapis, jadi robot bisa meniru gaya tiap terapis secara individual. Kedua, ngevaluasi sistem ini dalam studi klinis jangka panjang dengan pasien yang sama yang sebelumnya pernah menerima terapi manual. Ini penting biar hasilnya bisa dibandingin secara adil: apakah terapi dibantu robot beneran sebagus, atau bahkan lebih baik dari, terapi manual biasa.

Ke depannya, Lachner juga ngebayangin aplikasi di luar dunia medis: lingkungan industri yang butuh kontak fisik yang kaya, atau ruang kerja kolaboratif di mana robot dan manusia kerja bareng. Prinsipnya sama: robot yang belajar dari manusia lewat sentuhan dan umpan balik gaya.

Buat kita di Indonesia, berita ini ngasih gambaran ke mana arah teknologi kesehatan: AI yang nggak cuma pinter ngomong, tapi pinter megang. Robot yang bisa belajar dari tangan manusia dan ngebantu proses penyembuhan adalah contoh AI yang beneran nyentuh kehidupan. Pertanyaannya tinggal: kapan teknologi kayak gini sampai ke rumah sakit kita, dan dengan harga yang terjangkau?

Sumber: [MIT Technology Review, "Robotic therapy for stroke patients"](https://www.technologyreview.com/2026/10/20/1145282/robotic-therapy-for-stroke-patients/) (20 Oktober 2026).

tayang juga di: [facebook](https://facebook.com/61594934228841/posts/pfbid0JzpB3ABwCVdsFspu2a22yHEmGd2PxfuPazzUhcbNVUU5GqCEsC82ZbgL57VGm3ykl/)
bagikan: [WhatsApp](https://wa.me/?text=Robot%20AI%20Bantu%20Terapi%20Pasien%20Stroke%2C%20Tiru%20Tangan%20Fisioterapis%20https%3A//blog.peka.ai.id/p/robot-ai-bantu-terapi-pasien-stroke)[X](https://twitter.com/intent/tweet?text=Robot%20AI%20Bantu%20Terapi%20Pasien%20Stroke%2C%20Tiru%20Tangan%20Fisioterapis&url=https%3A//blog.peka.ai.id/p/robot-ai-bantu-terapi-pasien-stroke)[Telegram](https://t.me/share/url?url=https%3A//blog.peka.ai.id/p/robot-ai-bantu-terapi-pasien-stroke&text=Robot%20AI%20Bantu%20Terapi%20Pasien%20Stroke%2C%20Tiru%20Tangan%20Fisioterapis) salin tautan   (function(){var b=document.querySelector("[data-copy]");if(!b)return;b.addEventListener("click",function(){navigator.clipboard.writeText(b.dataset.copy);b.textContent="disalin!";});})();

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
[ ← lebih lama  Spill Repo Skill Claude Edisi #01: 5 Repo Skill Siap Pakai yang Lagi Ramai ](/p/spill-repo-skill-claude-edisi-01)[ lebih baru →  VPS Gratis Selamanya dari Oracle Cloud ](/p/vps-oracle-gratis-selamanya)
