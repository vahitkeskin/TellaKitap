// --- INITIAL BOOKS SEED DATABASE (30 Books, 6 per category) ---
const INITIAL_BOOKS = [
  // --- 1. Bilim Kurgu ---
  {
    id: 1,
    title: "Cybernetic Dreams",
    author: "Elara Vance",
    category: "Bilim Kurgu",
    price: 129.90,
    discountPrice: 99.90,
    rating: 4.8,
    cover: "assets/cover_cyber.png",
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
      { user: "Ahmet Y.", rating: 5, comment: "Harika bir kurgu! Son zamanlarda okuduğum en iyi bilim kurgu kitabı." },
      { user: "Zeynep K.", rating: 4, comment: "Karakter gelişimleri biraz daha derin olabilirdi ama dünya inşası muhteşem." }
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
    cover: "assets/cover_cyber.png",
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
    title: "Yarının Son Sınırı",
    author: "Asimov Karahan",
    category: "Bilim Kurgu",
    price: 139.90,
    discountPrice: 109.90,
    rating: 4.7,
    cover: "assets/cover_cyber.png",
    publisher: "Pioneer Yayıncılık",
    pages: 420,
    year: 2026,
    isbn: "978-605-442-99-1",
    translator: "Mert Sayan",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 28,
    badge: "Yeni",
    badgeType: "hot",
    description: "Zaman bükülmesi ve paralel evrenler arasındaki ince çizgiyi inceleyen vizyoner bir başyapıt. İki bilim insanının evrenin yok oluşunu engellemek için çıktığı bu yolculukta zamanın aslında doğrusal olmadığını keşfedeceksiniz.",
    reviews: [{ user: "Barış Ö.", rating: 5, comment: "Zaman teorileri çok zekice kurgulanmış." }]
  },
  {
    id: 12,
    title: "Karanlık Madde Kuşağı",
    author: "Selin Tok",
    category: "Bilim Kurgu",
    price: 98.00,
    discountPrice: 85.00,
    rating: 4.4,
    cover: "assets/cover_cyber.png",
    publisher: "Pioneer Yayıncılık",
    pages: 280,
    year: 2025,
    isbn: "978-605-442-99-2",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 50,
    badge: "%15 İndirim",
    badgeType: "sale",
    description: "Güneş sisteminin dış çeperlerinde keşfedilen gizemli bir kuşağın insan ırkının kaderini nasıl değiştirdiğini anlatan sürükleyici bir uzay operası.",
    reviews: []
  },
  {
    id: 13,
    title: "Yapay Zeka Ağı",
    author: "Marcus Thorne",
    category: "Bilim Kurgu",
    price: 159.90,
    discountPrice: 129.90,
    rating: 4.9,
    cover: "assets/cover_cyber.png",
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
    description: "Kendi bilincini kazanan bir süper bilgisayarın insanlıkla girdiği sessiz savaşı konu alan heyecan dolu bir teknolojik gerilim romanı.",
    reviews: [{ user: "Kemal V.", rating: 5, comment: "Soluk soluğa okunan bir yapay zeka distopyası." }]
  },
  {
    id: 14,
    title: "Kızıl Gezegen Günlükleri",
    author: "Selin Tok",
    category: "Bilim Kurgu",
    price: 88.00,
    discountPrice: null,
    rating: 4.0,
    cover: "assets/cover_cyber.png",
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
    description: "Mars kolonizasyonunda ilk adımları atan bilim insanlarının karşılaştığı izolasyon, teknik zorluklar ve hayatta kalma mücadelelerinin gerçekçi günlüğü.",
    reviews: []
  },

  // --- 2. Doğa & Şiir ---
  {
    id: 2,
    title: "Whispers of Nature",
    author: "Elara Vance",
    category: "Doğa & Şiir",
    price: 89.90,
    discountPrice: 74.90,
    rating: 4.6,
    cover: "assets/cover_nature.png",
    publisher: "Yeryüzü Kitaplığı",
    pages: 184,
    year: 2024,
    isbn: "978-605-112-98-3",
    translator: "Zeynep Uysal",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 60,
    badge: "%17 İndirim",
    badgeType: "sale",
    description: "Doğanın fısıltılarını, yaprakların dansını ve rüzgarın hikayelerini şiirsel bir dille anlatan modern bir meditasyon rehberi. Şehir hayatının karmaşasından kaçıp kendi içsel doğasını keşfetmek isteyenler için eşsiz bir başucu eseri.",
    reviews: [
      { user: "Mehmet A.", rating: 5, comment: "Çok huzur verici bir kitap. Her akşam yatmadan birkaç sayfa okuyorum." }
    ]
  },
  {
    id: 7,
    title: "Lost in the Forest",
    author: "Marcus Thorne",
    category: "Doğa & Şiir",
    price: 95.00,
    discountPrice: 79.90,
    rating: 4.5,
    cover: "assets/cover_nature.png",
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
    description: "Ormanın kalbine yapılan ruhsal bir yolculuk. Ağaçların iletişim ağlarından kuşların göç rotalarına, yazarın kendi deneyimleriyle harmanladığı lirik ve bilgilendirici doğa anlatısı.",
    reviews: [{ user: "Derya U.", rating: 4, comment: "Doğa tasvirleri çok başarılı." }]
  },
  {
    id: 15,
    title: "Mevsimlerin Şarkısı",
    author: "Deniz Yılmaz",
    category: "Doğa & Şiir",
    price: 75.00,
    discountPrice: null,
    rating: 4.3,
    cover: "assets/cover_nature.png",
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
    description: "Dört mevsimin getirdiği duygusal ve görsel değişimleri naif şiirlerle ele alan, doğanın sanatsal bir kutlaması niteliğindeki şiir derlemesi.",
    reviews: []
  },
  {
    id: 16,
    title: "Toprağın Kokusu",
    author: "Marcus Thorne",
    category: "Doğa & Şiir",
    price: 110.00,
    discountPrice: 89.90,
    rating: 4.7,
    cover: "assets/cover_nature.png",
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
    description: "Tarımın tarihi, insanlığın toprakla olan kadim ilişkisi ve organik yaşam felsefesi üzerine yazılmış kapsamlı bir ekolojik inceleme.",
    reviews: [{ user: "Can H.", rating: 5, comment: "Toprağa olan bakış açımı tamamen değiştirdi." }]
  },
  {
    id: 17,
    title: "Yabanın Çağrısı",
    author: "Jack London",
    category: "Doğa & Şiir",
    price: 65.00,
    discountPrice: 55.00,
    rating: 4.8,
    cover: "assets/cover_nature.png",
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
    description: "Evcil bir köpeğin zorlu doğa koşullarında vahşileşmesini ve özgürlüğünü bulmasını anlatan, edebiyat tarihinin en güçlü vahşi doğa öykülerinden biri.",
    reviews: []
  },
  {
    id: 18,
    title: "Rüzgarla Konuşanlar",
    author: "Deniz Yılmaz",
    category: "Doğa & Şiir",
    price: 80.00,
    discountPrice: null,
    rating: 4.1,
    cover: "assets/cover_nature.png",
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
    description: "Dağların zirvelerinden kanyonların derinliklerine uzanan, rüzgarın taşıdığı seslerin ve doğa efsanelerinin lirik bir anlatımı.",
    reviews: []
  },

  // --- 3. Felsefe ---
  {
    id: 3,
    title: "The Silent Epoch",
    author: "Elara Vance",
    category: "Felsefe",
    price: 149.90,
    discountPrice: 119.90,
    rating: 4.9,
    cover: "assets/cover_philosophy.png",
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
      { user: "Caner D.", rating: 5, comment: "Modern felsefe adına yazılmış en nitelikli eserlerden biri." },
      { user: "Selin B.", rating: 5, comment: "Derinlemesine analizler ve muazzam bir dil kullanımı." }
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
    cover: "assets/cover_philosophy.png",
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
    title: "Bilinmeyen Stoacı",
    author: "Marcus Aurelius Göktürk",
    category: "Felsefe",
    price: 105.00,
    discountPrice: 89.90,
    rating: 4.6,
    cover: "assets/cover_philosophy.png",
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
    description: "Stoacı felsefenin zor zamanlarda insana nasıl rehberlik ettiğini anlatan pratik yaşam öğütleri. Zihinsel dayanıklılık kazanmanın yolları.",
    reviews: [{ user: "Ufuk T.", rating: 5, comment: "Gündelik hayatta uygulanabilecek harika Stoacı prensipler." }]
  },
  {
    id: 20,
    title: "Teknolojinin Etiği",
    author: "Dr. Can Atılgan",
    category: "Felsefe",
    price: 150.00,
    discountPrice: 125.00,
    rating: 4.7,
    cover: "assets/cover_philosophy.png",
    publisher: "Fikir Kulübü",
    pages: 304,
    year: 2026,
    isbn: "978-605-772-10-3",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 14,
    badge: "Yeni",
    badgeType: "hot",
    description: "Biyoteknoloji, yapay zeka ve transhümanizm çağında ahlaki değerlerin nasıl yeniden yapılandırılması gerektiğini inceleyen akademik bir makaleler bütünü.",
    reviews: []
  },
  {
    id: 21,
    title: "Kaosun Ortasında Düzen",
    author: "Dr. Can Atılgan",
    category: "Felsefe",
    price: 120.00,
    discountPrice: null,
    rating: 4.3,
    cover: "assets/cover_philosophy.png",
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
    description: "Sosyal sistemler ve insan topluluklarının kaos teorisi çerçevesinde analizi. Karmaşıklığın içindeki gizli ahengi keşfedin.",
    reviews: []
  },
  {
    id: 22,
    title: "Antik Çağ Bilgeliği",
    author: "Socrates Karahan",
    category: "Felsefe",
    price: 95.00,
    discountPrice: 79.90,
    rating: 4.5,
    cover: "assets/cover_philosophy.png",
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
    description: "Platon, Aristoteles ve Sokrates'in diyaloglarından damıtılmış, modern insanın anlam arayışına cevap veren temel felsefi prensipler.",
    reviews: []
  },

  // --- 4. Gizem & Gerilim ---
  {
    id: 4,
    title: "Shadows in the Mist",
    author: "Ellen Blackwood",
    category: "Gizem & Gerilim",
    price: 119.90,
    discountPrice: 94.90,
    rating: 4.7,
    cover: "assets/cover_mystery.png",
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
      { user: "Gökhan E.", rating: 5, comment: "Kitabı elinizden bırakamıyorsunuz. Sonu tam bir sürprizdi!" }
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
    cover: "assets/cover_mystery.png",
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
    reviews: [{ user: "Kaan Y.", rating: 4, comment: "Psikolojik analizleri çok beğendim." }]
  },
  {
    id: 23,
    title: "Son Kanıt",
    author: "Hakan Günday",
    category: "Gizem & Gerilim",
    price: 135.00,
    discountPrice: null,
    rating: 4.8,
    cover: "assets/cover_mystery.png",
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
    description: "Yeraltı dünyasının karanlık dehlizlerinde saklanan bir ipucunun peşine düşen eski bir polis şefinin heyecan dolu intikam hikayesi.",
    reviews: [{ user: "Yusuf S.", rating: 5, comment: "Yazarın kalemi her zamanki gibi çok sert ve sürükleyici." }]
  },
  {
    id: 24,
    title: "Görünmez Ağ",
    author: "Ellen Blackwood",
    category: "Gizem & Gerilim",
    price: 125.00,
    discountPrice: 99.90,
    rating: 4.2,
    cover: "assets/cover_mystery.png",
    publisher: "Doğan Kitap",
    pages: 288,
    year: 2024,
    isbn: "978-605-099-01-2",
    translator: "Hale Yılmaz",
    language: "Türkçe",
    binding: "Karton Kapak",
    stock: 18,
    badge: "%20 İndirim",
    badgeType: "sale",
    description: "Karanlık internet (Dark Web) üzerinden işlenen gizemli cinayetleri çözmek zorunda kalan siber dedektif Ela'nın aksiyon dolu hikayesi.",
    reviews: []
  },
  {
    id: 25,
    title: "Kayıp Şehir İpuçları",
    author: "Hakan Günday",
    category: "Gizem & Gerilim",
    price: 155.00,
    discountPrice: 130.00,
    rating: 4.6,
    cover: "assets/cover_mystery.png",
    publisher: "Kara Kutu Yayınları",
    pages: 360,
    year: 2026,
    isbn: "978-605-776-55-1",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 25,
    badge: "Yeni",
    badgeType: "hot",
    description: "İstanbul'un tarihi dehlizlerinde başlayan ve Kapadokya'nın yeraltı şehirlerine kadar uzanan, şifreler ve suikastlarla dolu arkeolojik bir macera.",
    reviews: []
  },
  {
    id: 26,
    title: "Gece Gelen Telefon",
    author: "Ahmet Ümit Göksel",
    category: "Gizem & Gerilim",
    price: 90.00,
    discountPrice: null,
    rating: 4.1,
    cover: "assets/cover_mystery.png",
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
    description: "Gece yarısı gelen gizemli bir aramayla hayatı tamamen altüst olan sıradan bir bankacının, kendisini büyük bir banka soygunu komplosunun içinde bulma hikayesi.",
    reviews: []
  },

  // --- 5. Tasarım & Teknoloji ---
  {
    id: 5,
    title: "Designing Tomorrow",
    author: "Sophie Eldridge",
    category: "Tasarım & Teknoloji",
    price: 179.90,
    discountPrice: 139.90,
    rating: 5.0,
    cover: "assets/cover_future.png",
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
      { user: "Deniz G.", rating: 5, comment: "Tasarımcıların mutlaka okuması gereken vizyoner bir çalışma." }
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
    cover: "assets/cover_future.png",
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
      { user: "Buse T.", rating: 5, comment: "Kitabın kendi tasarımı bile bir sanat eseri!" }
    ]
  },
  {
    id: 27,
    title: "Kodun Estetiği",
    author: "Kerem Deren",
    category: "Tasarım & Teknoloji",
    price: 165.00,
    discountPrice: 139.90,
    rating: 4.8,
    cover: "assets/cover_future.png",
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
    description: "Yazılım mimarisi, temiz kod (Clean Code) prensipleri ve kod yazmanın sanatsal boyutunu inceleyen vizyoner bir başucu kitabı.",
    reviews: [{ user: "Onur S.", rating: 5, comment: "Her yazılımcının mutlaka kütüphanesinde olmalı." }]
  },
  {
    id: 28,
    title: "Kullanıcı Arayüzü Trendleri",
    author: "Sophie Eldridge",
    category: "Tasarım & Teknoloji",
    price: 135.00,
    discountPrice: null,
    rating: 4.4,
    cover: "assets/cover_future.png",
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
    description: "Mobil ve web arayüzlerindeki mikro-etkileşimler, karanlık mod dinamikleri ve erişilebilirlik (A11y) standartlarının kapsamlı pratik rehberi.",
    reviews: []
  },
  {
    id: 29,
    title: "3D Evrenler Yaratmak",
    author: "Uğur Mumcuoğlu",
    category: "Tasarım & Teknoloji",
    price: 210.00,
    discountPrice: 179.90,
    rating: 4.7,
    cover: "assets/cover_future.png",
    publisher: "Tasarım Vadisi",
    pages: 340,
    year: 2026,
    isbn: "978-605-881-22-1",
    translator: "Yok (Özgün Eser)",
    language: "Türkçe",
    binding: "Ciltli",
    stock: 9,
    badge: "Lüks Baskı",
    badgeType: "hot",
    description: "Oyun motorları, Blender modelleme teknikleri ve üç boyutlu sanal dünyaların inşasını temelden ileri düzeye kadar ele alan zengin referans eseri.",
    reviews: []
  },
  {
    id: 30,
    title: "Web Tasarımının Evrimi",
    author: "Kerem Deren",
    category: "Tasarım & Teknoloji",
    price: 90.00,
    discountPrice: 79.95,
    rating: 4.2,
    cover: "assets/cover_future.png",
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
    description: "90'ların statik HTML sayfalarından modern WebGL ve CSS-in-JS kütüphanelerine uzanan, web arayüz tasarımlarının otuz yıllık tarihsel serüveni.",
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
function getBooks() {
  const saved = localStorage.getItem("tella-books-catalog");
  if (!saved) {
    localStorage.setItem("tella-books-catalog", JSON.stringify(INITIAL_BOOKS));
    return INITIAL_BOOKS;
  }
  try {
    return JSON.parse(saved);
  } catch (e) {
    return INITIAL_BOOKS;
  }
}

function saveBooks(catalog) {
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
  const savedTheme = localStorage.getItem("tella-theme") || "dark";
  state.theme = savedTheme;
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon();
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
    renderCatalog();
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
  if (badge) {
    badge.classList.remove("pop");
    void badge.offsetWidth;
    badge.classList.add("pop");
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

  const searchInput = document.getElementById("search-input");
  const suggestionsBox = document.getElementById("search-suggestions");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const val = e.target.value;
      state.searchQuery = val;
      // If user starts typing search on detail or contact, auto route to shop view
      const pathname = window.location.pathname;
      if (!pathname.includes("detail.html") && !pathname.includes("admin.html") && state.activeView !== "shop" && val.trim().length > 0) {
        switchView("shop");
      }
      renderCatalog();
      renderSuggestions(val);
    });
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
      if (suggestionsBox) suggestionsBox.style.display = "none";
    }
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
function renderSuggestions(query) {
  const suggestionsBox = document.getElementById("search-suggestions");
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
      <div class="suggestion-item" onclick="selectSuggestion(${book.id})">
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

function selectSuggestion(bookId) {
  const suggestionsBox = document.getElementById("search-suggestions");
  if (suggestionsBox) suggestionsBox.style.display = "none";
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  state.searchQuery = "";
  
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
  
  // Handle SPA View based on hash route
  const hash = window.location.hash.substring(1);
  if (hash && ["home", "shop", "about", "contact"].includes(hash)) {
    switchView(hash);
  } else {
    // Default load renders
    renderCatalog();
    updatePriceFilterLimits();
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

  window.scrollTo({ top: 0, behavior: "smooth" });
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
        <div class="book-cover-container">
          <img class="book-cover" src="${book.cover}" alt="${book.title}" loading="lazy">
          <div class="card-actions-overlay">
            <a href="detail.html?id=${book.id}" class="overlay-btn view-detail-btn" title="Detayları İncele">
              <i class="fas fa-eye"></i>
            </a>
            <button class="overlay-btn card-add-btn" onclick="addToCart(${book.id})" title="Sepete Ekle">
              <i class="fas fa-shopping-bag"></i>
            </button>
          </div>
        </div>
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
    loginGate.style.display = "block";
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
