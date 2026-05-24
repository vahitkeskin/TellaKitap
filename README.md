# 📖 TellaKitap - Modern & Eşsiz Dijital Kitabevi

![TellaKitap Hero Banner](assets/hero_banner.png)

✨ **TellaKitap**, modern web standartları (HTML5, Vanilla CSS, modern Vanilla JS) temel alınarak ve hiçbir harici kütüphane bağımlılığı (React, Vue, Tailwind vb.) kullanılmadan sıfırdan geliştirilmiş, yüksek performanslı ve üst düzey kullanıcı deneyimi (**UX/UI**) sunan premium bir online kitap satış platformudur. 

E-ticaret sistemlerinin zengin katalog ve alışveriş mimarileri örnek alınarak; cam efekti (**glassmorphism**), pürüzsüz geçiş animasyonları, gelişmiş çentikli mobil navigasyon barı ve tamamen entegre aydınlık/karanlık tema altyapısı ile donatılmıştır.

---

## 🚀 Canlı Önizleme (Live Demo)
Projeye tarayıcınızdan anında erişmek ve tüm özellikleri canlı olarak test etmek için:
🔗 **[TellaKitap Canlı Demo Bağlantısı](https://vahitkeskin.github.io/TellaKitap/)**

---

## 🌟 Öne Çıkan A-Z Özellikler

### 🌓 1. Akıllı Karanlık & Aydınlık Tema Sistemi
Uygulama, kullanıcının tercihine göre tüm arayüzü tek tuşla değiştirebilen dinamik bir tema sistemine sahiptir.
*   **Karanlık Mod (Varsayılan):** HSL(224, 25%, 8%) derin uzay laciverti arka plan üzerinde neon mor ve turkuaz detaylarla fütüristik bir okuma deneyimi sunar.
*   **Aydınlık Mod:** HSL(36, 30%, 96%) sıcak kitap kağıdı ve editöryal arayüz tonları ile göz yormayan bir gün ışığı okuma modu sağlar.
*   **Kalıcılık:** Tercih edilen tema seçeneği tarayıcının `localStorage` hafızasında saklanır, böylece sayfa yenilense dahi korunur.

### 🎠 2. Otomatik Dönen Kampanya Carousel (Slayt) Sistemi
Anasayfanın vitrininde, belirli aralıklarla otomatik olarak kayan veya oklar/gösterge noktaları ile manuel kontrol edilebilen şık bir kampanya slayt sistemi yer alır:
*   **Çocuk Kitapları Şenliği:** %30'a varan indirimleri tanıtır.
*   **Felsefe Seçkisi:** Seçili yayınevlerinde geçerli kargo fırsatlarını sunar.
*   **Bilim Kurgu Geleceği:** Siberpunk ve gelecek temalı kitaplarda %40 indirim kampanyasıdır.

### 📱 3. Mobil Uyumlu Bottom Navigation ve Çentik (Notch) Koruması
TellaKitap, mobil cihazlarda gerçek bir yerel (native) mobil uygulama gibi davranır:
*   **Bottom Bar:** Alt tarafta yer alan şık, yarı şeffaf cam efektli gezinme barı (Ana Sayfa, Kitaplar, Favoriler, Sepetim, Panel).
*   **Safe Area:** iPhone çentikli ekranlar gibi modern mobil cihazlarda butonların çentik alanıyla üst üste binmemesi için CSS `env(safe-area-inset-bottom)` kuralıyla dinamik alt boşluklandırma yapılmıştır.
*   **Aktif Sayfa Dot Göstergesi:** Hangi sayfada olduğunuzu gösteren küçük nokta, menüler arası geçiş yaparken pürüzsüzce kayar.

### 🔍 4. Canlı Arama Motoru ve Anlık Otomatik Tamamlama
*   Arama kutusuna karakter girildiği anda, kitap başlığı ve yazar adına göre anlık filtreleme başlar.
*   Açılan öneri kutusu (**suggestions panel**), eşleşen kitapları kapak resmi, yazar adı ve fiyatıyla birlikte anlık olarak listeler ve tıklanarak hızlıca detaya gitmeyi sağlar.

### ⏳ 5. Spotlight Sayacı (Fırsat Köşesi)
*   Sınırlı süre için indirimde olan kitapların sergilendiği alandır.
*   JavaScript ile çalışan geri sayım sayacı (`Saat : Dakika : Saniye`) her saniye güncellenerek indirim süresinin bitişine kalan zamanı canlı olarak gösterir.

### 👶 6. 30 Benzersiz Kapaklı Çocuk Kitapları Özel Rafı
*   Kataloğa yeni eklenen 30 farklı çocuk kitabı için tamamen benzersiz kapak tasarımları kullanılmıştır.
*   Tasarımların 17 tanesi yüksek çözünürlüklü AI üretimi görsel, 13 tanesi ise pürüzsüz vektörel SVG çizimlerinden oluşmaktadır. Kapaklarda asla tekrara düşülmemiştir.

### 🛒 7. Gelişmiş Sepet Çekmecesi & Ücretsiz Kargo İlerleme Barı
Ekranın sağından pürüzsüz bir animasyonla kayarak açılan sepet paneli:
*   **Dinamik Kargo Barı:** ₺300 limitine ulaşmak için sepete eklenmesi gereken tutarı hesaplar ve görsel bir doluluk çubuğu (progress bar) ile gösterir. Limit aşıldığında yeşil renge dönerek "Kargo Ücretsiz!" ibaresini gösterir.
*   **Kupon Kodu Sistemi:** Sepette geçerli `TELLA20` (%20 indirim) ve `VAHIT10` (%10 indirim) gibi kupon tanımlamalarıyla sepet toplam tutarını anlık günceller.

### 💳 8. 3D Kredi Kartı Mockup'ı ile Güvenli Ödeme Modalı
*   Alışverişi Tamamla butonuna tıklandığında açılan ödeme penceresinde 3 boyutlu bir kredi kartı tasarımı yer alır.
*   Kullanıcı kart numarası, isim, son kullanma tarihi bilgilerini girdikçe kart üzerindeki sanal yazılar gerçek zamanlı güncellenir.
*   Güvenlik kodu (CVV) kutusuna tıklandığı anda kart **180 derece kendi ekseninde dönerek (3D Flip)** arkasındaki imza bandını ve güvenlik kodu alanını gösterir.

### 🔮 9. "Sürpriz Kitap Seç" (Kitap Ruleti) Çarkı
*   Kararsız okurlar için tasarlanmış eğlenceli bir rastgele kitap önerme asistanıdır.
*   Tıklandığında kitap kapakları 3 boyutlu dönme animasyonuyla (`rouletteSpin`) hızla geçiş yapar ve rastgele seçilen kitabın tüm detayları ekrana getirilir.

---

## 📂 Proje Dizin Yapısı ve Dosya Analizleri

### 📁 Ana Dosyalar

*   **[index.html](index.html):** Uygulamanın ana giriş kapısıdır ve Tek Sayfa Uygulama (SPA) mantığında tasarlanmıştır. İçerisinde gezinilen görünümler (`view-home`, `view-shop`, `view-about`, `view-contact`), alışveriş sepeti çekmecesi, modallar ve mobil gezinme barı bulunur.
*   **[style.css](style.css):** Uygulamanın görsel kimliğini belirleyen, 3800 satırdan oluşan kapsamlı bir tasarım sistemidir. Tüm CSS değişkenleri, renk temaları, responsive grid kuralları, cam efektleri ve ekran geçiş animasyonları burada tanımlıdır.
*   **[app.js](app.js):** Projenin tüm interaktif iş mantığını yönetir. Kitap kataloğunu tutar, arama, filtreleme, sepet hesaplamaları, kupon doğrulama ve veri saklama (`localStorage`) mekanizmalarını kontrol eder.
*   **[admin.html](admin.html):** Mağaza yöneticisi için tasarlanmış bağımsız bir yönetim paneli arayüzüdür. Ürün ekleme/silme/güncelleme (CRUD), sipariş listesi kontrolü, kupon tanımlama ve satış istatistiklerini izleme fonksiyonlarını içerir.
*   **[detail.html](detail.html):** Kitapların detay bilgilerine doğrudan dışarıdan bağlantı veya arama motorları aracılığıyla erişilebilmesi için kurgulanmış SEO dostu dinamik şablondur. URL parametrelerini (`?id=...`) okuyarak ilgili kitabı yükler.

### 🖼️ Görsel Varlıklar Klasörü (`assets/`)
*   `assets/hero_banner.png` : Anasayfa afiş ve slayt zemin görseli.
*   `assets/cover_cyber.png` ... `cover_nature.png` : Kategori ve ana konseptler için kullanılan yüksek kaliteli kapaklar.
*   `assets/covers/` : Toplamda 50 kitaba ait tüm özgün kapak resimlerini barındırır.
    *   `cover_1.svg` - `50.svg` : Genel kitap kapakları.
    *   `cover_kids_1.png` - `17.png` : Çocuk kitapları için üretilen PNG formatlı özgün illüstrasyonlar.
    *   `cover_kids_18.svg` - `30.svg` : Çocuk kitapları için çizilmiş ölçeklenebilir vektörel SVGer.

---

## 🎨 Tasarım Sistemi ve Renk Kodları

TellaKitap, hem aydınlık hem karanlık modda göz yormayan, premium bir kontrast sunan HSL renk değişkenleri üzerine kurulmuştur:

| Değişken Adı | Karanlık Mod (Dark - Default) | Aydınlık Mod (Light) | Kullanım Alanı |
| :--- | :--- | :--- | :--- |
| `--bg-app` | `hsl(224, 25%, 8%)` | `hsl(36, 30%, 96%)` | Ana sayfa arka plan rengi |
| `--bg-surface` | `rgba(22, 28, 45, 0.65)` | `rgba(255, 255, 255, 0.7)` | Yarı saydam cam (Glassmorphism) yüzeyi |
| `--bg-surface-solid` | `hsl(224, 25%, 12%)` | `hsl(36, 20%, 92%)` | Opak kartlar ve modal iç zeminleri |
| `--text-primary` | `hsl(0, 0%, 95%)` | `hsl(224, 25%, 12%)` | Okuma başlıkları ve ana metinler |
| `--accent-color` | `hsl(265, 85%, 64%)` | `hsl(265, 85%, 55%)` | Neon mor birincil vurgu rengi |
| `--accent-secondary` | `hsl(190, 90%, 50%)` | `hsl(190, 90%, 42%)` | Turkuaz ikincil vurgu rengi |

### Cam Efekti (Glassmorphism) CSS Uygulaması
Tüm premium kart ve panellerin zeminine derinlik kazandıran CSS kuralı:
```css
background: var(--bg-surface);
backdrop-filter: blur(20px) saturate(180%);
-webkit-backdrop-filter: blur(20px) saturate(180%);
border: 1px solid var(--border-color);
```

---

## ⚙️ Programatik Algoritmalar ve Veri Akışı

### 📖 Kitap Tohum Veritabanı (Seed Database)
`app.js` dosyasında `INITIAL_BOOKS` değişkeni altında 50 kitaplık bir başlangıç veritabanı tanımlıdır. Kategoriler ve kitap adetleri şu şekildedir:
*   👶 **Çocuk Kitapları:** 30 Kitap (30 benzersiz kapaklı: `cover_kids_1.png` - `cover_kids_30.svg`)
*   🚀 **Bilim Kurgu:** 5 Kitap (`cover_1.svg` - `cover_5.svg`)
*   🧠 **Felsefe:** 5 Kitap (`cover_6.svg` - `cover_10.svg`)
*   🕵️ **Gizem & Gerilim:** 5 Kitap (`cover_11.svg` - `cover_15.svg`)
*   💻 **Tasarım & Teknoloji:** 5 Kitap (`cover_16.svg` - `cover_20.svg`)

### 🎨 Dinamik Vektörel SVG Kapak Üreticisi
Eğer bir kitaba ait özel bir görsel bulunmuyorsa veya admin panelinden yeni bir kitap eklenirse, JavaScript kitap ismine ve kategorisine göre otomatik olarak renk ataması yapar ve base64 kodlu benzersiz bir SVG kapağı üretir:
```javascript
function generateSVGBookCover(title, author, category, id) {
  // Baş harflere ve ID'ye göre renk paleti belirler
  // SVG etiketlerini çizerek base64 formatında img nesnesine atar
}
```

---

## 💻 Yerel Kurulum ve Çalıştırma

Proje tamamen statik dosyalardan oluştuğu için herhangi bir derleme (`npm run build`) veya indirme paketine (`npm install`) ihtiyaç duymaz. Ancak LocalStorage işlemlerinin ve dinamik detay sayfası yönlendirmelerinin tarayıcı güvenlik politikalarına takılmaması için yerel bir HTTP sunucu ile çalıştırılması önerilir:

### A. Python 3 ile Çalıştırma
Terminalde projenizin bulunduğu klasöre gidin ve çalıştırın:
```bash
python3 -m http.server 8000
```
Tarayıcınızdan **`http://localhost:8000`** adresine girerek test edebilirsiniz.

### B. Node.js (npx http-server) ile Çalıştırma
Bilgisayarınızda Node.js kurulu ise terminalden anında çalıştırabilirsiniz:
```bash
npx -y http-server -p 8080
```
Tarayıcınızdan **`http://localhost:8080`** adresine giderek uygulamaya erişebilirsiniz.

---

## 🎯 GitHub Pages Üzerinde Yayınlama

Projeyi GitHub Pages ile ücretsiz olarak tüm dünyaya yayına açmak için:

1.  Kodlarınızı kendi GitHub deponuza (repository) yükleyin:
    ```bash
    git add .
    git commit -m "feat: TellaKitap premium responsive arayüz"
    git push origin main
    ```
2.  GitHub sayfanızda deponuzun üst menüsündeki **Settings** (Ayarlar) sekmesine gelin.
3.  Sol menüden **Pages** kısmına tıklayın.
4.  Build and deployment alanında Source seçeneğini **Deploy from a branch** yapın.
5.  Branch alanından **main** (veya master) dalını seçip yanındaki klasör alanını **/(root)** olarak ayarlayarak **Save** butonuna tıklayın.
6.  Yaklaşık 1-2 dakika içerisinde siteniz `https://kullaniciadi.github.io/TellaKitap/` adresinde canlıya alınacaktır.

---

## ⚖️ Lisans

Bu proje **Vahit Keskin Showcase Project** kapsamında portföy, UI/UX tasarımı ve kodlama yeteneklerini sergilemek amacıyla geliştirilmiştir. Tüm hakları saklıdır. Eğitimsel ve tanıtım amaçlı kullanımlarda kaynak gösterilmesi rica olunur.
