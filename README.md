# TellaKitap - Modern ve Eşsiz Dijital Kitabevi

TellaKitap, modern web teknolojileri (HTML5, Vanilla CSS, Vanilla JS) ve göz alıcı bir tasarım diliyle geliştirilmiş, sıradışı ve oldukça profesyonel bir online kitabevi web uygulamasıdır. `bkmkitap.com` benzeri e-ticaret sitelerinden esinlenerek, premium görsel öğeler (glassmorphism, animasyonlar, karanlık/aydınlık tema entegrasyonu) ve zengin dinamik özelliklerle donatılmıştır.

Bu proje, herhangi bir derleme (build) veya bağımlılık yönetimi adımı gerektirmeden doğrudan tarayıcı üzerinden çalıştırılabilen statik bir yapıya sahiptir. Bu sayede **GitHub Pages** üzerinde saniyeler içinde ücretsiz ve sorunsuz bir şekilde yayınlanabilir.

---

## 🌟 Öne Çıkan Özellikler

1. **Premium Arayüz & Glassmorphism**:
   - Modern renk geçişleri (gradient), şık HSL renk paletleri ve modern tipografi (Google Fonts - Outfit).
   - Canlı ve responsive tasarımla mobil, tablet ve masaüstü cihazlar için tam uyum.
2. **Gelişmiş Filtreleme & Arama Motoru**:
   - Kitap adı ve yazara göre **anlık canlı arama ve otomatik tamamlama (autocomplete)** önerileri.
   - Kategorilere (Bilim Kurgu, Felsefe, Doğa vb.) göre dinamik listeleme.
   - Fiyat aralığı kaydırıcısı (slider) ve müşteri puanı filtreleri.
   - Fiyat ve puana göre sıralama.
3. **Akıllı Alışveriş Sepeti (Drawer)**:
   - Sağ taraftan açılan sepet paneli.
   - Ürün adedi artırma/azaltma ve sepetten silme kontrolleri.
   - Kargo Bedava limiti (₺300.00) için dinamik görsel ilerleme çubuğu (progress bar).
   - Tarayıcı kapatılsa dahi kaybolmayan **LocalStorage** entegreli sepet hafızası.
4. **İnteraktif Kitap Detay Modalı (Native `<dialog>`)**:
   - Kitabın tüm yayın bilgilerini, detaylı açıklamasını ve okur yorumlarını içeren şık pop-up ekranı.
   - Kullanıcıların **dinamik olarak yorum yapıp yıldız puanı verebildiği** entegre değerlendirme formu.
5. **"Sürpriz Kitap Seç" (Roulette) Çarkı**:
   - Ne okuyacağına karar veremeyen kullanıcılar için eğlenceli, 3D dönme animasyonlu rastgele kitap önerme asistanı.
6. **Karanlık / Aydınlık Tema Desteği**:
   - Hızlı geçiş sağlayan güneş/ay ikonu.
   - Kullanıcının tema tercihini hafızada tutan sistem.

---

## 🛠️ Kullanılan Teknolojiler

- **İskelet (Markup)**: HTML5 (Semantik etiketler, Native `<dialog>`)
- **Stil (Style)**: CSS3 (CSS Variables, Flexbox, Grid, Glassmorphism, Custom Webkit Scrollbars)
- **Mantık (Logic)**: Vanilla JavaScript (ES6, LocalStorage, Event Delegation)
- **Görseller**: Midjourney / Image Generator tarafından üretilen premium kitap kapakları ve 3D kütüphane afişi.
- **İkonlar**: FontAwesome v6.4.0

---

## 🚀 GitHub Pages Üzerinde Nasıl Yayınlanır?

Projeyi `https://vahitkeskin.github.io/iamvahitkeskin/` veya `https://vahitkeskin.github.io/TellaKitap/` gibi bir adreste yayınlamak için aşağıdaki adımları sırasıyla uygulayabilirsiniz:

### 1. Dosyaları Git Repository'nize Ekleyin ve Push Edin
Terminalinizde projenin olduğu klasöre gelin (`TellaKitap`) ve şu komutları çalıştırarak kodlarınızı GitHub'a gönderin:

```bash
# Değişiklikleri Git hafızasına ekleyin
git add .

# Değişiklikleri commitleyin
git commit -m "feat: TellaKitap premium web uygulamasının ilk sürümü"

# Kodları ana branch'e gönderin (master veya main olabilir)
git push origin main
```

*(Not: Eğer repository'niz henüz oluşturulmadıysa, GitHub profilinizde yeni bir repo açıp yerel klasörünüzü oraya bağlamanız gerekebilir.)*

### 2. GitHub Pages'i Etkinleştirin
1. GitHub web sitesinde projenizin olduğu repository sayfasına gidin (örn: `https://github.com/vahitkeskin/TellaKitap` veya `https://github.com/vahitkeskin/iamvahitkeskin`).
2. Sağ üstteki **Settings** (Ayarlar) sekmesine tıklayın.
3. Sol menüde yer alan **Pages** sekmesine tıklayın.
4. **Build and deployment** başlığı altındaki **Source** kısmının `Deploy from a branch` olarak seçildiğinden emin olun.
5. **Branch** kısmında, kodlarınızı gönderdiğiniz dalı seçin (örn: `main` veya `root`) ve yanındaki klasör seçimini `/ (root)` olarak bırakıp **Save** butonuna tıklayın.

### 3. Sitenizin Hazırlanmasını Bekleyin
Yaklaşık 1-2 dakika içinde GitHub sitenizi yayınlayacaktır. Sayfanın en üstünde belirecek olan bağlantı (örn: `https://vahitkeskin.github.io/TellaKitap/`) üzerinden sitenizi dünya genelinde paylaşmaya başlayabilirsiniz!

---

## 💻 Yerel Geliştirme (Local Preview)

Kodlarda değişiklik yapıp canlı izlemek isterseniz, herhangi bir ek paket yüklemeden terminalde şu komutu çalıştırarak yerel bir sunucu başlatabilirsiniz:

**Python ile:**
```bash
python3 -m http.server 8000
```
Tarayıcınızda `http://localhost:8000` adresine girerek test edebilirsiniz.

**Node.js / npx ile:**
```bash
npx -y http-server -p 8080
```
Tarayıcınızda `http://localhost:8080` adresine girerek test edebilirsiniz.
