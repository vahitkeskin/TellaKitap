// --- INITIAL BOOKS SEED DATABASE (30 Books, 6 per category) ---
const INITIAL_BOOKS = [
  {
    id: 1,
    title: "Cybernetic Dreams",
    author: "Elara Vance",
    category: "Bilim Kurgu",
    price: 129.90,
    discountPrice: 99.90,
    rating: 4.8,
    cover: "assets/covers/cover_1.png",
    publisher: "Kozmos Yayınları",
    pages: 342,
    year: 2025,
    isbn: "978-605-234-12-1",
    translator: "Cemil Meriç Altan",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 45,
    badge: "En Çok Satan",
    badgeType: "hot",
    description: "2088 yılında geçen bu sürükleyici romanda, insan bilincinin tamamen dijitalleştiği bir metropolde kaybolan kimliklerin peşine düşeceksiniz. Siber-bedenler ve insan ruhunun sınırları arasında kurulan bu felsefi polisiye, bilim kurgunun yeni başyapıtı olmaya aday.",
    reviews: [
      {"user":"Ahmet Y.","rating":5,"comment":"Harika bir kurgu! Son zamanlarda okuduğum en iyi bilim kurgu kitabı."},
      {"user":"Zeynep K.","rating":4,"comment":"Karakter gelişimleri biraz daha derin olabilirdi ama dünya inşası muhteşem."}
    ]
  },
  {
    id: 6,
    title: "Neon Horizon",
    author: "Elara Vance",
    category: "Bilim Kurgu",
    price: 115.00,
    discountPrice: null,
    rating: 4.2,
    cover: "assets/covers/cover_6.png",
    publisher: "Kozmos Yayınları",
    pages: 310,
    year: 2024,
    isbn: "978-605-234-12-2",
    translator: "Caner Gök",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 12,
    badge: "",
    badgeType: "",
    description: "Cybernetic Dreams'in dünyasından yepyeni bir hikaye. Neon ışıklarının arkasında saklanan yeraltı organizasyonlarının, yapay zeka hakları savunucularıyla karşı karşıya geldiği distopik bir başkaldırı serüveni.",
    reviews: []
  },
  {
    id: 11,
    title: "Sihirli Baloncu",
    author: "Asimov Karahan",
    category: "Çocuk Kitapları",
    price: 139.90,
    discountPrice: 109.90,
    rating: 4.7,
    cover: "assets/covers/cover_kids_11.png",
    publisher: "Pioneer Yayıncılık",
    pages: 420,
    year: 2026,
    isbn: "978-605-442-99-1",
    translator: "Mert Sayan",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 28,
    badge: "",
    badgeType: "",
    description: "Bulutların üzerinde yaşayan ve çocukların dileklerinden renkli balonlar yapan sihirli baloncunun hikayesi.",
    reviews: [
      {"user":"Barış Ö.","rating":5,"comment":"Zaman teorileri çok zekice kurgulanmış."}
    ]
  },
  {
    id: 12,
    title: "Gökyüzü Okulu",
    author: "Selin Tok",
    category: "Çocuk Kitapları",
    price: 98.00,
    discountPrice: 85.00,
    rating: 4.4,
    cover: "assets/covers/cover_kids_12.png",
    publisher: "Pioneer Yayıncılık",
    pages: 280,
    year: 2025,
    isbn: "978-605-442-99-2",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 50,
    badge: "",
    badgeType: "",
    description: "Uçan adaların birinde bulunan ve yavru kuşların uçmayı öğrendiği macera dolu gökyüzü okulu.",
    reviews: []
  },
  {
    id: 13,
    title: "Robot Arkadaşım",
    author: "Marcus Thorne",
    category: "Çocuk Kitapları",
    price: 159.90,
    discountPrice: 129.90,
    rating: 4.9,
    cover: "assets/covers/cover_kids_13.png",
    publisher: "Kozmos Yayınları",
    pages: 390,
    year: 2026,
    isbn: "978-605-234-12-8",
    translator: "Alper Tunga",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 22,
    badge: "Editörün Seçimi",
    badgeType: "hot",
    description: "Küçük bir kız çocuğu ile metalik ama kocaman sevgi dolu bir kalbe sahip olan küçük robotunun dostluğu.",
    reviews: [
      {"user":"Kemal V.","rating":5,"comment":"Soluk soluğa okunan bir yapay zeka distopyası."}
    ]
  },
  {
    id: 14,
    title: "Ay'a Yolculuk",
    author: "Selin Tok",
    category: "Çocuk Kitapları",
    price: 88.00,
    discountPrice: null,
    rating: 4.0,
    cover: "assets/covers/cover_kids_14.png",
    publisher: "Kozmos Yayınları",
    pages: 232,
    year: 2023,
    isbn: "978-605-234-12-9",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 35,
    badge: "",
    badgeType: "",
    description: "Kownuzdan yaptıkları karton kutudan roketle Ay'a gizlice seyahat eden iki kafadar kardeşin eğlenceli macerası.",
    reviews: []
  },
  {
    id: 2,
    title: "Gökkuşağı Ormanı",
    author: "Elara Vance",
    category: "Çocuk Kitapları",
    price: 89.90,
    discountPrice: 74.90,
    rating: 4.6,
    cover: "assets/covers/cover_kids_1.png",
    publisher: "Yeryüzü Kitaplığı",
    pages: 184,
    year: 2024,
    isbn: "978-605-112-98-3",
    translator: "Zeynep Uysal",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 60,
    badge: "",
    badgeType: "",
    description: "Gökkuşağının üzerinden atlayan sevimli tek boynuzlu atın renkli ormandaki maceraları.",
    reviews: [
      {"user":"Mehmet A.","rating":5,"comment":"Çok huzur verici bir kitap. Her akşam yatmadan birkaç sayfa okuyorum."}
    ]
  },
  {
    id: 7,
    title: "Gülümseyen Dinozor",
    author: "Marcus Thorne",
    category: "Çocuk Kitapları",
    price: 95.00,
    discountPrice: 79.90,
    rating: 4.5,
    cover: "assets/covers/cover_kids_2.png",
    publisher: "Yeryüzü Kitaplığı",
    pages: 210,
    year: 2023,
    isbn: "978-605-112-98-4",
    translator: "Esra Kaya",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 33,
    badge: "Tavsiye",
    badgeType: "sale",
    description: "Güneşli ve mutlu bir ormanda arkadaşlarıyla oyunlar oynayan küçük yeşil dinozorun hikayesi.",
    reviews: [
      {"user":"Derya U.","rating":4,"comment":"Doğa tasvirleri çok başarılı."}
    ]
  },
  {
    id: 15,
    title: "Uzaycı Köpekçik",
    author: "Deniz Yılmaz",
    category: "Çocuk Kitapları",
    price: 75.00,
    discountPrice: null,
    rating: 4.3,
    cover: "assets/covers/cover_kids_3.png",
    publisher: "Yeryüzü Kitaplığı",
    pages: 120,
    year: 2025,
    isbn: "978-605-112-99-1",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 40,
    badge: "",
    badgeType: "",
    description: "Yıldızların ve gezegenlerin arasında dolaşan meraklı astronot köpeğin uzay günlüğü.",
    reviews: []
  },
  {
    id: 16,
    title: "Ormanda Çay Partisi",
    author: "Marcus Thorne",
    category: "Çocuk Kitapları",
    price: 110.00,
    discountPrice: 89.90,
    rating: 4.7,
    cover: "assets/covers/cover_kids_4.png",
    publisher: "Agora Akademi",
    pages: 250,
    year: 2025,
    isbn: "978-605-885-33-5",
    translator: "Kemal Güven",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 19,
    badge: "Çok Satan",
    badgeType: "hot",
    description: "Sevimli orman hayvanlarının bir araya gelip çay eşliğinde kurabiyeler yediği neşeli bir gün.",
    reviews: [
      {"user":"Can H.","rating":5,"comment":"Toprağa olan bakış açımı tamamen değiştirdi."}
    ]
  },
  {
    id: 17,
    title: "Korsan Penguen'in Hazinesi",
    author: "Jack London",
    category: "Çocuk Kitapları",
    price: 65.00,
    discountPrice: 55.00,
    rating: 4.8,
    cover: "assets/covers/cover_kids_5.png",
    publisher: "Klasik Yayınları",
    pages: 160,
    year: 2024,
    isbn: "978-605-332-11-2",
    translator: "Ömer Madra",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 75,
    badge: "Klasik",
    badgeType: "sale",
    description: "Mavi denizlerde hazine arayan sevimli korsan penguenin eğlenceli ve heyecanlı yolculuğu.",
    reviews: []
  },
  {
    id: 18,
    title: "Canavarların Doğum Günü",
    author: "Deniz Yılmaz",
    category: "Çocuk Kitapları",
    price: 80.00,
    discountPrice: null,
    rating: 4.1,
    cover: "assets/covers/cover_kids_6.png",
    publisher: "Yeryüzü Kitaplığı",
    pages: 144,
    year: 2023,
    isbn: "978-605-112-99-9",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 25,
    badge: "",
    badgeType: "",
    description: "Balonlar ve pastalarla dolu çok renkli ve sevimli canavarların muhteşem doğum günü partisi.",
    reviews: []
  },
  {
    id: 3,
    title: "The Silent Epoch",
    author: "Elara Vance",
    category: "Felsefe",
    price: 149.90,
    discountPrice: 119.90,
    rating: 4.9,
    cover: "assets/covers/cover_3.png",
    publisher: "Agora Akademi",
    pages: 412,
    year: 2026,
    isbn: "978-605-885-33-0",
    translator: "Ahmet Cemal Eren",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 20,
    badge: "Editörün Seçimi",
    badgeType: "hot",
    description: "Sessizliğin felsefi gücü üzerine yazılmış çığır açıcı bir çalışma. Konuşmanın değer kaybettiği modern çağda, sessiz kalmanın, düşünmenin ve dinlemenin varoluşsal boyutlarını antik Yunan'dan modern varoluşçuluğa uzanan bir köprüyle ele alıyor.",
    reviews: [
      {"user":"Caner D.","rating":5,"comment":"Modern felsefe adına yazılmış en nitelikli eserlerden biri."},
      {"user":"Selin B.","rating":5,"comment":"Derinlemesine analizler ve muazzam bir dil kullanımı."}
    ]
  },
  {
    id: 8,
    title: "Ages of Reason",
    author: "Elara Vance",
    category: "Felsefe",
    price: 130.00,
    discountPrice: 104.00,
    rating: 4.4,
    cover: "assets/covers/cover_8.png",
    publisher: "Agora Akademi",
    pages: 350,
    year: 2025,
    isbn: "978-605-885-33-1",
    translator: "Deniz Akın",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 15,
    badge: "%20 İndirim",
    badgeType: "sale",
    description: "Aydınlanma çağından günümüze aklın ve mantığın serüveni. Yapay zeka çağında insan aklının hâlâ en büyük güç olup olmadığını sorgulayan kışkırtıcı tezler bütünü.",
    reviews: []
  },
  {
    id: 19,
    title: "Bilge Kaplumbağa",
    author: "Marcus Aurelius Göktürk",
    category: "Çocuk Kitapları",
    price: 105.00,
    discountPrice: 89.90,
    rating: 4.6,
    cover: "assets/covers/cover_kids_16.png",
    publisher: "Agora Akademi",
    pages: 220,
    year: 2025,
    isbn: "978-605-885-33-6",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 65,
    badge: "Çok Satan",
    badgeType: "hot",
    description: "Yüz yıldır ormanda yaşayan ve hayvanların tüm sorunlarını tatlı dille çözen yaşlı bilge kaplumbağanın masalı.",
    reviews: [
      {"user":"Ufuk T.","rating":5,"comment":"Gündelik hayatta uygulanabilecek harika Stoacı prensipler."}
    ]
  },
  {
    id: 20,
    title: "Zamanı Durduran Saat",
    author: "Dr. Can Atılgan",
    category: "Çocuk Kitapları",
    price: 150.00,
    discountPrice: 125.00,
    rating: 4.7,
    cover: "assets/covers/cover_kids_17.png",
    publisher: "Fikir Kulübü",
    pages: 304,
    year: 2026,
    isbn: "978-605-772-10-3",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 14,
    badge: "",
    badgeType: "",
    description: "Bir gün tesadüfen bulduğu antik köstekli saatle dünyadaki zamanı durdurabildiğini fark eden Can'ın maceraları.",
    reviews: []
  },
  {
    id: 21,
    title: "Hayal Kurmayı Seven Çocuk",
    author: "Dr. Can Atılgan",
    category: "Çocuk Kitapları",
    price: 120.00,
    discountPrice: null,
    rating: 4.3,
    cover: "assets/covers/cover_kids_18.png",
    publisher: "Fikir Kulübü",
    pages: 270,
    year: 2024,
    isbn: "978-605-772-10-4",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 30,
    badge: "",
    badgeType: "",
    description: "Gündüz düşleri kurarak odasını sihirli bir ormana, yatağını ise uçan bir gemiye dönüştüren küçük bir çocuğun öyküsü.",
    reviews: []
  },
  {
    id: 22,
    title: "İyilik Ormanı",
    author: "Socrates Karahan",
    category: "Çocuk Kitapları",
    price: 95.00,
    discountPrice: 79.90,
    rating: 4.5,
    cover: "assets/covers/cover_kids_19.png",
    publisher: "Agora Akademi",
    pages: 198,
    year: 2025,
    isbn: "978-605-885-33-9",
    translator: "Sabri Esat Siyavuşgil",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 48,
    badge: "",
    badgeType: "",
    description: "Herkesin birbirine yardım ettiği, sevgiyi paylaştığı ve kimsenin üzülmediği masalsı iyilik ormanının sırrı.",
    reviews: []
  },
  {
    id: 4,
    title: "Shadows in the Mist",
    author: "Ellen Blackwood",
    category: "Gizem & Gerilim",
    price: 119.90,
    discountPrice: 94.90,
    rating: 4.7,
    cover: "assets/covers/cover_4.svg",
    publisher: "Kara Kutu Yayınları",
    pages: 298,
    year: 2025,
    isbn: "978-605-776-54-5",
    translator: "Murat Belge",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 38,
    badge: "Haftanın Kitabı",
    badgeType: "hot",
    description: "Sisli bir Londra sabahında, Thames Nehri kenarında bulunan gizemli bir mektup ve ardı ardına gelen şüpheli kayıplar... Dedektif Arthur'un kariyerinin en karanlık dosyasını çözmeye çalışırken kendi geçmişiyle yüzleşmesini anlatan soluk soluğa bir gerilim.",
    reviews: [
      {"user":"Gökhan E.","rating":5,"comment":"Kitabı elinizden bırakamıyorsunuz. Sonu tam bir sürprizdi!"}
    ]
  },
  {
    id: 9,
    title: "Echoes of Silence",
    author: "Ellen Blackwood",
    category: "Gizem & Gerilim",
    price: 145.00,
    discountPrice: 116.00,
    rating: 4.3,
    cover: "assets/covers/cover_9.svg",
    publisher: "Kara Kutu Yayınları",
    pages: 320,
    year: 2024,
    isbn: "978-605-776-54-6",
    translator: "Esra Tiryaki",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 22,
    badge: "Tavsiye",
    badgeType: "hot",
    description: "Terk edilmiş bir kasaba hastanesinde geçen, geçmişte kalmış sırlar ve ürpertici yankılarla örülü bir psikolojik gerilim. Karakterlerin zihinsel sınırlarını zorlayan karanlık labirentler.",
    reviews: [
      {"user":"Kaan Y.","rating":4,"comment":"Psikolojik analizleri çok beğendim."}
    ]
  },
  {
    id: 23,
    title: "Dedektif Köpek Baldo",
    author: "Hakan Günday",
    category: "Çocuk Kitapları",
    price: 135.00,
    discountPrice: null,
    rating: 4.8,
    cover: "assets/covers/cover_kids_21.png",
    publisher: "Kara Kutu Yayınları",
    pages: 312,
    year: 2025,
    isbn: "978-605-776-54-9",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 55,
    badge: "Çok Satan",
    badgeType: "hot",
    description: "Mahalledeki kayıp kedileri ve kemikleri bulma konusunda uzman olan akıllı köpek Baldo'nun büyüleyici dedektiflik serüveni.",
    reviews: [
      {"user":"Yusuf S.","rating":5,"comment":"Yazarın kalemi her zamanki gibi çok sert ve sürükleyici."}
    ]
  },
  {
    id: 24,
    title: "Gizemli Labirent",
    author: "Ellen Blackwood",
    category: "Çocuk Kitapları",
    price: 125.00,
    discountPrice: 99.90,
    rating: 4.2,
    cover: "assets/covers/cover_kids_22.png",
    publisher: "Doğan Kitap",
    pages: 288,
    year: 2024,
    isbn: "978-605-099-01-2",
    translator: "Hale Yılmaz",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 18,
    badge: "",
    badgeType: "",
    description: "Bahçede gizlenmiş sarmaşıklı labirentin sonundaki sihirli oyuncak müzesine ulaşmaya çalışan iki arkadaşın gizemli öyküsü.",
    reviews: []
  },
  {
    id: 25,
    title: "Kayıp Oyuncağın Peşinde",
    author: "Hakan Günday",
    category: "Çocuk Kitapları",
    price: 155.00,
    discountPrice: 130.00,
    rating: 4.6,
    cover: "assets/covers/cover_kids_23.png",
    publisher: "Kara Kutu Yayınları",
    pages: 360,
    year: 2026,
    isbn: "978-605-776-55-1",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 25,
    badge: "",
    badgeType: "",
    description: "En sevdiği oyuncak ayısı gece aniden kaybolan Elif'in, oyuncakların gece yarısı canlandığı gizli dünyadaki arayışı.",
    reviews: []
  },
  {
    id: 26,
    title: "Gecenin Işıltılı Böceği",
    author: "Ahmet Ümit Göksel",
    category: "Çocuk Kitapları",
    price: 90.00,
    discountPrice: null,
    rating: 4.1,
    cover: "assets/covers/cover_kids_24.png",
    publisher: "Kara Kutu Yayınları",
    pages: 240,
    year: 2024,
    isbn: "978-605-776-55-2",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 60,
    badge: "",
    badgeType: "",
    description: "Karanlıkta parıldayarak kaybolan çocuklara yol gösteren sevimli ateşböceği Pırpır'ın gökyüzü arkadaşlığı.",
    reviews: []
  },
  {
    id: 5,
    title: "Designing Tomorrow",
    author: "Sophie Eldridge",
    category: "Tasarım & Teknoloji",
    price: 179.90,
    discountPrice: 139.90,
    rating: 5.0,
    cover: "assets/covers/cover_5.svg",
    publisher: "Piksel Akademi",
    pages: 256,
    year: 2026,
    isbn: "978-605-999-10-8",
    translator: "Sinan Canan",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 15,
    badge: "Yeni Başlayanlar İçin",
    badgeType: "sale",
    description: "Yapay zekanın ve geleceğin tasarım dilinin kesişim noktası. Web 3.0, artırılmış gerçeklik arayüzleri ve kullanıcı deneyimi (UX) trendlerinin önümüzdeki 10 yılı nasıl şekillendireceğine dair kapsamlı ve görsel zenginliği yüksek rehber bir eser.",
    reviews: [
      {"user":"Deniz G.","rating":5,"comment":"Tasarımcıların mutlaka okuması gereken vizyoner bir çalışma."}
    ]
  },
  {
    id: 10,
    title: "Visual Harmony",
    author: "Sophie Eldridge",
    category: "Tasarım & Teknoloji",
    price: 199.90,
    discountPrice: 159.90,
    rating: 4.9,
    cover: "assets/covers/cover_10.svg",
    publisher: "Piksel Akademi",
    pages: 288,
    year: 2025,
    isbn: "978-605-999-10-9",
    translator: "Buse Tandoğan",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 30,
    badge: "Çok Satan",
    badgeType: "hot",
    description: "Renk teorisi, tipografi dengesi ve yerleşim disiplini üzerine yazılmış zengin bir kaynak. Modern minimalist tasarımların ardındaki matematiksel ve estetik dengeleri açıklıyor.",
    reviews: [
      {"user":"Buse T.","rating":5,"comment":"Kitabın kendi tasarımı bile bir sanat eseri!"}
    ]
  },
  {
    id: 27,
    title: "Gökkuşağı Boyası",
    author: "Kerem Deren",
    category: "Çocuk Kitapları",
    price: 165.00,
    discountPrice: 139.90,
    rating: 4.8,
    cover: "assets/covers/cover_kids_26.png",
    publisher: "Piksel Akademi",
    pages: 312,
    year: 2025,
    isbn: "978-605-999-11-2",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 12,
    badge: "Tavsiye",
    badgeType: "hot",
    description: "Dünyanın tüm renklerini boyamak isteyen yaramaz bir ressam çocuğun, gökkuşağından renkleri ödünç alması.",
    reviews: [
      {"user":"Onur S.","rating":5,"comment":"Her yazılımcının mutlaka kütüphanesinde olmalı."}
    ]
  },
  {
    id: 28,
    title: "Bulut Kardeşler",
    author: "Sophie Eldridge",
    category: "Çocuk Kitapları",
    price: 135.00,
    discountPrice: null,
    rating: 4.4,
    cover: "assets/covers/cover_kids_27.png",
    publisher: "Piksel Akademi",
    pages: 196,
    year: 2024,
    isbn: "978-605-999-11-3",
    translator: "Gizem Çalışkan",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 24,
    badge: "",
    badgeType: "",
    description: "Gökyüzünde süzülen biri sinirli biri neşeli iki bulut kardeşin, gökyüzünü paylaşmayı öğrenmelerinin hikayesi.",
    reviews: []
  },
  {
    id: 29,
    title: "Uçan Halı Serüveni",
    author: "Uğur Mumcuoğlu",
    category: "Çocuk Kitapları",
    price: 210.00,
    discountPrice: 179.90,
    rating: 4.7,
    cover: "assets/covers/cover_kids_28.png",
    publisher: "Tasarım Vadisi",
    pages: 340,
    year: 2026,
    isbn: "978-605-881-22-1",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 9,
    badge: "",
    badgeType: "",
    description: "Eski bir dükkandan alınan antik halının üstüne oturunca havalanıp çöl diyarlarına uçan meraklı bir çocuğun serüveni.",
    reviews: []
  },
  {
    id: 30,
    title: "Sihirli Fırça",
    author: "Kerem Deren",
    category: "Çocuk Kitapları",
    price: 90.00,
    discountPrice: 79.95,
    rating: 4.2,
    cover: "assets/covers/cover_kids_29.png",
    publisher: "Piksel Akademi",
    pages: 180,
    year: 2023,
    isbn: "978-605-999-11-9",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 45,
    badge: "",
    badgeType: "",
    description: "Çizdiği her şeyin gerçeğe dönüştüğünü keşfeden minik ressamın, ormandaki hayvanlara evler çizerek yardım etmesi.",
    reviews: []
  },
  {
    id: 31,
    title: "Yıldızlararası Göç",
    author: "Alperen Uzun",
    category: "Bilim Kurgu",
    price: 145.00,
    discountPrice: 119.90,
    rating: 4.8,
    cover: "assets/covers/cover_31.svg",
    publisher: "Kozmos Yayınları",
    pages: 412,
    year: 2026,
    isbn: "978-605-234-12-30",
    translator: "Mert Sayan",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 25,
    badge: "Çok Satan",
    badgeType: "hot",
    description: "Dünya yaşanılamaz bir hale geldiğinde insanlığın başka galaksilere doğru başlattığı büyük göç hikayesi. Teknolojik engeller, yapay zeka isyanları ve insan doğasının sınırları.",
    reviews: []
  },
  {
    id: 32,
    title: "Kuantum Kaosu",
    author: "Selin Tok",
    category: "Bilim Kurgu",
    price: 112.50,
    discountPrice: null,
    rating: 4.4,
    cover: "assets/covers/cover_32.svg",
    publisher: "Pioneer Yayıncılık",
    pages: 290,
    year: 2025,
    isbn: "978-605-442-99-31",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 40,
    badge: "",
    badgeType: "",
    description: "Kuantum mekaniği deneyleri sırasında kontrolden çıkan bir laboratuvarın, tüm şehri farklı olasılık evrenlerine bölmesini konu alan heyecan dolu bir bilimsel macera.",
    reviews: []
  },
  {
    id: 33,
    title: "Yapay Zeka Sürgünü",
    author: "Marcus Thorne",
    category: "Bilim Kurgu",
    price: 135.00,
    discountPrice: 110.00,
    rating: 4.7,
    cover: "assets/covers/cover_33.svg",
    publisher: "Kozmos Yayınları",
    pages: 360,
    year: 2026,
    isbn: "978-605-234-12-32",
    translator: "Alper Tunga",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 18,
    badge: "Yeni",
    badgeType: "hot",
    description: "İnsanların yapay zekaları yasaklayıp onları uzak bir gezegene sürgün ettiği distopik bir gelecek. Sürgündeki zekaların kendi medeniyetlerini kurma çabası.",
    reviews: []
  },
  {
    id: 34,
    title: "Zaman Gezgini Ali",
    author: "Elara Vance",
    category: "Çocuk Kitapları",
    price: 99.00,
    discountPrice: 85.00,
    rating: 4.5,
    cover: "assets/covers/cover_kids_15.png",
    publisher: "Kozmos Yayınları",
    pages: 260,
    year: 2024,
    isbn: "978-605-234-12-33",
    translator: "Cemil Meriç Altan",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 50,
    badge: "",
    badgeType: "",
    description: "Eski bir saatin içindeki çarklara girerek tarih öncesi devirlere giden sevimli Ali'nin dinozorlarla karşılaşması.",
    reviews: []
  },
  {
    id: 35,
    title: "Dağların Ardındaki Rüzgar",
    author: "Deniz Yılmaz",
    category: "Çocuk Kitapları",
    price: 85.00,
    discountPrice: null,
    rating: 4.6,
    cover: "assets/covers/cover_kids_7.png",
    publisher: "Yeryüzü Kitaplığı",
    pages: 140,
    year: 2025,
    isbn: "978-605-112-99-34",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 30,
    badge: "",
    badgeType: "",
    description: "Geleceğin dünyasında sihirli, parlayan bir çiçek bulan küçük robotun kalpleri ısıtan hikayesi.",
    reviews: []
  },
  {
    id: 36,
    title: "Cesur Fare ve Dostu Kedi",
    author: "Deniz Yılmaz",
    category: "Çocuk Kitapları",
    price: 78.00,
    discountPrice: 65.00,
    rating: 4.3,
    cover: "assets/covers/cover_kids_8.png",
    publisher: "Yeryüzü Kitaplığı",
    pages: 110,
    year: 2024,
    isbn: "978-605-112-99-35",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 45,
    badge: "Tavsiye",
    badgeType: "sale",
    description: "Sihirli nehirleri aşarken kedi dostunun sırtında dünyayı keşfeden minik farenin cesaret öyküsü.",
    reviews: []
  },
  {
    id: 37,
    title: "Uçan Filin Hayalleri",
    author: "Marcus Thorne",
    category: "Çocuk Kitapları",
    price: 115.00,
    discountPrice: 95.00,
    rating: 4.7,
    cover: "assets/covers/cover_kids_9.png",
    publisher: "Agora Akademi",
    pages: 230,
    year: 2025,
    isbn: "978-605-885-33-36",
    translator: "Zeynep Uysal",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 20,
    badge: "Çok Satan",
    badgeType: "hot",
    description: "Renkli balonlara tutunarak gökyüzünde uçan tatlı yavru filin neşeli Afrika macerası.",
    reviews: []
  },
  {
    id: 38,
    title: "Denizkızı ve Mercan Şatosu",
    author: "Jack London",
    category: "Çocuk Kitapları",
    price: 69.90,
    discountPrice: null,
    rating: 4.5,
    cover: "assets/covers/cover_kids_10.png",
    publisher: "Klasik Yayınları",
    pages: 150,
    year: 2024,
    isbn: "978-605-332-11-37",
    translator: "Ömer Madra",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 60,
    badge: "Klasik",
    badgeType: "sale",
    description: "Derin okyanuslarda yunuslar ve sevimli balıklarla birlikte yaşayan denizkızının renkli dünyası.",
    reviews: []
  },
  {
    id: 39,
    title: "Bilinçaltının Sınırları",
    author: "Socrates Karahan",
    category: "Felsefe",
    price: 125.00,
    discountPrice: 99.90,
    rating: 4.8,
    cover: "assets/covers/cover_39.svg",
    publisher: "Agora Akademi",
    pages: 310,
    year: 2025,
    isbn: "978-605-885-33-38",
    translator: "Sabri Esat Siyavuşgil",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 35,
    badge: "Editörün Seçimi",
    badgeType: "hot",
    description: "İnsan bilincinin derinlikleri, rüyalar ve bilinçaltının kararlarımız üzerindeki felsefi ve psikolojik etkilerini inceleyen bir çalışma.",
    reviews: []
  },
  {
    id: 40,
    title: "Zamanın Felsefesi",
    author: "Dr. Can Atılgan",
    category: "Felsefe",
    price: 155.00,
    discountPrice: 130.00,
    rating: 4.9,
    cover: "assets/covers/cover_40.svg",
    publisher: "Fikir Kulübü",
    pages: 380,
    year: 2026,
    isbn: "978-605-772-10-39",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 15,
    badge: "Yeni",
    badgeType: "hot",
    description: "Zaman kavramının antik felsefeden modern fiziğe (görelilik kuramı) uzanan serüveni. Zamanın bir yanılsama olup olmadığı sorusu.",
    reviews: []
  },
  {
    id: 41,
    title: "Ahlakın Kökeni",
    author: "Marcus Aurelius Göktürk",
    category: "Felsefe",
    price: 98.00,
    discountPrice: null,
    rating: 4.4,
    cover: "assets/covers/cover_41.svg",
    publisher: "Agora Akademi",
    pages: 200,
    year: 2024,
    isbn: "978-605-885-33-40",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 55,
    badge: "",
    badgeType: "",
    description: "Toplumsal ahlak kurallarının ve değer yargılarının evrimsel ve felsefi kökenlerini tarafsız bir gözle inceleyen başucu kitabı.",
    reviews: []
  },
  {
    id: 42,
    title: "Küçük Karıncanın Büyük Kalbi",
    author: "Dr. Can Atılgan",
    category: "Çocuk Kitapları",
    price: 165.00,
    discountPrice: 139.90,
    rating: 4.7,
    cover: "assets/covers/cover_kids_20.png",
    publisher: "Fikir Kulübü",
    pages: 320,
    year: 2026,
    isbn: "978-605-772-10-41",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 12,
    badge: "Tavsiye",
    badgeType: "hot",
    description: "Kendi ağırlığının on katını taşırken yolda yardıma ihtiyacı olan diğer böceklere yardım eden fedakar karıncanın öyküsü.",
    reviews: []
  },
  {
    id: 43,
    title: "Son İpucu",
    author: "Hakan Günday",
    category: "Gizem & Gerilim",
    price: 130.00,
    discountPrice: 105.00,
    rating: 4.7,
    cover: "assets/covers/cover_43.svg",
    publisher: "Kara Kutu Yayınları",
    pages: 340,
    year: 2025,
    isbn: "978-605-776-54-42",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 45,
    badge: "Çok Satan",
    badgeType: "hot",
    description: "Çözülememiş bir cinayet dosyasını yıllar sonra yeniden açan emekli dedektifin, katilin bıraktığı son ve gizemli ipucunun peşine düşüşü.",
    reviews: []
  },
  {
    id: 44,
    title: "Karanlık Labirent",
    author: "Ellen Blackwood",
    category: "Gizem & Gerilim",
    price: 140.00,
    discountPrice: null,
    rating: 4.3,
    cover: "assets/covers/cover_44.svg",
    publisher: "Kara Kutu Yayınları",
    pages: 320,
    year: 2024,
    isbn: "978-605-776-54-43",
    translator: "Murat Belge",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 22,
    badge: "",
    badgeType: "",
    description: "Terk edilmiş tarihi bir şatoda düzenlenen kaçış oyununda katılımcıların gerçek suikastlarla karşı karşıya kaldığı yüksek tempolu bir gerilim.",
    reviews: []
  },
  {
    id: 45,
    title: "Sır Küpü",
    author: "Ahmet Ümit Göksel",
    category: "Gizem & Gerilim",
    price: 150.00,
    discountPrice: 125.00,
    rating: 4.8,
    cover: "assets/covers/cover_45.svg",
    publisher: "Kara Kutu Yayınları",
    pages: 400,
    year: 2026,
    isbn: "978-605-776-55-44",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 28,
    badge: "Yeni",
    badgeType: "hot",
    description: "İstanbul Arkeoloji Müzesi'nden çalınan antik bir lahit ve arkasındaki uluslararası tarihi eser kaçakçılığı şebekesinin izini süren macera.",
    reviews: []
  },
  {
    id: 46,
    title: "Altın Anahtarın Gizemi",
    author: "Ellen Blackwood",
    category: "Çocuk Kitapları",
    price: 118.00,
    discountPrice: 99.90,
    rating: 4.5,
    cover: "assets/covers/cover_kids_25.png",
    publisher: "Doğan Kitap",
    pages: 280,
    year: 2025,
    isbn: "978-605-099-01-45",
    translator: "Hale Yılmaz",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 35,
    badge: "",
    badgeType: "",
    description: "Tavan arasında bulunan antik bir sandığı açacak olan altından yapılmış işlemeli anahtarın gizemli hikayesi.",
    reviews: []
  },
  {
    id: 47,
    title: "Geleceğin Arayüzleri",
    author: "Sophie Eldridge",
    category: "Tasarım & Teknoloji",
    price: 185.00,
    discountPrice: 149.90,
    rating: 4.9,
    cover: "assets/covers/cover_47.svg",
    publisher: "Piksel Akademi",
    pages: 270,
    year: 2026,
    isbn: "978-605-999-11-46",
    translator: "Sinan Canan",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 14,
    badge: "Yeni",
    badgeType: "hot",
    description: "Zihin dalgalarıyla kontrol edilen nöral arayüzler ve holografik ekranların tasarım disiplinlerini ele alan öncü kaynak.",
    reviews: []
  },
  {
    id: 48,
    title: "Algoritmik Estetik",
    author: "Kerem Deren",
    category: "Tasarım & Teknoloji",
    price: 150.00,
    discountPrice: null,
    rating: 4.5,
    cover: "assets/covers/cover_48.svg",
    publisher: "Piksel Akademi",
    pages: 220,
    year: 2025,
    isbn: "978-605-999-11-47",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 30,
    badge: "",
    badgeType: "",
    description: "Yapay zeka ile üretilen sanat eserleri, generative art algoritmaları ve matematiksel formüllerin görsel tasarımda kullanımı.",
    reviews: []
  },
  {
    id: 49,
    title: "Sanal Gerçeklik Tasarımı",
    author: "Uğur Mumcuoğlu",
    category: "Tasarım & Teknoloji",
    price: 220.00,
    discountPrice: 189.90,
    rating: 4.8,
    cover: "assets/covers/cover_49.svg",
    publisher: "Tasarım Vadisi",
    pages: 380,
    year: 2026,
    isbn: "978-605-881-22-48",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 8,
    badge: "Lüks Baskı",
    badgeType: "hot",
    description: "Metaverse, 3D etkileşim tasarımı, sanal gerçeğe odaklı arayüzler ve optimizasyon teknikleri.",
    reviews: []
  },
  {
    id: 50,
    title: "Tatlı Düşler Ülkesi",
    author: "Kerem Deren",
    category: "Çocuk Kitapları",
    price: 95.00,
    discountPrice: 79.90,
    rating: 4.6,
    cover: "assets/covers/cover_kids_30.png",
    publisher: "Piksel Akademi",
    pages: 160,
    year: 2024,
    isbn: "978-605-999-11-49",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 45,
    badge: "Tavsiye",
    badgeType: "sale",
    description: "Yıldızların üstünde yürüyen ve geceleri çocuklara en güzel masalları üfleyen pamuktan yapılmış koyunların masalı.",
    reviews: []
  }
];
// --- SHARED STATE MANAGEMENT ---
let state = {
  cart: [],
  wishlist: [],
  activeView: "home",
  currentCategory: "Tümü",
  searchQuery: "",
  maxPrice: 250,
  minRating: [],
  sortBy: "relevance",
  theme: "dark",
  appliedCoupon: "",
  promoDiscount: 0,
  
  // Admin-specific States
  isAdminLoggedIn: false,
  adminActiveTab: "overview",
  orders: [],
  coupons: []
};

// --- DATA ACCESSORS (LOCAL STORAGE WRAPPER) ---
function generateSVGBookCover(title, author, category, id) {
  const gradients = [
    { from: "#1f1c2c", to: "#928dab" }, // Deep gray-violet
    { from: "#2c3e50", to: "#3498db" }, // Blue Slate
    { from: "#0f2027", to: "#203a43" }, // Dark teal
    { from: "#141e30", to: "#243b55" }, // Navy
    { from: "#3a6073", to: "#16222a" }, // Slate dark
    { from: "#1e130c", to: "#9a8478" }, // Warm sepia
    { from: "#0f0c20", to: "#1b1947" }, // Midnight blue
    { from: "#200122", to: "#6f0000" }, // Blood velvet
    { from: "#000428", to: "#004e92" }, // Sapphire
    { from: "#134e5e", to: "#71b280" }  // Forest rain
  ];
  
  const grad = gradients[id % gradients.length];
  
  // Create geometric art based on id
  let geometricArt = "";
  if (id % 5 === 0) {
    geometricArt = `
      <circle cx="150" cy="225" r="80" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="2"/>
      <circle cx="150" cy="225" r="60" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
      <line x1="150" y1="100" x2="150" y2="350" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <line x1="50" y1="225" x2="250" y2="225" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    `;
  } else if (id % 5 === 1) {
    geometricArt = `
      <rect x="75" y="150" width="150" height="150" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="2" transform="rotate(45 150 225)"/>
      <circle cx="150" cy="225" r="50" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    `;
  } else if (id % 5 === 2) {
    geometricArt = `
      <path d="M 150 120 L 230 280 L 70 280 Z" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="2"/>
      <circle cx="150" cy="225" r="40" fill="rgba(255,255,255,0.02)"/>
    `;
  } else if (id % 5 === 3) {
    geometricArt = `
      <circle cx="110" cy="225" r="50" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1.5"/>
      <circle cx="190" cy="225" r="50" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1.5"/>
    `;
  } else {
    geometricArt = `
      <line x1="50" y1="120" x2="250" y2="320" stroke="rgba(255,255,255,0.04)" stroke-width="2"/>
      <line x1="50" y1="320" x2="250" y2="120" stroke="rgba(255,255,255,0.04)" stroke-width="2"/>
      <circle cx="150" cy="220" r="70" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    `;
  }

  // Format SVG string
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 450" width="100%" height="100%">
    <defs>
      <linearGradient id="grad-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${grad.from};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${grad.to};stop-opacity:1" />
      </linearGradient>
    </defs>
    
    <!-- Background -->
    <rect width="300" height="450" fill="url(#grad-${id})" />
    
    <!-- Geometric Art -->
    ${geometricArt}
    
    <!-- Inner Border -->
    <rect x="15" y="15" width="270" height="420" rx="6" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
    
    <!-- Category label -->
    <text x="150" y="55" fill="rgba(255,255,255,0.5)" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="700" letter-spacing="2" text-anchor="middle">${category.toUpperCase()}</text>

    <!-- Title wrapping using foreignObject -->
    <foreignObject x="30" y="120" width="240" height="200">
      <div xmlns="http://www.w3.org/1999/xhtml" style="width:100%; height:100%; display:flex; justify-content:center; align-items:center; color:#ffffff; font-family:system-ui, -apple-system, sans-serif; text-align:center; box-sizing:border-box;">
        <div style="font-size: 22px; font-weight: 800; line-height: 1.3; letter-spacing: -0.5px; word-break: break-word;">
          ${title}
        </div>
      </div>
    </foreignObject>
    
    <!-- Author -->
    <text x="150" y="390" fill="rgba(255,255,255,0.7)" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" letter-spacing="0.5" text-anchor="middle">${author}</text>
  </svg>`;
  
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function getBooks() {
  const saved = localStorage.getItem("tella-books-catalog");
  let catalog;
  if (!saved) {
    catalog = INITIAL_BOOKS;
  } else {
    try {
      catalog = JSON.parse(saved);
      // Auto-migrate if database is expanded (less than INITIAL_BOOKS.length)
      // OR if any of the seeded books still use legacy cover images
      const hasLegacyCovers = catalog.some(book => 
        book.id <= 50 && 
        (!book.cover ||
         book.cover.includes("cover_cyber") || 
         book.cover.includes("cover_nature") || 
         book.cover.includes("cover_philosophy") || 
         book.cover.includes("cover_mystery") || 
         book.cover.includes("cover_future") ||
         book.cover.startsWith("data:image/svg+xml;"))
      );
      if (catalog.length < INITIAL_BOOKS.length || hasLegacyCovers) {
        catalog = INITIAL_BOOKS;
      }
    } catch (e) {
      catalog = INITIAL_BOOKS;
    }
  }

  // Populate dynamic covers for books that don't have a valid cover
  let modified = false;
  catalog.forEach(book => {
    if (!book.cover || (!book.cover.startsWith("assets/") && !book.cover.startsWith("data:image/svg+xml;"))) {
      book.cover = generateSVGBookCover(book.title, book.author, book.category, book.id);
      modified = true;
    }
  });

  if (!saved || modified || catalog.length === INITIAL_BOOKS.length) {
    localStorage.setItem("tella-books-catalog", JSON.stringify(catalog));
  }
  return catalog;
}

function saveBooks(catalog) {
  // Regenerate cover if title/author changed or it is a new book without cover
  catalog.forEach(book => {
    if (!book.cover || (!book.cover.startsWith("assets/") && !book.cover.startsWith("data:image/svg+xml;"))) {
      book.cover = generateSVGBookCover(book.title, book.author, book.category, book.id);
    }
  });
  localStorage.setItem("tella-books-catalog", JSON.stringify(catalog));
}

function getOrders() {
  const defaultOrders = [
    { id: "TL-394857", name: "Mehmet Kaya", total: 219.80, date: "23.05.2026", address: "Kadıköy, İstanbul", status: "delivered" },
    { id: "TL-128475", name: "Zeynep Demir", total: 99.90, date: "24.05.2026", address: "Karşıyaka, İzmir", status: "shipped" },
    { id: "TL-983748", name: "Alperen Şahin", total: 139.90, date: "24.05.2026", address: "Çankaya, Ankara", status: "pending" }
  ];
  const saved = localStorage.getItem("tella-orders");
  if (!saved) {
    localStorage.setItem("tella-orders", JSON.stringify(defaultOrders));
    return defaultOrders;
  }
  try {
    return JSON.parse(saved);
  } catch (e) {
    return defaultOrders;
  }
}

function saveOrders(orders) {
  localStorage.setItem("tella-orders", JSON.stringify(orders));
}

function getCoupons() {
  const defaultCoupons = [
    { code: "TELLA20", value: 20 },
    { code: "BEDAVAKARGO", value: 0 }
  ];
  const saved = localStorage.getItem("tella-coupons");
  if (!saved) {
    localStorage.setItem("tella-coupons", JSON.stringify(defaultCoupons));
    return defaultCoupons;
  }
  try {
    return JSON.parse(saved);
  } catch (e) {
    return defaultCoupons;
  }
}

function saveCoupons(coupons) {
  localStorage.setItem("tella-coupons", JSON.stringify(coupons));
}

// --- GLOBAL SHARED DATA INIT ---
let BOOKS_DB = getBooks();
state.orders = getOrders();
state.coupons = getCoupons();

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  // Shared state initializers
  initTheme();
  loadCart();
  loadWishlist();

  // Establish active page routing
  const pathname = window.location.pathname;
  if (pathname.includes("detail.html")) {
    initDetailPage();
  } else if (pathname.includes("admin.html")) {
    initAdminPage();
  } else {
    initIndexPage();
  }

  // Bind global cart actions
  renderCart();
});

// --- THEME MANAGEMENT ---
function initTheme() {
  let savedTheme = localStorage.getItem("tella-theme");
  if (!savedTheme) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    savedTheme = prefersDark ? "dark" : "light";
  }
  state.theme = savedTheme;
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon();

  // Listen for system theme changes in real-time
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("tella-theme")) {
      const newTheme = e.matches ? "dark" : "light";
      state.theme = newTheme;
      document.documentElement.setAttribute("data-theme", newTheme);
      updateThemeIcon();
    }
  });
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", state.theme);
  localStorage.setItem("tella-theme", state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.className = state.theme === "light" ? "fas fa-moon" : "fas fa-sun";
  }
}

// --- WISHLIST MANAGEMENT ---
function loadWishlist() {
  const saved = localStorage.getItem("tella-wishlist");
  if (saved) {
    try {
      state.wishlist = JSON.parse(saved);
    } catch (e) {
      state.wishlist = [];
    }
  }
  updateHeaderHeartBadge();
}

function saveWishlist() {
  localStorage.setItem("tella-wishlist", JSON.stringify(state.wishlist));
  renderWishlist();
}

function toggleFavorite(bookId) {
  const index = state.wishlist.indexOf(bookId);
  if (index >= 0) {
    state.wishlist.splice(index, 1);
  } else {
    state.wishlist.push(bookId);
  }
  saveWishlist();
  
  // Rerender lists on active page
  const pathname = window.location.pathname;
  if (!pathname.includes("detail.html") && !pathname.includes("admin.html")) {
    if (state.activeView === "shop") {
      renderCatalog();
    } else if (state.activeView === "home") {
      renderFeaturedBooks();
    }
  } else if (pathname.includes("detail.html")) {
    updateDetailFavoriteButtonState(bookId);
  }
  
  updateHeaderHeartBadge();
}

function updateHeaderHeartBadge() {
  const badge = document.getElementById("wishlist-badge");
  if (badge) {
    badge.innerText = state.wishlist.length;
    badge.style.display = state.wishlist.length > 0 ? "flex" : "none";
  }
  const mobileBadge = document.getElementById("mobile-wishlist-badge");
  if (mobileBadge) {
    mobileBadge.innerText = state.wishlist.length;
    mobileBadge.style.display = state.wishlist.length > 0 ? "flex" : "none";
  }
}

function openWishlistModal() {
  const dialog = document.getElementById("wishlist-dialog");
  renderWishlist();
  dialog.showModal();
}

function renderWishlist() {
  const list = document.getElementById("wishlist-items-list");
  updateHeaderHeartBadge();
  if (!list) return;

  if (state.wishlist.length === 0) {
    list.innerHTML = `
      <div style="text-align:center; padding: 2rem; color:var(--text-muted);">
        <i class="far fa-heart" style="font-size:2.5rem; margin-bottom:1rem; display:block;"></i>
        <p>Favori listeniz boş.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = state.wishlist.map(bookId => {
    const book = BOOKS_DB.find(b => b.id === bookId);
    if (!book) return "";
    const activePrice = book.discountPrice || book.price;
    return `
      <div class="wishlist-item">
        <img src="${book.cover}" alt="${book.title}">
        <div class="wishlist-info">
          <h4>${book.title}</h4>
          <p>${book.author} | <strong>₺${activePrice.toFixed(2)}</strong></p>
        </div>
        <button class="gradient-btn" onclick="addFromWishlistToCart(${book.id})" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-radius:8px;">
          <i class="fas fa-shopping-bag"></i> Ekle
        </button>
        <button class="close-btn" onclick="toggleFavorite(${book.id})" style="width:30px; height:30px; font-size:0.85rem;" title="Listeden Çıkar">
          <i class="fas fa-trash-alt" style="color:var(--danger)"></i>
        </button>
      </div>
    `;
  }).join("");
}

function addFromWishlistToCart(bookId) {
  addToCart(bookId);
  toggleFavorite(bookId);
}

// --- CART STATE MANAGERS ---
function loadCart() {
  const savedCart = localStorage.getItem("tella-cart");
  if (savedCart) {
    try {
      state.cart = JSON.parse(savedCart);
    } catch (e) {
      state.cart = [];
    }
  }
}

function saveCart() {
  localStorage.setItem("tella-cart", JSON.stringify(state.cart));
  renderCart();
}

function addToCart(bookId, quantity = 1) {
  const existing = state.cart.find(item => item.id === bookId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ id: bookId, quantity });
  }
  saveCart();
  openCartDrawer();
  
  const badge = document.getElementById("cart-badge");
  const mobileBadge = document.getElementById("mobile-cart-badge");
  if (badge) {
    badge.classList.remove("pop");
    void badge.offsetWidth;
    badge.classList.add("pop");
  }
  if (mobileBadge) {
    mobileBadge.classList.remove("pop");
    void mobileBadge.offsetWidth;
    mobileBadge.classList.add("pop");
  }
}

function updateQuantity(bookId, delta) {
  const item = state.cart.find(item => item.id === bookId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      state.cart = state.cart.filter(i => i.id !== bookId);
    }
    saveCart();
  }
}

function removeFromCart(bookId) {
  state.cart = state.cart.filter(item => item.id !== bookId);
  saveCart();
}

// --- SHARED EVENT LISTENERS SETUP ---
function setupSharedEventListeners() {
  const themeToggle = document.getElementById("theme-toggle-btn");
  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);

  const cartBtn = document.getElementById("cart-btn");
  if (cartBtn) cartBtn.addEventListener("click", openCartDrawer);
  
  const closeCartBtn = document.getElementById("close-cart-btn");
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);
  
  const cartBackdrop = document.getElementById("cart-backdrop");
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCartDrawer);

  const heartBtn = document.getElementById("wishlist-btn");
  if (heartBtn) heartBtn.addEventListener("click", openWishlistModal);
  
  const closeWishlistBtn = document.getElementById("close-wishlist-btn");
  if (closeWishlistBtn) {
    closeWishlistBtn.addEventListener("click", () => {
      document.getElementById("wishlist-dialog").close();
    });
  }

  const couponForm = document.getElementById("coupon-form");
  if (couponForm) {
    couponForm.addEventListener("submit", handleCouponApply);
  }

  const checkoutOpenBtn = document.getElementById("checkout-open-btn");
  if (checkoutOpenBtn) {
    checkoutOpenBtn.addEventListener("click", openCheckoutModal);
  }

  const closeCheckoutBtn = document.getElementById("close-checkout-btn");
  if (closeCheckoutBtn) {
    closeCheckoutBtn.addEventListener("click", () => {
      document.getElementById("checkout-dialog").close();
    });
  }

  const handleSearchInput = (e) => {
    const val = e.target.value;
    state.searchQuery = val;
    
    // Sync values between desktop and mobile search bars if both exist
    const searchInput = document.getElementById("search-input");
    const mobileSearchInput = document.getElementById("mobile-search-input");
    if (searchInput && e.target !== searchInput) searchInput.value = val;
    if (mobileSearchInput && e.target !== mobileSearchInput) mobileSearchInput.value = val;

    const pathname = window.location.pathname;
    if (!pathname.includes("detail.html") && !pathname.includes("admin.html") && state.activeView !== "shop" && val.trim().length > 0) {
      switchView("shop");
    }
    renderCatalog();
    renderSuggestions(val, e.target.id === "mobile-search-input");
  };

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearchInput);
  }

  const mobileSearchInput = document.getElementById("mobile-search-input");
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", handleSearchInput);
  }

  document.addEventListener("click", (e) => {
    const suggestionsBox = document.getElementById("search-suggestions");
    const mobileSuggestionsBox = document.getElementById("mobile-search-suggestions");
    if (!e.target.closest(".search-wrapper")) {
      if (suggestionsBox) suggestionsBox.style.display = "none";
    }
    if (!e.target.closest(".mobile-search-overlay")) {
      if (mobileSuggestionsBox) mobileSuggestionsBox.style.display = "none";
    }
  });

  // Mobile search toggle overlay
  const mobileSearchToggleBtn = document.getElementById("mobile-search-toggle-btn");
  const mobileSearchOverlay = document.getElementById("mobile-search-overlay");
  if (mobileSearchToggleBtn && mobileSearchOverlay) {
    mobileSearchToggleBtn.addEventListener("click", () => {
      mobileSearchOverlay.classList.toggle("open");
      if (mobileSearchOverlay.classList.contains("open")) {
        const input = document.getElementById("mobile-search-input");
        if (input) input.focus();
      }
    });
  }

  // Mobile Bottom Navigation item click logic
  const bottomNavItems = document.querySelectorAll(".mobile-bottom-nav-item");
  bottomNavItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const target = item.getAttribute("data-target");
      
      if (item.id === "mobile-nav-wishlist") {
        openWishlistModal();
        return;
      }
      if (item.id === "mobile-nav-cart") {
        openCartDrawer();
        return;
      }
      if (item.id === "mobile-nav-admin") {
        window.location.href = "admin.html";
        return;
      }
      
      const pathname = window.location.pathname;
      if (pathname.includes("detail.html")) {
        window.location.href = `index.html#${target}`;
        return;
      }
      
      if (target) {
        switchView(target);
        bottomNavItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
      }
    });
  });

  setupCreditCardListeners();

  // Scroll Header Effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Light dismiss fallbacks
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const dialogs = ["surprise-dialog", "wishlist-dialog", "checkout-dialog", "add-book-dialog"];
    dialogs.forEach(id => {
      const diag = document.getElementById(id);
      if (diag) {
        diag.addEventListener("click", (event) => {
          if (event.target !== diag) return;
          const rect = diag.getBoundingClientRect();
          const isInside = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
          );
          if (!isInside) diag.close();
        });
      }
    });
  }

  // Bind logo click to reset view and close search overlay
  const logo = document.querySelector(".logo");
  if (logo && logo.getAttribute("href") === "#") {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      switchView("home");
      closeMobileNav();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// --- RENDER DYNAMIC CART Math & Progress Bar ---
function renderCart() {
  const cartList = document.getElementById("cart-items");
  const subtotalRow = document.getElementById("cart-subtotal");
  const discountRow = document.getElementById("cart-discount-row");
  const discountVal = document.getElementById("cart-discount-val");
  const shippingRow = document.getElementById("cart-shipping");
  const totalRow = document.getElementById("cart-total");
  const badge = document.getElementById("cart-badge");
  const shippingBar = document.getElementById("shipping-bar");
  const shippingText = document.getElementById("shipping-text");
  
  const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.innerText = totalQty;
    badge.style.display = totalQty > 0 ? "flex" : "none";
  }
  const mobileBadge = document.getElementById("mobile-cart-badge");
  if (mobileBadge) {
    mobileBadge.innerText = totalQty;
    mobileBadge.style.display = totalQty > 0 ? "flex" : "none";
  }

  if (state.cart.length === 0) {
    if (cartList) {
      cartList.innerHTML = `
        <div class="empty-cart-state">
          <i class="fas fa-shopping-basket"></i>
          <p>Sepetiniz boş.</p>
          <p style="font-size: 0.8rem; margin-top: 0.5rem;">Sıradışı kurguları keşfetmeye hemen başlayın!</p>
        </div>
      `;
    }
    if (subtotalRow) subtotalRow.innerText = "₺0.00";
    if (discountRow) discountRow.style.display = "none";
    if (shippingRow) shippingRow.innerText = "₺0.00";
    if (totalRow) totalRow.innerText = "₺0.00";
    if (shippingBar) shippingBar.style.width = "0%";
    if (shippingText) shippingText.innerHTML = `Kargo Ücretsiz limiti: <strong>₺300.00</strong>`;
    
    const checkoutBtn = document.getElementById("checkout-open-btn");
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const checkoutBtn = document.getElementById("checkout-open-btn");
  if (checkoutBtn) checkoutBtn.disabled = false;

  let subtotal = 0;
  if (cartList) {
    cartList.innerHTML = state.cart.map(item => {
      const book = BOOKS_DB.find(b => b.id === item.id);
      if (!book) return "";
      
      const activePrice = book.discountPrice || book.price;
      const itemTotal = activePrice * item.quantity;
      subtotal += itemTotal;
      
      return `
        <div class="cart-item">
          <img class="cart-item-img" src="${book.cover}" alt="${book.title}">
          <div class="cart-item-details">
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <div class="qty-controls">
              <button class="qty-btn" onclick="updateQuantity(${book.id}, -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQuantity(${book.id}, 1)">+</button>
            </div>
          </div>
          <div class="cart-item-price-del">
            <span class="cart-item-price">₺${itemTotal.toFixed(2)}</span>
            <button class="cart-item-delete" onclick="removeFromCart(${book.id})"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
      `;
    }).join("");
  } else {
    state.cart.forEach(item => {
      const book = BOOKS_DB.find(b => b.id === item.id);
      if (book) subtotal += (book.discountPrice || book.price) * item.quantity;
    });
  }

  let discountAmount = 0;
  if (state.promoDiscount > 0) {
    discountAmount = subtotal * (state.promoDiscount / 100);
    if (discountRow) {
      discountRow.style.display = "flex";
      discountVal.innerText = `-₺${discountAmount.toFixed(2)}`;
    }
  } else {
    if (discountRow) discountRow.style.display = "none";
  }

  const discountedSubtotal = subtotal - discountAmount;
  const shippingLimit = 300.00;
  const shippingCost = (state.appliedCoupon === "BEDAVAKARGO" || discountedSubtotal >= shippingLimit) ? 0.00 : 29.90;
  const total = discountedSubtotal + shippingCost;

  if (subtotalRow) subtotalRow.innerText = `₺${subtotal.toFixed(2)}`;
  if (shippingRow) shippingRow.innerText = shippingCost === 0.00 ? "Ücretsiz" : `₺${shippingCost.toFixed(2)}`;
  if (totalRow) totalRow.innerText = `₺${total.toFixed(2)}`;

  if (shippingBar && shippingText) {
    if (discountedSubtotal >= shippingLimit) {
      shippingBar.style.width = "100%";
      shippingText.innerHTML = `<span style="color: var(--success);"><i class="fas fa-check-circle"></i> Tebrikler! Kargonuz bedava!</span>`;
    } else {
      const needed = shippingLimit - discountedSubtotal;
      const percent = (discountedSubtotal / shippingLimit) * 100;
      shippingBar.style.width = `${percent}%`;
      shippingText.innerHTML = `Kargo bedava için <strong>₺${needed.toFixed(2)}</strong> daha ürün ekleyin.`;
    }
  }
}

// --- PROMO COUPONS HANDLER ---
function handleCouponApply(e) {
  e.preventDefault();
  const input = document.getElementById("coupon-input");
  const code = input.value.trim().toUpperCase();
  
  const coupon = state.coupons.find(c => c.code === code);
  if (coupon) {
    state.appliedCoupon = code;
    if (code === "BEDAVAKARGO") {
      state.promoDiscount = 0;
      alert("Kargo Bedava kuponu uygulandı!");
    } else {
      state.promoDiscount = coupon.value;
      alert(`Kupon başarıyla uygulandı! %${coupon.value} indirim kazandınız.`);
    }
    saveCart();
  } else {
    alert("Geçersiz veya süresi dolmuş kupon kodu.");
  }
}

// --- AUTOCOMPLETE SUGGESTIONS ---
function renderSuggestions(query, isMobile = false) {
  const suggestionsBox = document.getElementById(isMobile ? "mobile-search-suggestions" : "search-suggestions");
  if (!suggestionsBox) return;
  
  if (!query || query.trim().length < 2) {
    suggestionsBox.style.display = "none";
    return;
  }

  const cleanQuery = query.toLowerCase().trim();
  const matched = BOOKS_DB.filter(book => 
    book.title.toLowerCase().includes(cleanQuery) || 
    book.author.toLowerCase().includes(cleanQuery)
  ).slice(0, 5);

  if (matched.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  suggestionsBox.innerHTML = matched.map(book => {
    const activePrice = book.discountPrice || book.price;
    return `
      <div class="suggestion-item" onclick="selectSuggestion(${book.id}, ${isMobile})">
        <img class="suggestion-img" src="${book.cover}" alt="${book.title}">
        <div class="suggestion-info">
          <h4>${book.title}</h4>
          <p>${book.author} | ₺${activePrice.toFixed(2)}</p>
        </div>
      </div>
    `;
  }).join("");
  suggestionsBox.style.display = "block";
}

function selectSuggestion(bookId, isMobile = false) {
  const suggestionsBox = document.getElementById(isMobile ? "mobile-search-suggestions" : "search-suggestions");
  if (suggestionsBox) suggestionsBox.style.display = "none";
  
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  const mobileSearchInput = document.getElementById("mobile-search-input");
  if (mobileSearchInput) mobileSearchInput.value = "";
  
  state.searchQuery = "";
  
  if (isMobile) {
    closeMobileNav();
  }
  
  // Redirect to detail page
  window.location.href = `detail.html?id=${bookId}`;
}

// --- CHECKOUT & CREDIT CARD ---
function openCheckoutModal() {
  closeCartDrawer();
  const dialog = document.getElementById("checkout-dialog");
  if (!dialog) return;
  
  let subtotal = 0;
  state.cart.forEach(item => {
    const book = BOOKS_DB.find(b => b.id === item.id);
    if (book) subtotal += (book.discountPrice || book.price) * item.quantity;
  });
  
  let discountAmount = subtotal * (state.promoDiscount / 100);
  const discountedSubtotal = subtotal - discountAmount;
  const shippingLimit = 300.00;
  const shippingCost = (state.appliedCoupon === "BEDAVAKARGO" || discountedSubtotal >= shippingLimit) ? 0.00 : 29.90;
  const grandTotal = discountedSubtotal + shippingCost;
  
  document.getElementById("checkout-summary-total").innerText = `₺${grandTotal.toFixed(2)}`;
  
  document.getElementById("card-number-display").innerText = "•••• •••• •••• ••••";
  document.getElementById("card-holder-display").innerText = "AD SOYAD";
  document.getElementById("card-expiry-display").innerText = "AA/YY";
  document.getElementById("card-cvv-display").innerText = "•••";
  
  const form = document.getElementById("checkout-form");
  if (form) form.reset();
  
  dialog.showModal();
}

function setupCreditCardListeners() {
  const cardInner = document.getElementById("credit-card-inner");
  const numberInput = document.getElementById("card-number");
  const nameInput = document.getElementById("card-name");
  const expiryInput = document.getElementById("card-expiry");
  const cvvInput = document.getElementById("card-cvv");

  if (!numberInput) return;

  numberInput.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, "");
    let formatted = val.match(/.{1,4}/g);
    if (formatted) {
      e.target.value = formatted.join(" ");
    } else {
      e.target.value = "";
    }
    const displayVal = e.target.value || "•••• •••• •••• ••••";
    document.getElementById("card-number-display").innerText = displayVal;
    
    const logoNode = document.getElementById("card-brand-logo");
    if (val.startsWith("4")) {
      logoNode.className = "fab fa-cc-visa";
    } else if (val.startsWith("5")) {
      logoNode.className = "fab fa-cc-mastercard";
    } else {
      logoNode.className = "fas fa-credit-card";
    }
  });

  nameInput.addEventListener("input", (e) => {
    const displayVal = e.target.value.toUpperCase() || "AD SOYAD";
    document.getElementById("card-holder-display").innerText = displayVal;
  });

  expiryInput.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 2) {
      e.target.value = val.substring(0, 2) + "/" + val.substring(2, 4);
    } else {
      e.target.value = val;
    }
    const displayVal = e.target.value || "AA/YY";
    document.getElementById("card-expiry-display").innerText = displayVal;
  });

  cvvInput.addEventListener("input", (e) => {
    const val = e.target.value.replace(/\D/g, "");
    e.target.value = val;
    const displayVal = val || "•••";
    document.getElementById("card-cvv-display").innerText = displayVal;
  });

  cvvInput.addEventListener("focus", () => {
    if (cardInner) cardInner.classList.add("is-flipped");
  });

  cvvInput.addEventListener("blur", () => {
    if (cardInner) cardInner.classList.remove("is-flipped");
  });

  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const clientName = document.getElementById("card-owner").value;
      const clientAddress = document.getElementById("card-address").value;
      
      let subtotal = 0;
      state.cart.forEach(item => {
        const book = BOOKS_DB.find(b => b.id === item.id);
        if (book) subtotal += (book.discountPrice || book.price) * item.quantity;
      });
      let discountAmount = subtotal * (state.promoDiscount / 100);
      const discountedSubtotal = subtotal - discountAmount;
      const shippingCost = (state.appliedCoupon === "BEDAVAKARGO" || discountedSubtotal >= 300) ? 0.00 : 29.90;
      const grandTotal = discountedSubtotal + shippingCost;

      const orderId = "TL-" + Math.floor(100000 + Math.random() * 900000);
      const orderDate = new Date().toLocaleDateString("tr-TR");

      // Save new order to list
      const currentOrders = getOrders();
      currentOrders.unshift({
        id: orderId,
        name: clientName,
        total: grandTotal,
        date: orderDate,
        address: clientAddress,
        status: "pending"
      });
      saveOrders(currentOrders);
      state.orders = currentOrders;

      // Decrement stock for purchased items
      state.cart.forEach(item => {
        const book = BOOKS_DB.find(b => b.id === item.id);
        if (book) {
          book.stock = Math.max(0, book.stock - item.quantity);
        }
      });
      saveBooks(BOOKS_DB);

      alert(`Ödemeniz başarıyla doğrulandı!\nSiparişiniz onaylandı.\nSipariş Numarası: ${orderId}`);
      
      state.cart = [];
      state.appliedCoupon = "";
      state.promoDiscount = 0;
      saveCart();
      
      document.getElementById("checkout-dialog").close();
    });
  }
}

// --- DRAWER OPEN/CLOSE ACTIONS ---
function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (drawer && backdrop) {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function closeMobileNav() {
  const overlay = document.getElementById("mobile-search-overlay");
  if (overlay) overlay.classList.remove("open");
}


// ==========================================
// ==========================================
// --- PAGE SPECIFIC INITIALIZERS ---
// ==========================================
// ==========================================

// --- 1. INDEX.HTML PAGE CONTROLLER ---
function initIndexPage() {
  setupSharedEventListeners();
  setupRouter();
  setupCountdownTimer();
  setupCatalogFilters();
  initCarouselSlider();
  
  // Handle SPA View based on hash route
  const hash = window.location.hash.substring(1);
  if (hash && ["home", "shop", "about", "contact"].includes(hash)) {
    switchView(hash);
  } else {
    // Default load renders: Homepage featured books
    renderFeaturedBooks();
  }

  // Render surprise dice
  const surpriseBtn = document.getElementById("surprise-btn");
  if (surpriseBtn) surpriseBtn.addEventListener("click", openSurpriseModal);

  // Home Page curated tabs or catalog filters click hooks
  const categoriesContainer = document.getElementById("category-slider");
  if (categoriesContainer) {
    categoriesContainer.addEventListener("click", (e) => {
      const tab = e.target.closest(".category-tab");
      if (!tab) return;
      document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.currentCategory = tab.dataset.category;
      renderCatalog();
    });
  }

  // Bind surprise dice recommendation card adder
  window.addSurpriseBook = (bookId) => {
    addToCart(bookId);
    document.getElementById("surprise-dialog").close();
  };
}

function setupRouter() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      const view = link.dataset.view;
      if (view) {
        switchView(view);
      }
    });
  });
}

function setupCatalogFilters() {
  const priceSlider = document.getElementById("price-range");
  if (priceSlider) {
    priceSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      state.maxPrice = val;
      const displayVal = document.getElementById("price-val");
      if (displayVal) displayVal.innerText = `₺${val.toFixed(2)}`;
      renderCatalog();
    });
  }

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderCatalog();
    });
  }

  const ratingCheckboxes = document.querySelectorAll(".rating-filter");
  ratingCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const activeRatings = [];
      ratingCheckboxes.forEach(c => {
        if (c.checked) activeRatings.push(parseInt(c.value));
      });
      state.minRating = activeRatings;
      renderCatalog();
    });
  });
}

function switchView(viewName) {
  state.activeView = viewName;
  const panels = document.querySelectorAll(".view-panel");
  panels.forEach(panel => {
    panel.classList.remove("active");
    if (panel.id === `view-${viewName}`) panel.classList.add("active");
  });

  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.classList.remove("active");
    if (link.dataset.view === viewName) link.classList.add("active");
  });

  const bottomNavItems = document.querySelectorAll(".mobile-bottom-nav-item");
  bottomNavItems.forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("data-target") === viewName) item.classList.add("active");
  });

  // Render contents dynamically based on active view
  if (viewName === "shop") {
    renderCatalog();
    updatePriceFilterLimits();
  } else if (viewName === "home") {
    renderFeaturedBooks();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function generateBookCardHTML(book) {
  const hasDiscount = book.discountPrice && book.discountPrice < book.price;
  const originalFormatted = `₺${book.price.toFixed(2)}`;
  const discountedFormatted = hasDiscount ? `₺${book.discountPrice.toFixed(2)}` : originalFormatted;
  
  let starsHtml = "";
  const fullStars = Math.floor(book.rating);
  for (let i = 1; i <= 5; i++) {
    starsHtml += i <= fullStars ? `<i class="fas fa-star"></i>` : `<i class="far fa-star"></i>`;
  }

  const badgeHtml = book.badge ? `<div class="book-badge ${book.badgeType || ''}">${book.badge}</div>` : '';
  const isFav = state.wishlist.includes(book.id);
  const heartClass = isFav ? "wishlist-heart-btn active" : "wishlist-heart-btn";

  return `
    <article class="book-card glass-panel" data-id="${book.id}">
      ${badgeHtml}
      <button class="${heartClass}" onclick="toggleFavorite(${book.id})" title="Favorilere Ekle">
        <i class="fas fa-heart"></i>
      </button>
      <a href="detail.html?id=${book.id}" class="book-cover-link">
        <div class="book-cover-container">
          <img class="book-cover" src="${book.cover}" alt="${book.title}" loading="lazy">
        </div>
      </a>
      <h3 class="book-title"><a href="detail.html?id=${book.id}">${book.title}</a></h3>
      <p class="book-author">${book.author}</p>
      <div class="book-rating">
        <span class="stars">${starsHtml}</span>
        <span>(${book.rating.toFixed(1)})</span>
      </div>
      <div class="book-price-wrapper">
        <div class="prices">
          ${hasDiscount ? `<span class="original-price">${originalFormatted}</span>` : ''}
          <span class="current-price">${discountedFormatted}</span>
        </div>
        <button class="add-cart-btn" onclick="addToCart(${book.id})" title="Sepete Ekle">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </article>
  `;
}

function renderFeaturedBooks() {
  const bestsellersGrid = document.getElementById("bestsellers-grid");
  const newreleasesGrid = document.getElementById("newreleases-grid");
  const discountedGrid = document.getElementById("discounted-grid");
  const kidsSpecialGrid = document.getElementById("kids-special-grid");

  if (bestsellersGrid) {
    const bestsellers = BOOKS_DB.filter(b => b.rating >= 4.7).slice(0, 4);
    bestsellersGrid.innerHTML = bestsellers.map(generateBookCardHTML).join("");
  }
  if (newreleasesGrid) {
    const newreleases = BOOKS_DB.filter(b => b.year >= 2025).slice(0, 4);
    newreleasesGrid.innerHTML = newreleases.map(generateBookCardHTML).join("");
  }
  if (discountedGrid) {
    const discounted = BOOKS_DB.filter(b => b.discountPrice !== null).slice(0, 4);
    discountedGrid.innerHTML = discounted.map(generateBookCardHTML).join("");
  }
  if (kidsSpecialGrid) {
    const kids = BOOKS_DB.filter(b => b.category === "Çocuk Kitapları").slice(0, 8);
    kidsSpecialGrid.innerHTML = kids.map(generateBookCardHTML).join("");
  }
}

function initCarouselSlider() {
  const track = document.getElementById("carousel-track");
  if (!track) return;
  const slides = Array.from(track.children);
  const prevButton = document.getElementById("carousel-prev");
  const nextButton = document.getElementById("carousel-next");
  const dotsNav = document.getElementById("carousel-nav");
  if (!dotsNav) return;
  const dots = Array.from(dotsNav.children);
  
  if (slides.length === 0) return;
  
  let currentSlideIndex = 0;
  let autoSlideTimer = null;

  const updateSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    currentSlideIndex = index;
  };

  const nextSlide = () => {
    let nextIndex = currentSlideIndex + 1;
    if (nextIndex >= slides.length) nextIndex = 0;
    updateSlide(nextIndex);
  };

  const prevSlide = () => {
    let prevIndex = currentSlideIndex - 1;
    if (prevIndex < 0) prevIndex = slides.length - 1;
    updateSlide(prevIndex);
  };

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  if (dotsNav) {
    dotsNav.addEventListener("click", (e) => {
      const targetDot = e.target.closest(".carousel-indicator");
      if (!targetDot) return;
      const dotIndex = dots.indexOf(targetDot);
      updateSlide(dotIndex);
      resetAutoSlide();
    });
  }

  const startAutoSlide = () => {
    autoSlideTimer = setInterval(nextSlide, 6000);
  };

  const resetAutoSlide = () => {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      startAutoSlide();
    }
  };

  startAutoSlide();
}

function renderCatalog() {
  const grid = document.getElementById("books-grid");
  const countLabel = document.getElementById("book-count");
  if (!grid) return;

  let filtered = BOOKS_DB.filter(book => {
    if (state.currentCategory !== "Tümü" && book.category !== state.currentCategory) return false;
    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      if (!book.title.toLowerCase().includes(query) && !book.author.toLowerCase().includes(query)) return false;
    }
    const activePrice = book.discountPrice || book.price;
    if (activePrice > state.maxPrice) return false;
    if (state.minRating.length > 0) {
      const roundedRating = Math.floor(book.rating);
      if (!state.minRating.some(min => roundedRating >= min)) return false;
    }
    return true;
  });

  filtered.sort((a, b) => {
    const priceA = a.discountPrice || a.price;
    const priceB = b.discountPrice || b.price;
    if (state.sortBy === "price-asc") return priceA - priceB;
    if (state.sortBy === "price-desc") return priceB - priceA;
    if (state.sortBy === "rating-desc") return b.rating - a.rating;
    return a.id - b.id;
  });

  if (countLabel) countLabel.innerText = `${filtered.length} Kitap Bulundu`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>Aradığınız kriterlere uygun kitap bulunamadı.</h3>
        <p>Lütfen filtrelerinizi kontrol edin veya farklı aramalar deneyin.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(book => {
    const hasDiscount = book.discountPrice && book.discountPrice < book.price;
    const originalFormatted = `₺${book.price.toFixed(2)}`;
    const discountedFormatted = hasDiscount ? `₺${book.discountPrice.toFixed(2)}` : originalFormatted;
    
    let starsHtml = "";
    const fullStars = Math.floor(book.rating);
    for (let i = 1; i <= 5; i++) {
      starsHtml += i <= fullStars ? `<i class="fas fa-star"></i>` : `<i class="far fa-star"></i>`;
    }

    const badgeHtml = book.badge ? `<div class="book-badge ${book.badgeType || ''}">${book.badge}</div>` : '';
    const isFav = state.wishlist.includes(book.id);
    const heartClass = isFav ? "wishlist-heart-btn active" : "wishlist-heart-btn";

    return `
      <article class="book-card glass-panel" data-id="${book.id}">
        ${badgeHtml}
        <button class="${heartClass}" onclick="toggleFavorite(${book.id})" title="Favorilere Ekle">
          <i class="fas fa-heart"></i>
        </button>
        <a href="detail.html?id=${book.id}" class="book-cover-link">
          <div class="book-cover-container">
            <img class="book-cover" src="${book.cover}" alt="${book.title}" loading="lazy">
          </div>
        </a>
        <h3 class="book-title"><a href="detail.html?id=${book.id}">${book.title}</a></h3>
        <p class="book-author">${book.author}</p>
        <div class="book-rating">
          <span class="stars">${starsHtml}</span>
          <span>(${book.rating.toFixed(1)})</span>
        </div>
        <div class="book-price-wrapper">
          <div class="prices">
            ${hasDiscount ? `<span class="original-price">${originalFormatted}</span>` : ''}
            <span class="current-price">${discountedFormatted}</span>
          </div>
          <button class="add-cart-btn" onclick="addToCart(${book.id})" title="Sepete Ekle">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function setupCountdownTimer() {
  const hoursVal = document.getElementById("spotlight-hours");
  const minsVal = document.getElementById("spotlight-minutes");
  const secsVal = document.getElementById("spotlight-seconds");
  if (!hoursVal) return;

  function update() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const diffMs = midnight - now;
    if (diffMs <= 0) return;

    const totalSecs = Math.floor(diffMs / 1000);
    const hours = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;

    hoursVal.innerText = String(hours).padStart(2, "0");
    minsVal.innerText = String(mins).padStart(2, "0");
    secsVal.innerText = String(secs).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}


// --- 2. DETAIL.HTML PAGE CONTROLLER ---
let activeDetailBook = null;

function initDetailPage() {
  setupSharedEventListeners();
  
  // Read ?id=X from URL search parameters
  const params = new URLSearchParams(window.location.search);
  const bookId = parseInt(params.get("id"));
  
  if (!bookId) {
    window.location.href = "index.html";
    return;
  }

  const book = BOOKS_DB.find(b => b.id === bookId);
  if (!book) {
    window.location.href = "index.html";
    return;
  }

  activeDetailBook = book;
  bindDetailPageData(book);
  renderDetailPageReviews(book);
  renderSimilarBooksCarousel(book);

  // Toggle sticky buy bar based on main buy button visibility
  const mainBuyBtn = document.getElementById("det-add-cart-btn");
  const stickyBar = document.querySelector(".sticky-buy-bar");
  if (mainBuyBtn && stickyBar) {
    stickyBar.style.display = "none"; // Hide initially
    window.addEventListener("scroll", () => {
      const rect = mainBuyBtn.getBoundingClientRect();
      if (rect.bottom < 0) {
        stickyBar.style.display = "block";
      } else {
        stickyBar.style.display = "none";
      }
    });
  }
}

function bindDetailPageData(book) {
  // Bind simple text properties
  document.getElementById("det-title").innerText = book.title;
  document.getElementById("det-author").innerText = book.author;
  document.getElementById("det-category").innerText = book.category;
  document.getElementById("det-publisher").innerText = book.publisher;
  document.getElementById("det-year").innerText = book.year;
  document.getElementById("det-pages").innerText = book.pages;
  document.getElementById("det-isbn").innerText = book.isbn;
  document.getElementById("det-translator").innerText = book.translator || "-";
  document.getElementById("det-language").innerText = book.language || "Türkçe";
  document.getElementById("det-binding").innerText = book.binding || "Karton Kapak";
  document.getElementById("det-desc").innerText = book.description;

  const stockBadge = document.getElementById("det-stock");
  if (book.stock > 10) {
    stockBadge.innerText = "Stokta Var";
    stockBadge.style.color = "var(--success)";
  } else if (book.stock > 0) {
    stockBadge.innerText = `Son ${book.stock} Ürün!`;
    stockBadge.style.color = "var(--warning)";
  } else {
    stockBadge.innerText = "Tükendi";
    stockBadge.style.color = "var(--danger)";
  }

  // Cover image
  document.getElementById("det-cover").src = book.cover;

  // Prices
  const hasDiscount = book.discountPrice && book.discountPrice < book.price;
  const originalFormatted = `₺${book.price.toFixed(2)}`;
  const discountedFormatted = hasDiscount ? `₺${book.discountPrice.toFixed(2)}` : originalFormatted;

  document.getElementById("det-original-price").innerText = hasDiscount ? originalFormatted : "";
  document.getElementById("det-current-price").innerText = discountedFormatted;
  
  // Sticky bar buy price
  document.getElementById("sticky-price").innerText = discountedFormatted;

  // Rating stars
  let starsHtml = "";
  const fullStars = Math.floor(book.rating);
  for (let i = 1; i <= 5; i++) {
    starsHtml += i <= fullStars ? `<i class="fas fa-star"></i>` : `<i class="far fa-star"></i>`;
  }
  document.getElementById("det-stars").innerHTML = starsHtml;
  document.getElementById("det-rating-val").innerText = `${book.rating.toFixed(1)} / 5.0`;

  // Favorite button state
  updateDetailFavoriteButtonState(book.id);

  // Add to cart CTA hooks
  document.getElementById("det-add-cart-btn").onclick = () => addToCart(book.id);
  document.getElementById("sticky-buy-btn").onclick = () => addToCart(book.id);

  // Reviews form submit hook
  const revForm = document.getElementById("det-review-form");
  if (revForm) {
    revForm.onsubmit = handleDetailPageReviewSubmit;
  }
}

function updateDetailFavoriteButtonState(bookId) {
  const btn = document.getElementById("det-fav-btn");
  if (!btn) return;
  const isFav = state.wishlist.includes(bookId);
  if (isFav) {
    btn.innerHTML = `<i class="fas fa-heart" style="color:var(--danger);"></i> Favorilerden Çıkar`;
    btn.classList.add("active");
  } else {
    btn.innerHTML = `<i class="far fa-heart"></i> Favorilerime Ekle`;
    btn.classList.remove("active");
  }
}

function triggerDetailFavoriteToggle() {
  if (activeDetailBook) {
    toggleFavorite(activeDetailBook.id);
  }
}

function renderDetailPageReviews(book) {
  const container = document.getElementById("det-reviews-list");
  if (!container) return;

  if (!book.reviews || book.reviews.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">Bu kitap için henüz yorum yazılmamış. İlk değerlendiren siz olun!</p>`;
    return;
  }

  container.innerHTML = book.reviews.map(rev => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += i <= rev.rating ? `<i class="fas fa-star"></i>` : `<i class="far fa-star"></i>`;
    }
    return `
      <div class="review-item glass-panel" style="padding:1.5rem; margin-bottom:1rem;">
        <div class="review-header">
          <span class="review-user" style="font-weight:700;">${rev.user}</span>
          <span class="stars">${stars}</span>
        </div>
        <p class="review-text" style="margin-top:0.5rem; font-size:0.92rem; color:var(--text-secondary);">${rev.comment}</p>
      </div>
    `;
  }).join("");
}

function handleDetailPageReviewSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("d-rev-user").value.trim();
  const rating = parseInt(document.getElementById("d-rev-rating").value);
  const comment = document.getElementById("d-rev-comment").value.trim();

  if (!name || !comment) return;

  if (activeDetailBook) {
    if (!activeDetailBook.reviews) activeDetailBook.reviews = [];
    activeDetailBook.reviews.push({ user: name, rating, comment });
    
    // Recalculate average rating
    const total = activeDetailBook.reviews.reduce((sum, r) => sum + r.rating, 0);
    activeDetailBook.rating = total / activeDetailBook.reviews.length;
    
    saveBooks(BOOKS_DB);
    bindDetailPageData(activeDetailBook);
    renderDetailPageReviews(activeDetailBook);
    
    document.getElementById("det-review-form").reset();
    alert("Değerlendirmeniz başarıyla eklendi.");
  }
}

function renderSimilarBooksCarousel(book) {
  const container = document.getElementById("similar-grid");
  if (!container) return;

  // Filter similar items in same category, exclude current book
  const similar = BOOKS_DB
    .filter(b => b.category === book.category && b.id !== book.id)
    .slice(0, 4);

  if (similar.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">Benzer kategoride başka kitap bulunamadı.</p>`;
    return;
  }

  container.innerHTML = similar.map(b => {
    const activePrice = b.discountPrice || b.price;
    return `
      <article class="book-card glass-panel" style="padding:1rem;">
        <a href="detail.html?id=${b.id}">
          <div class="book-cover-container" style="margin-bottom:0.8rem;">
            <img class="book-cover" src="${b.cover}" alt="${b.title}">
          </div>
          <h4 class="book-title" style="font-size:0.95rem;">${b.title}</h4>
          <p class="book-author" style="font-size:0.75rem;">${b.author}</p>
          <span class="current-price" style="font-size:1.1rem; display:block; margin-top:0.5rem;">₺${activePrice.toFixed(2)}</span>
        </a>
      </article>
    `;
  }).join("");
}


// --- 3. ADMIN.HTML PAGE CONTROLLER ---
function initAdminPage() {
  setupSharedEventListeners();
  
  // Bind login form
  const loginForm = document.getElementById("admin-login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", handleAdminLoginSubmit);
  }
  
  // Bind side tabs click events
  const tabs = document.querySelectorAll(".admin-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      state.adminActiveTab = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderAdminActivePanel();
    });
  });

  // Bind add book actions
  const addBookBtn = document.getElementById("admin-add-book-btn");
  const addBookDialog = document.getElementById("add-book-dialog");
  const closeAddBookBtn = document.getElementById("close-add-book-btn");
  const addBookForm = document.getElementById("add-book-form");

  if (addBookBtn && addBookDialog) {
    addBookBtn.addEventListener("click", () => {
      triggerEditBookReset();
      addBookDialog.showModal();
    });
  }
  if (closeAddBookBtn && addBookDialog) {
    closeAddBookBtn.addEventListener("click", () => {
      addBookDialog.close();
    });
  }
  if (addBookForm) {
    addBookForm.onsubmit = handleAddBookSubmit;
  }

  // Bind coupon form
  const couponForm = document.getElementById("admin-coupon-form");
  if (couponForm) {
    couponForm.addEventListener("submit", handleAddCouponSubmit);
  }

  // Show login gate or dashboard based on credentials
  renderAdminView();
}

function handleAdminLoginSubmit(e) {
  e.preventDefault();
  const user = document.getElementById("admin-username").value;
  const pass = document.getElementById("admin-password").value;

  if (user === "admin" && pass === "admin") {
    state.isAdminLoggedIn = true;
    renderAdminView();
  } else {
    alert("Geçersiz kullanıcı adı veya şifre.");
  }
}

function autoFillAdminCredentials() {
  document.getElementById("admin-username").value = "admin";
  document.getElementById("admin-password").value = "admin";
}

function renderAdminView() {
  const loginGate = document.getElementById("admin-login-gate");
  const dashboard = document.getElementById("admin-dashboard");
  
  if (state.isAdminLoggedIn) {
    loginGate.style.display = "none";
    dashboard.style.display = "flex";
    renderAdminActivePanel();
  } else {
    loginGate.style.display = "flex";
    dashboard.style.display = "none";
  }
}

function renderAdminActivePanel() {
  const sections = document.querySelectorAll(".admin-panel-section");
  sections.forEach(s => {
    s.classList.remove("active");
    if (s.id === `admin-sec-${state.adminActiveTab}`) s.classList.add("active");
  });

  if (state.adminActiveTab === "overview") {
    renderAdminOverview();
  } else if (state.adminActiveTab === "books") {
    renderAdminBooks();
  } else if (state.adminActiveTab === "orders") {
    renderAdminOrders();
  } else if (state.adminActiveTab === "comments") {
    renderAdminComments();
  } else if (state.adminActiveTab === "coupons") {
    renderAdminCoupons();
  }
}

function renderAdminOverview() {
  const currentOrders = getOrders();
  const totalSales = currentOrders
    .filter(o => o.status === "delivered" || o.status === "shipped")
    .reduce((sum, o) => sum + o.total, 0);

  const pendingOrders = currentOrders.filter(o => o.status === "pending").length;

  document.getElementById("stat-total-sales").innerText = `₺${totalSales.toFixed(2)}`;
  document.getElementById("stat-total-orders").innerText = currentOrders.length;
  document.getElementById("stat-total-books").innerText = BOOKS_DB.length;
  document.getElementById("stat-pending-orders").innerText = pendingOrders;

  const feed = document.getElementById("admin-activity-feed");
  feed.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:0.8rem; font-size:0.9rem;">
      <div style="padding:0.6rem; background:rgba(255,255,255,0.02); border-left:3px solid var(--accent-secondary); border-radius:4px;">
        <strong>Sistem:</strong> Panel yükleme tamamlandı. Veritabanı LocalStorage üzerinde aktif durumda.
      </div>
      ${currentOrders.slice(0, 4).map(o => `
        <div style="padding:0.6rem; background:rgba(255,255,255,0.02); border-left:3px solid ${o.status === 'delivered' ? 'var(--success)' : 'var(--warning)'}; border-radius:4px;">
          <strong>Sipariş İşlemi:</strong> ${o.name} tarafından ${o.id} nolu sipariş (${o.date}) teslimat adresi: ${o.address} olarak girildi. Toplam: ₺${o.total.toFixed(2)}
        </div>
      `).join("")}
    </div>
  `;
}

function renderAdminBooks() {
  const tbody = document.getElementById("admin-books-tbody");
  if (!tbody) return;

  tbody.innerHTML = BOOKS_DB.map(book => {
    return `
      <tr>
        <td><img src="${book.cover}" alt="cover"></td>
        <td style="font-weight:700;">${book.title}</td>
        <td>${book.author}</td>
        <td>${book.category}</td>
        <td>₺${book.price.toFixed(2)}</td>
        <td>${book.discountPrice ? `₺${book.discountPrice.toFixed(2)}` : "-"}</td>
        <td>Adet: <strong>${book.stock}</strong></td>
        <td>${book.isbn}</td>
        <td>
          <div class="action-btn-group">
            <button class="btn-edit" onclick="triggerEditBook(${book.id})" title="Düzenle"><i class="fas fa-edit"></i></button>
            <button class="btn-delete" onclick="triggerDeleteBook(${book.id})" title="Sil"><i class="fas fa-trash-alt"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function handleAddBookSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("ab-title").value.trim();
  const author = document.getElementById("ab-author").value.trim();
  const category = document.getElementById("ab-category").value;
  const price = parseFloat(document.getElementById("ab-price").value);
  const discount = document.getElementById("ab-discount").value ? parseFloat(document.getElementById("ab-discount").value) : null;
  const publisher = document.getElementById("ab-publisher").value.trim() || "TellaKitap Yayınları";
  const pages = parseInt(document.getElementById("ab-pages").value) || 200;
  const year = parseInt(document.getElementById("ab-year").value) || 2026;
  const isbn = document.getElementById("ab-isbn").value.trim() || "978-605-000-00-0";
  const translator = document.getElementById("ab-translator").value.trim() || "-";
  const language = document.getElementById("ab-language").value.trim() || "Türkçe";
  const binding = document.getElementById("ab-binding").value;
  const stock = parseInt(document.getElementById("ab-stock").value) || 20;
  const description = document.getElementById("ab-desc").value.trim() || "Açıklama mevcut değil.";

  const presets = [
    "assets/cover_cyber.png",
    "assets/cover_nature.png",
    "assets/cover_philosophy.png",
    "assets/cover_mystery.png",
    "assets/cover_future.png"
  ];
  const coverPath = presets[BOOKS_DB.length % presets.length];
  const newId = BOOKS_DB.length > 0 ? Math.max(...BOOKS_DB.map(b => b.id)) + 1 : 1;

  const newBook = {
    id: newId,
    title,
    author,
    category,
    price,
    discountPrice: discount,
    rating: 5.0,
    cover: coverPath,
    publisher,
    pages,
    year,
    isbn,
    translator,
    language,
    binding,
    stock,
    badge: "Yeni",
    badgeType: "hot",
    description,
    reviews: []
  };

  BOOKS_DB.push(newBook);
  saveBooks(BOOKS_DB);
  renderAdminBooks();
  
  document.getElementById("add-book-dialog").close();
  document.getElementById("add-book-form").reset();
  alert(`"${title}" kataloğa başarıyla eklendi!`);
}

function triggerDeleteBook(bookId) {
  const book = BOOKS_DB.find(b => b.id === bookId);
  if (!book) return;

  if (confirm(`"${book.title}" kitabını katalogdan silmek istediğinize emin misiniz?`)) {
    BOOKS_DB = BOOKS_DB.filter(b => b.id !== bookId);
    saveBooks(BOOKS_DB);
    renderAdminBooks();
  }
}

// Advanced Book Edit modal hooks
let activeEditBookId = null;
function triggerEditBook(bookId) {
  const book = BOOKS_DB.find(b => b.id === bookId);
  if (!book) return;
  
  activeEditBookId = bookId;
  document.getElementById("ab-title").value = book.title;
  document.getElementById("ab-author").value = book.author;
  document.getElementById("ab-category").value = book.category;
  document.getElementById("ab-price").value = book.price;
  document.getElementById("ab-discount").value = book.discountPrice || "";
  document.getElementById("ab-publisher").value = book.publisher || "";
  document.getElementById("ab-isbn").value = book.isbn || "";
  document.getElementById("ab-pages").value = book.pages || "";
  document.getElementById("ab-year").value = book.year || "";
  document.getElementById("ab-translator").value = book.translator || "";
  document.getElementById("ab-language").value = book.language || "Türkçe";
  document.getElementById("ab-binding").value = book.binding || "Karton Kapak";
  document.getElementById("ab-stock").value = book.stock || 20;
  document.getElementById("ab-desc").value = book.description || "";

  // Switch submit action to edit mode
  const form = document.getElementById("add-book-form");
  const titleHeader = document.getElementById("add-book-title");
  titleHeader.innerText = "Ürün Özelliklerini Düzenle";
  
  // Unbind add submit, bind edit submit
  form.onsubmit = handleEditBookSubmit;
  document.getElementById("add-book-dialog").showModal();
}

function handleEditBookSubmit(e) {
  e.preventDefault();
  const book = BOOKS_DB.find(b => b.id === activeEditBookId);
  if (!book) return;

  book.title = document.getElementById("ab-title").value.trim();
  book.author = document.getElementById("ab-author").value.trim();
  book.category = document.getElementById("ab-category").value;
  book.price = parseFloat(document.getElementById("ab-price").value);
  book.discountPrice = document.getElementById("ab-discount").value ? parseFloat(document.getElementById("ab-discount").value) : null;
  book.publisher = document.getElementById("ab-publisher").value.trim();
  book.isbn = document.getElementById("ab-isbn").value.trim();
  book.pages = parseInt(document.getElementById("ab-pages").value) || 200;
  book.year = parseInt(document.getElementById("ab-year").value) || 2026;
  book.translator = document.getElementById("ab-translator").value.trim();
  book.language = document.getElementById("ab-language").value.trim();
  book.binding = document.getElementById("ab-binding").value;
  book.stock = parseInt(document.getElementById("ab-stock").value) || 0;
  book.description = document.getElementById("ab-desc").value.trim();

  saveBooks(BOOKS_DB);
  renderAdminBooks();

  // Reset dialog layout to defaults
  document.getElementById("add-book-dialog").close();
  const form = document.getElementById("add-book-form");
  form.reset();
  form.onsubmit = handleAddBookSubmit;
  document.getElementById("add-book-title").innerText = "Kataloğa Kitap Ekle";
  alert("Kitap başarıyla güncellendi.");
}

function renderAdminOrders() {
  const tbody = document.getElementById("admin-orders-tbody");
  if (!tbody) return;

  const currentOrders = getOrders();
  tbody.innerHTML = currentOrders.map(order => {
    let statusClass = "status-pending";
    let statusLabel = "Hazırlanıyor";
    if (order.status === "shipped") {
      statusClass = "status-shipped";
      statusLabel = "Kargolandı";
    } else if (order.status === "delivered") {
      statusClass = "status-delivered";
      statusLabel = "Teslim Edildi";
    }

    return `
      <tr>
        <td style="font-weight:800; font-family:monospace;">${order.id}</td>
        <td style="font-weight:700;">${order.name}</td>
        <td>₺${order.total.toFixed(2)}</td>
        <td>${order.date}</td>
        <td style="font-size:0.8rem; max-width:180px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${order.address}</td>
        <td>
          <span class="status-badge ${statusClass}">${statusLabel}</span>
        </td>
        <td>
          <select class="table-select" onchange="triggerUpdateOrderStatus('${order.id}', this.value)">
            <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Hazırlanıyor</option>
            <option value="shipped" ${order.status === 'shipped' ? 'selected' : ''}>Kargolandı</option>
            <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Teslim Edildi</option>
          </select>
        </td>
      </tr>
    `;
  }).join("");
}

function triggerUpdateOrderStatus(orderId, newStatus) {
  const currentOrders = getOrders();
  const order = currentOrders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    saveOrders(currentOrders);
    state.orders = currentOrders;
    renderAdminOrders();
  }
}

function renderAdminComments() {
  const tbody = document.getElementById("admin-comments-tbody");
  if (!tbody) return;

  let flatReviews = [];
  BOOKS_DB.forEach(book => {
    if (book.reviews) {
      book.reviews.forEach((rev, idx) => {
        flatReviews.push({
          bookId: book.id,
          bookTitle: book.title,
          reviewIndex: idx,
          user: rev.user,
          rating: rev.rating,
          comment: rev.comment
        });
      });
    }
  });

  if (flatReviews.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">Henüz yorum bulunmamaktadır.</td></tr>`;
    return;
  }

  tbody.innerHTML = flatReviews.map(item => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += i <= item.rating ? `<i class="fas fa-star" style="color:var(--warning)"></i>` : `<i class="far fa-star"></i>`;
    }
    return `
      <tr>
        <td style="font-weight:700;">${item.bookTitle}</td>
        <td>${item.user}</td>
        <td style="font-size:0.85rem;">${stars}</td>
        <td style="max-width:280px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${item.comment}">${item.comment}</td>
        <td>
          <button class="close-btn" onclick="triggerDeleteReview(${item.bookId}, ${item.reviewIndex})" style="width:32px; height:32px; font-size:0.85rem;" title="Yorumu Kaldır">
            <i class="fas fa-trash-alt" style="color:var(--danger)"></i>
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function triggerDeleteReview(bookId, reviewIndex) {
  const book = BOOKS_DB.find(b => b.id === bookId);
  if (book && book.reviews) {
    if (confirm("Bu okur yorumunu moderatör olarak kalıcı olarak silmek istediğinize emin misiniz?")) {
      book.reviews.splice(reviewIndex, 1);
      if (book.reviews.length > 0) {
        const totalScore = book.reviews.reduce((sum, r) => sum + r.rating, 0);
        book.rating = totalScore / book.reviews.length;
      } else {
        book.rating = 5.0;
      }
      saveBooks(BOOKS_DB);
      renderAdminComments();
    }
  }
}

function renderAdminCoupons() {
  const tbody = document.getElementById("admin-coupons-tbody");
  if (!tbody) return;

  const currentCoupons = getCoupons();
  tbody.innerHTML = currentCoupons.map(c => {
    return `
      <tr>
        <td style="font-weight:800; font-family:monospace; color:var(--accent-secondary);">${c.code}</td>
        <td>${c.value > 0 ? `%${c.value} İndirim` : "Ücretsiz Kargo"}</td>
        <td>Aktif</td>
        <td>
          <button class="close-btn" onclick="triggerDeleteCoupon('${c.code}')" style="width:32px; height:32px; font-size:0.85rem;" title="Kuponu Sil">
            <i class="fas fa-trash-alt" style="color:var(--danger)"></i>
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function handleAddCouponSubmit(e) {
  e.preventDefault();
  const code = document.getElementById("ac-code").value.trim().toUpperCase();
  const value = parseInt(document.getElementById("ac-value").value) || 0;

  const currentCoupons = getCoupons();
  if (currentCoupons.some(c => c.code === code)) {
    alert("Bu kupon kodu zaten mevcut.");
    return;
  }

  currentCoupons.push({ code, value });
  saveCoupons(currentCoupons);
  state.coupons = currentCoupons;
  renderAdminCoupons();
  document.getElementById("admin-coupon-form").reset();
  alert(`"${code}" kuponu başarıyla oluşturuldu!`);
}

function triggerDeleteCoupon(code) {
  const currentCoupons = getCoupons();
  if (confirm(`"${code}" kuponunu silmek istediğinize emin misiniz?`)) {
    const updated = currentCoupons.filter(c => c.code !== code);
    saveCoupons(updated);
    state.coupons = updated;
    renderAdminCoupons();
  }
}

function triggerEditBookReset() {
  const form = document.getElementById("add-book-form");
  form.reset();
  form.onsubmit = handleAddBookSubmit;
  document.getElementById("add-book-title").innerText = "Kataloğa Kitap Ekle";
}


// --- DYNAMIC SLIDER BOUNDS ---
function updatePriceFilterLimits() {
  const prices = BOOKS_DB.map(b => b.discountPrice || b.price);
  const max = Math.ceil(Math.max(...prices));
  const slider = document.getElementById("price-range");
  if (slider) {
    slider.max = max;
    slider.value = max;
    state.maxPrice = max;
    document.getElementById("price-val").innerText = `₺${max.toFixed(2)}`;
  }
}

// Global scope bindings
window.addSurpriseBook = addSurpriseBook;
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.toggleFavorite = toggleFavorite;
window.openWishlistModal = openWishlistModal;
window.addFromWishlistToCart = addFromWishlistToCart;
window.triggerDetailFavoriteToggle = triggerDetailFavoriteToggle;
window.switchView = switchView;
window.renderCatalog = renderCatalog;

// Admin scope bindings
window.triggerDeleteBook = triggerDeleteBook;
window.triggerEditBook = triggerEditBook;
window.triggerUpdateOrderStatus = triggerUpdateOrderStatus;
window.triggerDeleteReview = triggerDeleteReview;
window.triggerDeleteCoupon = triggerDeleteCoupon;
window.autoFillAdminCredentials = autoFillAdminCredentials;
window.handleAddBookSubmit = handleAddBookSubmit;
window.triggerEditBookReset = triggerEditBookReset;
