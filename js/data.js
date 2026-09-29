/**
 * data.js - נתוני בסיס ומאגר הידע של איי.איי אלקטרוניקה בע"מ
 * מותאם במדויק להנחיות פרויקט גמר 53500 של ג'ון ברייס
 */

const COMPANY_INFO = {
  name: "איי.איי אלקטרוניקה בע\"מ",
  englishName: "AI Electronics Ltd.",
  companyId: "515-678-923",
  taxType: "עוסק מורשה",
  address: "רחוב הברזל 30, רמת החייל, תל אביב",
  phone: "03-555-1234",
  email: "support@ai-electronics.co.il",
  salesEmail: "sales@ai-electronics.co.il",
  website: "www.ai-electronics.co.il",
  vatRate: 0.18, // 18% מע"מ לפי החוק מ-1.1.2025
  vatRatePre2025: 0.17
};

// קטלוג מוצרים מורחב ומלא המייצג את מוצרי החברה
const INITIAL_PRODUCTS = [
  {
    id: "PROD-101",
    name: "Apple iPhone 16 Pro 256GB - טיטניום טבעי",
    category: "סמארטפונים",
    price: 4999,
    cost: 3950,
    stock: 14,
    minStock: 5,
    description: "מסך 6.3 אינץ' Super Retina XDR, מעבד A18 Pro, מערך מצלמות משולש 48MP, כפתור Camera Control, יבואן רשמי C-Data עם שנתיים אחריות.",
    sku: "IPH16P-256-NT",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-102",
    name: "Samsung Galaxy S25 Ultra 512GB - Titanium Black",
    category: "סמארטפונים",
    price: 5299,
    cost: 4100,
    stock: 9,
    minStock: 4,
    description: "מעבד Snapdragon 8 Elite, מסך 6.8 אינץ' Dynamic AMOLED 2X, עט S-Pen מובנה, מצלמת 200MP וזום X100, אחריות סאני יבואן רשמי לשנתיים.",
    sku: "S25U-512-TB",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-103",
    name: "Xiaomi 14 Ultra 512GB Leica - Black",
    category: "סמארטפונים",
    price: 4299,
    cost: 3350,
    stock: 8,
    minStock: 3,
    description: "עדשות Leica אופטיות מקצועיות עם חיישן 1 אינץ', מעבד Snapdragon 8 Gen 3, טעינה מהירה 90W וטעינה אלחוטית 80W, שנתיים אחריות המילטון.",
    sku: "MI14U-512-BK",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-104",
    name: "Google Pixel 9 Pro 256GB - Porcelain",
    category: "סמארטפונים",
    price: 3899,
    cost: 3050,
    stock: 12,
    minStock: 4,
    description: "מעבד Google Tensor G4, מסך 6.3 אינץ' Super Actua OLED, בינה מלאכותית Gemini Nano מובנית במערכת, מצלמות AI מתקדמות ושנתיים אחריות.",
    sku: "PIX9P-256-PC",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-105",
    name: "OnePlus 12 512GB - Silky Black",
    category: "סמארטפונים",
    price: 3399,
    cost: 2650,
    stock: 15,
    minStock: 4,
    description: "מעבד Snapdragon 8 Gen 3, מצלמת Hasselblad דור 4, סוללת ענק 5400mAh עם טעינה אולטרה-מהירה 100W SuperVOOC, שנתיים אחריות יבואן רשמי.",
    sku: "OP12-512-SB",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-106",
    name: "Apple MacBook Pro 14 M4 (16GB / 512GB SSD) - Space Black",
    category: "מחשבים ניידים",
    price: 7899,
    cost: 6500,
    stock: 6,
    minStock: 3,
    description: "שבב Apple M4 מהיר במיוחד, מסך Liquid Retina XDR מרהיב, חיי סוללה של עד 24 שעות, 3 חיבורי Thunderbolt 4, אחריות יבואן רשמי.",
    sku: "MBP14-M4-512",
    warrantyMonths: 12,
    officialImporter: true
  },
  {
    id: "PROD-107",
    name: "Dell XPS 15 9530 Core i7-13700H 32GB 1TB SSD RTX 4060",
    category: "מחשבים ניידים",
    price: 8490,
    cost: 6900,
    stock: 4,
    minStock: 2,
    description: "מחשב עבודה ומולטימדיה עילאי, מסך OLED 3.5K מגע, כרטיס גרפי GeForce RTX 4060, 3 שנות אחריות Dell באתר הלקוח.",
    sku: "DELL-XPS15-9530",
    warrantyMonths: 36,
    officialImporter: true
  },
  {
    id: "PROD-108",
    name: "Lenovo ThinkPad X1 Carbon Gen 12 (Core Ultra 7 / 32GB / 1TB SSD)",
    category: "מחשבים ניידים",
    price: 8190,
    cost: 6600,
    stock: 5,
    minStock: 2,
    description: "מחשב מנהלים קל משקל רק 1.09 ק\"ג, שלדת סיבי פחמן בתקן צבאי, מסך 14 אינץ' 2.8K OLED, 3 שנות אחריות יבואן רשמי Premier באתר הלקוח.",
    sku: "LNV-X1C-G12",
    warrantyMonths: 36,
    officialImporter: true
  },
  {
    id: "PROD-109",
    name: "Asus ROG Zephyrus G16 OLED (Core Ultra 9 / RTX 4070 / 32GB / 1TB)",
    category: "מחשבים ניידים",
    price: 9290,
    cost: 7600,
    stock: 3,
    minStock: 2,
    description: "מחשב גיימינג ויצירת תוכן אולטרה-פרימיום, מסך ROG Nebula OLED 240Hz, שלדת אלומיניום CNC דקה, שנתיים אחריות אסוס יבואן רשמי.",
    sku: "ASUS-G16-U9",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-110",
    name: "Apple iPad Pro 11 אינץ' M4 (WiFi 256GB) - Space Black",
    category: "טאבלטים",
    price: 4390,
    cost: 3500,
    stock: 8,
    minStock: 3,
    description: "מסך Ultra Retina XDR חדשני בטכנולוגיית Tandem OLED, דק במיוחד רק 5.3 מ\"מ, תמיכה ב-Apple Pencil Pro ו-Magic Keyboard, אחריות יבואן רשמי.",
    sku: "IPAD-P11-M4-256",
    warrantyMonths: 12,
    officialImporter: true
  },
  {
    id: "PROD-111",
    name: "Apple iPad Air 13 אינץ' M2 (WiFi 128GB) - Starlight",
    category: "טאבלטים",
    price: 3790,
    cost: 3050,
    stock: 10,
    minStock: 3,
    description: "מסך ענק 13 אינץ' Liquid Retina, מעבד Apple M2 עוצמתי, רמקולי סטריאו לרוחב, תמיכה ב-Center Stage ו-WiFi 6E, אחריות יבואן רשמי.",
    sku: "IPAD-AIR13-M2",
    warrantyMonths: 12,
    officialImporter: true
  },
  {
    id: "PROD-112",
    name: "Samsung Galaxy Tab S9 Ultra 512GB (WiFi) + עט S-Pen",
    category: "טאבלטים",
    price: 4690,
    cost: 3750,
    stock: 6,
    minStock: 2,
    description: "מסך ענק 14.6 אינץ' Dynamic AMOLED 2X ב-120Hz, מעבד Snapdragon 8 Gen 2, עמידות במים ואבק IP68, שנתיים אחריות סאני יבואן רשמי.",
    sku: "TAB-S9U-512",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-113",
    name: "אוזניות ביטול רעשים Sony WH-1000XM5 - שחור",
    category: "אודיו",
    price: 1249,
    cost: 890,
    stock: 22,
    minStock: 6,
    description: "סינון רעשים מוביל שוק עם 8 מיקרופונים ושני מעבדים, חיי סוללה של 30 שעות, איכות שיחה צלולה ביותר, יבואן רשמי ישפאר לשנה.",
    sku: "SNY-WH1000XM5-B",
    warrantyMonths: 12,
    officialImporter: true
  },
  {
    id: "PROD-114",
    name: "Apple AirPods Pro 2 עם מארז MagSafe (USB-C)",
    category: "אודיו",
    price: 949,
    cost: 720,
    stock: 35,
    minStock: 10,
    description: "שבב H2, סינון רעשים אקטיבי פי 2 יותר מקודמו, שמע מרחבי מותאם אישית, עמידות במים ואבק IP54, אחריות יבואן רשמי C-Data.",
    sku: "AIRPODS-PRO2-USBC",
    warrantyMonths: 12,
    officialImporter: true
  },
  {
    id: "PROD-115",
    name: "אוזניות Bose QuietComfort Ultra - Smoke White",
    category: "אודיו",
    price: 1490,
    cost: 1100,
    stock: 14,
    minStock: 4,
    description: "אודיו מרחבי פורץ דרך Bose Immersive Audio, ביטול רעשים אגדי בדרגת עלית, התאמה אישית CustomTune, עד 24 שעות נגינה, אחריות ניופאן לשנה.",
    sku: "BOSE-QCU-SW",
    warrantyMonths: 12,
    officialImporter: true
  },
  {
    id: "PROD-116",
    name: "רמקול בלוטות' Marshall Stanmore III - Black & Brass",
    category: "אודיו",
    price: 1590,
    cost: 1180,
    stock: 11,
    minStock: 3,
    description: "סאונד במה רחב ועוצמתי של 80W, עיצוב רטרו קלאסי ומרהיב של מרשל, קישוריות Bluetooth 5.2 ו-RCA/AUX, שנתיים אחריות יבואן רשמי.",
    sku: "MSH-STAN3-BK",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-117",
    name: "שעון חכם Garmin Fenix 8 AMOLED 47mm",
    category: "מכשירים לבישים",
    price: 4399,
    cost: 3450,
    stock: 5,
    minStock: 2,
    description: "שעון ספורט ושטח מתקדם ביותר, מסך AMOLED בהיר במיוחד, רמקול ומיקרופון מובנים לשיחות, חיי סוללה של 16 ימים, אחריות רונלייט יבואן רשמי לשנתיים.",
    sku: "GRMN-FNX8-47A",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-118",
    name: "Apple Watch Ultra 2 GPS + Cellular 49mm טיטניום",
    category: "מכשירים לבישים",
    price: 3699,
    cost: 2950,
    stock: 7,
    minStock: 3,
    description: "גוף טיטניום מוקשח בתקן צבאי, מסך 3000 nits הנקרא בשמש ישירה, GPS כפול תדרים מדויק, עמידות בצלילה עד 40 מטר, שנתיים אחריות יבואן רשמי.",
    sku: "AW-ULTRA2-49",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-119",
    name: "Samsung Galaxy Watch Ultra LTE 47mm - Titanium Gray",
    category: "מכשירים לבישים",
    price: 2499,
    cost: 1950,
    stock: 9,
    minStock: 3,
    description: "שעון הרפתקאות וספורט אקסטרים, שלדת טיטניום עמידה בעומסים, עמידות במים 10ATM, מעבד 3nm מהיר עם Galaxy AI, שנתיים אחריות סאני יבואן רשמי.",
    sku: "GW-ULTRA-LTE",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-120",
    name: "Sony PlayStation 5 Pro 2TB SSD",
    category: "גיימינג",
    price: 3349,
    cost: 2700,
    stock: 7,
    minStock: 4,
    description: "גרסת הפרו העוצמתית, עיבוד גרפי משודרג פי 2, תמיכה ב-PSSR AI Upscaling וקצבי רענון עד 120Hz, כונן SSD פנימי מהיר 2TB, שנתיים אחריות ישפאר.",
    sku: "PS5-PRO-2TB",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-121",
    name: "קונסולת Nintendo Switch OLED Model - White",
    category: "גיימינג",
    price: 1349,
    cost: 1050,
    stock: 18,
    minStock: 5,
    description: "מסך OLED צבעוני ומרהיב 7 אינץ', מעמד שולחני רחב מתכוונן, שמע משופר, נפח אחסון 64GB וחיבור רשת LAN בעגינה, שנתיים אחריות תור גיימינג יבואן רשמי.",
    sku: "NTD-SW-OLED-W",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-122",
    name: "משקפי מציאות מדומה ורבודה Meta Quest 3 512GB",
    category: "גיימינג",
    price: 2890,
    cost: 2280,
    stock: 9,
    minStock: 3,
    description: "מציאות מעורבת באיכות 4K+ Infinite Display, מעבד Snapdragon XR2 Gen 2, מעקב ידיים מתקדם ובקרי Touch Plus ללא טבעות, שנת אחריות יבואן רשמי.",
    sku: "META-Q3-512",
    warrantyMonths: 12,
    officialImporter: true
  },
  {
    id: "PROD-123",
    name: "נתב אלחוטי TP-Link Archer BE800 Wi-Fi 7 Tri-Band 19Gbps",
    category: "ציוד רשת",
    price: 2190,
    cost: 1650,
    stock: 11,
    minStock: 3,
    description: "מהירויות שיא עד 19Gbps בטכנולוגיית Wi-Fi 7, חיבורי 10G כפולים, מסך LED מובנה על גבי הנתב, תמיכה בעשרות מכשירים במקביל, 3 שנות אחריות בנדא.",
    sku: "TPL-BE800",
    warrantyMonths: 36,
    officialImporter: true
  },
  {
    id: "PROD-124",
    name: "נתב גיימינג Asus ROG Rapture GT-AXE16000 Quad-Band Wi-Fi 6E",
    category: "ציוד רשת",
    price: 2790,
    cost: 2150,
    stock: 6,
    minStock: 2,
    description: "נתב הגיימינג המתקדם בעולם בעל 4 ערוצים, זוג פורטים 10Gbps וארבעה פורטים 2.5Gbps, מעבד 4 ליבות 2.0GHz, תעדוף תעבורת רשת, 3 שנות אחריות אסוס.",
    sku: "ASUS-GT-AXE16K",
    warrantyMonths: 36,
    officialImporter: true
  },
  {
    id: "PROD-125",
    name: "מטען קיר מהיר Anker Prime 67W GaN 3-Port (2xUSB-C + USB-A)",
    category: "אביזרים",
    price: 249,
    cost: 140,
    stock: 48,
    minStock: 15,
    description: "טכנולוגיית GaN מתקדמת, מטען קומפקטי במיוחד המסוגל לטעון מחשב נייד, סמארטפון ואוזניות בו זמנית, הגנת טמפרטורה ActiveShield 2.0, 18 חודשי אחריות.",
    sku: "ANK-PRIME-67W",
    warrantyMonths: 18,
    officialImporter: true
  },
  {
    id: "PROD-126",
    name: "מעמד טעינה אלחוטי Belkin BoostCharge Pro 3-in-1 MagSafe 15W",
    category: "אביזרים",
    price: 549,
    cost: 380,
    stock: 25,
    minStock: 8,
    description: "טעינה אלחוטית מהירה 15W בו זמנית ל-iPhone, Apple Watch ו-AirPods, מאושר רשמית Made for MagSafe, שנתיים אחריות יבואן רשמי ביקונקט.",
    sku: "BLK-3IN1-MS",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-127",
    name: "כונן SSD חיצוני SanDisk Extreme Pro 2TB USB 3.2 Gen 2x2",
    category: "אביזרים",
    price: 899,
    cost: 650,
    stock: 30,
    minStock: 8,
    description: "מהירות העברה עד 2000MB/s NVMe, עמידות בפני נפילות עד 3 מטר ועמידות מים ואבק IP55, הצפנת חומרה 256-bit AES, 5 שנות אחריות יבואן רשמי סאנדיסק.",
    sku: "SD-EXTP-2TB",
    warrantyMonths: 60,
    officialImporter: true
  },
  {
    id: "PROD-128",
    name: "מצלמת אבטחה ורכזת בית חכם Aqara Camera Hub G3 (Apple HomeKit / 2K)",
    category: "בית חכם",
    price: 499,
    cost: 320,
    stock: 16,
    minStock: 5,
    description: "זיהוי פנים ומחוות מבוסס AI, רזולוציית 2K 1296p, סיבוב 360 מעלות, תמיכה ב-Apple HomeKit Secure Video ו-Zigbee 3.0, שנת אחריות יבואן רשמי.",
    sku: "AQR-HUB-G3",
    warrantyMonths: 12,
    officialImporter: true
  },
  {
    id: "PROD-129",
    name: "שואב ושוטף רובוטי Roborock S8 Pro Ultra עם עמדת ריקון ושטיפה",
    category: "בית חכם",
    price: 4790,
    cost: 3600,
    stock: 5,
    minStock: 2,
    description: "תחנת עגינה אוטונומית All-in-One: ריקון אבק, מילוי מים ושטיפה וייבוש באוויר חם של המטליות, עוצמת שאיבה 6000Pa, שנתיים אחריות יבואן רשמי מודן.",
    sku: "RBR-S8P-ULT",
    warrantyMonths: 24,
    officialImporter: true
  },
  {
    id: "PROD-130",
    name: "מנעול חכם לדלת כניסה Yale Linus Smart Lock L2 - Black",
    category: "בית חכם",
    price: 990,
    cost: 720,
    stock: 12,
    minStock: 4,
    description: "פתיחה ונעילה חכמה ללא מפתח דרך הטלפון או קודן, נעילה אוטומטית ביציאה, אינטגרציה מלאה ל-Apple HomeKit, Google Assistant ו-Airbnb, שנתיים אחריות אסא אבלוי.",
    sku: "YALE-LINUS-L2",
    warrantyMonths: 24,
    officialImporter: true
  }
];

// לקוחות התחלתיים — מותאם לתקן CUST-XXXX
const INITIAL_CUSTOMERS = [
  {
    id: "CUST-0001",
    name: "יונתן רוזנברג",
    company: "נקסט-טק פתרונות בע\"מ",
    type: "B2B",
    taxId: "516-234-890",
    phone: "054-321-9876",
    email: "yonatan@nexttech.co.il",
    address: "שדרות רוטשילד 45, תל אביב",
    totalPurchases: 45890,
    status: "פעיל",
    createdAt: "12/01/2026"
  },
  {
    id: "CUST-0002",
    name: "מיכל אברמוביץ'",
    company: "סטודיו ארט-דיזיין",
    type: "B2B",
    taxId: "514-890-123",
    phone: "052-876-5432",
    email: "michal@artdesign.co.il",
    address: "רחוב יפו 210, ירושלים",
    totalPurchases: 23680,
    status: "פעיל",
    createdAt: "03/02/2026"
  },
  {
    id: "CUST-0003",
    name: "דניאל כהן",
    company: "",
    type: "B2C",
    taxId: "",
    phone: "050-123-4567",
    email: "daniel.cohen@gmail.com",
    address: "רחוב אחוזה 112, רעננה",
    totalPurchases: 5299,
    status: "פעיל",
    createdAt: "18/02/2026"
  },
  {
    id: "CUST-0004",
    name: "שירה לוי",
    company: "",
    type: "B2C",
    taxId: "",
    phone: "053-999-8877",
    email: "shira.levy@walla.co.il",
    address: "שדרות הנשיא 84, חיפה",
    totalPurchases: 2198,
    status: "פעיל",
    createdAt: "04/03/2026"
  },
  {
    id: "CUST-0005",
    name: "עמית ברקוביץ'",
    company: "סייבר-סילד מערכות",
    type: "B2B",
    taxId: "515-998-332",
    phone: "054-777-6655",
    email: "amit@cybershield.io",
    address: "רחוב שוהם 4, מתחם הבורסה, רמת גן",
    totalPurchases: 78900,
    status: "פעיל",
    createdAt: "15/01/2026"
  }
];

// לידים התחלתיים — תואם בדיוק למבנה שדות Airtable
const INITIAL_LEADS = [
  {
    id: "LEAD-001",
    name: "רועי שמיר",
    company: "פינטק סולושנס בע\"מ",
    email: "roey@fintechsolutions.co.il",
    phone: "054-444-1234",
    status: "מוסמך (Qualified)",
    interest: "רכש 15 לפטופים Dell XPS למפתחים",
    budget: 120000,
    assignedTo: "דנה נציגת מכירות",
    source: "אתר / טופס יצירת קשר",
    lastContactDate: "20/09/2026",
    createdAt: "15/09/2026"
  },
  {
    id: "LEAD-002",
    name: "קרן גולדשטיין",
    company: "מכללת אלפא לטכנולוגיה",
    email: "keren@alpha-college.ac.il",
    phone: "052-555-8899",
    status: "נוצר קשר (Contacted)",
    interest: "ציוד רשת וראוטרים למעבדות מחשבים",
    budget: 45000,
    assignedTo: "תומר נציג מכירות",
    source: "פנייה יזומה (Cold Email)",
    lastContactDate: "22/09/2026",
    createdAt: "18/09/2026"
  },
  {
    id: "LEAD-003",
    name: "יובל אשכנזי",
    company: "סטארטאפ קלאוד-לייב",
    email: "yuval@cloudlive.io",
    phone: "050-888-2233",
    status: "חדש (New)",
    interest: "הצעת מחיר עבור 8 מסכי Pro ומקלדות",
    budget: 35000,
    assignedTo: "לא הוקצה",
    source: "בוט טלגרם",
    lastContactDate: "28/09/2026",
    createdAt: "28/09/2026"
  },
  {
    id: "LEAD-004",
    name: "אורית שחם",
    company: "משרד רו\"ח שחם ושות'",
    email: "orit@shaham-cpa.co.il",
    phone: "054-111-2244",
    status: "אבוד (Lost)",
    interest: "מדפסות וציוד משרדי (לא בתחום המרכזי)",
    budget: 15000,
    assignedTo: "דנה נציגת מכירות",
    source: "שיחת טלפון",
    lastContactDate: "10/09/2026",
    createdAt: "05/09/2026"
  }
];

// הזמנות התחלתיות
const INITIAL_ORDERS = [
  {
    id: "ORD-2026-001",
    customerId: "CUST-0001",
    customerName: "נקסט-טק פתרונות בע\"מ",
    items: [
      { productId: "PROD-103", name: "Apple MacBook Pro 14 M4", quantity: 3, unitPrice: 7899, total: 23697 },
      { productId: "PROD-111", name: "מטען Anker Prime 67W", quantity: 3, unitPrice: 249, total: 747 }
    ],
    subtotal: 24444,
    vatAmount: 4400,
    total: 28844,
    status: "סופק",
    paymentMethod: "שוטף+30 (העברה בנקאית)",
    shippingAddress: "שדרות רוטשילד 45, תל אביב",
    date: "14/09/2026",
    invoiceId: "INV-2026-001"
  },
  {
    id: "ORD-2026-002",
    customerId: "CUST-0003",
    customerName: "דניאל כהן",
    items: [
      { productId: "PROD-102", name: "Samsung Galaxy S25 Ultra 512GB", quantity: 1, unitPrice: 5299, total: 5299 }
    ],
    subtotal: 4490.68,
    vatAmount: 808.32,
    total: 5299,
    status: "נשלח",
    paymentMethod: "כרטיס אשראי (3 תשלומים)",
    shippingAddress: "רחוב אחוזה 112, רעננה",
    date: "25/09/2026",
    invoiceId: "INV-2026-002"
  },
  {
    id: "ORD-2026-003",
    customerId: "CUST-0004",
    customerName: "שירה לוי",
    items: [
      { productId: "PROD-106", name: "אוזניות Sony WH-1000XM5", quantity: 1, unitPrice: 1249, total: 1249 },
      { productId: "PROD-107", name: "Apple AirPods Pro 2", quantity: 1, unitPrice: 949, total: 949 }
    ],
    subtotal: 1862.71,
    vatAmount: 335.29,
    total: 2198,
    status: "בטיפול",
    paymentMethod: "Bit",
    shippingAddress: "שדרות הנשיא 84, חיפה",
    date: "28/09/2026",
    invoiceId: "INV-2026-003"
  }
];

// חשבוניות מס התחלתיות — כולל חישוב מדויק של מע"מ 18%
const INITIAL_INVOICES = [
  {
    id: "INV-2026-001",
    invoiceNumber: "INV-2026-001",
    customerId: "CUST-0001",
    customerName: "נקסט-טק פתרונות בע\"מ",
    taxId: "516-234-890",
    orderId: "ORD-2026-001",
    amount: 24444.00,       // נטו לפני מע"מ
    vatRate: 0.18,          // 18%
    vatAmount: 4400.00,     // מע"מ 18%
    total: 28844.00,        // כולל מע"מ
    status: "שולם",
    paymentTerms: "שוטף+30",
    date: "14/09/2026",
    dueDate: "14/10/2026",
    pdfUrl: "#",
    items: [
      { description: "Apple MacBook Pro 14 M4 (16GB/512GB)", qty: 3, unitPrice: 7899, amount: 23697 },
      { description: "מטען Anker Prime 67W GaN", qty: 3, unitPrice: 249, amount: 747 }
    ]
  },
  {
    id: "INV-2026-002",
    invoiceNumber: "INV-2026-002",
    customerId: "CUST-0003",
    customerName: "דניאל כהן",
    taxId: "",
    orderId: "ORD-2026-002",
    amount: 4490.68,
    vatRate: 0.18,
    vatAmount: 808.32,
    total: 5299.00,
    status: "שולם",
    paymentTerms: "אשראי מיידי",
    date: "25/09/2026",
    dueDate: "25/09/2026",
    pdfUrl: "#",
    items: [
      { description: "Samsung Galaxy S25 Ultra 512GB", qty: 1, unitPrice: 4490.68, amount: 4490.68 }
    ]
  },
  {
    id: "INV-2026-003",
    invoiceNumber: "INV-2026-003",
    customerId: "CUST-0004",
    customerName: "שירה לוי",
    taxId: "",
    orderId: "ORD-2026-003",
    amount: 1862.71,
    vatRate: 0.18,
    vatAmount: 335.29,
    total: 2198.00,
    status: "פתוח (ממתין לתשלום)",
    paymentTerms: "העברה/Bit",
    date: "28/09/2026",
    dueDate: "05/10/2026",
    pdfUrl: "#",
    items: [
      { description: "אוזניות Sony WH-1000XM5", qty: 1, unitPrice: 1058.47, amount: 1058.47 },
      { description: "Apple AirPods Pro 2 USB-C", qty: 1, unitPrice: 804.24, amount: 804.24 }
    ]
  },
  {
    id: "INV-2026-004",
    invoiceNumber: "INV-2026-004",
    customerId: "CUST-0005",
    customerName: "סייבר-סילד מערכות",
    taxId: "515-998-332",
    orderId: "ORD-2026-000",
    amount: 32000.00,
    vatRate: 0.18,
    vatAmount: 5760.00,
    total: 37760.00,
    status: "באיחור (מעל שוטף+30)",
    paymentTerms: "שוטף+30",
    date: "10/08/2026",
    dueDate: "10/09/2026",
    pdfUrl: "#",
    items: [
      { description: "נתבי תקשורת TP-Link BE800 ויחידות גיבוי", qty: 16, unitPrice: 2000, amount: 32000 }
    ]
  }
];

// משימות התחלתיות (Tasks)
const INITIAL_TASKS = [
  {
    id: "TASK-001",
    title: "תזכורת תשלום לסייבר-סילד מערכות (חשבונית INV-2026-004 באיחור של 18 ימים)",
    priority: "גבוהה",
    status: "לביצוע",
    assignedTo: "מנהל כספים",
    dueDate: "29/09/2026"
  },
  {
    id: "TASK-002",
    title: "הזמנת רכש דחופה: מלאי Dell XPS 15 הגיע ל-4 יחידות (סף מינימום 2)",
    priority: "בינונית",
    status: "בתהליך",
    assignedTo: "מנהל רכש",
    dueDate: "30/09/2026"
  },
  {
    id: "TASK-003",
    title: "מעקב אחר ליד LEAD-001 (פינטק סולושנס) — שליחת הצעת מחיר סופית B2B",
    priority: "גבוהה",
    status: "בתהליך",
    assignedTo: "דנה נציגת מכירות",
    dueDate: "29/09/2026"
  },
  {
    id: "TASK-004",
    title: "סנכרון תרשים הטמעת מסמכים (Policies Embedding) מול n8n",
    priority: "נמוכה",
    status: "הושלם",
    assignedTo: "אינטגרטור AI",
    dueDate: "27/09/2026"
  }
];

// מאגר ידע מרוכז מ-12 קובצי המדיניות הרשמיים לתשובות סוכן AI (RAG Knowledge Base)
const POLICIES_KNOWLEDGE_BASE = [
  {
    id: "POL-01",
    title: "מדיניות החזרות והחזרים (01)",
    keywords: ["החזרה", "ביטול", "החזר", "חרטה", "פגם", "doa", "דמי ביטול", "14 יום", "ביטולים", "החזרות"],
    summary: `זכות ביטול עסקת מכר מרחוק עומדת ללקוח פרטי בתוך 14 ימים מקבלת המוצר.
• ביטול עקב חרטה: דמי ביטול עומדים על 5% ממחיר העסקה או 100 ₪ — הנמוך מביניהם. עלות המשלוח בחזרה על הלקוח. המוצר חייב להיות באריזתו המקורית, ללא נזק וללא הפעלה/רישום לחשבון יצרן.
• לא ניתן להחזיר בחרטה: תוכנות/רישיונות שנפתחו, אוזניות In-Ear מטעמי היגיינה, ומוצרים בהתאמה אישית.
• החזרה עקב פגם או אי-התאמה: החזר מלא או החלפה ללא דמי ביטול וללא עלות משלוח.
• DOA (Dead On Arrival): מוצר שהתגלה כלא תקין בתוך 48 שעות מקבלתו זוכה להחלפה מיידית בחדש.
• אזרח ותיק/עולה חדש/אדם עם מוגבלות: זכות ביטול מורחבת עד 4 חודשים בעסקאות שכללו שיחה.`
  },
  {
    id: "POL-02",
    title: "מדיניות אחריות ושירות (02)",
    keywords: ["אחריות", "יבואן רשמי", "תיקון", "מעבדה", "תקופת אחריות", "תקלה"],
    summary: `כל המוצרים באיי.איי אלקטרוניקה מקוריים בלבד וכוללים אחריות יבואן רשמי בישראל.
• תקופות אחריות אופייניות: סמארטפונים 24 חודשים, מחשבים ניידים 12–36 חודשים (Dell שירות באתר הלקוח), אביזרים 12–18 חודשים.
• האחריות מכסה פגמי ייצור ותקלות חומרה תחת שימוש רגיל.
• אינו מכוסה: נזק פיזי (שבר, לחץ), נזקי מים/נוזלים (אלא אם הוגדר כיסוי מפורש), תיקון במעבדה לא מורשית.`
  },
  {
    id: "POL-03",
    title: "מדיניות משלוחים ואספקה (03)",
    keywords: ["משלוח", "משלוחים", "אספקה", "שליח", "איסוף עצמי", "דואר", "חינם"],
    summary: `• משלוח חינם עד הבית: בהזמנות מעל 499 ₪!
• דמי משלוח להזמנות מתחת ל-499 ₪: שליח עד הבית 35 ₪, נקודת איסוף 19 ₪.
• זמני אספקה: מרכז הארץ 1–3 ימי עסקים, אזורים מרוחקים עד 5 ימי עסקים.
• איסוף עצמי: ללא עלות מהחנות ברחוב הברזל 30 תל אביב (בתיאום מראש, בימים א'-ה' 9:00-18:00, ו' 9:00-13:00).`
  },
  {
    id: "POL-04",
    title: "מדיניות מחירונים והנחות (04)",
    keywords: ["מחיר", "הנחה", "הנחות", "כמות", "b2b", "קופון", "קופונים", "אשראי", "תשלומים"],
    summary: `• מחירים ללקוחות פרטיים (B2C) כוללים תמיד מע"מ 18%.
• מדרגות הנחות כמות ללקוחות עסקיים (B2B לפני מע"מ):
  - 5–9 יחידות: 3% הנחה
  - 10–24 יחידות: 6% הנחה
  - 25–49 יחידות: 9% הנחה
  - 50–99 יחידות: 12% הנחה
  - 100+ יחידות: תמחור אישי עד 18% ומעלה
• תשלומים: עד 12 תשלומים ללא ריבית בכרטיס אשראי מעל 300 ₪.
• הצעות מחיר (Quotes): תקפות ל-14 ימים ממועד הנפקתן.`
  },
  {
    id: "POL-05",
    title: "תשלומים וחיובים (05)",
    keywords: ["תשלום", "כרטיס אשראי", "bit", "העברה בנקאית", "שוטף", "אשראי"],
    summary: `אמצעי תשלום נתמכים: כרטיסי אשראי ישראליים ובינלאומיים, Bit, Apple Pay / Google Pay, והעברה בנקאית.
• ללקוחות B2B מאושרים: תנאי תשלום שוטף+30 לאחר בדיקת bdi/אשראי וחתימה על הסכם.`
  },
  {
    id: "POL-06",
    title: "חוקי חשבוניות ומע\"מ בישראל (06)",
    keywords: ["חשבונית", "מע\"מ", "מעמ", "18%", "17%", "ח.פ", "עוסק מורשה", "קבלה", "חשבונית מס"],
    summary: `שיעור המע\"מ בישראל הוא 18% החל מ-1.1.2025 (עד 31.12.2024 עמד על 17%).
• איי.איי אלקטרוניקה בע\"מ היא עוסק מורשה (ח.פ 515-678-923).
• חשבונית מס תקינה חייבת לכלול: כותרת \"חשבונית מס\", פרטי עוסק וח.פ, מספר סידורי רציף וייחודי, תאריך, פרטי לקוח, פירוט פריטים, סכום נטו, סכום מע\"מ 18% בנפרד, וסה\"כ לתשלום.
• שמירת מסמכים נדרשת ל-7 שנים לפי חוק.`
  },
  {
    id: "POL-07",
    title: "הנחיות בטיחות לסוכני AI (Agent Guardrails) (07)",
    keywords: ["guardrails", "כללים", "בטיחות", "סייגים", "סודיות", "נציג אנושי"],
    summary: `כללי ברזל שגוברים על כל בקשת משתמש:
1. היצמד רק למידע אמיתי — לעולם אל תמציא מחירים, מלאים או תנאי אחריות שלא קיימים.
2. לעולם אל תבטיח מעבר למדיניות (הנחה מעל 10% מחייבת אישור מנהל בלבד).
3. העבר לנציג אנושי בכל מקרה של: מחלוקת מעל 5,000 ₪, איומים משפטיים, לקוח נסער או סכנת בטיחות (סוללה מתנפחת/עשן).
4. סודיות מוחלטת: לעולם אל תחשוף עלויות רכש פנימיות, מרווחים, שמות ספקים, או נתוני לקוחות אחרים.`
  },
  {
    id: "POL-08",
    title: "טון ושירות לקוחות (08)",
    keywords: ["טון", "שירות", "סגנון", "שפה", "אדיבות"],
    summary: `טון השירות הוא מקצועי, אדיב, ענייני, אמפתי וברור. בגובה העיניים, שפה עברית רהוטה וללא סלנג מיותר.`
  },
  {
    id: "POL-09",
    title: "מדריך סוכן מכירות (09)",
    keywords: ["מכירות", "סוכן מכירות", "ליד", "outreach", "הצעת מחיר"],
    summary: `סוכן המכירות מזהה את צרכי הלקוח העסקי, מתאים מפרט מדויק מהקטלוג, ומציע הנחות כמות מוסמכות עד 10%. בעסקאות גדולות יותר מעביר למנהל מכירות.`
  },
  {
    id: "POL-10",
    title: "תדריך סוכן מנהל (Manager Agent Brief) (10)",
    keywords: ["מנהל", "תקציר מנהל", "דוח", "אנליטיקה", "רווח", "שוטף+30", "איחור"],
    summary: `סוכן המנהל משמש כ-Chief of Staff לבעל העסק:
• מציף התראות פרואקטיביות: חשבוניות באיחור מעבר לשוטף+30, מוצרים שירדו מתחת לסף מלאי מינימלי, ולידים חמים שלא טופלו מעל 7 ימים.
• אנליטיקה עסקית: הכנסות, רווח (הכנסות פחות עלויות), וחלוקה לפי סגמנט B2B/B2C.
• פעולות בלתי הפיכות (הוצאת חשבונית זיכוי, מחיקת נתונים) דורשות תמיד אישור מפורש.`
  },
  {
    id: "POL-11",
    title: "סקירת העסק (11)",
    keywords: ["עסק", "איי איי אלקטרוניקה", "שעות פעילות", "סניף", "כתובת"],
    summary: `איי.איי אלקטרוניקה בע\"מ (ח.פ 515-678-923) | רח' הברזל 30 תל אביב | 03-555-1234.
שעות פעילות: א'–ה' 9:00–18:00, ו' 9:00–13:00. שבת וחגים סגור.
מיצוב: יבואן רשמי בלבד, איכות ללא פשרות, תמיכה מהירה ושירות הוגן.`
  },
  {
    id: "POL-12",
    title: "שאלות ותשובות נפוצות (FAQ) (12)",
    keywords: ["faq", "שאלות", "תשובות", "נפוצות", "סוללה", "פריסה", "אילת"],
    summary: `שאלות נפוצות:
• האם המוצרים מקוריים? כן, 100% מוצרים מקוריים עם אחריות יבואן רשמי.
• האם יש משלוח לאילת? כן, זמני אספקה עד 5 ימי עסקים.
• איך מקבלים חשבונית? נשלחת במייל וב-SMS מיד עם השלמת ההזמנה, וזמינה להורדה.`
  }
];
