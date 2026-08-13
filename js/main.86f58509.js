/**
 * Munich Pub - Main JS
 * Multilingual Support (SR, EN, RU) & Dynamic Rendering
 */

const translations = {
  sr: {
    "nav.about": "O nama",
    "nav.menu": "Meni",
    "nav.reviews": "Utisci",
    "nav.contacts": "Kontakt",
    "btn.callNow": "Pozovi odmah",
    "hero.reviewsCount": "140+ recenzija",
    "hero.line1": "LEDENO PIVO.",
    "hero.line2": "MOĆNA REBARCA.",
    "hero.line3": "PRAVI PAB DUH.",
    "hero.subtitle": "Dobrodošli u Munich Pub u Podgorici — mesto gde se spajaju dobra energija, bogat meni i ledeno točeno pivo.",
    "hero.btnMenu": "Pogledaj Meni",
    "hero.btnCall": "Rezerviši Sto",
    "hero.hoursText": "Danas radimo: 08:00 – 01:00",
    "about.tag": "AMBIJENT & HRANA",
    "about.title": "Mesto sa rokenrol dušom i autentičnim ukusom",
    "vibe.card1Title": "Hladno & Sveže Pivo",
    "vibe.card1Desc": "Savršeno natočeno pivo za opuštanje posle radnog dana ili gledanje utakmice sa društvom.",
    "vibe.card2Title": "Zapečena Rebarca",
    "vibe.card2Desc": "Pikantna, sočna i spremljena po našoj tradicionalnoj pab recepturi.",
    "vibe.card3Title": "Pravi Pab Vibe",
    "vibe.card3Desc": "Tamno drvo, svirke, gitare i opuštena atmosfera za svako društvo.",
    "menu.tag": "PUN UKUS",
    "menu.title": "Jelovnik & Karta Pića",
    "menu.subtitle": "Sva naša jela i pića pripremaju se od pažljivo odabranih sastojaka.",
    "menu.catAll": "Sve",
    "menu.catPub": "Pub Meni 🍖",
    "menu.catBurgers": "Burgeri 🍔",
    "menu.catBreakfast": "Doručak 🍳",
    "menu.catTortilje": "Tortilje 🌯",
    "menu.catSendvici": "Sendviči 🥪",
    "menu.catRizoto": "Rižoto & Supe 🥣",
    "menu.catViski": "Viski 🥃",
    "menu.catVina": "Vina 🍷",
    "reviews.basedOn": "Na osnovu 140+ recenzija na Google-u",
    "reviews.title": "Šta gosti kažu o nama",
    "cta.title": "Planirate dolazak sa društvom?",
    "cta.desc": "Rezervišite sto na vreme ili svratite na hladno pivo i vrhunska rebarca.",
    "cta.btn": "Pozovite i Rezervišite",
    "contacts.tag": "LOKACIJA & INFORMACIJE",
    "contacts.title": "Pronađite nas u Podgorici",
    "contacts.addressTitle": "Adresa",
    "contacts.getDirections": "Otvorite na Google Mapi →",
    "contacts.phoneTitle": "Telefon za rezervacije",
    "contacts.hoursTitle": "Radno Vreme",
    "contacts.hoursWeek": "Ponedeljak – Subota: 08:00 – 01:00",
    "contacts.hoursSun": "Nedelja: 08:00 – 00:00",
    "contacts.openMapBtn": "Otvori Mapu Navigacije",
    "footer.tagline": "Autentični pub doživljaj u srcu Podgorice."
  },
  en: {
    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.reviews": "Reviews",
    "nav.contacts": "Contacts",
    "btn.callNow": "Call Now",
    "hero.reviewsCount": "140+ reviews",
    "hero.line1": "ICE COLD BEER.",
    "hero.line2": "HEARTY RIBS.",
    "hero.line3": "REAL PUB VIBE.",
    "hero.subtitle": "Welcome to Munich Pub in Podgorica — where good vibes, great food, and crisp beer come together.",
    "hero.btnMenu": "Explore Menu",
    "hero.btnCall": "Book a Table",
    "hero.hoursText": "Open Today: 08:00 AM – 01:00 AM",
    "about.tag": "ATMOSPHERE & FOOD",
    "about.title": "A place with rock 'n' roll soul and authentic taste",
    "vibe.card1Title": "Ice Cold Beer",
    "vibe.card1Desc": "Perfectly poured draft beer for relaxing after work or watching the big game.",
    "vibe.card2Title": "Baked Pork Ribs",
    "vibe.card2Desc": "Juicy, tender, and seasoned to perfection following our signature pub recipe.",
    "vibe.card3Title": "Genuine Pub Vibe",
    "vibe.card3Desc": "Dark wood, guitars, great music, and a warm welcoming atmosphere.",
    "menu.tag": "RICH FLAVOR",
    "menu.title": "Menu & Drinks",
    "menu.subtitle": "All our dishes are freshly prepared using carefully selected ingredients.",
    "menu.catAll": "All",
    "menu.catPub": "Pub Menu 🍖",
    "menu.catBurgers": "Burgers 🍔",
    "menu.catBreakfast": "Breakfast 🍳",
    "menu.catTortilje": "Tortillas 🌯",
    "menu.catSendvici": "Sandwiches 🥪",
    "menu.catRizoto": "Risotto & Soups 🥣",
    "menu.catViski": "Whiskey 🥃",
    "menu.catVina": "Wines 🍷",
    "reviews.basedOn": "Based on 140+ Google reviews",
    "reviews.title": "What Our Guests Say",
    "cta.title": "Planning a night out with friends?",
    "cta.desc": "Reserve your table in advance or drop by for a crisp pint and delicious ribs.",
    "cta.btn": "Call to Reserve",
    "contacts.tag": "LOCATION & INFO",
    "contacts.title": "Find Us in Podgorica",
    "contacts.addressTitle": "Address",
    "contacts.getDirections": "Open Google Maps →",
    "contacts.phoneTitle": "Reservations Phone",
    "contacts.hoursTitle": "Opening Hours",
    "contacts.hoursWeek": "Monday – Saturday: 08:00 AM – 01:00 AM",
    "contacts.hoursSun": "Sunday: 08:00 AM – 12:00 AM",
    "contacts.openMapBtn": "Open Map Navigation",
    "footer.tagline": "Authentic pub experience in the heart of Podgorica."
  },
  ru: {
    "nav.about": "О нас",
    "nav.menu": "Меню",
    "nav.reviews": "Отзывы",
    "nav.contacts": "Контакты",
    "btn.callNow": "Позвонить",
    "hero.reviewsCount": "140+ отзывов",
    "hero.line1": "ЛЕДЯНОЕ ПИВО.",
    "hero.line2": "СОЧНЫЕ РЕБРЫШКИ.",
    "hero.line3": "АТМОСФЕРА ПАБА.",
    "hero.subtitle": "Добро пожаловать в Munich Pub в Подгорице — место отличного настроения, душевной кухни и отличного пива.",
    "hero.btnMenu": "Смотреть Меню",
    "hero.btnCall": "Забронировать",
    "hero.hoursText": "Сегодня открыты: 08:00 – 01:00",
    "about.tag": "АТМОСФЕРА И ВКУС",
    "about.title": "Место с рок-н-ролльной душой и честной кухней",
    "vibe.card1Title": "Свежее Ледяное Пиво",
    "vibe.card1Desc": "Идеально налитое пиво для отдыха после рабочего дня или просмотра матча.",
    "vibe.card2Title": "Запеченные Ребрышки",
    "vibe.card2Desc": "Сочные, аппетитные, приготовленные по нашему фирменному рецепту.",
    "vibe.card3Title": "Настоящий Паб",
    "vibe.card3Desc": "Темное дерево, гитары на стенах и уютный рок-интерьер.",
    "menu.tag": "БОГАТЫЙ ВКУС",
    "menu.title": "Меню и Напитки",
    "menu.subtitle": "Все блюда готовятся из качественных и свежих продуктов.",
    "menu.catAll": "Все",
    "menu.catPub": "Паб Меню 🍖",
    "menu.catBurgers": "Бургеры 🍔",
    "menu.catBreakfast": "Завтраки 🍳",
    "menu.catTortilje": "Тортильи 🌯",
    "menu.catSendvici": "Сэндвичи 🥪",
    "menu.catRizoto": "Ризотто и Супы 🥣",
    "menu.catViski": "Виски 🥃",
    "menu.catVina": "Вина 🍷",
    "reviews.basedOn": "На основе 140+ отзывов в Google",
    "reviews.title": "Отзывы наших гостей",
    "cta.title": "Планируете вечер с друзьями?",
    "cta.desc": "Забронируйте столик заранее или заглядывайте на холодное пиво.",
    "cta.btn": "Позвонить и Заказать",
    "contacts.tag": "КОНТАКТЫ И АДРЕС",
    "contacts.title": "Как нас найти в Подгорице",
    "contacts.addressTitle": "Адрес",
    "contacts.getDirections": "Открыть Google Карты →",
    "contacts.phoneTitle": "Телефон бронирования",
    "contacts.hoursTitle": "Часы работы",
    "contacts.hoursWeek": "Понедельник – Суббота: 08:00 – 01:00",
    "contacts.hoursSun": "Воскресенье: 08:00 – 00:00",
    "contacts.openMapBtn": "Открыть Карта Навигации",
    "footer.tagline": "Настоящий паб в самом сердце Подгорицы."
  }
};

// FULL MENU DATA TRANSLATED PER LANGUAGE
const menuData = {
  pub: [
    {
      id: 'p1',
      price: '7.50€',
      weight: '400g',
      title: { sr: 'Pikantna zapečena rebarca', en: 'Spicy Baked Pork Ribs', ru: 'Пикантные запеченные ребрышки' },
      desc: { sr: 'Prilog: pekarski krompir, sos, crni luk i hleb', en: 'Served with baked potatoes, sauce, onion, and bread', ru: 'С картофелем, соусом, луком и хлебом' }
    },
    {
      id: 'p2',
      price: '8.00€',
      weight: '400g',
      title: { sr: 'Rebarca na kajmaku', en: 'Ribs in Kajmak Cream', ru: 'Ребрышки на каймаке' },
      desc: { sr: 'Kuvana pa zapečena na domaće kajmaku sa pekarskim krompirom', en: 'Slow cooked and baked with local kajmak cream & potatoes', ru: 'Томленые ребрышки, запеченные с каймаком и картофелем' }
    },
    {
      id: 'p3',
      price: '8.00€',
      weight: '1kom',
      title: { sr: 'Koljenica kuvana zapečena', en: 'Baked Pork Knuckle', ru: 'Запеченная рулька' },
      desc: { sr: 'Servirano sa pekarskim krompirom i hlebom', en: 'Served with oven baked potatoes and bread', ru: 'Подается с запеченным картофелем и хлебом' }
    },
    {
      id: 'p4',
      price: '12.50€',
      weight: '800g',
      title: { sr: 'Minhen Meza', en: 'Munich Platter', ru: 'Мюнхенская закуска' },
      desc: { sr: 'Pršut, kulen, pica štapići, masline i pomfrit', en: 'Prosciutto, kulen salami, pizza sticks, olives, and french fries', ru: 'Пршут, кулен, пицца-палочки, оливки и картофель фри' }
    },
    {
      id: 'p5',
      price: '3.90€',
      weight: '450g',
      title: { sr: 'Pasulj sa kobasicom', en: 'Bean Stew with Sausage', ru: 'Фасолевый суп с колбасками' },
      desc: { sr: 'Tradicijonalni pasulj sa junećom ili njeguškom kobasicom', en: 'Traditional bean stew served with beef or Njegus sausage', ru: 'Традиционная фасоль с говяжьей сосиской' }
    },
    {
      id: 'p6',
      price: '6.50€',
      weight: '550g',
      title: { sr: 'Gulaš sa prilogom', en: 'Beef Goulash', ru: 'Гуляш с гарниром' },
      desc: { sr: 'Prilog po izboru: pire, kuvani krompir ili makaroni', en: 'Choice of side: mashed potatoes, boiled potatoes, or pasta', ru: 'Гарнир на выбор: пюре, отварной картофель или макароны' }
    },
    {
      id: 'p7',
      price: '6.00€',
      weight: '320g',
      title: { sr: 'Pileći štapići sa susamom', en: 'Sesame Chicken Strips', ru: 'Куриные палочки с кунжутом' },
      desc: { sr: 'Prilog: pomfrit i hleb', en: 'Served with french fries and bread', ru: 'Подаются с картофелем фри и хлебом' }
    },
    {
      id: 'p8',
      price: '8.00€',
      weight: '400g',
      title: { sr: 'Piletina u gorgonzola sosu', en: 'Gorgonzola Chicken', ru: 'Курица в соусе горгонзола' },
      desc: { sr: 'Kremasti sos od gorgonzole, pomfrit i hleb', en: 'Rich gorgonzola cream sauce with fries and bread', ru: 'В сливочном соусе с горгонзолой, с фри и хлебом' }
    },
    {
      id: 'p9',
      price: '3.50€',
      weight: '150g',
      title: { sr: 'Pohovani kačkavalj', en: 'Fried Yellow Cheese', ru: 'Панированный сыр' },
      desc: { sr: 'Hrskavi pohovani sir', en: 'Crispy fried yellow cheese', ru: 'Хрустящий жареный сыр' }
    },
    {
      id: 'p10',
      price: '2.30€',
      weight: '160g',
      title: { sr: 'Pomfrit porcija', en: 'French Fries', ru: 'Картофель фри' },
      desc: { sr: 'Hrskavi zlatni pomfrit', en: 'Crispy golden french fries', ru: 'Порция хрустящего картофеля фри' }
    }
  ],
  burgers: [
    {
      id: 'b1',
      price: '4.40€',
      weight: '350g',
      title: { sr: 'Burger Classic', en: 'Classic Burger', ru: 'Классический бургер' },
      desc: { sr: 'Lepinja, juneće meso, mix salata i blagi sos + pomfrit', en: 'Beef patty, salad mix, signature mild sauce + fries', ru: 'Говяжья котлета, салат, фирменный соус + фри' }
    },
    {
      id: 'b2',
      price: '4.90€',
      weight: '370g',
      title: { sr: 'Cheeseburger', en: 'Cheeseburger', ru: 'Чизбургер' },
      desc: { sr: 'Lepinja, juneće meso, rastopljeni sir, mix salata + pomfrit', en: 'Beef patty, melted cheese, salad mix, sauce + fries', ru: 'Говяжья котлета, сыр, салат, соус + фри' }
    },
    {
      id: 'b3',
      price: '8.00€',
      weight: '510g',
      title: { sr: 'Dupli Cheeseburger', en: 'Double Cheeseburger', ru: 'Двойной чизбургер' },
      desc: { sr: 'Dve juneće pljeskavice, dupli sir, sos + pomfrit', en: 'Double beef patty, extra cheese, sauce + fries', ru: 'Двойная говяжья котлета, двойной сыр, соус + фри' }
    },
    {
      id: 'b4',
      price: '5.50€',
      weight: '390g',
      title: { sr: 'Minhen Burger (Ljuti)', en: 'Munich Spicy Burger', ru: 'Мюнхен Острый Бургер' },
      desc: { sr: 'Juneće meso, feferona, tucana paprika, ljuti sos + pomfrit', en: 'Beef patty, hot chili peppers, crushed pepper, spicy sauce + fries', ru: 'Говяжья котлета, острый перец, жгучий соус + фри' }
    },
    {
      id: 'b5',
      price: '6.50€',
      weight: '470g',
      title: { sr: 'Minhen Full Burger', en: 'Munich Full Burger', ru: 'Мюнхен Фулл Бургер' },
      desc: { sr: 'Juneće meso, hrskava pančeta, prženo jaje + pomfrit', en: 'Beef patty, crispy bacon, fried egg + fries', ru: 'Говяжья котлета, хрустящий бекон, яйцо + фри' }
    }
  ],
  breakfast: [
    {
      id: 'br1',
      price: '3.20€',
      weight: '250g',
      title: { sr: 'Domaće priganice', en: 'Traditional Fritters (Priganice)', ru: 'Домашние пончики (Приганице)' },
      desc: { sr: 'Prilog po izboru: domaći sir, med ili krem', en: 'Served with choice of local cheese, honey, or chocolate cream', ru: 'На выбор: домашний сыр, мед или шоколадный крем' }
    },
    {
      id: 'br2',
      price: '5.50€',
      weight: '300g',
      title: { sr: 'Hansov doručak', en: "Hans' Breakfast", ru: 'Завтрак Ганса' },
      desc: { sr: '3 jaja, juneća kobasica, feta sir, mix salata, sos i hleb', en: '3 eggs, beef sausage, feta cheese, salad, sauce, and bread', ru: '3 яйца, говяжья сосиска, фета, салат, соус и хлеб' }
    },
    {
      id: 'br3',
      price: '9.20€',
      weight: '800g',
      title: { sr: 'Minhen doručak za dvoje', en: 'Munich Breakfast for Two', ru: 'Завтрак Мюнхен на двоих' },
      desc: { sr: 'Omlet, pileći štapići, grilovani šampinjoni, mocarela, slanina, pomfrit', en: 'Omelette, chicken strips, grilled mushrooms, mozzarella, bacon, fries', ru: 'Омлет, куриные палочки, грилированные шампиньоны, моцарелла, бекон, фри' }
    },
    {
      id: 'br4',
      price: '4.20€',
      weight: '270g',
      title: { sr: 'Jaja sa slaninom', en: 'Eggs with Bacon', ru: 'Яичница с беконом' },
      desc: { sr: '3 jaja, hrskava slanina, paradajz, sos i hleb', en: '3 eggs, crispy bacon, tomato, sauce, and bread', ru: '3 яйца, бекон, томаты, соус и хлеб' }
    }
  ],
  tortilje: [
    {
      id: 't1',
      price: '5.50€',
      weight: '390g',
      title: { sr: 'Tortilja sa piletinom', en: 'Chicken Tortilla Wraps', ru: 'Тортилья с курицей' },
      desc: { sr: 'Piletina, sir, tikvice, šampinjoni, paprika + pomfrit i sos', en: 'Chicken, cheese, zucchini, mushrooms, peppers + fries & sauce', ru: 'Курица, сыр, кабачки, шампиньоны, перец + фри и соус' }
    },
    {
      id: 't2',
      price: '5.60€',
      weight: '370g',
      title: { sr: 'Tortilja sa kulenom', en: 'Kulen Salami Tortilla', ru: 'Тортилья с куленом' },
      desc: { sr: 'Kulen, rastopljeni sir, paradajz + pomfrit i sos', en: 'Kulen spicy salami, melted cheese, tomato + fries & sauce', ru: 'Острая колбаса кулен, сыр, томаты + фри и соус' }
    },
    {
      id: 't3',
      price: '5.80€',
      weight: '370g',
      title: { sr: 'Tortilja Meksikana', en: 'Mexicana Tortilla', ru: 'Тортилья Мексикана' },
      desc: { sr: 'Pasulj, kukuruz, piletina, pikantni sos + pomfrit', en: 'Beans, corn, chicken, spicy sauce + fries', ru: 'Фасоль, кукуруза, курица, пикантный соус + фри' }
    }
  ],
  sendvici: [
    {
      id: 's1',
      price: '4.20€',
      weight: '275g',
      title: { sr: 'Sendvič sa kobasicom', en: 'Bavarian Sausage Sandwich', ru: 'Сэндвич с колбаской' },
      desc: { sr: 'Bavarska kifla, juneća kobasica, salata, paradajz + pomfrit', en: 'Bavarian bun, beef sausage, lettuce, tomato + fries', ru: 'Баварская булочка, говяжья сосиска, салат, томаты + фри' }
    },
    {
      id: 's2',
      price: '5.00€',
      weight: '400g',
      title: { sr: 'Club Sendvič', en: 'Club Sandwich', ru: 'Клаб-сэндвич' },
      desc: { sr: 'Tost hleb, piletina, sir, slanina, jaje, salata + pomfrit', en: 'Toast bread, chicken, cheese, bacon, egg, salad + fries', ru: 'Тосты, куриное филе, сыр, бекон, яйцо, салат + фри' }
    }
  ],
  rizoto: [
    {
      id: 'r1',
      price: '5.60€',
      weight: '400g',
      title: { sr: 'Rižoto sa piletinom', en: 'Creamy Chicken Risotto', ru: 'Ризотто с курицей' },
      desc: { sr: 'Piletina, tikvice, šampinjoni, neutralna pavlaka, parmezan', en: 'Chicken, zucchini, mushrooms, cream, parmesan cheese', ru: 'Курица, кабачки, шампиньоны, сливки, пармезан' }
    },
    {
      id: 'r2',
      price: '3.00€',
      weight: '300ml',
      title: { sr: 'Teleća Čorba', en: 'Veal Soup', ru: 'Телячья чорба' },
      desc: { sr: 'Domaća čorba sa telećim mesom, povrćem i začinima', en: 'Traditional rich soup with tender veal and root vegetables', ru: 'Густой традиционный суп с телятиной и овощами' }
    }
  ],
  viski: [
    {
      id: 'w1',
      price: '3.90€',
      weight: '0.03 l',
      title: { sr: 'Jack Daniels', en: 'Jack Daniel\'s Old No. 7', ru: 'Jack Daniel\'s' },
      desc: { sr: 'Klasični američki tenesi viski', en: 'Classic Tennessee Whiskey', ru: 'Классический американский виски' }
    },
    {
      id: 'w2',
      price: '4.30€',
      weight: '0.03 l',
      title: { sr: 'Johnnie Walker Black', en: 'Johnnie Walker Black Label', ru: 'Johnnie Walker Black' },
      desc: { sr: 'Premium škotski viski 12 godina star', en: '12 Years Old Blended Scotch Whisky', ru: 'Шотландский купажированный виски 12 лет' }
    },
    {
      id: 'w3',
      price: '3.30€',
      weight: '0.03 l',
      title: { sr: 'Jameson', en: 'Jameson Irish Whiskey', ru: 'Jameson' },
      desc: { sr: 'Iski trostruko destilovani viski', en: 'Triple distilled Irish Whiskey', ru: 'Ирландский виски тройной дистилляции' }
    },
    {
      id: 'w4',
      price: '4.50€',
      weight: '0.03 l',
      title: { sr: 'Chivas Regal 12 YO', en: 'Chivas Regal 12 YO', ru: 'Chivas Regal 12 YO' },
      desc: { sr: 'Odležali blended škot', en: 'Aged blended Scotch whisky', ru: 'Выдержанный шотландский виски' }
    }
  ],
  vina: [
    {
      id: 'v1',
      price: '4.70€ / 23.00€',
      weight: '0.187 l / 0.75 l',
      title: { sr: 'Malvazija - Plantaže', en: 'Malvazija - Plantaže', ru: 'Мальвазия - Plantaže' },
      desc: { sr: 'Lokalno belo vino visoke svežine', en: 'Crisp Montenegrin local white wine', ru: 'Черногорское белое вино' }
    },
    {
      id: 'v2',
      price: '28.00€',
      weight: '0.75 l',
      title: { sr: 'Vladika - Plantaže', en: 'Vladika - Plantaže', ru: 'Владыка - Plantaže' },
      desc: { sr: 'Vrhunsko crveno vino iz Crne Gore', en: 'Premium Montenegrin red wine blend', ru: 'Премиальное сухое красное вино' }
    },
    {
      id: 'v3',
      price: '25.00€',
      weight: '0.75 l',
      title: { sr: 'Prosecco Mionetto', en: 'Prosecco Mionetto', ru: 'Prosecco Mionetto' },
      desc: { sr: 'Italijansko pjenušavo vino', en: 'Italian sparkling Prosecco', ru: 'Итальянское игристое вино' }
    }
  ]
};

const reviewsData = [
  {
    author: 'Lee J',
    rating: '★★★★★',
    text: {
      sr: 'Moja verenica i ja smo trenutno u Podgorici na odmoru iz Mančestera. Svratio sam u Munich Pub da odgledam utakmicu. Osoblje je izuzetno ljubazno i prijatno, usluga fantastična, a pivo ledeno, sveže i savršeno natočeno.',
      en: 'My fiancée and I visited Podgorica on holiday from Manchester. I stopped by Munich Pub to watch a football match on my phone. Friendly, polite staff, fantastic service, and a crisp, ice-cold pint of beer.',
      ru: 'Мы с невестой приехали в Подгорицу в отпуск. Зашел в Munich Pub посмотреть футбол. Персонал невероятно приветливый и вежливый, сервис отличный, а пиво — ледяное, свежее и идеально налитое.'
    }
  },
  {
    author: 'Ali KARADAĞ',
    rating: '★★★★★',
    text: {
      sr: 'Jedna pica lako može da nahrani troje ljudi. Odlična centralna lokacija i veoma pristupačne cene hrane i pića.',
      en: '1 pizza can easily feed 3 people! Central location and very affordable prices for both drinks and food.',
      ru: 'Одной пиццы спокойно хватает на троих. Центральное расположение и очень доступные цены на еду и напитки.'
    }
  },
  {
    author: 'Marko M.',
    rating: '★★★★★',
    text: {
      sr: 'Prava pub atmosfera u gradu! Rebarca na kajmaku su vrhunska, a izbor viskija i točenog piva odličan. Sve preporuke.',
      en: 'Authentic pub vibe! The baked ribs in kajmak cream are top notch, and the beer and whiskey selection is great.',
      ru: 'Настоящая атмосфера паба! Запеченные ребрышки на каймаке просто выше всяких похвал, и выбор напитков отличный.'
    }
  }
];

let currentLang = 'sr';
let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initLangSwitcher();
  initMobileNav();
  renderMenu();
  renderReviews();
  initTabs();
});

function initLangSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang && lang !== currentLang) {
        currentLang = lang;
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateTranslations();
        renderMenu();
        renderReviews();
      }
    });
  });
}

function updateTranslations() {
  const dict = translations[currentLang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.documentElement.lang = currentLang;
}

function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

function initTabs() {
  const tabs = document.querySelectorAll('.menu-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-category') || 'all';
      renderMenu();
    });
  });
}

function renderMenu() {
  const container = document.getElementById('menuContainer');
  if (!container) return;

  let itemsToRender = [];

  if (currentCategory === 'all') {
    Object.keys(menuData).forEach(cat => {
      itemsToRender = itemsToRender.concat(menuData[cat]);
    });
  } else if (menuData[currentCategory]) {
    itemsToRender = menuData[currentCategory];
  }

  container.innerHTML = itemsToRender.map(item => `
    <div class="menu-item-card">
      <div>
        <div class="menu-item-header">
          <h3 class="menu-item-title">${item.title[currentLang] || item.title['sr']}</h3>
          <span class="menu-item-price">${item.price}</span>
        </div>
        <p class="menu-item-desc">${item.desc[currentLang] || item.desc['sr']}</p>
      </div>
      <div>
        <span class="menu-item-weight">${item.weight}</span>
      </div>
    </div>
  `).join('');
}

function renderReviews() {
  const container = document.getElementById('reviewsContainer');
  if (!container) return;

  container.innerHTML = reviewsData.map(rev => `
    <div class="review-card">
      <div class="review-author">
        <span class="author-name">${rev.author}</span>
        <span class="review-stars">${rev.rating}</span>
      </div>
      <p class="review-text">"${rev.text[currentLang] || rev.text['sr']}"</p>
    </div>
  `).join('');
}