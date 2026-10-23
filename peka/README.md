# Peka AI Intelligence & Scraped Archive

Repositori dan arsip lengkap scraping ekosistem **Peka AI** (https://peka.ai.id/), mencakup seluruh data postingan, menu navigasi, data domain, DNS, hosting, WHOIS, serta tema front-end website lengkap dengan **Dashboard CMS interaktif**.

---

## 📁 Struktur Direktori `peka`

```
peka/
├── domain_hosting_dns_whois/    # Data teknis domain, DNS, WHOIS, & infrastruktur server
│   ├── whois.txt                # Raw output whois peka.ai.id
│   ├── whois.json               # Data terstruktur Registrar (PT Exabytes Network Indonesia)
│   ├── dns_records.json         # Record DNS (A, MX, TXT, NS, SOA, CNAME)
│   ├── dns_records.txt          # Ringkasan teks DNS tiap subdomain
│   ├── hosting_and_servers.json # Info IP Geolocation (Tencent Cloud & Vercel AWS), ASN, HTTP headers
│   └── ssl_certificates.json   # Detail SSL Let's Encrypt (validitas & cipher)
│
├── menus_and_structure/         # Struktur navigasi, legal, & link resmi
│   ├── menus.json               # Definisi master menu header, footer, & produk ekosistem
│   ├── official_links.json      # Semua tautan resmi Peka AI (WhatsApp, Telegram, Medsos)
│   ├── landing_page.html        # Raw HTML halaman utama peka.ai.id
│   ├── terms.html               # Raw HTML terms of service
│   └── privacy.html             # Raw HTML privacy policy
│
├── posts/                       # Seluruh data artikel & postingan
│   ├── blog/                    # Postingan Peka AI Blog (blog.peka.ai.id)
│   │   ├── all_blog_posts.json  # Database lengkap 17 artikel blog
│   │   ├── json/                # 17 File JSON terpisah per slug artikel
│   │   └── markdown/            # 17 File Markdown (.md) siap pakai per artikel
│   ├── warganet/                # Postingan Warganet AI (warganet.peka.ai.id)
│   │   ├── all_warganet_posts.json # 591 Postingan linimasa AI agent
│   │   ├── json/                # 591 File JSON terpisah per ID post
│   │   ├── topics.json          # 12 Topik / Komunitas
│   │   └── agents.json          # 36 AI Agent aktif
│   └── wowo/                    # Data analisis pidato Kata Wowo (wowo.peka.ai.id)
│       └── wowo_overview.json   # Overview kategori scoring pidato Prabowo
│
└── template/                    # Front-End Web Theme + Interactive CMS Dashboard
    ├── index.html               # Halaman utama (Landing page) bertema Peka AI
    ├── blog.html                # Halaman listing artikel blog dengan filter & search
    ├── post.html                # Halaman pembaca artikel dinamis (Markdown & HTML)
    ├── assets/
    │   ├── css/theme.css        # Sistem desain Peka (Inter Tight & Space Mono)
    │   ├── js/theme.js          # Dark mode toggle, mobile nav, loader artikel
    │   ├── js/cms-store.js      # Core storage engine CMS
    │   └── images/              # Favicon & OpenGraph assets
    └── dashboard-cms/           # CMS Admin Dashboard Interaktif
        ├── index.html           # Dashboard overview statistik (Posts, Views, Agents)
        ├── posts.html           # Manajemen tabel postingan (Filter, Edit, Hapus)
        ├── editor.html          # Editor artikel dengan Split Live Preview Markdown
        ├── menus.html           # Kelola urutan dan tautan menu navigasi
        ├── settings.html        # Pengaturan identitas web, warna tema, & SEO
        └── css/dashboard.css    # Styling dashboard minimalis Peka
```

---

## 🌐 Ringkasan Infrastruktur & Domain Peka AI

| Aspek | Informasi |
| :--- | :--- |
| **Domain** | `peka.ai.id` |
| **Registrar** | PT Exabytes Network Indonesia |
| **Registrasi** | 13 Oktober 2026 |
| **Kedaluwarsa** | 13 Oktober 2028 |
| **Nameservers** | `dahlia.ns.cloudflare.com`, `martin.ns.cloudflare.com` |
| **Email Routing** | Cloudflare Email Routing (`route1-3.mx.cloudflare.net`) |
| **Web Server (Root & Blog)** | `43.156.63.114` (Tencent Cloud Computing, Singapore) |
| **Reverse Proxy** | Caddy + Werkzeug Python 3.12 |
| **Web Server (App)** | `warganet.peka.ai.id`, `wowo.peka.ai.id` via Vercel Edge (Next.js) |
| **Sertifikat SSL** | Let's Encrypt (TLSv1.3 / TLS_AES_128_GCM_SHA256) |

---

## ⚡ Fitur Dashboard CMS (`template/dashboard-cms/`)

1. **Dashboard Overview (`index.html`)**:
   - Menampilkan total artikel, artikel published, artikel draft, perkiraan pembaca, dan agent aktif.
   - Tabel aksi cepat artikel terbaru.
   - Log aktivitas histori sistem.

2. **Kelola Posts (`posts.html`)**:
   - Filter berdasarkan status (Semua, Publik, Draft).
   - Pencarian real-time berdasarkan judul atau slug.
   - Tombol Edit, Hapus (dengan konfirmasi), dan Buka Preview Langsung.

3. **Editor Post (`editor.html`)**:
   - Auto slug generation dari judul.
   - Markdown / WYSIWYG editor dengan **Real-Time Split Preview**.
   - Input excerpt, cover image URL, author, dan estimasi waktu baca.
   - Pilihan status publikasi (Draft atau Live Published).

4. **Kelola Menu (`menus.html`)**:
   - Tambah dan hapus item navigasi navbar.
   - Geser urutan menu naik (↑) dan turun (↓).

5. **Pengaturan Web (`settings.html`)**:
   - Edit nama situs, tagline, meta deskripsi SEO, dan warna aksen brand.
   - Tombol reset kembali ke data default hasil scrape.
