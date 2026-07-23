// Translations Dictionary
const translations = {
    id: {
        first_name: "Muhammad",
        last_name: "Renaldi",
        nav_home: "BERANDA",
        nav_about: "TENTANG",
        nav_hobby: "HOBI",
        nav_project: "PROYEK",
        nav_skill: "KEAHLIAN",
        nav_contact: "KONTAK",
        nav_resume: "REKRUT SAYA",
        hero_name: "Muhammad Renaldi",
        hero_badge_1: "Web Developer",
        hero_badge_2: "Tech Enthusiast",
        hero_badge_3: "Animanga Enthusiast",
        hero_badge_4: "Car Enthusiast",
        hero_btn_projects: "Lihat Proyek Saya",
        hero_btn_discord: "Ngobrol di Discord",
        about_title: "Muhammad Renaldi",
        about_aka: "Aka: Rendi/Renzu",
        about_lang_skills: "Fasih: ID/ENG | Dasar: JP/PH",
        about_motto: "\"Kenapa aku Warga Negara Indonesia <span style='filter: grayscale(100%);'>😭</span>\"",
        about_desc: "Halo, saya Muhammad Renaldi, biasa dipanggil <strong>Rendi</strong>. Sebagai mahasiswa Teknik Informatika di Universitas Islam Kalimantan Muhammad Arsyad Al-Banjari Banjarmasin yang sangat bersemangat dalam membangun solusi digital, saya berpengalaman mengembangkan aplikasi web adaptif dan membangun sistem informasi data dari nol.<div style=\"margin-top: 0.8rem;\"></div>Di luar akademik, minat saya mencakup hardware komputer dan inovasi otomotif, serta menikmati musik dan budaya animanga sebagai penyeimbang rutinitas.",
        hobby_1_title: "Coding",
        hobby_1_desc: "Membangun solusi digital dan bereksplorasi dengan berbagai bahasa pemrograman.",
        hobby_2_title: "Teknologi Terbaru",
        hobby_2_desc: "Selalu mengikuti perkembangan dan inovasi terbaru di dunia teknologi dan gadget.",
        hobby_3_title: "Gaming",
        hobby_3_desc: "Menikmati berbagai genre permainan video untuk hiburan dan mengasah strategi.",
        hobby_4_title: "Anime & Komik",
        hobby_4_desc: "Mengisi waktu luang dengan menonton seri anime favorit dan membaca komik atau manga.",
        hobby_5_title: "Musik",
        hobby_5_desc: "Mendengarkan berbagai genre musik untuk menjaga fokus dan produktivitas.",
        hobby_6_title: "Otomotif",
        hobby_6_desc: "Mengikuti perkembangan inovasi otomotif dan mengeksplorasi modifikasi kendaraan.",
        project_1_title: "Aplikasi Pengelolaan Kegiatan Kesbangpol Banjarmasin",
        project_1_desc: "Aplikasi manajemen data berbasis web komprehensif yang dikembangkan untuk Badan Kesatuan Bangsa dan Politik. Dibangun menggunakan PHP native dengan portal akses khusus dan penyortiran dinamis.",
        project_2_title: "Sistem Informasi Eksplorasi Tempat Wisata di&nbsp;Banjarmasin",
        project_2_desc: "Sistem pemetaan digital untuk memvisualisasikan lokasi dan informasi tempat wisata di wilayah Banjarmasin, membantu wisatawan dan masyarakat lokal dalam menjelajahi destinasi menarik.",
        project_3_title: "Sebelum Kita Mati\n(Sedang dikerjakan)",
        project_3_desc: "Sebuah game visual novel di mana waktu yang tersisa tidaklah banyak. Perjalanan emosional dua karakter yang berpacu melawan takdir tragis. Setiap Pilihan akan menentukan bagaimana sisa hari mereka diukir menjadi kenangan abadi.",
        project_4_title: "Academic Pre-Thesis Portal",
        project_4_desc: "Modul presentasi terstruktur dan alat evaluasi untuk proposal akademik. Platform ini memudahkan mahasiswa dan dosen dalam melacak perkembangan proposal. (Dalam Pengembangan)",
        skill_1_title: "Website Developer (Fullstack)",
        skill_2_title: "Game Developer (Fullstack)",
        contact_phone: "Telepon",
        form_name: "Nama",
        form_email: "Email",
        form_subject: "Subjek",
        form_message: "Pesan",
        form_clear: "Bersihkan pesan",
        form_send: "Kirim Pesan"
    },
    en: {
        first_name: "Muhammad",
        last_name: "Renaldi",
        nav_home: "HOME",
        nav_about: "ABOUT",
        nav_hobby: "HOBBY",
        nav_project: "PROJECT",
        nav_skill: "SKILL",
        nav_contact: "CONTACT",
        nav_resume: "HIRE ME",
        hero_name: "Muhammad Renaldi",
        hero_badge_1: "Web Developer",
        hero_badge_2: "Tech Enthusiast",
        hero_badge_3: "Animanga Enthusiast",
        hero_badge_4: "Car Enthusiast",
        hero_btn_projects: "View My Projects",
        hero_btn_discord: "Chat on Discord",
        about_title: "Muhammad Renaldi",
        about_aka: "Aka: Rendi/Renzu",
        about_lang_skills: "Fluent: ID/ENG | Basic: JP/PH",
        about_motto: "\"Why am I an Indonesian <span style='filter: grayscale(100%);'>😭</span>\"",
        about_desc: "Hello, I am Muhammad Renaldi, usually called <strong>Rendi</strong>. As an Informatics Engineering student at the Islamic University of Kalimantan Muhammad Arsyad Al-Banjari Banjarmasin who is very passionate about building digital solutions, I am experienced in developing adaptive web applications and building data information systems from scratch.<div style=\"margin-top: 0.8rem;\"></div>Outside of academics, my interests include computer hardware and automotive innovation, as well as enjoying music and animanga culture to balance my routine.",
        hobby_1_title: "Coding",
        hobby_1_desc: "Building digital solutions and exploring various programming languages.",
        hobby_2_title: "Latest Technology",
        hobby_2_desc: "Keeping up with the latest developments and innovations in tech and gadgets.",
        hobby_3_title: "Gaming",
        hobby_3_desc: "Enjoying various video game genres for entertainment and strategic thinking.",
        hobby_4_title: "Anime & Comics",
        hobby_4_desc: "Spending free time watching favorite anime series and reading comics or manga.",
        hobby_5_title: "Music",
        hobby_5_desc: "Listening to various music genres to maintain focus and productivity.",
        hobby_6_title: "Automotive",
        hobby_6_desc: "Following automotive innovation developments and exploring vehicle modifications.",
        project_1_title: "Kesbangpol Banjarmasin Activity Management System",
        project_1_desc: "A comprehensive web-based data management application developed for the National Unity and Politics Agency. Built using native PHP with custom access portals and dynamic sorting.",
        project_2_title: "Geographic Information System for Tourist Attraction Exploration in Banjarmasin",
        project_2_desc: "A digital mapping system to visualize locations and information of tourist attractions in the Banjarmasin area, helping tourists and local communities explore interesting destinations.",
        project_3_title: "Before We Die\n(In Development)",
        project_3_desc: "A visual novel game where time is running out. The emotional journey of two characters racing against a tragic fate. Every Choice will determine how their remaining days are carved into unforgettable memories.",
        project_4_title: "Academic Pre-Thesis Portal",
        project_4_desc: "Structured presentation modules and evaluation tools for academic proposals. This platform makes it easier for students and lecturers to track proposal progress. (In Development)",
        skill_1_title: "Website Developer (Fullstack)",
        skill_2_title: "Game Developer (Fullstack)",
        contact_phone: "Phone",
        form_name: "Name",
        form_email: "Email",
        form_subject: "Subject",
        form_message: "Message",
        form_clear: "Clear message",
        form_send: "Send Message"
    },
    ru: {
        first_name: "Мухаммад",
        last_name: "Реналди",
        nav_home: "ГЛАВНАЯ",
        nav_about: "ОБО МНЕ",
        nav_hobby: "ХОББИ",
        nav_project: "ПРОЕКТ",
        nav_skill: "НАВЫКИ",
        nav_contact: "КОНТАКТЫ",
        nav_resume: "НАЙМИТЕ МЕНЯ",
        hero_name: "Мухаммад Реналди",
        hero_badge_1: "Веб-разработчик",
        hero_badge_2: "Техно-энтузиаст",
        hero_badge_3: "Поклонник Аниманги",
        hero_badge_4: "Автолюбитель",
        hero_btn_projects: "Мои Проекты",
        hero_btn_discord: "Чат в Discord",
        about_title: "Мухаммад Реналди",
        about_aka: "Ака: Ренди/Рензу",
        about_lang_skills: "Свободно: ID/ENG | Базовый: JP/PH",
        about_motto: "\"Почему я индонезиец <span style='filter: grayscale(100%);'>😭</span>\"",
        about_desc: "Здравствуйте, я Мухаммад Реналди, обычно меня зовут <strong>Ренди</strong>. Будучи студентом факультета информатики Исламского университета Калимантана им. Мухаммада Арсяда Аль-Банджари Банджармасин, который очень увлечен созданием цифровых решений, я имею опыт разработки адаптивных веб-приложений и создания информационных систем с нуля.<div style=\"margin-top: 0.8rem;\"></div>Вне учебы я интересуюсь компьютерным оборудованием и автомобильными инновациями, а также наслаждаюсь музыкой и культурой аниманги для баланса рутины.",
        hobby_1_title: "Программирование",
        hobby_1_desc: "Создание цифровых решений и изучение различных языков программирования.",
        hobby_2_title: "Новые технологии",
        hobby_2_desc: "Отслеживание последних событий и инноваций в мире технологий и гаджетов.",
        hobby_3_title: "Игры",
        hobby_3_desc: "Увлечение видеоиграми разных жанров для развлечения и развития стратегии.",
        hobby_4_title: "Аниме и комиксы",
        hobby_4_desc: "Просмотр любимых аниме-сериалов и чтение комиксов или манги в свободное время.",
        hobby_5_title: "Музыка",
        hobby_5_desc: "Прослушивание музыки разных жанров для поддержания внимания и продуктивности.",
        hobby_6_title: "Автомобили",
        hobby_6_desc: "Слежу за развитием автомобильных инноваций и изучаю модификации транспортных средств.",
        project_1_title: "Система управления деятельностью Kesbangpol Banjarmasin",
        project_1_desc: "Комплексное веб-приложение для управления данными, разработанное для Агентства национального единства и политики. Построено на нативном PHP со специальными порталами доступа и динамической сортировкой.",
        project_2_title: "Информационная система для исследования туристических достопримечательностей в Банджармасине",
        project_2_desc: "Система цифрового картографирования для визуализации местоположения и информации о туристических достопримечательностях в районе Банджармасин, помогающая туристам и местным жителям исследовать интересные места.",
        project_3_title: "Прежде чем мы умрем\n(В разработке)",
        project_3_desc: "Визуальная новелла, где времени осталось мало. Эмоциональное путешествие двух персонажей, борющихся с трагической судьбой. Каждый Выбор определит, как их оставшиеся дни превратятся в незабываемые воспоминания.",
        project_4_title: "Академический портал преддипломных работ",
        project_4_desc: "Структурированные модули презентаций и инструменты оценки академических предложений. Платформа облегчает студентам и преподавателям отслеживание прогресса предложений. (В разработке)",
        skill_1_title: "Веб-разработчик (Fullstack)",
        skill_2_title: "Разработчик игр (Fullstack)",
        contact_phone: "Телефон",
        form_name: "Имя",
        form_email: "Эл. почта",
        form_subject: "Тема",
        form_message: "Сообщение",
        form_clear: "Очистить",
        form_send: "Отправить"
    },
    ja: {
        first_name: "ムハンマド",
        last_name: "レナルディ",
        nav_home: "ホーム",
        nav_about: "私について",
        nav_hobby: "趣味",
        nav_project: "プロジェクト",
        nav_skill: "スキル",
        nav_contact: "連絡先",
        nav_resume: "私を雇う",
        hero_name: "ムハンマド・レナルディ",
        hero_badge_1: "Web開発者",
        hero_badge_2: "テクノロジー愛好家",
        hero_badge_3: "アニマンガ愛好家",
        hero_badge_4: "車好き",
        hero_btn_projects: "私のプロジェクト",
        hero_btn_discord: "Discordでチャット",
        about_title: "ムハンマド・レナルディ",
        about_aka: "別名: レンディ / レンズ",
        about_lang_skills: "流暢: ID/ENG | 基礎: JP/PH",
        about_motto: "「なぜ私はインドネシア人なのか <span style='filter: grayscale(100%);'>😭</span>」",
        about_desc: "こんにちは、ムハンマド・レナルディです。普段は<strong>レンディ</strong>と呼ばれています。デジタルソリューションの構築に非常に情熱を注ぐカリマンタン・イスラム大学ムハンマド・アルシャド・アル・バンジャリ・バンジャルマシンの情報工学の学生として、私は適応性の高いウェブアプリケーションの開発やデータ情報システムのゼロからの構築に経験があります。<div style=\"margin-top: 0.8rem;\"></div>学業の傍ら、私はコンピュータハードウェアや自動車の革新に関心があり、日常のバランスを取るために音楽やアニマンガ文化を楽しんでいます。",
        hobby_1_title: "コーディング",
        hobby_1_desc: "デジタルソリューションを構築し、さまざまなプログラミング言語を探求すること。",
        hobby_2_title: "最新テクノロジー",
        hobby_2_desc: "テクノロジーやガジェットの世界における最新の動向と革新に遅れずについていくこと。",
        hobby_3_title: "ゲーム",
        hobby_3_desc: "娯楽や戦略的思考のために様々なジャンルのビデオゲームを楽しむこと。",
        hobby_4_title: "アニメと漫画",
        hobby_4_desc: "自由な時間に好きなアニメを見たり、漫画やコミックを読んだりすること。",
        hobby_5_title: "音楽",
        hobby_5_desc: "集中力と生産性を維持するために、様々なジャンルの音楽を聴くこと。",
        hobby_6_title: "自動車",
        hobby_6_desc: "自動車の革新の発展を追い、車両の改造を探求すること。",
        project_1_title: "Kesbangpol Banjarmasin 活動管理システム",
        project_1_desc: "国家統一政治局のために開発された包括的なウェブベースのデータ管理アプリケーション。カスタムアクセス機能と動的ソートを備えたネイティブPHPを使用して構築されています。",
        project_2_title: "バンジャルマシンの観光スポット探索のための地理情報システム",
        project_2_desc: "バンジャルマシン地域の観光スポットの場所と情報を視覚化するためのデジタルマッピングシステム。観光客や地元の人々が魅力的な目的地を探索するのに役立ちます。",
        project_3_title: "私たちが死ぬ前に\n（開発中）",
        project_3_desc: "残された時間が少ないビジュアルノベルゲーム。悲劇的な運命に抗う二人のキャラクターの感情的な旅。すべての「選択」が、彼らの残された日々を忘れられない思い出としてどう刻むかを決定します。",
        project_4_title: "アカデミック卒業論文事前ポータル",
        project_4_desc: "学術提案のための構造化されたプレゼンテーションモジュールと評価ツール。このプラットフォームにより、学生と講師が提案の進捗を簡単に追跡できます。（開発中）",
        skill_1_title: "ウェブ開発者 (Fullstack)",
        skill_2_title: "ゲーム開発者 (Fullstack)",
        contact_phone: "電話",
        form_name: "名前",
        form_email: "メール",
        form_subject: "件名",
        form_message: "メッセージ",
        form_clear: "クリア",
        form_send: "送信する"
    },
    tl: {
        first_name: "Muhammad",
        last_name: "Renaldi",
        nav_home: "SIMULA",
        nav_about: "TUNGKOL",
        nav_hobby: "LIBANGAN",
        nav_project: "PROYEKTO",
        nav_skill: "KASANAYAN",
        nav_contact: "UGNAYAN",
        nav_resume: "KUNIN AKO",
        hero_name: "Muhammad Renaldi",
        hero_badge_1: "Web Developer",
        hero_badge_2: "Tech Enthusiast",
        hero_badge_3: "Animanga Enthusiast",
        hero_badge_4: "Car Enthusiast",
        hero_btn_projects: "Tingnan ang Proyekto",
        hero_btn_discord: "Chat sa Discord",
        about_title: "Muhammad Renaldi",
        about_aka: "Aka: Rendi/Renzu",
        about_lang_skills: "Matatas: ID/ENG | Batayan: JP/PH",
        about_motto: "\"Bakit ako isang Indonesian <span style='filter: grayscale(100%);'>😭</span>\"",
        about_desc: "Kamusta, ako si Muhammad Renaldi, karaniwang tinatawag na <strong>Rendi</strong>. Bilang isang mag-aaral ng Informatics Engineering sa Islamic University of Kalimantan Muhammad Arsyad Al-Banjari Banjarmasin na labis na masigasig sa pagbuo ng mga digital na solusyon, mayroon akong karanasan sa pagbuo ng mga adaptive na web application at paggawa ng mga data information system mula sa simula.<div style=\"margin-top: 0.8rem;\"></div>Sa labas ng akademya, ang aking mga interes ay kinabibilangan ng computer hardware at automotive innovation, at nasisiyahan sa musika at animanga culture upang balansehin ang aking gawain.",
        hobby_1_title: "Coding",
        hobby_1_desc: "Pagbuo ng mga digital na solusyon at pag-explore sa iba't ibang programming languages.",
        hobby_2_title: "Pinakabagong Teknolohiya",
        hobby_2_desc: "Pagsunod sa mga pinakabagong pag-unlad at inobasyon sa mundo ng teknolohiya at gadgets.",
        hobby_3_title: "Gaming",
        hobby_3_desc: "Pag-enjoy sa iba't ibang genre ng video game para sa libangan at madiskarteng pag-iisip.",
        hobby_4_title: "Anime at Komiks",
        hobby_4_desc: "Paggugol ng libreng oras sa panonood ng mga paboritong anime at pagbabasa ng komiks o manga.",
        hobby_5_title: "Musika",
        hobby_5_desc: "Pakikinig sa iba't ibang genre ng musika upang mapanatili ang pokus at pagiging produktibo.",
        hobby_6_title: "Automotive",
        hobby_6_desc: "Pagsunod sa mga pag-unlad ng inobasyon sa sasakyan at pag-explore sa mga pagbabago sa sasakyan.",
        project_1_title: "Sistema sa Pamamahala ng Aktibidad ng Kesbangpol Banjarmasin",
        project_1_desc: "Isang komprehensibong web-based na aplikasyon sa pamamahala ng data na binuo para sa National Unity and Politics Agency. Binuo gamit ang native PHP na may pasadyang mga access portal at dinamikong pag-uuri.",
        project_2_title: "Geographic Information System para sa Pag-explore ng mga Tourist Attraction sa Banjarmasin",
        project_2_desc: "Isang digital mapping system upang mailarawan ang mga lokasyon at impormasyon ng mga tourist attraction sa lugar ng Banjarmasin, na tumutulong sa mga turista at lokal na komunidad na mag-explore ng mga kawili-wiling destinasyon.",
        project_3_title: "Bago Tayo Mamatay\n(Kasalukuyang Binubuo)",
        project_3_desc: "Isang visual novel game kung saan kakaunti na lang ang natitirang oras. Ang emosyonal na paglalakbay ng dalawang karakter na nakikipaglaban sa isang malagim na tadhana. Ang bawat Pagpipilian ay magpapasya kung paano uukitin ang kanilang mga natitirang araw bilang mga hindi malilimutang alaala.",
        project_4_title: "Academic Pre-Thesis Portal",
        project_4_desc: "Mga naka-istrukturang module ng presentasyon at mga tool sa pagsusuri para sa mga akademikong panukala. Pinapadali ng platform na ito para sa mga mag-aaral at lektor na subaybayan ang pag-usad ng panukala. (Nasa Pagbuo)",
        skill_1_title: "Website Developer (Fullstack)",
        skill_2_title: "Game Developer (Fullstack)",
        contact_phone: "Telepono",
        form_name: "Pangalan",
        form_email: "Email",
        form_subject: "Paksa",
        form_message: "Mensahe",
        form_clear: "I-clear",
        form_send: "Ipadala"
    }
};

// Initialize Lucide icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const langDropdown = document.getElementById('lang-dropdown');
    const langBtn = document.getElementById('lang-btn');
    const langMenu = document.getElementById('lang-menu');
    const currentLangText = document.getElementById('current-lang');
    const langOptions = langMenu.querySelectorAll('li');

    const musicDropdown = document.getElementById('music-dropdown');
    const musicBtn = document.getElementById('music-btn');
    const musicMenu = document.getElementById('music-menu');
    const musicOptions = musicMenu.querySelectorAll('li');
    const iconPlaying = document.getElementById('icon-playing');
    const iconMuted = document.getElementById('icon-muted');
    
    // Mobile menu variables
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const headerNavWrapper = document.getElementById('header-nav-wrapper');

    function updateMusicIcon(isPlaying) {
        if (isPlaying) {
            iconPlaying.style.display = 'block';
            iconMuted.style.display = 'none';
            musicBtn.classList.add('is-playing');
        } else {
            iconPlaying.style.display = 'none';
            iconMuted.style.display = 'block';
            musicBtn.classList.remove('is-playing');
        }
    }

    const bgmTracks = {
        'id_song': 'assets/music/rapsodi.mp3',
        'en_song': 'assets/music/you.mp3',
        'ru_song': 'assets/music/kino.mp3',
        'ja_song': 'assets/music/yorushika.mp3',
        'tl_song': 'assets/music/multo.mp3'
    };
    const bgmAudio = document.getElementById('bgmAudio') || new Audio();
    bgmAudio.loop = false;
    bgmAudio.volume = 0.5;
    
    bgmAudio.addEventListener('ended', () => {
        updateMusicIcon(false);
        const offOpt = Array.from(musicOptions).find(opt => opt.getAttribute('data-value') === 'off');
        if (offOpt) {
            musicOptions.forEach(opt => opt.classList.remove('active'));
            offOpt.classList.add('active');
        }
    });
    
    let hasInteracted = false;

    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
        musicDropdown.classList.remove('open');
    });

    musicBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        musicDropdown.classList.toggle('open');
        langDropdown.classList.remove('open');
    });

    // Toggle mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (headerNavWrapper) headerNavWrapper.classList.toggle('open');
            langDropdown.classList.remove('open');
            musicDropdown.classList.remove('open');
        });
    }

    // Close dropdowns and mobile menu when clicking outside
    document.addEventListener('click', () => {
        langDropdown.classList.remove('open');
        musicDropdown.classList.remove('open');
        if (headerNavWrapper) headerNavWrapper.classList.remove('open');
    });

    // Language Translation Logic
    function translatePage(lang) {
        const texts = translations[lang];
        if (!texts) return;
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (texts[key]) {
                element.innerHTML = texts[key];
            }
        });
    }

    // Set default language on load
    translatePage('id');
    const defaultLangOption = Array.from(langOptions).find(opt => opt.getAttribute('data-value') === 'id');
    if (defaultLangOption) defaultLangOption.classList.add('active');

    // Music Options Logic
    musicOptions.forEach(option => {
        option.addEventListener('click', () => {
            const val = option.getAttribute('data-value');
            const text = option.innerText;
            
            musicOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            hasInteracted = true; // Count explicit click as interaction
            
            if (val === 'off') {
                bgmAudio.pause();
                updateMusicIcon(false);
            } else {
                bgmAudio.src = bgmTracks[val];
                bgmAudio.play();
                updateMusicIcon(true);
            }
        });
    });


    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const val = option.getAttribute('data-value');
            
            // Update UI
            currentLangText.textContent = val.toUpperCase();
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Translate
            translatePage(val);
            
            // Close dropdown immediately to prevent accidental double clicks on other items
            langDropdown.classList.remove('open');
        });
    });

    // Handle scroll for active state
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu
            if (headerNavWrapper) headerNavWrapper.classList.remove('open');
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                window.scrollTo({
                    top: targetSection.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Hero Animations ---
    // --- Hero Animations ---
    const canvas = document.getElementById('constellation-canvas');

    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        let stars = [];
        let shootingStars = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        }

        function initStars() {
            stars = [];
            // Create a dense starfield
            for(let i = 0; i < 200; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    opacity: Math.random(),
                    speed: Math.random() * 0.05, // very slow parallax upward drift
                    twinkleSpeed: Math.random() * 0.01 + 0.005
                });
            }
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function spawnShootingStar() {
            shootingStars.push({
                x: Math.random() * canvas.width * 1.5, // Start further right
                y: 0,
                length: Math.random() * 100 + 50, // Longer tails
                speed: Math.random() * 4 + 2, // Slower, graceful fall
                opacity: 0.8
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Stars
            stars.forEach(star => {
                // No drift, just static twinkling for a calm night sky
                
                // Twinkle effect
                star.opacity += star.twinkleSpeed;
                if (star.opacity > 1 || star.opacity < 0.2) {
                    star.twinkleSpeed *= -1;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });

            // Draw Shooting Stars
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                let s = shootingStars[i];
                s.x -= s.speed;
                s.y += s.speed;
                s.opacity -= 0.015;

                if (s.opacity <= 0) {
                    shootingStars.splice(i, 1);
                    continue;
                }

                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x + s.length, s.y - s.length);
                ctx.strokeStyle = `rgba(255, 255, 255, ${s.opacity})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }

            // Randomly spawn shooting stars (rare)
            if (Math.random() < 0.005) {
                spawnShootingStar();
            }

            requestAnimationFrame(animate);
        }
        animate();
    }

    // --- Scroll Animations ---
    const fadeElements = document.querySelectorAll('.fade-up');
    if (fadeElements.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        const fadeObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => fadeObserver.observe(el));
    }

    // --- Contact Form Logic ---
    const contactForm = document.getElementById('contactForm');
    const clearBtn = document.getElementById('clearBtn');
    
    if (contactForm && clearBtn) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        const checkInputs = () => {
            let hasValue = false;
            inputs.forEach(input => {
                if (input.value.trim() !== '') {
                    hasValue = true;
                }
            });
            clearBtn.style.display = hasValue ? 'flex' : 'none';
        };

        inputs.forEach(input => {
            input.addEventListener('input', checkInputs);
        });

        clearBtn.addEventListener('click', () => {
            contactForm.reset();
            checkInputs();
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Honeypot validation
            const honeypot = document.getElementById('website_url');
            if (honeypot && honeypot.value !== '') {
                // Silently ignore bot submission
                console.warn('Bot detected.');
                return;
            }

            // Basic Sanitization function
            const sanitize = (str) => {
                return str.replace(/[<>"'&]/g, function (char) {
                    switch (char) {
                        case '<': return '&lt;';
                        case '>': return '&gt;';
                        case '&': return '&amp;';
                        case '"': return '&quot;';
                        case "'": return '&#39;';
                        default: return char;
                    }
                });
            };

            const subject = sanitize(document.getElementById('subject').value);
            const message = sanitize(document.getElementById('message').value);
            const name = sanitize(document.getElementById('name').value);
            const body = `Halo, saya ${name}.\n\n${message}`;
            
            const mailtoLink = `mailto:muhammad.renaldi1309@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        });
    }

    // --- Anti-Scraping / Content Protection ---
    // Disable Right Click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Disable certain keyboard shortcuts (F12, Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+C)
    document.addEventListener('keydown', (e) => {
        if (
            e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
            (e.ctrlKey && (e.key === 'U' || e.key === 'S'))
        ) {
            e.preventDefault();
        }
    });

    // Disable text selection
    document.addEventListener('selectstart', (e) => {
        // Allow selection inside the contact form inputs
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });
});
