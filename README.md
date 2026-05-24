# 📖 TellaKitap - Modern ve Eşsiz Dijital Kitabevi

![TellaKitap Hero Banner](assets/hero_banner.png)

TellaKitap, modern web standartları (HTML5, Vanilla CSS, Vanilla JS) ve göz alıcı bir tasarım diliyle geliştirilmiş; sıradışı, yüksek performanslı ve oldukça profesyonel bir online kitabevi web uygulamasıdır. E-ticaret sitelerinin zengin mimarisini örnek alarak, premium görsel bileşenler (**glassmorphism**, yumuşak degrade geçişleri, animasyonlar, karanlık/aydınlık tema entegrasyonu) ve zengin dinamik özelliklerle donatılmıştır.

Bu proje, herhangi bir derleme (build) veya harici kütüphane bağımlılığı gerektirmeden doğrudan tarayıcı üzerinden çalıştırılabilen tamamen statik ve hafif (lightweight) bir yapıya sahiptir.

---

## 🚀 Canlı Önizleme (Live Demo)
Projeye tarayıcınızdan anında erişmek için:
🔗 **[TellaKitap Canlı Demo Bağlantısı](https://vahitkeskin.github.io/TellaKitap/)**

---

## 🌟 Öne Çıkan Özellikler

### 1. 🎨 Premium Arayüz & Glassmorphism
- Modern renk geçişleri (gradient), şık HSL renk paletleri ve modern tipografi (Google Fonts - **Outfit**).
- Canlı ve responsive tasarımla mobil, tablet ve masaüstü cihazlar için tam uyum.
- Gelişmiş çentik (notch) payı desteğiyle mobil cihazlarda gerçek bir mobil uygulama gibi davranan bottom navigation.

### 2. 🎡 Dinamik Kampanya & Anasayfa Bileşenleri
- **Duyuru Şeridi (Top Announcement Bar):** En tepede kargo ve indirim kuponu gibi güncel duyuruları kayan animasyonla gösterir.
- **Kampanya Carousel (Slayt) Sistemi:** 3 farklı slayttan oluşan (Çocuk Kitapları Şenliği, Felsefe Seçkisi, Bilim Kurgu), otomatik dönen ve oklar/noktalar ile kontrol edilebilen interaktif slayt.
- **Dörtlü Promosyon Grid Kutuları:** Hızlı yönlendirme sağlayan, hover efektli ve ikonlu kampanya kutuları.
- **Yayınevleri Şeridi:** Popüler yayınevlerini simgeleyen şık bir logo/marka şeridi.

### 3. 🛍️ Zenginleştirilmiş Kitap Vitrinleri (Showcases)
Anasayfada kitaplar 4 farklı dinamik rafta listelenir:
1. **Çok Satanlar 🔥:** Müşteri puanı en yüksek kitaplar.
2. **Yeni Çıkanlar 🌟:** En yeni basım yılına sahip kitaplar.
3. **Fırsat Kitapları ％:** İndirimli fiyata sahip kitaplar.
4. **Çocuk Kitapları Özel Rafı 👶:** Yeni eklenen 30 benzersiz kapaklı çocuk kitaplarından seçkiler.

### 4. 🔍 Gelişmiş Filtreleme & Arama Motoru
- Kitap adı ve yazara göre **anlık canlı arama ve otomatik tamamlama (autocomplete)** önerileri.
- Kategorilere göre dinamik listeleme (Bilim Kurgu, Çocuk Kitapları, Felsefe, Gizem & Gerilim, Tasarım & Teknoloji).
- Fiyat aralığı kaydırıcısı (slider) ve müşteri puanı filtreleri.
- Fiyat ve puana göre sıralama.

### 5. 🛒 Akıllı Alışveriş Sepeti (Drawer) & Favoriler
- Sağ taraftan açılan şık sepet paneli.
- Ürün adedi artırma/azaltma ve sepetten silme kontrolleri.
- Kargo Bedava limiti (₺250.00) için dinamik görsel ilerleme çubuğu (progress bar).
- **Favoriler (Wishlist):** Kitapları favorilere ekleyip çıkartma, favoriler listesini şık bir modal üzerinde izleme.
- Tarayıcı kapatılsa dahi kaybolmayan **LocalStorage** entegrasyonu.

### 6. 💬 İnteraktif Kitap Detay Modalı (Native `<dialog>`)
- Kitabın tüm yayın bilgilerini (ISBN, Yayınevi, Sayfa Sayısı vb.), detaylı açıklamasını ve okur yorumlarını içeren pop-up ekran.
- Kullanıcıların **dinamik olarak yorum yapıp yıldız puanı verebildiği** entegre değerlendirme formu.

### 7. 🎰 "Sürpriz Kitap Seç" (Roulette) Çarkı
- Kararsız okurlar için eğlenceli, 3D dönme animasyonlu rastgele kitap önerme asistanı.

### 8. 🛡️ Yönetim Paneli (Admin Panel)
`admin.html` üzerinden erişilebilen ve tam yetkilendirilmiş bir simüle arayüz:
- **Dashboard Görünümü:** Toplam Satış, Sipariş Sayısı, Yorumlar gibi trend göstergeli istatistik kartları.
- **Aktivite Akışı (Timeline):** Sol tarafında ikonlar bulunan şık bir zaman çizelgesiyle son hareketleri gösterir.
- **CRUD Operasyonları:** Veritabanına yeni kitap ekleme, silme ve düzenleme panelleri.
- **Kupon ve Sipariş Yönetimi:** Aktif indirim kuponu tanımlama ve sipariş durumu güncelleme (Sarı: Bekliyor, Yeşil: Tamamlandı rozetleri).

---

## 📂 Proje Dizin Yapısı

Aşağıdaki bağlantılardan projenin ana kaynak dosyalarına erişebilirsiniz:

```bash
TellaKitap/
├── 📄 index.html                # Ana mağaza arayüzü (SPA Görünümleri, Sepet, Modallar)
├── 📄 admin.html                # Yönetim Paneli arayüzü (Dashboard, CRUD, Siparişler)
├── 📄 detail.html               # Kitap detay şablonu (SEO & Doğrudan Paylaşım Uyumlu)
├── 🎨 style.css                 # Premium Tasarım Sistemi, Glassmorphism ve Responsive Kurallar
├── ⚙️ app.js                    # SPA Yönlendirici, Sepet Mantığı, Veri Filtreleme ve Carousel Logic
├── 📁 assets/                   # Görsel Varlıklar ve AI Tarafından Üretilen Kapaklar
│   ├── 🖼️ hero_banner.png        # Anasayfa Carousel arkaplanı / Afiş görseli
│   ├── 🖼️ cover_cyber.png        # Siberpunk Kategori kapağı
│   ├── 🖼️ cover_future.png       # Bilim Kurgu Kategori kapağı
│   └── 📁 covers/                # Kitapların Kapak Resimleri Klasörü
│       ├── 🏷️ cover_1.svg ...   # Orijinal vektör kitap kapakları
│       └── 🖼️ cover_kids_1.png   # 30 adet tekrarsız, AI tarafından üretilen Çocuk Kapakları
```

---

## 🎨 Tasarım Sistemi ve Renk Paleti

Uygulama, hem karanlık hem aydınlık modda göz yormayan, premium bir his uyandıran HSL renk değişkenleri üzerine kurulmuştur:

| Tema Modu | Değişken Adı | Renk Değeri (HSL/RGBA) | Kullanım Alanı |
| :--- | :--- | :--- | :--- |
| **Dark (Varsayılan)** | `--bg-app` | `hsl(224, 25%, 8%)` | Ana arka plan rengi |
| | `--bg-surface` | `rgba(22, 28, 45, 0.65)` | Cam efekti (glassmorphism) arka planı |
| | `--accent-color` | `hsl(265, 85%, 64%)` | Neon mor vurgu rengi |
| | `--accent-secondary` | `hsl(190, 90%, 50%)` | Turkuaz ikincil vurgu rengi |
| **Light (Aydınlık)** | `--bg-app` | `hsl(36, 30%, 96%)` | Sıcak kağıt / editöryal arka plan |
| | `--bg-surface` | `rgba(255, 255, 255, 0.7)` | Yarı transparan beyaz cam efekti |
| | `--text-primary` | `hsl(224, 25%, 12%)` | Koyu gri okuma metni |

### Cam Efekti (Glassmorphism)
Kartlar ve paneller modern bir cam hissiyatı vermek için şu CSS filtresini kullanır:
```css
background: var(--bg-surface);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid var(--border-color);
```

---

## ⚙️ Veritabanı ve Kitap Kataloğu

[app.js](app.js) içerisinde `INITIAL_BOOKS` adı altında toplanan **50 adet kitaplık tohum veritabanı (seed database)** bulunur.
- **Kategori Dağılımı:**
  - 👶 **Çocuk Kitapları:** 30 Kitap (30 adet tamamen benzersiz kapak görseli: `cover_kids_1.png` - `cover_kids_30.svg` tekrarsız dağıtılmıştır).
  - 🚀 **Bilim Kurgu:** 5 Kitap
  - 🧠 **Felsefe:** 5 Kitap
  - 🕵️ **Gizem & Gerilim:** 5 Kitap
  - 💻 **Tasarım & Teknoloji:** 5 Kitap
- **Otomatik Göç (Auto-migration):** Veritabanı genişlediğinde veya yerel depolama sıfırlandığında sistem otomatik olarak yeni tohum verilerini localStorage'a taşır.

---

## 💻 Yerel Çalıştırma ve Kurulum

Projeyi çalıştırmak için hiçbir kurulum adımı veya `npm install` gerekmez. Dosyaları bilgisayarınıza indirdikten sonra doğrudan `index.html` dosyasını tarayıcınızda açabilirsiniz.

Canlı veri simülasyonları ve LocalStorage işlemlerinin tarayıcı güvenlik politikalarına takılmaması için yerel bir sunucu ile açılması önerilir:

### A. Python ile Çalıştırma
Terminalde projenin olduğu klasöre gelin ve çalıştırın:
```bash
python3 -m http.server 8000
```
Tarayıcınızda `http://localhost:8000` adresine girin.

### B. Node.js (npx) ile Çalıştırma
```bash
npx -y http-server -p 8080
```
Tarayıcınızda `http://localhost:8080` adresine girin.

---

## 🎯 GitHub Pages Üzerinde Dağıtım

Projeyi GitHub Pages ile ücretsiz yayınlamak için:

1. Dosyaları GitHub deponuza (repository) push edin:
   ```bash
   git add .
   git commit -m "feat: TellaKitap premium web uygulaması"
   git push origin main
   ```
2. GitHub'da deponuzun **Settings** (Ayarlar) -> **Pages** sekmesine gidin.
3. Source kısmını `Deploy from a branch` yapıp, branch olarak `main` (veya `master`) ve klasör olarak `/ (root)` seçerek **Save** butonuna tıklayın.
4. Siteniz 1-2 dakika içinde `https://kullaniciadi.github.io/TellaKitap/` adresinde canlıya alınacaktır.

---

## ⚖️ Lisans

Tüm hakları saklıdır. **Vahit Keskin Showcase Project** kapsamında geliştirilmiştir.
Tasarım öğeleri ve fikirler eğitim ve portföy gösterimi amacıyla kullanılabilir.
