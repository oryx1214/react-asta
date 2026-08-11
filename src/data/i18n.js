export const languages = ['az', 'en', 'ru'];

export const routePaths = {
  home: 'main',
  about: 'about',
  structure: 'structure',
  members: 'members',
  becomeMember: 'become-member',
  audit: 'exhibitions-audit',
  news: 'industry-news',
  calendar: 'exhibition-calendar-in-Azerbaijan',
  contact: 'contact',
};

export const uiText = {
  az: {
    home: 'Ana səhifə',
    more: 'Daha ətraflı',
    send: 'Göndər',
    structureBack: 'Struktur səhifəsinə qayıt',
    relatedNews: 'Digər xəbərlər',
    newsBody: 'Bu bölmə statik HTML səhifəsindən React marşrutuna köçürülüb. Xəbərin tam mətni sonrakı mərhələdə CMS məzmunundan ayrıca data faylına çıxarıla bilər.',
    notFoundText: 'Bu ünvan üçün React marşrutu tapılmadı. Menyudan mövcud bölmələrdən birini seçə bilərsiniz.',
    footerText: 'Azərbaycan Sərgi Təşkilatçıları Assosiasiyası Azərbaycanda sərgi, yarmarka, konqres və tədbirlər sənayesində çalışan şirkətləri bir araya gətirən ictimai birlikdir.',
    copyright: 'Copyright © 2026. Bütün hüquqlar qorunur.',
    languageLabel: 'Dil seçimi',
    menuLabel: 'Menyu',
  },
  en: {
    home: 'Home',
    more: 'Read more',
    send: 'Send',
    structureBack: 'Back to structure',
    relatedNews: 'Other news',
    newsBody: 'This section has been moved from a static HTML page into a React route. The full news text can later be moved from the CMS content into a separate data file.',
    notFoundText: 'No React route was found for this address. Please choose one of the available sections from the menu.',
    footerText: 'Azerbaijan Exhibition Organizers Association brings together companies working in the exhibition, fair, congress and events industry in Azerbaijan.',
    copyright: 'Copyright © 2026. All rights reserved.',
    languageLabel: 'Language selection',
    menuLabel: 'Menu',
  },
  ru: {
    home: 'Главная',
    more: 'Подробнее',
    send: 'Отправить',
    structureBack: 'Вернуться к структуре',
    relatedNews: 'Другие новости',
    newsBody: 'Этот раздел перенесен из статической HTML-страницы в маршрут React. Полный текст новости позже можно вынести из CMS в отдельный файл данных.',
    notFoundText: 'Для этого адреса маршрут React не найден. Вы можете выбрать один из доступных разделов в меню.',
    footerText: 'Ассоциация организаторов выставок Азербайджана объединяет компании, работающие в сфере выставок, ярмарок, конгрессов и мероприятий в Азербайджане.',
    copyright: 'Copyright © 2026. Все права защищены.',
    languageLabel: 'Выбор языка',
    menuLabel: 'Меню',
  },
};

export const navByLang = {
  az: [
    { label: 'ASTA', href: '/az/about', children: [{ label: 'Haqqında', href: '/az/about' }, { label: 'Struktur', href: '/az/structure' }] },
    { label: 'ASTAda üzvlük', href: '/az/members', children: [{ label: 'Üzvlər', href: '/az/members' }, { label: 'Üzv ol', href: '/az/become-member' }] },
    { label: 'Sərgilərin auditi', href: '/az/exhibitions-audit' },
    { label: 'Sənaye xəbərləri', href: '/az/industry-news' },
    { label: 'Azərbaycanda sərgi təqvimi', href: '/az/exhibition-calendar-in-Azerbaijan' },
    { label: 'Bizimlə əlaqə', href: '/az/contact' },
  ],
  en: [
    { label: 'ASTA', href: '/en/about', children: [{ label: 'About', href: '/en/about' }, { label: 'Structure', href: '/en/structure' }] },
    { label: 'Membership', href: '/en/members', children: [{ label: 'Members', href: '/en/members' }, { label: 'Become a member', href: '/en/become-member' }] },
    { label: 'Exhibition audit', href: '/en/exhibitions-audit' },
    { label: 'Industry news', href: '/en/industry-news' },
    { label: 'Exhibition calendar in Azerbaijan', href: '/en/exhibition-calendar-in-Azerbaijan' },
    { label: 'Contact us', href: '/en/contact' },
  ],
  ru: [
    { label: 'ASTA', href: '/ru/about', children: [{ label: 'О нас', href: '/ru/about' }, { label: 'Структура', href: '/ru/structure' }] },
    { label: 'Членство в ASTA', href: '/ru/members', children: [{ label: 'Члены', href: '/ru/members' }, { label: 'Стать членом', href: '/ru/become-member' }] },
    { label: 'Аудит выставок', href: '/ru/exhibitions-audit' },
    { label: 'Новости отрасли', href: '/ru/industry-news' },
    { label: 'Календарь выставок в Азербайджане', href: '/ru/exhibition-calendar-in-Azerbaijan' },
    { label: 'Связаться с нами', href: '/ru/contact' },
  ],
};

export const pages = {
  az: {
    about: {
      title: 'Haqqında',
      paragraphs: [
        'Azərbaycan Sərgi Təşkilatçıları Assosiasiyası (ASTA) Azərbaycanda aparıcı sərgi təşkilatçılarını, sərgi salonları və mərkəzlərini, sərgi, yarmarka, konqres və tədbirlər sənayesində fəaliyyət göstərən xidmət şirkətlərini bir araya gətirən ictimai birlikdir.',
        'Birliyin əsas məqsədi sərgi təşkilatçılarının fəaliyyətinin əlaqələndirilməsinə, onların arasında bilik və təcrübə mübadiləsinin təmin edilməsinə kömək etməkdir.',
      ],
      tasksTitle: 'ASTA-nın əsas vəzifələri',
      tasks: ['Ölkəmizdə sərgilərin inkişafına zəmin yaratmaq', 'Sərgi təşkilatçılarını maarifləndirmək', 'Bu sahədə mövcud olan yeni texnologiyaları tətbiq etmək', 'Sərgi təşkilatçılığı mədəniyyətinin və səmərəliliyin artırılmasına yardım etmək', 'Beynəlxalq təcrübəni öyrənmək və Azərbaycanda tətbiq etmək'],
    },
    titles: { structure: 'Struktur', members: 'Üzvlər', becomeMember: 'Üzv ol', audit: 'Sərgilərin auditi', news: 'Sənaye xəbərləri', calendar: 'Azərbaycanda sərgi təqvimi', contact: 'Əlaqə', notFound: 'Səhifə tapılmadı' },
    audit: ['ASTA Azərbaycanda UFI (Ümumdünya Sərgi Sənayesi Assosiasiyası) tərəfindən sərgi auditlərinin aparılmasına icazə verilmiş yeganə strukturdur.', 'Sərgi statistikasının auditi müstəqil auditorun sərginin statistik parametrlərini yoxladığı və təsdiq etdiyi prosedurdur: iştirakçıların, ziyarətçilərin sayı, sərgi sahəsi, iştirakçı ölkələrin sayı və siyahısı. Parametrlər UFI Audit Qaydalarına uyğun olaraq yoxlanılır.'],
    contactFields: ['Adınız', 'Email', 'Telefon', 'Mövzu'],
    message: 'Mesajınız',
    joinFields: ['Şirkət', 'Fəaliyyət növü', 'Ünvan', 'Telefon', 'Veb Sayt', 'Şirkət haqqında qısa məlumat', 'Əlaqə üçün şəxs', 'Email', 'Əlaqə nömrəsi'],
  },
  en: {
    about: {
      title: 'About',
      paragraphs: [
        'Azerbaijan Exhibition Organizers Association (ASTA) is a public association that brings together leading exhibition organizers, venues, centers and service companies operating in the exhibition, fair, congress and events industry in Azerbaijan.',
        'The main purpose of the association is to support coordination among exhibition organizers and to encourage the exchange of knowledge and experience between them.',
      ],
      tasksTitle: 'ASTA key objectives',
      tasks: ['Create conditions for the development of exhibitions in the country', 'Educate exhibition organizers', 'Apply new technologies available in the industry', 'Support better exhibition culture and efficiency', 'Study international experience and apply it in Azerbaijan'],
    },
    titles: { structure: 'Structure', members: 'Members', becomeMember: 'Become a member', audit: 'Exhibition audit', news: 'Industry news', calendar: 'Exhibition calendar in Azerbaijan', contact: 'Contact', notFound: 'Page not found' },
    audit: ['ASTA is the only organization in Azerbaijan authorized by UFI, the Global Association of the Exhibition Industry, to conduct exhibition audits.', 'An exhibition statistics audit is a procedure in which an independent auditor checks and confirms exhibition statistics: number of exhibitors and visitors, exhibition area, and the number and list of participating countries. The parameters are checked according to UFI Audit Rules.'],
    contactFields: ['Name', 'Email', 'Phone', 'Subject'],
    message: 'Message',
    joinFields: ['Company', 'Activity type', 'Address', 'Phone', 'Website', 'Short company description', 'Contact person', 'Email', 'Contact number'],
  },
  ru: {
    about: {
      title: 'О нас',
      paragraphs: [
        'Ассоциация организаторов выставок Азербайджана (ASTA) является общественным объединением, которое объединяет ведущих организаторов выставок, выставочные площадки, центры и сервисные компании, работающие в сфере выставок, ярмарок, конгрессов и мероприятий в Азербайджане.',
        'Главная цель ассоциации - содействовать координации деятельности организаторов выставок и обмену знаниями и опытом между ними.',
      ],
      tasksTitle: 'Основные задачи ASTA',
      tasks: ['Создавать условия для развития выставок в стране', 'Повышать квалификацию организаторов выставок', 'Внедрять новые технологии в отрасли', 'Способствовать развитию культуры и эффективности выставочной деятельности', 'Изучать международный опыт и применять его в Азербайджане'],
    },
    titles: { structure: 'Структура', members: 'Члены', becomeMember: 'Стать членом', audit: 'Аудит выставок', news: 'Новости отрасли', calendar: 'Календарь выставок в Азербайджане', contact: 'Контакты', notFound: 'Страница не найдена' },
    audit: ['ASTA является единственной структурой в Азербайджане, уполномоченной UFI, Всемирной ассоциацией выставочной индустрии, проводить аудит выставок.', 'Аудит выставочной статистики - это процедура, при которой независимый аудитор проверяет и подтверждает статистические параметры выставки: количество участников и посетителей, выставочную площадь, число и список стран-участниц. Параметры проверяются в соответствии с правилами аудита UFI.'],
    contactFields: ['Имя', 'Email', 'Телефон', 'Тема'],
    message: 'Сообщение',
    joinFields: ['Компания', 'Вид деятельности', 'Адрес', 'Телефон', 'Веб-сайт', 'Краткая информация о компании', 'Контактное лицо', 'Email', 'Контактный номер'],
  },
};

const leaderBase = [
  { slug: 'ferid-memmedov', image: 'farid-mammadov.jpg', name: { az: 'Fərid Məmmədov', en: 'Farid Mammadov', ru: 'Фарид Мамедов' } },
  { slug: 'behruz-hidayetzade', image: 'behruz-hidayetzade.jpg', name: { az: 'Bəhruz Hidayətzadə', en: 'Behruz Hidayatzade', ru: 'Бехруз Хидаятзаде' } },
  { slug: 'ilham-huseynov', image: '9ff20.png', name: { az: 'İlham Hüseynov', en: 'Ilham Huseynov', ru: 'Ильхам Гусейнов' } },
  { slug: 'elmira-agayeva', image: '4ff20.png', name: { az: 'Elmira Ağayeva', en: 'Elmira Aghayeva', ru: 'Эльмира Агаева' } },
];

const leaderCopy = {
  az: {
    role: ['İdarə heyətinin sədri, ASTA', 'İdarə heyətinin üzvü, ASTA', 'İdarə heyətinin üzvü, ASTA', 'Baş katib, ASTA'],
    bio: ['ASTA-nın idarə heyətinin sədri kimi sərgi sənayesinin inkişafı, beynəlxalq əməkdaşlıq və üzv şirkətlər arasında koordinasiya istiqamətlərinə rəhbərlik edir.', 'Sərgi və tədbir sənayesində peşəkar təcrübəsi ilə assosiasiyanın idarəetmə və inkişaf fəaliyyətində iştirak edir.', 'ASTA-nın strateji təşəbbüslərində, üzvlərlə əməkdaşlıqda və sahə üzrə yeni imkanların formalaşdırılmasında iştirak edir.', 'Assosiasiyanın gündəlik koordinasiyası, üzvlərlə kommunikasiya və təşkilati proseslərin aparılmasına dəstək verir.'],
  },
  en: {
    role: ['Chairman of the Board, ASTA', 'Board member, ASTA', 'Board member, ASTA', 'Secretary General, ASTA'],
    bio: ['As chairman of ASTA, he leads the development of the exhibition industry, international cooperation and coordination between member companies.', 'He contributes to the management and development of the association with professional experience in the exhibition and events industry.', 'He participates in ASTA strategic initiatives, cooperation with members and the creation of new opportunities for the sector.', 'She supports daily coordination, member communication and organizational processes of the association.'],
  },
  ru: {
    role: ['Председатель правления, ASTA', 'Член правления, ASTA', 'Член правления, ASTA', 'Генеральный секретарь, ASTA'],
    bio: ['Как председатель правления ASTA он руководит развитием выставочной индустрии, международным сотрудничеством и координацией между компаниями-членами.', 'Участвует в управлении и развитии ассоциации, опираясь на профессиональный опыт в выставочной и event-индустрии.', 'Участвует в стратегических инициативах ASTA, работе с членами и формировании новых возможностей для отрасли.', 'Поддерживает ежедневную координацию, коммуникацию с членами и организационные процессы ассоциации.'],
  },
};

export function getLeaders(lang = 'az') {
  return leaderBase.map((person, index) => ({
    ...person,
    name: person.name[lang],
    role: leaderCopy[lang].role[index],
    bio: leaderCopy[lang].bio[index],
  }));
}

const newsBase = [
  {
    slug: '1-iyun-tarixinde-baki-ekspo-merkezinde-baki-enerji-heftesi-baku-energy-week-oz-ishine-bashlayib',
    date: { az: '1 iyun 2026, 10:00', en: '1 June 2026, 10:00', ru: '1 июня 2026, 10:00' },
    image: 'ERA_CMS_IMG_72_1736165311.png',
    body: {
      az: [
        'Bakı Enerji Həftəsinin ən mühüm hadisəsi Azərbaycan Prezidenti İlham Əliyevin rəsmi açılış mərasimində etdiyi çıxış oldu. Dövlət başçısı vurğuladı ki, Azərbaycanın qlobal neft strategiyası ölkənin müstəqillik tarixində mühüm mərhələ hesab olunan “Əsrin müqaviləsi” ilə ayrılmaz şəkildə bağlıdır.',
        'Daha sonra ABŞ Prezidenti Donald Trampın, Türkiyə Prezidenti Rəcəb Tayyib Ərdoğanın və Böyük Britaniyanın Baş naziri Kir Starmerin sərgi iştirakçılarına ünvanladıqları təbrik məktubları səsləndirildi.',
        'Açılış mərasimində ABŞ Dövlət Katibinin iqtisadi, enerji və biznes məsələləri üzrə köməkçisi Keyleb Orr, Türkiyənin Enerji və Təbii Sərvətlər Naziri Alparslan Bayraktar, Böyük Britaniyanın Şərqi Avropa və Mərkəzi Asiya üzrə Ticarət Komissarı Devid Rid və digər rəsmi qonaqlar çıxış etdilər.',
        'Bu il “Bakı Enerji Həftəsi”ndə dünyanın 44 ölkəsindən 274 şirkət iştirakını təsdiqləyib. İştirakçıların təxminən 60%-i xarici şirkətləri təmsil edir ki, bu da beynəlxalq əməkdaşlığın yüksək səviyyəsini nümayiş etdirir.',
      ],
      en: [
        'The most significant event of Baku Energy Week was the speech delivered by the President of Azerbaijan, Ilham Aliyev, at the official opening ceremony. The Head of State emphasized that Azerbaijan’s global oil strategy is inseparably linked to the historic “Contract of the Century”.',
        'This was followed by the reading of welcome letters addressed to the exhibition from the President of the United States, Donald Trump, the President of Türkiye, Recep Tayyip Erdogan, and the Prime Minister of the United Kingdom, Keir Starmer.',
        'Speakers at the opening ceremony included Assistant Secretary of State for Economic, Energy, and Business Affairs of the United States Caleb Orr, Türkiye’s Minister of Energy and Natural Resources Alparslan Bayraktar, the United Kingdom’s Trade Commissioner for Eastern Europe and Central Asia David Reed, and other official guests.',
        'This year, 274 companies from 44 countries confirmed their participation in Baku Energy Week. Around 60% of the exhibitors represent foreign companies, highlighting the high level of international cooperation.',
      ],
      ru: [
        'Важнейшим событием Бакинской энергетической недели стало выступление Президента Азербайджана Ильхама Алиева на официальной церемонии открытия. Глава государства подчеркнул, что глобальная нефтяная стратегия Азербайджана неразрывно связана со знаменательным “Контрактом века”.',
        'Во время церемонии открытия были зачитаны приветственные письма, направленные президентом США Дональдом Трампом, президентом Турции Реджепом Эрдоганом и премьер-министром Великобритании Киром Стармером.',
        'На церемонии открытия выступили помощник государственного секретаря США по экономическим, энергетическим и бизнес-вопросам Калеб Орр, министр энергетики и природных ресурсов Турции Алпарслан Байрактар, торговый комиссар Великобритании по Восточной Европе и Центральной Азии Дэвид Рид и другие официальные гости.',
        'В этом году участие в Baku Energy Week подтвердили 274 компании из 44 стран мира. Около 60% экспонентов представляют зарубежные компании, что подчеркивает высокий уровень международного сотрудничества.',
      ],
    },
  },
  { slug: 'bugunden-etibaren-baki-ekspo-merkezinde-7-ci-yerli-shirketlerin-tanitim-sergisi-oz-ishine-bashlayib', date: { az: '17 iyun 2026, 17:29', en: '17 June 2026, 17:29', ru: '17 июня 2026, 17:29' }, image: 'ERA_CMS_IMG_23_1785936705.jpg' },
  { slug: 'bakida-umumdunya-shehersalma-forumunun-13-cu-sessiyasi--wuf13-oz-ishine-bashlayib', date: { az: '17 may 2026, 10:00', en: '17 May 2026, 10:00', ru: '17 мая 2026, 10:00' }, image: 'ERA_CMS_IMG_44_1785843583.jpg' },
  { slug: '5-may-tarixinde-baki-ekspo-merkezinde-19-cu-azerbaycan-beynelxalq-kend-teserrufati-sergi-ve-forumu--caspian-agro-week-ve-31-ci-azerbaycan-beynelxalq-qida-senayesi-sergisi--interfood-azerbaijan-sergilerinin-resmi-achilish-merasimi-kechirilmishdir', date: { az: '5 may 2026, 16:55', en: '5 May 2026, 16:55', ru: '5 мая 2026, 16:55' }, image: 'ERA_CMS_IMG_13_1785934665.jpg' },
  { slug: 'azerbaycan-sergi-teshkilatchilari-assosiasiyasi-asta-ve-xezer-universiteti-mmc-arasinda-emekdashliq-memorandumu-imzalanib', date: { az: '15 may 2025, 15:00', en: '15 May 2025, 15:00', ru: '15 мая 2025, 15:00' }, image: 'ERA_CMS_IMG_98_1756367003.png' },
  { slug: 'azerbaycan-sergi-teshkilatchilari-assosiasiyasinin-asta-marsol-group-uchun-sergi-turu-teshkil-etdi', date: { az: '14 may 2025, 14:00', en: '14 May 2025, 14:00', ru: '14 мая 2025, 14:00' }, image: 'ERA_CMS_IMG_47_1756366336.png' },
  { slug: 'azerbaycan-sergi-teshkilatchilari-assosiasiyasinin-idare-heyetinin-sedri-konstitusiya-ve-suverenlik-movzusunda-kechirilen-konfransda-ishtirak-etdi', date: { az: '25 aprel 2025, 11:00', en: '25 April 2025, 11:00', ru: '25 апреля 2025, 11:00' }, image: 'ERA_CMS_IMG_81_1772013762.png' },
  { slug: 'ferid-memmedov-azerbaycan-ispaniya-biznes-forumunda-sergi-teshkilatchilari-assosiasiyasini-temsil-etdi', date: { az: '11 mart 2025, 10:00', en: '11 March 2025, 10:00', ru: '11 марта 2025, 10:00' }, image: 'ERA_CMS_IMG_58_1756361729.png' },
  { slug: 'sergide-ugurlu-ishtirakin-formulu-nedir-24-fevral-2025-ci-ilde-radisson-hotel-baku-mehmanxanasinda-kechirilecek-intensiv-praktiki-seminara-qatilmagin-tam-vaxtidir', date: { az: '24 fevral 2025, 10:00', en: '24 February 2025, 10:00', ru: '24 февраля 2025, 10:00' }, image: 'ERA_CMS_IMG_14_1740390750.png' },
  { slug: 'azerbaycan-sergi-teshkilatchilari-assosiasiyasi-ufi-terefinden-sergi-auditi-aparmaq-huququnu-alib', date: { az: '2024', en: '2024', ru: '2024' }, image: 'ERA_CMS_IMG_29_1739949199.jpg' },
];

const newsCopy = {
  az: [
    ['1 iyun tarixində Bakı Ekspo Mərkəzində Bakı Enerji Həftəsi (Baku Energy Week) öz işinə başlayıb', 'Bakı Ekspo Mərkəzində üç mühüm tədbiri birləşdirən “Bakı Enerji Həftəsi”nə start verilib: Caspian Oil and Gas, Caspian Power və Bakı Enerji Forumu. Həftə çərçivəsində TransLogistica Caspian sərgisi də keçirilir.'],
    ['Bugündən etibarən Bakı Ekspo Mərkəzində “7-ci Yerli Şirkətlərin Tanıtım Sərgisi” öz işinə başlayıb', 'Sərgidə inşaat, qida, İKT, təhsil, sənaye, kənd təsərrüfatı, logistika, tekstil və digər sahələrdə fəaliyyət göstərən 300-dən çox yerli şirkətin məhsul və xidmətləri nümayiş olunur.'],
    ['Bakıda Ümumdünya Şəhərsalma Forumunun 13-cü sessiyası — WUF13 öz işinə başlayıb', 'ASTA üzvləri Urban Expo sərgisində stendlərin qurulmasında və sərginin idarə olunmasında aktiv iştirak edirlər. Sərgidə dünyanın 85 ölkəsindən 260 şirkət iştirak edir.'],
    ['5 may tarixində Bakı Ekspo Mərkəzində Caspian Agro Week və InterFood Azerbaijan sərgilərinin rəsmi açılış mərasimi keçirilmişdir', '19-cu Azərbaycan Beynəlxalq Kənd Təsərrüfatı Sərgi və Forumu və 31-ci Azərbaycan Beynəlxalq Qida Sənayesi Sərgisinin rəsmi açılış mərasimi Bakı Ekspo Mərkəzində keçirilmişdir.'],
    ['Azərbaycan Sərgi Təşkilatçıları Assosiasiyası (ASTA) və Xəzər Universiteti MMC arasında əməkdaşlıq memorandumu imzalanıb', '18-ci Caspian Agro və 30-cu Yubiley InterFood Azerbaijan sərgiləri çərçivəsində əməkdaşlıq memorandumu imzalanıb.'],
    ['Azərbaycan Sərgi Təşkilatçıları Assosiasiyası (ASTA) Marsol Group üçün sərgi turu təşkil etdi', 'Azərbaycan Sərgi Təşkilatçıları Assosiasiyasının nümayəndələri biznes icması üçün sərgi turu keçirib.'],
    ['İdarə Heyətinin sədri “Konstitusiya və Suverenlik” mövzusunda keçirilən konfransda iştirak etdi', 'ASTA nümayəndələri sahibkarlığın inkişafı və sənaye əməkdaşlığına həsr olunmuş konfransda iştirak ediblər.'],
    ['Fərid Məmmədov Azərbaycan-İspaniya Biznes Forumunda Sərgi Təşkilatçıları Assosiasiyasını təmsil etdi', 'Forumda beynəlxalq tədbir sənayesində tərəfdaşlıq imkanları və yeni əməkdaşlıq formatları müzakirə olunub.'],
    ['Sərgidə uğurlu iştirakın formulu nədir?', 'Sərgi iştirakçıları və stend qurucuları üçün intensiv praktiki seminar keçirilib.'],
    ['ASTA UFI tərəfindən sərgi auditi aparmaq hüququnu alıb', 'Assosiasiya Azərbaycanda sərgi statistikalarının auditini aparmaq hüququ əldə edib.'],
  ],
  en: [
    ['On June 1, Baku Expo Center hosted the opening of Baku Energy Week', 'Baku Energy Week opened at Baku Expo Center, bringing together Caspian Oil and Gas, Caspian Power and the Baku Energy Forum. TransLogistica Caspian is also being held within the framework of the week.'],
    ['The 7th Local Companies Promotion Exhibition has officially opened today at the Baku Expo Center', 'More than 300 local companies operating in construction, food production, ICT, education, industry, agriculture, logistics, textiles and other fields are presenting their products and services.'],
    ['The 13th session of the World Urban Forum — WUF13 has officially started in Baku', 'ASTA members are actively involved in the construction of exhibition stands and in the management of Urban Expo, which brings together 260 companies from 85 countries.'],
    ['The official opening ceremony of Caspian Agro Week and InterFood Azerbaijan took place at the Baku Expo Center', 'The opening ceremony of the 19th Azerbaijan International Agriculture Exhibition and Forum and the 31st Azerbaijan International Food Industry Exhibition was held at Baku Expo Center.'],
    ['ASTA and Khazar University LLC signed a memorandum of cooperation', 'The memorandum was signed during the 18th Caspian Agro and the 30th anniversary InterFood Azerbaijan exhibitions.'],
    ['ASTA organized an exhibition tour for Marsol Group', 'Representatives of the association held an exhibition tour for the business community.'],
    ['Chairman of the Board attended a conference on Constitution and Sovereignty', 'ASTA representatives took part in a conference dedicated to entrepreneurship development and industrial cooperation.'],
    ['Farid Mammadov represented ASTA at the Azerbaijan-Spain Business Forum', 'The forum discussed partnership opportunities and new cooperation formats in the international events industry.'],
    ['What is the formula for successful exhibition participation?', 'An intensive practical seminar was held for exhibitors and stand builders.'],
    ['ASTA received the right from UFI to conduct exhibition audits', 'The association obtained the right to audit exhibition statistics in Azerbaijan.'],
  ],
  ru: [
    ['1 июня в Баку Экспо Центре стартовала Бакинская энергетическая неделя', 'В Баку Экспо Центре стартовала Baku Energy Week, объединившая Caspian Oil and Gas, Caspian Power и Бакинский энергетический форум. В рамках недели также проходит выставка TransLogistica Caspian.'],
    ['Сегодня в Баку Экспо Центре начала работу 7-я Выставка продвижения местных компаний', 'На выставке представлены продукция и услуги более 300 местных компаний из сфер строительства, пищевой промышленности, ИКТ, образования, промышленности, сельского хозяйства, логистики, текстиля и других направлений.'],
    ['В Баку начала работу 13-я сессия Всемирного форума городов — WUF13', 'Члены ASTA активно участвуют в строительстве выставочных стендов и управлении Urban Expo, где представлены 260 компаний из 85 стран мира.'],
    ['В Баку Экспо Центре состоялась официальная церемония открытия Caspian Agro Week и InterFood Azerbaijan', 'В Баку Экспо Центре прошла церемония открытия 19-й Азербайджанской международной выставки и форума сельского хозяйства и 31-й Азербайджанской международной выставки пищевой промышленности.'],
    ['ASTA и ООО «Университет Хазар» подписали меморандум о сотрудничестве', 'Меморандум был подписан в рамках 18-й Caspian Agro и 30-й юбилейной выставки InterFood Azerbaijan.'],
    ['ASTA организовала выставочный тур для Marsol Group', 'Представители ассоциации провели выставочный тур для бизнес-сообщества.'],
    ['Председатель правления принял участие в конференции на тему Конституции и суверенитета', 'Представители ASTA приняли участие в конференции, посвященной развитию предпринимательства и промышленному сотрудничеству.'],
    ['Фарид Мамедов представил ASTA на Азербайджано-испанском бизнес-форуме', 'На форуме обсудили возможности партнерства и новые форматы сотрудничества в международной event-индустрии.'],
    ['Какова формула успешного участия в выставке?', 'Для участников выставок и строителей стендов был проведен интенсивный практический семинар.'],
    ['ASTA получила от UFI право проводить аудит выставок', 'Ассоциация получила право проводить аудит выставочной статистики в Азербайджане.'],
  ],
};

export function getNews(lang = 'az') {
  return newsBase.map((item, index) => ({
    ...item,
    title: newsCopy[lang][index][0],
    excerpt: newsCopy[lang][index][1],
    date: item.date[lang],
    body: item.body?.[lang],
  }));
}

export const calendarTitles = {
  az: ['19-ci Azərbaycan Beynəlxalq Kənd Təsərrüfatı Sərgisi', '31-ci Azərbaycan Beynəlxalq Qida Sənayesi Sərgisi', '14-cü Xəzər Beynəlxalq Mehmanxana, Restoran və Supermarketlər üçün Avadanlıq və Ləvazimatlar Sərgisi', '23-ci Xəzər Beynəlxalq Nəqliyyat, Tranzit və Logistika Sərgisi', '14-cü Xəzər Beynəlxalq Energetika və Yaşıl Enerji Sərgisi', '31-ci Bakı Enerji Forumu', '31-ci Beynəlxalq Xəzər Neft və Qaz Sərgisi', '2-ci Xəzər Beynəlxalq Nəqliyyat və Logistika Forumu', '6-cı Azərbaycan Beynəlxalq Müdafiə Sərgisi', '15-ci Yubiley Beynəlxalq Daxili Təhlükəsizlik, Mühafizə və Xilasetmə Avadanlıqları Sərgisi', '6-ci Azərbaycan Beynəlxalq Qarabağın Bərpa, Yenidənqurma və İnkişafı Sərgisi', '31-ci Azərbaycan Beynəlxalq İnşaat Sərgisi', '18-ci Beynəlxalq İstilik, Havalandırma, Kondisionerləşdirilmə, Su təchizatı, Santexnika və Üzgüçülük Hovuzu Sərgisi', '5-ci Yubiley Xəzər Beynəlxalq Plastik və Polimer Sənayesi Sərgisi', '14-cü Xəzər Beynəlxalq Yol İnfrastrukturu və İctimai Nəqliyyat Sərgisi'],
  en: ['19th Azerbaijan International Agriculture Exhibition', '31st Azerbaijan International Food Industry Exhibition', '14th Caspian International Exhibition for Hospitality, Restaurant and Supermarket Equipment', '23rd Caspian International Transport, Transit and Logistics Exhibition', '14th Caspian International Power and Green Energy Exhibition', '31st Baku Energy Forum', '31st International Caspian Oil and Gas Exhibition', '2nd Caspian International Transport and Logistics Forum', '6th Azerbaijan International Defence Exhibition', '15th Anniversary International Internal Security, Safety and Rescue Equipment Exhibition', '6th Azerbaijan International Restoration, Reconstruction and Development of Karabakh Exhibition', '31st Azerbaijan International Construction Exhibition', '18th International Heating, Ventilation, Air Conditioning, Water Supply, Sanitary and Swimming Pool Exhibition', '5th Anniversary Caspian International Plastics and Polymer Industry Exhibition', '14th Caspian International Road Infrastructure and Public Transport Exhibition'],
  ru: ['19-я Азербайджанская международная сельскохозяйственная выставка', '31-я Азербайджанская международная выставка пищевой промышленности', '14-я Каспийская международная выставка оборудования для гостиниц, ресторанов и супермаркетов', '23-я Каспийская международная выставка транспорта, транзита и логистики', '14-я Каспийская международная выставка энергетики и зеленой энергии', '31-й Бакинский энергетический форум', '31-я Международная каспийская выставка нефти и газа', '2-й Каспийский международный форум транспорта и логистики', '6-я Азербайджанская международная оборонная выставка', '15-я юбилейная международная выставка оборудования для внутренней безопасности, охраны и спасения', '6-я Азербайджанская международная выставка восстановления, реконструкции и развития Карабаха', '31-я Азербайджанская международная строительная выставка', '18-я международная выставка отопления, вентиляции, кондиционирования, водоснабжения, сантехники и бассейнов', '5-я юбилейная Каспийская международная выставка пластика и полимерной промышленности', '14-я Каспийская международная выставка дорожной инфраструктуры и общественного транспорта'],
};

export function getLangFromPath(path) {
  const lang = path.split('/')[1];
  return languages.includes(lang) ? lang : 'az';
}

export function withLang(lang, key, suffix = '') {
  return `/${lang}/${routePaths[key]}${suffix}`;
}

export function switchLanguagePath(path, lang) {
  const parts = path.split('/').filter(Boolean);
  if (languages.includes(parts[0])) {
    parts[0] = lang;
    return `/${parts.join('/')}`;
  }
  return `/${lang}/main`;
}
