import type { T3 } from "./copy";

export const nekudaHero: T3 = {
  he: "להפיץ את הספרים. להצמיח עסק רווחי.",
  fr: "Diffuser les livres. Faire croître un commerce mesurable.",
  en: "A profitable way to spread the books.",
};

export const nekudaLead: T3 = {
  he: "תקופת בדיקה ממוקדת של 90 יום. שיפור חנות השופיפיי הקיימת, קידום מבחר מצומצם ורווחי, ותשלום משתנה רק כאשר הקמפיינים הזכאים משאירים תוצאה חיובית. 1,000 ₪ דמי ניהול + 15% מהתוצאה החיובית הזכאית. מדיה 1,000–1,500 ₪ בכרטיס הלקוח. החנות, החשבונות והלקוחות נשארים שלך.",
  fr: "Pilote 90 jours. Améliorer la boutique Shopify existante, promouvoir une petite sélection rentable, et un variable seulement si les campagnes éligibles laissent un résultat positif. 1 000 ₪ + 15 % du résultat éligible positif. Média 1 000–1 500 ₪ sur la carte client.",
  en: "A focused 90-day pilot. Improve the existing Shopify store, promote a small profitable selection, and pay a variable fee only when eligible campaigns leave a positive result. 1,000 ILS + 15% of positive eligible result. Media 1,000–1,500 ILS on the client card.",
};

export const nekudaAudit = {
  title: { he: "זיהוי העסק וממצאי הבדיקה", fr: "Identité et constat public", en: "Identity and audit findings" } as T3,
  scope: {
    he: "ההתאמה החזקה היא nekodatova.co.il, מקושר לחנות ברחוב הרב כהנמן 76, קומה א, בני ברק — הוצלב באיזי ובבזק. אין לבלבל עם אתרים אחרים בשם נקודה טובה. [1,3,4] בדיקה ציבורית של הבית, מוצר מייצג, תגיות וכלי קטלוג. לא הושלמה רכישה ולא נבדקו מכשיר נייד, ציון מהירות, נתוני חשבון או מלאי.",
    fr: "Meilleure correspondance : nekodatova.co.il, magasin 76 HaRav Kahaneman, 1er, Bnei Brak — recoupé Easy et B144. Distinct d’autres sites « Nekuda Tova ». Inspection publique. Pas d’achat test, pas de score vitesse, pas d’analytics compte.",
    en: "Strongest match: nekodatova.co.il, store at 76 HaRav Kahaneman, 1st floor, Bnei Brak — cross-checked in Easy and B144. Separate from other sites using those words. Public inspection only. No completed purchase, mobile test, speed score or account analytics.",
  } as T3,
  findings: [
    {
      find: {
        he: "קיימים שופיפיי, חיפוש, מוצרים, קישורי עגלה ובאנר פרטיות.",
        fr: "Vitrine Shopify, recherche, produits, liens panier et bandeau confidentialité existent.",
        en: "Shopify storefront, search, products, cart links and privacy banner exist.",
      } as T3,
      act: {
        he: "לשמר את שופיפיי ולשפר את מסלול הקנייה — לא להגר.",
        fr: "Conserver Shopify ; corriger le parcours d’achat plutôt que migrer.",
        en: "Preserve Shopify; fix the buying journey rather than migrate.",
      } as T3,
    },
    {
      find: {
        he: "מסר הספרים מתחרה בקטגוריות רבות בדף הבית.",
        fr: "La mission livres concurrence trop de catégories sur la page d’accueil.",
        en: "The book mission competes with many catalogue categories on the homepage.",
      } as T3,
      act: {
        he: "ליצור יעד ממוקד להצעה אחת בקמפיין.",
        fr: "Créer une destination de campagne pour une offre choisie.",
        en: "Create a focused campaign destination for one selected offer.",
      } as T3,
    },
    {
      find: {
        he: "בעמוד הסט שנבדק טקסט ארוך ושאריות תבנית באנגלית.",
        fr: "La page du coffret inspectée a une prose longue et des restes de template anglais.",
        en: "The inspected set page has long prose and leftover English template text.",
      } as T3,
      act: {
        he: "להציג ליד הרכישה תכולה, מהדורה, מידות ופרטי משלוח.",
        fr: "Remplacer le bruit par contenu, édition, dimensions et livraison près du CTA.",
        en: "Replace clutter with contents, edition, dimensions and delivery details near the CTA.",
      } as T3,
    },
    {
      find: {
        he: "תיאור הבית הוא רשימת מילים; תיאור המוצר נראה נגזר מגוף הטקסט.",
        fr: "La description d’accueil est une liste de mots-clés ; la fiche produit reprend le corps.",
        en: "Homepage description is a keyword list; product description appears extracted from body copy.",
      } as T3,
      act: {
        he: "לכתוב תיאורים ייחודיים ושימושיים בעברית.",
        fr: "Rédiger des métadonnées hébraïques uniques et utiles.",
        en: "Write unique, useful Hebrew metadata.",
      } as T3,
    },
    {
      find: {
        he: "קיימים canonical ותגי שיתוף בבית; במוצר קיים JSON-LD עם הצעות ב־180 ₪.",
        fr: "Canonical et tags sociaux sur l’accueil ; JSON-LD Product sur le coffret à 180 ₪.",
        en: "Home canonical and social tags exist; Product JSON-LD on the set page with 180 ILS offers.",
      } as T3,
      act: {
        he: "לשמר ולבדוק התאמה לווריאציות, בלי סימון כפול.",
        fr: "Conserver le balisage correct et valider chaque variante ; pas de schéma en double.",
        en: "Preserve correct markup and validate each variant; do not install duplicate schema.",
      } as T3,
    },
    {
      find: {
        he: "שעות וטלפון אינם אחידים ברישומים; חיפוש מדיניות משלוח לא החזיר תוצאה. היעדר תוצאה אינו מוכיח היעדר מדיניות.",
        fr: "Horaires/téléphone diffèrent selon les annuaires ; lookup shipping-policy sans résultat — cela ne prouve pas l’absence.",
        en: "Store hours/phone differ across listings; shipping-policy lookup returned no result. A failed lookup does not prove policies are absent.",
      } as T3,
      act: {
        he: "לאמת פרטי קשר ולהבליט משלוח והחזרות.",
        fr: "Confirmer le NAP ; exposer clairement livraison et retours.",
        en: "Confirm contact details; expose complete shipping and returns terms.",
      } as T3,
    },
  ],
};

export const nekudaMarket = {
  title: { he: "שוק ובחירת ההצעה", fr: "Marché et choix de l’offre", en: "Market and offer selection" } as T3,
  intro: {
    he: "מדרגים לפי תרומה להזמנה, לא לפי הנחה. מחירים הם תמונת מצב, לא נתוני מרווח מאומתים. תרומות ומכירת ספרים נשארות נפרדות בחשבונאות ובעמלה.",
    fr: "Classer les offres par contribution par commande, pas par remise. Prix = instantané, pas une marge vérifiée. Dons et ventes de livres restent séparés.",
    en: "Rank offers by contribution per order, not by discount. Prices are snapshots, not verified margin. Donations and book sales stay separate in accounting and commission.",
  } as T3,
  rows: [
    {
      k: { he: "נקודה טובה: סט שלושה ספרים 180 ₪; סידורים אישיים נבחרים 148 ₪ [1,2]", fr: "Nekouda Tova : coffret 3 livres 180 ₪ ; siddourim personnalisés 148 ₪ [1,2]", en: "Nekouda Tova: inspected three-book set 180 ₪; selected personalised prayer books 148 ₪ [1,2]" } as T3,
      v: { he: "מועמדים למוצרים מובילים, לאחר בדיקת מרווח ומלאי.", fr: "Offres héro candidates, sous réserve de marge unitaire et de stock.", en: "Candidate hero offers, subject to true unit margin and stock." } as T3,
    },
    {
      k: { he: "ספרי חיים מציג עצות מבוארות של נקודה טובה ב־46 ₪ [5]", fr: "Hbooks liste Etzot Mevoarot (Nekouda Tova) à 46 ₪ [5]", en: "Hbooks lists Etzot Mevoarot from Nekouda Tova at 46 ₪ [5]" } as T3,
      v: { he: "גם משווקים מתחרים על ספרי ההוצאה. נוחות וערך מארז חשובים.", fr: "Un revendeur concurrence aussi. La commodité et la valeur du lot comptent.", en: "A reseller also competes on the publisher’s books. Convenience and bundle value matter." } as T3,
    },
    {
      k: { he: "ספר קודש מציג מהדורת ליקוטי מוהר״ן בשלושה כרכים ב־285 ₪ [7]", fr: "Seferkodesh : Likutei Moharan 3 vol. à 285 ₪ [7]", en: "Seferkodesh lists a three-volume Likutei Moharan edition at 285 ₪ [7]" } as T3,
      v: { he: "מהדורה אחרת — לא השוואה ישירה לסט המעורב ב־180 ₪.", fr: "Édition différente ; pas comparable au coffret mixte à 180 ₪.", en: "A different edition; not directly comparable with the 180 ILS mixed set." } as T3,
    },
    {
      k: { he: "ספריית ברסלב מסדרת קטלוג לפי מחברים, ספרים והוצאות [6]", fr: "Breslevbooks organise un catalogue spécialiste [6]", en: "Breslevbooks organises a specialist catalogue by authors, texts and publishers [6]" } as T3,
      v: { he: "לשפר מציאה לפי ספר, מהדורה ושימוש — לא רק הנחות.", fr: "Améliorer la découverte par livre, édition et usage ; ne pas concurrencer seulement au rabais.", en: "Improve discovery by book, edition and use; do not compete only by discount." } as T3,
    },
  ],
  rank: {
    he: "עדיפות א: הסט הקיים עם כרטיס תכולה ברור. עדיפות ב: מתנה אישית, רק אם הטבעה ומשלוח משאירים מרווח. עדיפות ג: מארזי ילדים וכמויות לאירועים אחרי עלות ומלאי. ספרוני כיס — כתוספת לסל, לא כמודעה קרה יחידה.",
    fr: "Priorité A : le coffret existant, carte de contenu claire. B : cadeau personnalisé seulement si gravure et livraison laissent une marge. C : lots enfants / quantités événement, après coûts. Livres de poche : add-on, pas offre froide isolée.",
    en: "Priority A: the existing set, with a clear contents card. B: a personalised gift only if engraving and shipping leave enough margin. C: children’s bundles and event quantities after cost and stock. Pocket books as add-ons, not standalone cold-ad offers.",
  } as T3,
};

export const nekudaSeo = {
  title: { he: "קידום ותגיות מוכנים להתאמה", fr: "SEO et métadonnées prêts à adapter", en: "SEO and metadata ready to adapt" } as T3,
  note: {
    he: "התגיות כבר קיימות. השיפור הוא דיוק ושימושיות, לא הוספה עיוורת. גוגל עשוי לשנות כותרות; תיאור מטא אינו מבטיח דירוג. גוגל אינו משתמש ב־meta-keywords. [13,14,18] היקף: בית, קטגוריה אחת, שלושה מוצרים. בלי מיגרציית URL.",
    fr: "Les balises existent. L’enjeu est l’exactitude. Google peut réécrire titres et extraits. meta-keywords n’est pas utilisé. Périmètre : accueil, une collection, trois produits. Pas de migration d’URL.",
    en: "Metadata already exists. The improvement is accuracy, not adding tags blindly. Google may rewrite titles; a meta description does not guarantee rank. meta-keywords is unused by Google Search. Scope: homepage, one collection, three products. No URL migration.",
  } as T3,
  homeTitle: "נקודה טובה | ספרי רבי נחמן, ספרי ברסלב ומתנות",
  homeDesc: "ספרי רבי נחמן ורבי נתן, סטים, ספרי ילדים ומתנות בהוצאת נקודה טובה. עיינו במבחר, בדקו זמינות ופרטי משלוח והזמינו באתר. חנות בבני ברק.",
  setTitle: "סט ליקוטי מוהר״ן, תפילות ועלים לתרופה | נקודה טובה",
  setDesc: "שלושה ספרי ברסלב במארז אחד: ליקוטי מוהר״ן, ליקוטי תפילות ועלים לתרופה. בחרו צבע ובדקו את פרטי המהדורה, המלאי והמשלוח לפני ההזמנה.",
};

export const nekudaChannels: { k: T3; v: T3 }[] = [
  {
    k: { he: "חיפוש בגוגל", fr: "Google Search", en: "Google Search" },
    v: {
      he: "מועמד ראשון לממומן: שאילתות רכישה מדויקות לספר, מהדורה וסט אמיתיים. להפריד מותג מרכישה. אין קהלים שהמפרסם יצר בקטגוריות דת רגישות. [8]",
      fr: "Premier candidat payant : requêtes d’achat exactes/expression pour vrais livres, éditions et coffrets. Séparer la marque. Pas d’audiences « religion » constituées par l’annonceur. [8]",
      en: "First paid candidate: exact/expression purchase queries for real books, editions and sets. Separate brand from acquisition. Avoid advertiser-curated audiences for sensitive religious categories. [8]",
    },
  },
  {
    k: { he: "אינסטגרם ופייסבוק", fr: "Instagram + Facebook", en: "Instagram + Facebook" },
    v: {
      he: "הדגמות מוצר אורגניות; בדיקה ממומנת רק לאחר בחינת יצירות ומקור נתונים. אין הסקת דת או ניסוח שקובע מהי דת הצופה. מטא מזהה דת כקטגוריית מקור נתונים. [9,10]",
      fr: "Démonstrations organiques ; test payant seulement après revue créa et source de données. Pas de ciblage religieux inféré. Meta classe la religion comme catégorie de source. [9,10]",
      en: "Organic product demonstrations; a paid test only after creative and data-source review. No inferred religious targeting or copy asserting the viewer’s religion. Meta identifies religion as a data-source category. [9,10]",
    },
  },
  {
    k: { he: "טיקטוק", fr: "TikTok", en: "TikTok" },
    v: {
      he: "חשיפה אורגנית: פרטי ספר, אריזה וקריאה קצרה עם מקור. לא מובטח פרסום דתי ממומן: הנחיה רשמית מונה אותו כאסור, והקישורים למדיניות אינם אחידים. לבדוק זכאות לפני הוצאה עתידית. [11]",
      fr: "Découverte organique. Aucune campagne payante « contenu religieux » n’est promise : le guide officiel la liste comme non autorisée ; les pages liées ne sont pas totalement cohérentes. Vérifier l’éligibilité avant tout spend. [11]",
      en: "Organic discovery: book details, packing and short accurately sourced readings. No paid religious-content campaign is promised: official guidance lists religious ads as not permitted; linked policy pages are not fully consistent. Verify eligibility before any future spend. [11]",
    },
  },
  {
    k: { he: "גוגל אורגני ומפות", fr: "Google organique / Maps", en: "Google organic / Maps" },
    v: {
      he: "שיפור מוצרים ופרטי חנות. רישומי מוצר ללא עלות מדיה — מועמד בכפוף לאישור; אין הבטחת מיקום. [16]",
      fr: "Améliorer fiches et infos magasin. Free listings possibles sous conditions ; aucun placement garanti. [16]",
      en: "Improve products and local store information. Free product listings are a candidate, subject to approval; no guaranteed placement. [16]",
    },
  },
  {
    k: { he: "וואטסאפ ודוא״ל", fr: "WhatsApp / e-mail", en: "WhatsApp / email" },
    v: {
      he: "מענה לפניות והודעות בהסכמה. אין איסוף אנשי קשר או פניות המוניות שלא התבקשו.",
      fr: "Répondre à l’entrant et messages permission-based. Pas de fichiers scrapés ni de prospection de masse.",
      en: "Answer inbound questions and use permission-based customer messages. No scraped contacts or bulk unsolicited outreach.",
    },
  },
];

export const nekudaPolicy: T3 = {
  he: "מקדמים את הספרים האמיתיים ואת תוכנם. אין להבטיח תוצאות רפואיות, כספיות או על־טבעיות כהבטחה מסחרית. לא מסתירים את אופי המוצר ולא משנים מעקב כדי לעקוף מגבלות פלטפורמה.",
  fr: "Promouvoir les vrais livres et leur contenu. Ne pas promettre de résultats médicaux, financiers ou surnaturels comme garantie commerciale. Ne jamais masquer le caractère religieux ni contourner le tracking.",
  en: "Promote the real books and their contents. Do not promise medical, financial or supernatural outcomes as commercial guarantees. Never hide the religious nature of a product or reroute tracking to bypass platform restrictions.",
};

export const nekudaTests = {
  title: { he: "מיקוד מוקדם והבדיקות הראשונות", fr: "Pré-ciblage et premiers tests", en: "Pre-targeting and the first tests" } as T3,
  rows: [
    {
      k: { he: "משלוחים באתר", fr: "Livraison en ligne", en: "Online delivery" } as T3,
      v: { he: "בגירים בישראל באזורי משלוח מאושרים, עמוד ומודעות בעברית. ללא רשימות קהל לפי דת.", fr: "Adultes en Israël dans la zone de livraison confirmée ; page et pubs en hébreu. Pas de listes religion.", en: "Adults in Israel within confirmed delivery coverage; Hebrew page and ads. No religion-based audience lists." } as T3,
    },
    {
      k: { he: "החנות המקומית", fr: "Magasin local", en: "Local store" } as T3,
      v: { he: "בני ברק ורמת גן הסמוכה לנוחות גאוגרפית בלבד; ביקור או איסוף רק אחרי אישור זמינות.", fr: "Bnei Brak et Ramat Gan proche pour la commodité ; visite/retrait seulement si le service est confirmé.", en: "Bnei Brak and nearby Ramat Gan for geographic convenience only; promote visits or pickup only after availability is confirmed." } as T3,
    },
    {
      k: { he: "כוונת חיפוש", fr: "Intention Search", en: "Search intention" } as T3,
      v: { he: "ליקוטי מוהרן לקנייה · סט ספרי ברסלב · ספרי רבי נחמן משלוח · סידור עם הקדשה", fr: "ליקוטי מוהרן לקנייה · סט ספרי ברסלב · ספרי רבי נחמן משלוח · סידור עם הקדשה", en: "ליקוטי מוהרן לקנייה · סט ספרי ברסלב · ספרי רבי נחמן משלוח · סידור עם הקדשה" } as T3,
    },
    {
      k: { he: "שלילות לבחינה", fr: "Exclusions à revoir", en: "Search exclusions to review" } as T3,
      v: { he: "pdf · חינם · להורדה · דרושים — לפי דוח השאילתות האמיתי", fr: "pdf · חינם · להורדה · דרושים — à ajuster selon le search terms report", en: "pdf · חינם · להורדה · דרושים — adjust to real query reports" } as T3,
    },
    {
      k: { he: "סדר A/B", fr: "Séquence A/B", en: "A/B sequence" } as T3,
      v: { he: "אותה הצעה: דפדוף מול פתיחת מתנה. אחר כך סט מול מתנה אישית. רק בהמשך משלוח מול נוחות מקומית, או גוגל מול מטא.", fr: "Même offre : feuilletage vs unboxing cadeau. Puis coffret vs cadeau personnalisé. Ensuite livraison vs magasin, ou Google vs Meta.", en: "Same offer: page-flip vs gift unboxing. Then set vs personalised gift. Only then delivery vs local convenience, or Google vs Meta." } as T3,
    },
  ],
  note: {
    he: "ערוץ ממומן אחד בכל פעם, 1,000–1,500 ₪ לחודש. שתי תאי יצירה שווים מקבלים 500–750 ₪. בעלות רכישה להמחשה של 50 ₪ — כ־10–15 הזמנות לתא. התוצאה מכוונת, לא הכרעה סטטיסטית. לעצור אחרי פי שניים מעלות הרכישה המרבית שסוכמה בלי רכישה זכאית.",
    fr: "Un canal payant à la fois, 1 000–1 500 ₪/mois. Deux cellules égales à 500–750 ₪. À 50 ₪ de CPA illustratif : 10–15 commandes par cellule. Directionnel, pas statistiquement décisif.",
    en: "One paid channel at a time with 1,000–1,500 ILS per month. Two equal creative cells receive 500–750 ILS each. At an illustrative 50 ILS acquisition cost that is only 10–15 orders per cell — directional, not statistically decisive.",
  } as T3,
};

export const nekudaCreatives: { t: T3; body: T3 }[] = [
  {
    t: { he: "א. סט שלושה ספרים | 15–20 שנ׳", fr: "A. Coffret trois livres | 15–20 s", en: "A. The three-book set | 15–20 seconds" },
    body: {
      he: "מצלמים את הסט האמיתי, פותחים כל ספר, מראים מהדורה וכריכה ואז מחיר ותנאי משלוח. סיום: שלושה ספרים, מקום אחד ללימוד. ליקוטי מוהר״ן, ליקוטי תפילות ועלים לתרופה בהוצאת נקודה טובה. לפרטי המארז ולהזמנה באתר.",
      fr: "Filmer le vrai coffret, ouvrir chaque livre, montrer édition et reliure, puis prix et livraison. Clôture : שלושה ספרים, מקום אחד ללימוד. ליקוטי מוהר״ן, ליקוטי תפילות ועלים לתרופה בהוצאת נקודה טובה.",
      en: "Film the actual set, open each book, show edition and binding, then price and delivery. Close: שלושה ספרים, מקום אחד ללימוד. ליקוטי מוהר״ן, ליקוטי תפילות ועלים לתרופה בהוצאת נקודה טובה. לפרטי המארז ולהזמנה באתר.",
    },
  },
  {
    t: { he: "ב. מתנה אישית | 15–20 שנ׳", fr: "B. Cadeau personnalisé | 15–20 s", en: "B. Personal gift | 15–20 seconds" },
    body: {
      he: "מראים דוגמת הטבעה אמיתית בלי פרטים אישיים של לקוח, אורזים ומסבירים זמני אספקה. סיום: מתנה עם הקדשה אישית. בחרו סידור, בדקו את אפשרויות ההטבעה והמשלוח והזמינו באתר נקודה טובה.",
      fr: "Montrer une gravure réelle sans données client, emballer, expliquer les délais. Clôture : מתנה עם הקדשה אישית. בחרו סידור, בדקו את אפשרויות ההטבעה והמשלוח והזמינו באתר נקודה טובה.",
      en: "Show a real engraving example without a customer’s personal details, pack the gift and explain timing. Close: מתנה עם הקדשה אישית. בחרו סידור, בדקו את אפשרויות ההטבעה והמשלוח והזמינו באתר נקודה טובה.",
    },
  },
];

export const nekudaOrganic: T3 = {
  he: "ארבעה פורמטים אורגניים: עמוד אמיתי ומקור מדויק; השוואת מהדורות; אריזת הזמנה; תשובת עובד לבחירת ספר. כתוביות ושמע מורשה. להבחין בין כתבי רבי נחמן לספרי רבי נתן. בינה מלאכותית לעריכה וכתוביות — לא להמציא מהדורה, המלצה, ציטוט או ביקורת. משלוח חינם רק אם המוצר והיעד זכאים.",
  fr: "Quatre formats organiques : page réelle + source ; comparaison d’éditions ; colis ; réponse staff. Distinguer R. Nahman et R. Natan. L’IA aide au montage, pas à inventer une édition, une citation ou un avis. Livraison gratuite seulement si le produit et la destination y ont droit.",
  en: "Rotate four organic formats: a real page and its exact source; a comparison of editions; packing an order; a staff answer to a book-selection question. Distinguish Rabbi Nachman’s writings from Rabbi Natan’s. AI may help editing and captions, not fabricate an edition, endorsement, quotation or review. Free shipping only if the exact product and destination qualify.",
};

export const nekudaMeasure = {
  title: { he: "מדידה ושיוך המכירות", fr: "Mesure et attribution", en: "Measurement and attribution" } as T3,
  intro: {
    he: "הזמנות ששולמו והחזרים בשופיפיי הם מקור האמת הכספי. מתחילים בדיווח הזמנות פנימי שמכבד הסכמה. פיקסל אפליקציה אינו מוכיח מדידה מותרת או מלאה. [12]",
    fr: "Commandes payées et remboursements Shopify = source de vérité. Commencer par un reporting first-party respectueux du consentement. La présence d’un pixel d’app ne prouve ni licéité ni complétude. [12]",
    en: "Shopify paid-order and refund records are the financial source of truth. Begin with consent-respecting first-party order reporting. App pixels do not establish lawful or complete measurement. [12]",
  } as T3,
  stages: [
    {
      k: { he: "מוצר → עגלה → תשלום", fr: "Produit → panier → checkout", en: "Product → cart → checkout" } as T3,
      v: { he: "אירועי אבחון רק כאשר מותרים; אינם הכנסה.", fr: "Événements diagnostiques seulement si permis ; ce n’est pas du revenu.", en: "Diagnostic events only where permitted; not revenue." } as T3,
    },
    {
      k: { he: "הזמנה ששולמה", fr: "Commande payée", en: "Paid order" } as T3,
      v: { he: "מזהה הזמנה ייחודי, הכנסה נטו, שיוך מאושר לקמפיין.", fr: "ID unique, CA net capté, attribution campagne approuvée.", en: "Unique order ID, captured net sales, approved campaign attribution." } as T3,
    },
    {
      k: { he: "נמסר / הוחזר", fr: "Livré / remboursé", en: "Delivered / refunded" } as T3,
      v: { he: "התאמת עלויות אספקה, החזרים, ביטולים וחיובים חוזרים.", fr: "Coût d’exécution, remboursements, annulations, chargebacks.", en: "Fulfilment cost, refunds, cancellations and chargebacks reconciled." } as T3,
    },
    {
      k: { he: "תרומה", fr: "Contribution", en: "Contribution" } as T3,
      v: { he: "תקבולים נטו פחות עלויות משתנות מוסכמות, ואז כל מדיית הבדיקה ודמי הבסיס.", fr: "Recettes nettes moins coûts variables convenus, puis tout le média du pilote et les honoraires fixes.", en: "Net receipts minus agreed variable costs, then all pilot media and fixed fees." } as T3,
    },
  ],
  eligible: {
    he: "מכירה זכאית: הזמנה מקוונת ראשונה ששולמה בידי לקוח חדש, עם לחיצה מתועדת מקמפיין לא־מותג מאושר בשבעת הימים שלפני ההזמנה, כשהקמפיין הוא המגע האחרון שאינו ישיר. מניעת כפילות לפי מזהה שופיפיי. מוחרגים: לקוחות חוזרים, חיפוש מותג, אורגני או ישיר בלבד, תרומות, סיטונאות ומכירות חנות אלא אם הוסכם בכתב. בלי שיוך — אין משתנה. שיוך הוא כלל חשבונאי מוסכם, לא הוכחת סיבתיות. לא מעלים רשימות לקוחות לפי דת. אם מטא חוסם אירועים — מכבדים את החסימה, בלי עקיפת CAPI. [8,9]",
    fr: "Vente éligible : première commande en ligne payée d’un nouveau client, clic tracé d’une campagne non-marque whitelistée dans les 7 jours, dernier touch non direct. Déduplication ID Shopify. Exclus : récurrents, brand, organique/direct seuls, dons, gros, magasin sauf accord. Sans attribution = pas de variable. Si Meta bloque, respecter le bloc — pas de contournement CAPI.",
    en: "Eligible pilot sale: a first paid online order from a new customer, with a recorded click from a whitelisted non-brand campaign within seven days and that campaign as the last non-direct touch. Deduplicate by Shopify order ID. Exclude repeats, brand search, organic/direct-only, donations, wholesale and in-store unless agreed. Missing attribution means no variable. Attribution is an agreed accounting rule, not proof of incrementality. If Meta blocks events, respect the block — not a CAPI workaround.",
  } as T3,
};

export const nekudaScenarios = {
  title: { he: "הכלכלה לפני ההבטחות", fr: "L’économie avant les promesses", en: "The economics before promises" } as T3,
  intro: {
    he: "להמחשה בלבד: הזמנה ממוצעת 200 ₪ ללא מע״מ; תרומה אחרי מוצר, סליקה, אריזה ומשלוח 40% = 80 ₪. מדיה 1,500 ודמי בסיס 1,000. הערכים האמיתיים חייבים להגיע מהחנות. יחס הכנסה לפרסום לבדו אינו מספיק.",
    fr: "Illustration : panier 200 ₪ HT ; contribution 40 % = 80 ₪. Média 1 500 + base 1 000. Les vrais chiffres viennent de la boutique. Un ROAS chiffre d’affaires ne suffit pas.",
    en: "Illustration only: average order 200 ILS excluding VAT; contribution after product, payment, packing and delivery is 40%, or 80 ILS. Monthly media 1,500 and fixed fee 1,000. Actual values must come from the store. A revenue ROAS alone is insufficient.",
  } as T3,
  cols: {
    he: ["תרחיש", "חלש", "סביב איזון", "חזק יותר"],
    fr: ["Scénario", "Faible", "Autour de l’équilibre", "Plus fort"],
    en: ["Scenario", "Weak", "Break-even vicinity", "Stronger"],
  } as Record<"he" | "fr" | "en", string[]>,
  rows: {
    he: [
      ["עלות רכישה ממדיה", "75 ₪", "50 ₪", "30 ₪"],
      ["הזמנות זכאיות", "20", "30", "50"],
      ["מכירות נטו", "4,000 ₪", "6,000 ₪", "10,000 ₪"],
      ["תרומה לפני שיווק", "1,600 ₪", "2,400 ₪", "4,000 ₪"],
      ["לאחר מדיה ובסיס", "‎-900 ₪", "‎-100 ₪", "1,500 ₪"],
      ["משתנה 15%", "0 ₪", "0 ₪", "225 ₪"],
      ["תוצאה ללקוח אחרי משתנה", "‎-900 ₪", "‎-100 ₪", "1,275 ₪"],
    ],
    fr: [
      ["Coût d’acquisition payant", "75 ₪", "50 ₪", "30 ₪"],
      ["Commandes éligibles", "20", "30", "50"],
      ["CA net", "4 000 ₪", "6 000 ₪", "10 000 ₪"],
      ["Contribution avant marketing", "1 600 ₪", "2 400 ₪", "4 000 ₪"],
      ["Après média + base", "−900 ₪", "−100 ₪", "1 500 ₪"],
      ["Variable 15 %", "0 ₪", "0 ₪", "225 ₪"],
      ["Résultat client après variable", "−900 ₪", "−100 ₪", "1 275 ₪"],
    ],
    en: [
      ["Paid acquisition cost", "75 ₪", "50 ₪", "30 ₪"],
      ["Eligible orders", "20", "30", "50"],
      ["Net sales", "4,000 ₪", "6,000 ₪", "10,000 ₪"],
      ["Contribution before marketing", "1,600 ₪", "2,400 ₪", "4,000 ₪"],
      ["After media + base", "−900 ₪", "−100 ₪", "1,500 ₪"],
      ["15% variable", "0 ₪", "0 ₪", "225 ₪"],
      ["Client result after variable", "−900 ₪", "−100 ₪", "1,275 ₪"],
    ],
  } as Record<"he" | "fr" | "en", string[][]>,
  be: {
    he: "ב־40% תרומה, מכירות נטו לאיזון = (1,500+1,000)/0.40 = 6,250 ₪, כ־32 הזמנות ב־200 ₪ נטו. CPA מותר ממדיה ≈ 48.75 ₪. לא כלולים תקורות חנות ומס הכנסה. גם עלייה במכירות עלולה לייצר הפסד.",
    fr: "À 40 % de contribution, le CA net d’équilibre = 6 250 ₪, ≈ 32 commandes à 200 ₪. CPA média admissible ≈ 48,75 ₪. Hors overhead magasin et impôt. Plus de ventes peuvent encore produire une perte.",
    en: "At 40% contribution, monthly break-even net sales are (1,500 + 1,000) / 0.40 = 6,250 ILS, about 32 orders at 200 ILS net. Allowable paid CPA ≈ 48.75 ILS. This excludes unrelated store overhead and income tax. More sales can still produce a loss.",
  } as T3,
};

export const nekudaRule: T3 = {
  he: "1,000 ₪ לחודש + 15% מהתוצאה החיובית הזכאית. דמי הבסיס משולמים גם בלי תוצאה חיובית. אין דמי הקמה בהיקף המוגדר. המדיה בכרטיס הלקוח, תקרה 1,000–1,500 ₪. 15% הוא בחירה מסחרית, לא סטנדרט שוק. P = תרומה זכאית − כל מדיית הבדיקה − דמי הבסיס. משתנה = 15% × max(0,P). הפסדים נגררים בתוך הפיילוט. הזמנה חייבת להיות מסופקת ובת 30 יום לפחות לפני התחשבנות זמנית; סגירה סופית 60 יום מתום הבדיקה.",
  fr: "1 000 ₪ / mois + 15 % du résultat éligible positif. La base est due même sans résultat positif. Pas de frais de setup dans le périmètre. Média 1 000–1 500 ₪ sur la carte client. P = contribution éligible − média du pilote − honoraires. Variable = 15 % × max(0,P). Pertes reportées dans le pilote. Commande livrée et ≥ 30 jours avant règlement provisoire ; clôture 60 jours après le pilote.",
  en: "1,000 ILS per month + 15% of positive eligible result. The fixed fee is payable even when there is no positive result. No setup fee within the defined pilot. Media paid by the client, 1,000–1,500 ILS cap. The 15% is a commercial choice, not a claimed market standard. P = eligible contribution − total pilot media − fixed fees. Earned variable = 15% × max(0, P). Losses carry within the pilot. Orders must be fulfilled and at least 30 days old before provisional settlement; final true-up 60 days after the pilot.",
};

export const nekudaExample: T3 = {
  he: "דוגמה חשבונאית, לא תחזית: 10,000 מכירות זכאיות נטו − 6,000 עלויות משתנות − 1,500 מדיה − 1,000 בסיס = 1,500. המשתנה 225; העסק שומר 1,275 לפני תקורות אחרות ומס הכנסה. זו אינה הוכחה שכל המכירות נוצרו בזכות הפרסום.",
  fr: "Exemple comptable, pas une prévision : 10 000 de ventes nettes éligibles − 6 000 de coûts variables − 1 500 de média − 1 000 de base = 1 500. Variable 225 ; le commerce garde 1 275 avant overhead et impôt. Pas une preuve de causalité.",
  en: "Accounting example, not a forecast: 10,000 eligible net sales − 6,000 variable costs − 1,500 media − 1,000 base = 1,500. Variable is 225; the business keeps 1,275 before other overhead and income tax. Not proof that advertising caused every sale.",
};

export const nekudaPlans = [
  {
    id: "pilot",
    fee: 1000,
    media: "1,000–1,500",
    extra: {
      he: "+ 15% מהתוצאה החיובית הזכאית P",
      fr: "+ 15 % du résultat éligible positif P",
      en: "+ 15% of positive eligible result P",
    } as T3,
    tone: "wine" as const,
    recommended: true,
    name: { he: "פיילוט 90 יום", fr: "Pilote 90 jours", en: "90-day pilot" } as T3,
    tag: { he: "בסיס נמוך · משתנה רק אחרי תוצאה חיובית", fr: "Base basse · variable seulement si P > 0", en: "Low base · variable only if P > 0" } as T3,
    includes: [
      { he: "הקמה עד 5 שעות: גישה, טבלת עלויות ושיוך, מדידה מותרת, תגיות לבית+קטגוריה+3 מוצרים, התאמה בעמוד קיים", fr: "Setup ≤ 5 h : accès, ledger coûts/attribution, mesure permise, métas accueil+collection+3 produits, un ajustement de page", en: "Setup up to 5 hours: access, cost/attribution ledger, permitted measurement, homepage+collection+3 product tags, one existing-page adjustment" },
      { he: "ערוץ ממומן אחד בכל פעם עד 1,500 ₪ מדיה, בקרה שבועית", fr: "Une plateforme payante à la fois, média ≤ 1 500 ₪, revue hebdo", en: "One paid platform at a time, media up to 1,500 ILS, weekly checks" },
      { he: "2 סרטונים 15–30 שנ׳ מחומר שסופק + 2 סטטיות, התאמות פורמט, סבב תיקון אחד", fr: "2 montages 15–30 s + 2 statiques, adaptations, 1 révision", en: "Two 15–30s edits from supplied footage + two stills, format adaptations, one revision" },
      { he: "תזמון אורגני באינסטגרם ובטיקטוק כשכלי החשבון מאפשרים — בלי ניהול קהילה יומי", fr: "Publication organique IG/TikTok si les outils le permettent ; pas de community management quotidien", en: "Schedule approved assets on Instagram and TikTok where tools allow; no daily community management" },
      { he: "דוח תרומה חודשי + שיחת 30 דק׳. עד 6 שעות שירות בחודש", fr: "Réconciliation mensuelle + appel 30 min. Jusqu’à 6 h de service / mois", en: "Monthly contribution report + 30-minute review. Up to six service hours monthly" },
      { he: "טיקטוק ממומן אינו כלול; מטא כפוף לזכאות ולמגבלות החשבון", fr: "TikTok payant non inclus ; Meta soumis à éligibilité", en: "Paid TikTok is not included; Meta ads and measurement are subject to account eligibility" },
    ] as T3[],
  },
  {
    id: "fixed",
    fee: 1800,
    media: "1,000–1,500",
    extra: {
      he: "בלי משתנה — רק אם נבחר בכתב",
      fr: "Sans variable — seulement si choisi par écrit",
      en: "No variable — only if chosen in writing",
    } as T3,
    tone: "navy" as const,
    name: { he: "חלופה קבועה", fr: "Alternative fixe", en: "Fixed alternative" } as T3,
    tag: { he: "אותו היקף · בלי התחשבנות רווח", fr: "Même périmètre · sans réconciliation de profit", en: "Same scope · no profit recon" } as T3,
    includes: [
      { he: "אותו היקף שירות מצומצם כמו הפיילוט", fr: "Même périmètre de service limité que le pilote", en: "The same limited service scope as the pilot" },
      { he: "1,800 ₪ קבועים לחודש, בלי רכיב משתנה", fr: "1 800 ₪ fixes / mois, sans variable", en: "1,800 ILS fixed per month, no variable" },
      { he: "מדיה נפרדת בכרטיס הלקוח", fr: "Média à part, carte client", en: "Separate media on the client card" },
      { he: "אופציה בלבד — לא שינוי אוטומטי", fr: "Option seulement — pas un basculement automatique", en: "Optional, not an automatic change" },
    ] as T3[],
  },
];

export const nekudaYear: { t: T3; d: T3 }[] = [
  {
    t: { he: "ימים 1–7", fr: "Jours 1–7", en: "Days 1–7" },
    d: { he: "גישה לקריאה, בחינת 90 יום, עלויות, מלאי, תגיות ומוצר. אישור רשימת קמפיינים וכללי מדידה.", fr: "Accès lecture, baseline 90 j, feuille de coûts, stock, métas. Approuver la liste éligible et les règles de tracking.", en: "Read-only access, 90-day baseline, cost sheet, stock, metadata and product-page fixes. Approve the eligible campaign list and tracking rules." },
  },
  {
    t: { he: "ימים 8–30", fr: "Jours 8–30", en: "Days 8–30" },
    d: { he: "הפעלה רק אחרי אישור; הצעה אחת ושתי יצירות בערוץ הנבחר. פרסום אורגני ומדידת הזמנות ששולמו.", fr: "Lancer seulement après accord ; une offre, deux créas, un canal. Organique + commandes payées.", en: "Launch only after approval; one offer and two creatives on the chosen paid channel. Publish organic assets and measure paid orders." },
  },
  {
    t: { he: "ימים 31–90", fr: "Jours 31–90", en: "Days 31–90" },
    d: { he: "התאמת הזמנות שהבשילו, עצירת הצעות חלשות, בדיקת יצירה או ערוץ — בלי לשנות כמה גורמים יחד. ביום 90: המשך, שינוי או עצירה.", fr: "Réconcilier les commandes mûres, pauser le faible, tester la suite. J90 : continuer, réviser ou arrêter.", en: "Reconcile mature orders, pause weak offers, test the next creative or channel. Do not change several factors together. Days 61–90: continue, revise or stop." },
  },
];

export const nekudaVat: T3 = {
  he: "אם חל מע״מ 18% על DreamNova: בסיס 1,000 → 1,180; עם 1,500 מדיה מדובר בלפחות 2,680 ₪ מזומן לפני מסי מדיה, משתנה ותוכנות. גם הרכיב המשתנה כפוף למסים החלים. מעמד המס יובהר בהזמנה. [19]",
  fr: "Si TVA israélienne 18 % : la base 1 000 devient 1 180 ; avec 1 500 de média, au moins 2 680 ₪ cash avant taxes média, variable et logiciels. Statut fiscal à confirmer. [19]",
  en: "If Israeli VAT at 18% applies: the 1,000 base becomes 1,180; with 1,500 media that is at least 2,680 ILS cash before media taxes, variable fees and optional software. Tax status must be confirmed. [19]",
};

export const nekudaTerms: T3 = {
  he: "פיילוט 90 יום, חיוב חודשי, בלי התחייבות שנתית. סיום בסוף חודש ששולם בהודעה של שבעה ימים. אין הבטחת הכנסה, רווח, אישור מודעה או דירוג. בתוקף עד 30.09.2026, כפוף לזיהוי העסקים ואישור היקף, עלויות, שיוך ותקציב בכתב. קבלת המסמך אינה הרשאה להפעלת קמפיין. הוכן לעיון, לא נשלח ולא נחתם.",
  fr: "Pilote 90 jours, mensuel, sans lock annuel. Fin en fin de mois payé, préavis 7 jours. Pas de garantie de CA, profit, validation pub ou ranking. Valable jusqu’au 30.09.2026. Accepter le document n’autorise pas le lancement d’une campagne. Préparé pour examen, non envoyé.",
  en: "A 90-day pilot is recommended, monthly billing, no annual commitment. Either party may end at the end of the paid month with seven days’ notice. No guaranteed revenue, profit, ad approval or search ranking. Valid through 30 September 2026. Accepting this document does not authorise campaign launch. Prepared for review, not sent or signed.",
};

export const nekudaClose: T3 = {
  he: "DreamNova.studio · David Amor, Senior Project Manager · 0584921492. הגרסאות באנגלית ובעברית כוללות אותם ממצאים, היקף ותנאים.",
  fr: "DreamNova.studio · David Amor, Senior Project Manager · 0584921492. Les éditions EN et HE portent les mêmes constats, le même périmètre et les mêmes termes.",
  en: "DreamNova.studio · David Amor, Senior Project Manager · 0584921492. English and Hebrew editions contain the same findings, scope and commercial terms.",
};

export const nekudaSources: { n: string; t: T3; href: string }[] = [
  { n: "1", t: { he: "אתר נקודה טובה", fr: "Boutique Nekouda Tova", en: "Nekouda Tova storefront" }, href: "https://nekodatova.co.il/" },
  { n: "3", t: { he: "איזי — כתובת ורישום", fr: "Easy — adresse", en: "Easy — address listing" }, href: "https://easy.co.il/page/26370390" },
  { n: "6", t: { he: "ספריית ברסלב — קטלוג", fr: "Breslevbooks — catalogue", en: "Breslevbooks — specialist catalogue" }, href: "https://breslevbooks.co.il/" },
  { n: "8", t: { he: "גוגל — מגבלות פרסום מותאם", fr: "Google — publicité personnalisée", en: "Google — personalised advertising restrictions" }, href: "https://support.google.com/adspolicy/answer/143465?hl=en" },
  { n: "9", t: { he: "מטא — קטגוריות מקור נתונים", fr: "Meta — catégories de source", en: "Meta — data-source categories" }, href: "https://www.facebook.com/business/help/1402913027039332" },
  { n: "10", t: { he: "מטא — מאפיינים אישיים במודעות", fr: "Meta — attributs personnels", en: "Meta — personal attributes in ads" }, href: "https://www.facebook.com/business/help/2557868957763449" },
  { n: "12", t: { he: "שופיפיי — פיקסלים ואירועי לקוח", fr: "Shopify — pixels", en: "Shopify — pixels and customer events" }, href: "https://help.shopify.com/en/manual/promoting-marketing/pixels" },
  { n: "14", t: { he: "גוגל — כותרות בתוצאות", fr: "Google — title links", en: "Google — title links" }, href: "https://developers.google.com/search/docs/appearance/title-link" },
  { n: "16", t: { he: "גוגל — רישומי מוצר ללא מדיה", fr: "Google — free product listings", en: "Google — free product listings" }, href: "https://support.google.com/merchants/answer/13889434?hl=en" },
  { n: "18", t: { he: "גוגל — יסודות SEO, בלי meta-keywords", fr: "Google — bases SEO", en: "Google — SEO basics; no meta-keywords benefit" }, href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
];
