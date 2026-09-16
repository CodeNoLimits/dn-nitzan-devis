import type { T3 } from "./copy";

export const nitzanHero: T3 = {
  he: "יותר עבודות רווחיות. תקציב ברור ומדיד.",
  fr: "Plus de chantiers rentables. Un budget qui reste lisible.",
  en: "More profitable jobs. A budget that stays readable.",
};

export const nitzanLead: T3 = {
  he: "תוכנית מעשית לאשדוד והסביבה, עם מסלול נפרד לפרויקטים באזור ירושלים. להתחיל במסלול הבסיס ל־90 יום, ערוץ ממומן אחד בכל פעם, לתקן את קליטת הפניות ולשמור את האתר הקיים. אין הבטחה למספר לקוחות. המחקר ציבורי; ההשערות יאומתו בחשבונות.",
  fr: "Commencer par le premier plan pendant 90 jours, un seul canal payant à la fois. Réparer la capture des demandes, mesurer les clients réellement signés et conserver le site existant. Totaux de planification hors taxes. Média réglé par le client. Aucune promesse de volume.",
  en: "Start with the first plan for 90 days, one paid channel at a time. Fix intake, measure signed jobs, keep the existing site. Planning totals exclude tax. Media paid by the client. No volume promise.",
};

export const nitzanAudit = {
  title: { he: "ממצאי בדיקת האתר", fr: "Audit du site : conserver, puis corriger", en: "Site audit: keep, then fix" } as T3,
  scope: {
    he: "נבדקו דפי בית, אודות, שירותים, גלריה ויצירת קשר. נבדקו HTML ציבורי וה־JavaScript הראשי (~517 ק״ב לא דחוס). לא נשלחה פנייה, לא נמדד Lighthouse, לא נבדק טלפון אמיתי, אבטחה או נגישות. robots.txt ו־sitemap לא היו נגישים מכאן — אין להסיק שאינם קיימים.",
    fr: "Pages Accueil, Services, Galerie, À propos, Contact. HTML public + bundle JS principal (~517 ko non compressés). Pas de Lighthouse, pas de test mobile réel, pas d’envoi (cela aurait créé une fausse demande). robots.txt / sitemap inaccessibles ici : cela ne prouve pas leur absence.",
    en: "Home, Services, Gallery, About, Contact. Public HTML + main JS bundle (~517 kb uncompressed). No Lighthouse, no real-phone test, no form send. robots.txt / sitemap were unreachable from this environment — that does not prove they are absent.",
  } as T3,
  findings: [
    {
      p: "P0",
      find: {
        he: "הטופס שנבדק שומר בדפדפן הגולש ופותח וואטסאפ. הוא אינו מוכיח שההודעה נשלחה.",
        fr: "Le formulaire écrit dans le navigateur du visiteur, puis ouvre WhatsApp. Un clic n’est pas une demande reçue.",
        en: "The inspected form writes in the visitor’s browser, then opens WhatsApp. A click is not a received lead.",
      } as T3,
      act: {
        he: "שמירה מרכזית עם מזהה פנייה; אישור רק אחרי שמירה מוצלחת.",
        fr: "Réception centrale avec identifiant ; confirmer uniquement après sauvegarde réussie.",
        en: "Central intake with request ID; confirm only after a successful save.",
      } as T3,
    },
    {
      p: "P0",
      find: {
        he: "לא נמצאו סימוני GA4, Google Ads, GTM או Meta Pixel בקבצים הציבוריים העיקריים. אין בכך הוכחה שאין מדידה חיצונית אחרת.",
        fr: "Aucun marqueur usuel GA4 / Ads / GTM / Pixel dans le HTML et le bundle examinés. Cela ne prouve pas l’absence d’une autre mesure.",
        en: "No usual GA4, Ads, GTM or Meta Pixel markers in the examined public HTML and bundle. That does not prove other measurement is absent.",
      } as T3,
      act: {
        he: "לבדוק חשבונות והזרקות צד־שלישי; להגדיר מדידה אחת ולבדוק אירועים.",
        fr: "Vérifier les comptes et les injections ; poser une instrumentation unique et tester les événements.",
        en: "Check accounts and third-party injections; install one stack and test events.",
      } as T3,
    },
    {
      p: "P1",
      find: {
        he: "המסר הראשון אינו מציין בבירור את אשדוד והסביבה.",
        fr: "Le premier écran met en avant la marque ; la zone desservie n’y est pas explicite.",
        en: "The first screen leads with the brand; the service area is not explicit.",
      } as T3,
      act: {
        he: "להציג אשדוד והסביבה, CTA לוואטסאפ, וגרסת ירושלים לפרויקטים בלבד.",
        fr: "Ajouter Ashdod et environs ; CTA WhatsApp ; variante Jérusalem dédiée aux projets.",
        en: "Show Ashdod and surroundings; WhatsApp CTA; a Jerusalem variant for projects only.",
      } as T3,
    },
    {
      p: "P1",
      find: {
        he: "כותרות כלליות בגלריה; לא נמצא canonical או JSON-LD בדף שנבדק.",
        fr: "Titres génériques ; pas de canonical ou JSON-LD trouvé sur la galerie inspectée.",
        en: "Generic titles; no canonical or JSON-LD found on the inspected gallery.",
      } as T3,
      act: {
        he: "כותרות ותיאורים לכל עמוד, canonical עקבי, נתונים מובנים עובדתיים.",
        fr: "Titres/descriptions par page, canonical cohérent, données structurées factuelles.",
        en: "Per-page titles and descriptions, consistent canonicals, factual structured data.",
      } as T3,
    },
    {
      p: "P1",
      find: {
        he: "לא אותרו ביקורות מאומתות או קישור למדיניות פרטיות בדפים שנבדקו.",
        fr: "Pas d’avis vérifiables ni de lien de confidentialité repéré au pied de page.",
        en: "No verifiable reviews or privacy link spotted on the inspected pages.",
      } as T3,
      act: {
        he: "להציג ביקורות אמיתיות ומקורן; מידע על איסוף, שמירה ומעקב פרסומי.",
        fr: "Vrais avis autorisés + source ; notice de collecte, conservation et suivi publicitaire.",
        en: "Real authorised reviews with source; collection, retention and ads-tracking notice.",
      } as T3,
    },
    {
      p: "P2",
      find: {
        he: "תג Lovable גלוי; JavaScript ראשי ≈ 517 ק״ב לא דחוס.",
        fr: "Badge Lovable visible ; JS principal ≈ 517 ko non compressés.",
        en: "Lovable badge visible; main JavaScript ≈ 517 kb uncompressed.",
      } as T3,
      act: {
        he: "להסיר את התג באפשרויות המורשות; לפרופיל לפני אופטימיזציה. לא להחליף מארח מתוך עיקרון.",
        fr: "Retirer le badge via les options autorisées ; profiler avant d’optimiser. Ne pas changer d’hébergeur par principe.",
        en: "Remove the badge via allowed options; profile before optimising. Do not change host on principle.",
      } as T3,
    },
  ],
  keep: {
    he: "לשמר: תמונות, היררכיה קריאה, שירותים נפרדים, קישורי קשר, ניווט עברי ופונקציות נגישות שקיימות. נוכחותן אינה הסמכת נגישות מלאה.",
    fr: "À préserver : photos, hiérarchie lisible, services distincts, liens de contact, navigation hébraïque et fonctions d’accessibilité présentes. Leur présence ne vaut pas conformité complète.",
    en: "Keep: photos, readable hierarchy, distinct services, contact links, Hebrew navigation and existing accessibility features. Presence is not full compliance.",
  } as T3,
};

export const nitzanFunnel = {
  title: { he: "מביקור לדרישה אמינה", fr: "Transformer une visite en demande fiable", en: "Turn a visit into a reliable request" } as T3,
  path: {
    he: "מודעה מדויקת → עמוד מקומי ושירות תואם → טופס קצר או וואטסאפ ישיר → פנייה שנקלטה וסווגה → הצעת מחיר → עבודה חתומה → מרווח. לחיצה בוואטסאפ אינה שיחה שהתקבלה ואינה לקוח.",
    fr: "Annonce précise → page locale et service → formulaire court OU WhatsApp → demande reçue et qualifiée → devis → chantier signé → marge. Un clic WhatsApp n’est ni une conversation reçue, ni un client.",
    en: "Precise ad → matching local/service page → short form OR WhatsApp → received and qualified request → quote → signed job → margin. A WhatsApp click is neither a received conversation nor a client.",
  } as T3,
  events: [
    {
      k: { he: "click_whatsapp / click_call", fr: "click_whatsapp / click_call", en: "click_whatsapp / click_call" } as T3,
      v: { he: "לחיצה על הקישור; מדד משני. אין סטטוס «לקוח» בשלב זה.", fr: "Clic sur le lien ; indicateur secondaire. Aucun statut client.", en: "Link click; secondary indicator. No client status yet." } as T3,
    },
    {
      k: { he: "lead_received", fr: "lead_received", en: "lead_received" } as T3,
      v: { he: "קליטה בשרת של הטופס; איש קשר ייחודי ומקור שמורים.", fr: "Réception serveur confirmée ; contact unique et source conservés.", en: "Server-confirmed form receipt; unique contact and source kept." } as T3,
    },
    {
      k: { he: "qualified_lead", fr: "qualified_lead", en: "qualified_lead" } as T3,
      v: { he: "אזור שירות, צורך אמיתי, שירות בר־ביצוע, תקציב ולוח זמנים תואמים.", fr: "Zone desservie, vrai besoin, prestation réalisable, budget/planning compatibles.", en: "Served area, real need, feasible job, compatible budget and timing." } as T3,
    },
    {
      k: { he: "quote_sent / won", fr: "quote_sent / won", en: "quote_sent / won" } as T3,
      v: { he: "הצעה נשלחה ואז התקבלה; הכנסה ועלויות משתנות מיוחסות לפנייה.", fr: "Devis envoyé puis accepté ; revenu et coûts variables attribués.", en: "Quote sent then accepted; revenue and variable costs attributed." } as T3,
    },
  ],
  note: {
    he: "GTM + GA4 + Google Ads ופיקסל מטא, בלי כפילות אירועים. המרה ראשית אחת לכל יעד. אם פיקסל ו־CAPI מדווחים אותו אירוע — אותו event_id. לא מעבירים שמות, מספרים או טקסט חופשי לפרמטרי GA4.",
    fr: "GTM + GA4 + Ads et Pixel, sans doubler. Une conversion primaire par objectif. Pixel et CAPI : même event_id. Jamais de noms, numéros ou textes libres dans GA4.",
    en: "GTM + GA4 + Ads and Pixel, without duplicate events. One primary conversion per goal. Pixel and CAPI share the same event_id. Never send names, numbers or free text to GA4 parameters.",
  } as T3,
};

export const nitzanMarket = {
  title: { he: "שוק ותחרות — איפה להיבדל", fr: "Marché et concurrence", en: "Market and competition" } as T3,
  intro: {
    he: "שני מנועים: אחזקה חוזרת מקומית (מסלולים קצרים, הכנסה צפויה) ופרויקטי הקמה, גגות, מרפסות ותאורה (מחזור גבוה יותר, תיק עבודות קובע). עברית היא הבסיס; מודעה בצרפתית לבדיקה לפי שפה, אזור וצורך — בלי מיקוד דתי או עדתי.",
    fr: "Deux moteurs : entretien récurrent local, et projets (création, terrasses, lumière). L’hébreu reste la base. Tester ensuite une annonce française — langue, zone, besoin. Aucun ciblage religieux ou ethnique.",
    en: "Two engines: recurring local upkeep, and projects (installs, terraces, lighting). Hebrew is the base. A French ad can be tested by language, area and need — no religious or ethnic targeting.",
  } as T3,
  rows: [
    {
      k: { he: "שלי גינון, גן יבנה [8]", fr: "Sheli Ginun, Gan Yavne [8]", en: "Sheli Ginun, Gan Yavne [8]" } as T3,
      v: { he: "הקמה, השקיה, גינות חסכניות, אחזקה לפרטיים ולמוסדות.", fr: "Création, irrigation, jardins économes, entretien particuliers/institutions.", en: "Install, irrigation, water-wise gardens, private and institutional upkeep." } as T3,
      rec: { he: "תחום שירות ברור, תיק לפי שירות, קיצור זמן לבירור.", fr: "Offre locale claire, portfolio par service, qualification rapide.", en: "Clear local offer, portfolio by service, fast qualification." } as T3,
    },
    {
      k: { he: "גן של שושנים / מרחבים ירוקים [7]", fr: "Gan Shel Shoshanim / Merhavim Yerukim [7]", en: "Gan Shel Shoshanim / Merhavim Yerukim [7]" } as T3,
      v: { he: "מתחרים במדריך המקומי של גן יבנה.", fr: "Présents dans l’annuaire local de Gan Yavne.", en: "Listed in the Gan Yavne local directory." } as T3,
      rec: { he: "הוכחות וביקורות; לא להתחרות רק במחיר.", fr: "Preuves et avis ; ne pas rivaliser uniquement sur le prix.", en: "Proof and reviews; do not compete on price alone." } as T3,
    },
    {
      k: { he: "מרכז גינון גבעת זאב [9]", fr: "Centre de jardinage Givat Zeev [9]", en: "Givat Zeev garden centre [9]" } as T3,
      v: { he: "הקמה/שיקום והשקיה באזור ירושלים.", fr: "Création/réhabilitation et irrigation dans la zone de Jérusalem.", en: "Install/rehab and irrigation in the Jerusalem area." } as T3,
      rec: { he: "להבליט עבודות קיימות באזור ומעקב אישי.", fr: "Valoriser les réalisations existantes et le suivi personnel.", en: "Show existing work in the region and personal follow-up." } as T3,
    },
    {
      k: { he: "פורטלי השוואה [5,20]", fr: "Portails de comparaison [5,20]", en: "Comparison portals [5,20]" } as T3,
      v: { he: "טווחי מחיר והשוואת בעלי מקצוע.", fr: "Prix repères et mise en concurrence.", en: "Price ranges and professional comparison." } as T3,
      rec: { he: "הצעה מפורטת עם היקף; בלי מחיר קריאה בלי תוכן.", fr: "Devis détaillé et périmètre précis ; éviter les prix d’appel vides.", en: "Detailed quotes with a defined scope; avoid empty bait prices." } as T3,
    },
  ],
};

export const nitzanGeo = {
  title: { he: "מיקוד גאוגרפי לבדיקה", fr: "Pré-ciblage géographique à tester", en: "Geographic pre-targeting to test" } as T3,
  note: {
    he: "לא מפעילים את כל האזורים יחד. אין דירוג עושר או צפיפות וילות לפי שכונה. האזור הטוב הוא זה שממקסם מרווח אחרי נסיעה ורכישה.",
    fr: "Ne pas activer toutes les zones ensemble. Aucun classement de richesse par quartier. Le meilleur secteur maximise la marge après déplacement et acquisition.",
    en: "Do not turn all zones on together. No wealth ranking by neighbourhood. The best area is the one that maximises margin after travel and acquisition.",
  } as T3,
  tests: [
    {
      id: "A1",
      name: { he: "אשדוד — קרוב לבית", fr: "Ashdod — près du domicile", en: "Ashdod — near home" } as T3,
      who: { he: "אחזקה ושיקום; נקודת פתיחה לצמצום נסיעות. לבדוק שכונות לפי פניות בפועל.", fr: "Entretien et remise en état. Tester les quartiers à partir des demandes, sans prétendre connaître leur rentabilité.", en: "Upkeep and refresh. Test neighbourhoods from real requests; do not claim known profitability." } as T3,
    },
    {
      id: "A2",
      name: { he: "גן יבנה, שתולים, ביצרון, אמונים", fr: "Gan Yavne, Shtulim, Bitzaron, Emunim", en: "Gan Yavne, Shtulim, Bitzaron, Emunim" } as T3,
      who: { he: "השערת מסלול גינות סביב אשדוד. לאמת זמני נסיעה לפני מיקוד.", fr: "Hypothèse de tournée autour d’Ashdod. Valider les trajets exacts avant ciblage.", en: "Garden-round hypothesis around Ashdod. Validate actual travel times before targeting." } as T3,
    },
    {
      id: "B",
      name: { he: "יבנה / גן רווה", fr: "Yavne / Gan Raveh", en: "Yavne / Gan Raveh" } as T3,
      who: { he: "הרחבה רק אם אזור A מניב לקוחות רווחיים. אותה הצעה ואותה יצירה להשוואת אזור.", fr: "Extension seulement si A produit des clients rentables. Même offre et création pour comparer la zone.", en: "Extend only if A produces profitable clients. Same offer and creative to compare the area." } as T3,
    },
    {
      id: "C",
      name: { he: "ירושלים, מבשרת ציון, בית זית, בית שמש", fr: "Jérusalem, Mevaseret Zion, Beit Zayit, Beit Shemesh", en: "Jerusalem, Mevaseret Zion, Beit Zayit, Beit Shemesh" } as T3,
      who: { he: "פרויקטים בעלי ערך או יום מרוכז. לא יציאה זולה בודדת בלי רצפה כלכלית.", fr: "Projets à valeur élevée ou interventions regroupées. Pas de petit dépannage isolé sans minimum économique.", en: "High-value projects or grouped days. No cheap one-off trip without an economic floor." } as T3,
    },
  ],
};

export const nitzanAds = {
  title: { he: "גוגל, מטא, טיקטוק — תפקיד כל ערוץ", fr: "Google, Meta, TikTok : rôle de chaque canal", en: "Google, Meta, TikTok — role of each channel" } as T3,
  channels: [
    {
      k: { he: "חיפוש בגוגל", fr: "Google Search", en: "Google Search" } as T3,
      v: { he: "לבדוק 90 יום אחרונים; לשמר מה שכבר מביא הצעות מתאימות. מחליטים לפי עלות פנייה מתאימה, סגירות ומרווח — לא לפי קליקים בלבד.", fr: "Auditer les 90 derniers jours ; préserver ce qui génère déjà des devis qualifiés. Coût du contact qualifié, clients signés, marge.", en: "Audit the last 90 days; keep what already produces qualified quotes. Decide by qualified-contact cost, signed jobs and margin — not clicks." } as T3,
    },
    {
      k: { he: "אינסטגרם + פייסבוק", fr: "Instagram + Facebook", en: "Instagram + Facebook" } as T3,
      v: { he: "מערך מטא אחד, מודעות לוואטסאפ או לטופס. שני מיקומים אינם שני תקציבים נפרדים. [12]", fr: "Un seul ensemble Meta, publicités vers WhatsApp ou formulaire. Les deux placements ne sont pas deux budgets. [12]", en: "One Meta set, ads to WhatsApp or a lead form. The two placements are not two budgets. [12]" } as T3,
    },
    {
      k: { he: "WhatsApp Business", fr: "WhatsApp Business", en: "WhatsApp Business" } as T3,
      v: { he: "יעד המרה, בירור צורך ומעקב פניות. לחיצה אינה הוכחה שהתקבלה הודעה. פיקסל אינו קורא שיחות.", fr: "Destination de conversion. Un clic n’est pas une conversation reçue. Le pixel ne synchronise pas WhatsApp.", en: "Conversion destination, qualification and follow-up. A click is not a received message. The pixel does not read WhatsApp chats." } as T3,
    },
    {
      k: { he: "טיקטוק", fr: "TikTok", en: "TikTok" } as T3,
      v: { he: "שימוש חוזר אורגני בסרטונים. ממומן רק בהמשך, עם מעטפת נפרדת ומספיק סרטונים. מינימום Ads Manager: >20 USD ליום לקבוצה; >50 USD לקמפיין כשקובעים תקציב ברמה זו. [13] אין טיקטוק מוסתר בסכומי המדיה.", fr: "Réutilisation organique. Test payant plus tard seulement, enveloppe dédiée. Minimums Ads Manager > 20 USD/jour par groupe ; > 50 USD campagne. [13] Pas de TikTok caché dans ces montants.", en: "Organic reuse first. Paid later only, with a dedicated envelope and enough videos. Ads Manager mins: >20 USD/day ad group; >50 USD campaign. [13] No hidden TikTok in these amounts." } as T3,
    },
  ],
  budget: {
    he: "ברירת מחדל: לשמר גוגל בזמן ביקורת 90 יום. אם אחרי תיקון המדידה אין המרות שמישות — פיילוט מטא 30 יום עם 1,000 ₪. ב־1,500 ₪: ערוץ עיקרי אחד, השני בתור. ב־3,000 ₪: גוגל 1,800 / מטא 1,200, ואז לפי מרווח. 900 ₪ ≈ 29.61 ₪ ליום ממוצע (900/30.4). תקציב יומי בגוגל אינו תקרה יומית קשיחה. [11,19]",
    fr: "Par défaut : garder Google pendant l’audit. Si aucune conversion exploitable après correction du suivi : pilote Meta 30 jours à 1 000 ₪. À 1 500 ₪ : un canal principal. À 3 000 ₪ : Google 1 800 / Meta 1 200, puis selon la marge. 900 ₪ ≈ 29,61 ₪/jour moyen (900/30,4).",
    en: "Default: keep Google during the 90-day audit. If no usable conversions after tracking is fixed: a 30-day Meta pilot at 1,000 ILS. At 1,500: one primary channel. At 3,000: Google 1,800 / Meta 1,200, then by margin. 900 ILS ≈ 29.61/day average (900/30.4).",
  } as T3,
};

export const nitzanTests = {
  title: { he: "קמפיינים ובדיקות — בלי לפזר", fr: "Campagnes et tests, sans disperser", en: "Campaigns and tests, without splitting" } as T3,
  search: [
    {
      k: { he: "אחזקה / בקשה מקומית", fr: "Entretien / demande locale", en: "Upkeep / local request" } as T3,
      v: "גנן באשדוד · אחזקת גינות באשדוד · גנן בגן יבנה",
    },
    {
      k: { he: "פרויקט / עמוד ייעודי", fr: "Projet / page dédiée", en: "Project / dedicated page" } as T3,
      v: "הקמת גינה · עיצוב גינה במרפסת · הקמת גינה בירושלים",
    },
    {
      k: { he: "שלילות לבדיקה", fr: "Exclusions à vérifier", en: "Negatives to review" } as T3,
      v: "דרושים · קורס · לימודים · כלי גינון · עבודה בגינון · עשה זאת בעצמך",
    },
  ],
  protocol: {
    he: "מבנה גוגל: קמפיין מקומי אחד; שני קבוצות רק אם יש נפח — אחזקה ושיקום. Exact/Phrase, בלי Display או Performance Max במעטפת הזו. בדיקה 1: אותו אזור והצעה, שתי יצירות. בדיקה 2: יצירה מנצחת, אזור A מול B. בדיקה 3: וואטסאפ מול טופס. בדיקה 4: עברית מול צרפתית. גורם אחד בכל פעם. ב־1,000 ₪ שתי גרסאות מקבלות 500 ₪; בעלות היפותטית 100 ₪ לפנייה מתאימה — כחמש פניות לגרסה. אין הכרזה על מנצח אחרי שני קליקים.",
    fr: "Une campagne locale ; deux groupes seulement si le volume le justifie. Exact/expression. Pas de Display ni PMax. Un seul facteur à la fois. À 1 000 ₪, deux variantes à 500 ₪ ; à 100 ₪/contact, cinq contacts par variante. Pas de gagnant après deux clics.",
    en: "One local campaign; two groups only if volume justifies it. Exact/phrase. No Display or PMax on this envelope. One factor at a time. At 1,000 ILS, two variants get 500 each; at a hypothetical 100 ILS per qualified contact that is five contacts per variant. Do not declare a winner after two clicks.",
  } as T3,
};

export const nitzanCreatives: { t: T3; body: T3 }[] = [
  {
    t: { he: "יצירה א — שיקום מקומי", fr: "Créatif A — remise en état locale", en: "Creative A — local refresh" },
    body: {
      he: "הגינה צריכה רענון? הניצן שבגן מציע טיפול מסודר בגינה באשדוד והסביבה. שלחו תמונה וציינו את היישוב, ונבדוק יחד מה מתאים לגינה שלכם.",
      fr: "הגינה צריכה רענון? הניצן שבגן מציע טיפול מסודר בגינה באשדוד והסביבה. שלחו תמונה וציינו את היישוב, ונבדוק יחד מה מתאים לגינה שלכם.",
      en: "הגינה צריכה רענון? הניצן שבגן מציע טיפול מסודר בגינה באשדוד והסביבה. שלחו תמונה וציינו את היישוב, ונבדוק יחד מה מתאים לגינה שלכם.",
    },
  },
  {
    t: { he: "יצירה ב — גינת גג / מרפסת", fr: "Créatif B — jardin ou terrasse", en: "Creative B — roof / terrace" },
    body: {
      he: "המרפסת יכולה להפוך לפינה ירוקה. תכנון והקמת גינות גג ומרפסת, עם התאמה לשטח ולשימוש שלכם. שלחו תמונה לקבלת כיוון ראשוני.",
      fr: "המרפסת יכולה להפוך לפינה ירוקה. תכנון והקמת גינות גג ומרפסת, עם התאמה לשטח ולשימוש שלכם. שלחו תמונה לקבלת כיוון ראשוני.",
      en: "המרפסת יכולה להפוך לפינה ירוקה. תכנון והקמת גינות גג ומרפסת, עם התאמה לשטח ולשימוש שלכם. שלחו תמונה לקבלת כיוון ראשוני.",
    },
  },
  {
    t: { he: "גרסה צרפתית", fr: "Variante française", en: "French variant" },
    body: {
      he: "Votre jardin mérite un entretien suivi. À Ashdod et dans les environs, échangez en français avec votre jardinier. Envoyez une photo et votre ville sur WhatsApp. Devis après évaluation du besoin.",
      fr: "Votre jardin mérite un entretien suivi. À Ashdod et dans les environs, échangez en français avec votre jardinier. Envoyez une photo et votre ville sur WhatsApp. Devis après évaluation du besoin.",
      en: "Votre jardin mérite un entretien suivi. À Ashdod et dans les environs, échangez en français avec votre jardinier. Envoyez une photo et votre ville sur WhatsApp. Devis après évaluation du besoin.",
    },
  },
];

export const nitzanVideo: T3 = {
  he: "סרטון 15 שנ׳: 0–3 בעיה; 3–9 עבודה אמיתית; 9–12 תוצאה; 12–15 יישוב + הזמנה לשלוח תמונה. הבטחה אחת, כתוביות עברית, בלי הנחה לא מאושרת. ויזואל: לפני/אחרי אמיתי, 4:5 ו־9:16. אין גינה שנוצרה בבינה כאילו היא עבודה שבוצעה.",
  fr: "Vidéo 15 s : 0–3 problème ; 3–9 travail réel ; 9–12 résultat ; 12–15 ville + photo. Une promesse, sous-titres hébreux. Avant/après réel, 4:5 et 9:16. Aucun jardin généré présenté comme un chantier réel.",
  en: "15s video: 0–3 problem; 3–9 real work; 9–12 result; 12–15 town + send a photo. One promise, Hebrew captions. Real before/after, 4:5 and 9:16. No generated garden presented as a real job.",
};

export const nitzanPlans = [
  {
    id: "essentiel",
    fee: 2000,
    media: "1,000",
    total: "3,000",
    tone: "navy" as const,
    recommended: true,
    name: { he: "בסיס", fr: "Essentiel", en: "Essential" } as T3,
    tag: { he: "ערוץ אחד · 90 יום", fr: "Un canal · 90 jours", en: "One channel · 90 days" } as T3,
    includes: [
      { he: "אבחון, מדידה בסיסית לפי הערוץ, טופס מרכזי והתראה", fr: "Diagnostic, mesure de base, formulaire central + alerte", en: "Diagnosis, basic measurement, central form + alert" },
      { he: "ערוץ ממומן פעיל אחד בכל פעם", fr: "Une plateforme payante active à la fois", en: "One paid platform active at a time" },
      { he: "2 סטטיות + סרטון קצר אחד · 4:5 ו־9:16 · סבב תיקון אחד", fr: "2 statiques + 1 montage · 4:5 et 9:16 · 1 aller-retour", en: "2 stills + 1 short edit · 4:5 and 9:16 · one revision" },
      { he: "שיפור אתר עד שעה בחודש", fr: "Optimisation site 1 h/mois", en: "Site optimisation up to 1 hour/month" },
      { he: "טיפול בסיסי בפרופיל גוגל, בקרה שבועית, דוח חודשי", fr: "Fiche Google, revue hebdo, bilan mensuel", en: "Basic Google profile care, weekly review, monthly report" },
      { he: "הקמה כלולה עד 5 שעות בחודש הראשון", fr: "Mise en place incluse jusqu’à 5 h le 1er mois", en: "Setup included up to 5 hours in month one" },
    ] as T3[],
  },
  {
    id: "croissance",
    fee: 2800,
    media: "1,500",
    total: "4,300",
    tone: "forest" as const,
    name: { he: "צמיחה", fr: "Croissance", en: "Growth" } as T3,
    tag: { he: "שני ערוצים מנוהלים · בדיקות מדורגות", fr: "Deux canaux gérés · tests successifs", en: "Two managed channels · sequential tests" } as T3,
    includes: [
      { he: "הכול מבסיס, כולל השוואת אזורים והצעות", fr: "Tout Essentiel + comparaison des zones et devis", en: "Everything in Essential plus zone and quote comparison" },
      { he: "שני ערוצים מנוהלים; בדיקות מדורגות בתקציב קטן", fr: "2 gérées ; tests successifs à petit budget", en: "Two managed; sequential tests on a small budget" },
      { he: "3 סטטיות + 2 סרטונים קצרים · סבב תיקון אחד", fr: "3 statiques + 2 montages · 1 aller-retour", en: "3 stills + 2 short edits · one revision" },
      { he: "שיפור אתר עד שעתיים בחודש", fr: "Optimisation site 2 h/mois", en: "Site optimisation up to 2 hours/month" },
    ] as T3[],
  },
  {
    id: "accel",
    fee: 3500,
    media: "3,000",
    total: "6,500",
    tone: "wine" as const,
    name: { he: "האצה", fr: "Accélération", en: "Acceleration" } as T3,
    tag: { he: "שני ערוצים פעילים · לא פתיחה מומלצת", fr: "Deux canaux actifs · pas le départ conseillé", en: "Two active channels · not the recommended start" } as T3,
    includes: [
      { he: "הכול מצמיחה + מעקב מכירות ושיחה פעמיים בחודש", fr: "Tout Croissance + attribution des ventes et revue bimensuelle", en: "Everything in Growth plus sales attribution and a twice-monthly review" },
      { he: "שני ערוצים פעילים; טיקטוק ממומן רק בתקציב נפרד", fr: "2 actives ; TikTok payant sur budget séparé", en: "Two active; paid TikTok only on a separate budget" },
      { he: "4 סטטיות + 4 סרטונים · שני סבבי תיקון", fr: "4 statiques + 4 montages · 2 allers-retours", en: "4 stills + 4 short edits · two revision rounds" },
      { he: "שיפור אתר עד 3 שעות בחודש", fr: "Optimisation site 3 h/mois", en: "Site optimisation up to 3 hours/month" },
    ] as T3[],
  },
];

export const nitzanSiteFix: T3 = {
  he: "האתר הקיים כבר מציג את העסק במקצועיות. אין להניח מראש שנדרשת בנייה מחדש. אפשרות ממוקדת: 1,900 ₪ HT לעמוד המרה אחד באתר הקיים, סבב תיקון אחד, בלי מיתוג חדש או מעבר מערכת. עד חמישה עמודים: 3,900 ₪ HT ושני סבבים — לא המלצת הפתיחה. רכיב שכבר כלול בניהול לא יחויב שוב. אין שיפוץ מלא ב־4,900.",
  fr: "Le site a déjà une identité crédible. Option ciblée : 1 900 ₪ HT, une page de conversion, un aller-retour, sans nouvelle identité ni migration. Jusqu’à cinq pages : 3 900 ₪ HT, deux retours — pas la reco de démarrage. Ce qui est déjà dans le forfait n’est pas refacturé. Pas de refonte à 4 900 ₪.",
  en: "The existing site already presents the business professionally. Do not assume a rebuild. Targeted option: 1,900 ILS HT for one conversion page, one revision, no new identity or migration. Up to five pages: 3,900 ILS HT and two rounds — not the opening recommendation. Work already in the retainer is not billed twice. Not a 4,900 rebuild.",
};

export const nitzanPricing: T3 = {
  he: "AK Digital: מטא 1,200–2,500, חיפוש 1,800–2,500 — לכן 2,000 נמצא בשוק, לא אוטומטית 20–30% זול יותר. TZD: ערוץ אחד 2,000; שניים 3,500; הכל 4,500 — 2,800 מול 3,500 = ‎-20% אבל היקפים שונים. Mental: דף נחיתה 2,500–4,500. עמדת מכירה כנה: «מ־2,000 ₪ לחודש יש ניהול, יצירות ומעקב עד להצעת מחיר. החשבונות שלכם, המדיה בכרטיס שלכם.» בלי סלוגן «הכי זול».",
  fr: "AK Digital : Meta 1 200–2 500, Search 1 800–2 500 — 2 000 ₪ est dans le marché, pas automatiquement 20–30 % moins cher. TZD : 1 canal 2 000 ; 2 canaux 3 500. Mental : landing 2 500–4 500. Position honnête : « À partir de 2 000 ₪/mois, la gestion, les créas et le suivi jusqu’aux devis. Vous gardez vos comptes. » Pas de slogan « le moins cher ».",
  en: "AK Digital: Meta 1,200–2,500, Search 1,800–2,500 — so 2,000 is in-market, not automatically 20–30% cheaper. TZD: 1 channel 2,000; 2 channels 3,500. Mental: landing 2,500–4,500. Honest line: “From 2,000 ILS/month you get management, planned creatives and follow-up through quotes. You keep the accounts.” No cheapest-on-the-market slogan.",
};

export const nitzanPrices = {
  title: { he: "טווחי בדיקה לגנן — לא מחירון מפורסם", fr: "Fourchettes de test jardinier — pas un tarif publié", en: "Gardener test ranges — not a published price list" } as T3,
  rows: [
    {
      k: { he: "אחזקה", fr: "Entretien", en: "Upkeep" } as T3,
      v: { he: "המקצוענים: 250–350 ₪/שעה כולל מע״מ [5]", fr: "HaMiktzoanim : 250–350 ₪/h TTC [5]", en: "HaMiktzoanim: 250–350 ILS/h incl. VAT [5]" } as T3,
      rec: { he: "650–900 ₪/חודש כולל מע״מ: שני ביקורים מקומיים 45–60 דק׳, גינה פשוטה; חומרים כבדים בנפרד", fr: "650–900 ₪/mois TTC : deux passages locaux 45–60 min ; intrants lourds en sus", en: "650–900 ILS/month incl. VAT: two local 45–60 min visits; heavy inputs extra" } as T3,
    },
    {
      k: { he: "ניקוי ≤ 100 מ״ר", fr: "Nettoyage ≤ 100 m²", en: "Clean ≤ 100 m²" } as T3,
      v: { he: "550–850 ₪ כולל מע״מ, ניקוי בסיסי [5]", fr: "550–850 ₪ TTC, nettoyage de base [5]", en: "550–850 ILS incl. VAT, basic clean [5]" } as T3,
      rec: { he: "650–850 ₪ כולל מע״מ אם מורכבות ופינוי מתאימים. בלי מחיר קבוע בלי תמונות.", fr: "650–850 ₪ TTC si complexité et évacuation compatibles. Pas de prix fixe sans photos.", en: "650–850 ILS incl. VAT if complexity and haulage fit. No fixed price without photos." } as T3,
    },
    {
      k: { he: "ייעוץ / תכנון ראשוני", fr: "Conseil / étude initiale", en: "Consult / first study" } as T3,
      v: { he: "350–500 ₪ כולל מע״מ, ביקור וסקיצה [5]", fr: "350–500 ₪ TTC, visite et esquisse [5]", en: "350–500 ILS incl. VAT, visit and sketch [5]" } as T3,
      rec: { he: "350–450 ₪ כולל מע״מ מקומי; ניתן לזכות מפרויקט אם מתקבל.", fr: "350–450 ₪ TTC local ; déductible d’un projet si ce geste est accepté.", en: "350–450 ILS incl. VAT locally; deductible from a project if that is accepted." } as T3,
    },
    {
      k: { he: "הקמה / מרפסת", fr: "Création / terrasse", en: "Install / terrace" } as T3,
      v: { he: "חומרים ואתר משתנים מאוד", fr: "Postes de matériaux très variables", en: "Materials and site costs vary widely" } as T3,
      rec: { he: "הצעה מפורטת: צמחים, השקיה, מיכלים, ניקוז, עבודה. אין פורס מלאכותי למ״ר.", fr: "Devis détaillé. Aucun forfait artificiel au m².", en: "Itemised quote: plants, irrigation, containers, drainage, labour. No fake per-m² package." } as T3,
    },
  ],
  jerusalem: {
    he: "סימולציה, לא מדידת מסלול: 160 ק״מ הלוך־חזור × 1.40 = 224 ₪; 3 שעות נסיעה × 150 = 450 ₪. עלות כלכלית לפני העבודה: 674 ₪. אם נשאר 50% לפני נסיעה ורוצים 250 אחרי: (674+250)/0.50 = 1,848 ₪. סף פנימי מוצע: כ־2,000 ₪ HT ליציאה בודדת, או שלוש עבודות מרוכזות של 750 ₪ HT. אלה ספים פנימיים, לא מחירי שוק בירושלים. אין כתובת עסק פיקטיבית בירושלים.",
    fr: "Simulation, non distance mesurée : 160 km A/R × 1,40 = 224 ₪ ; 3 h × 150 = 450 ₪. Charge avant chantier : 674 ₪. Seuil interne ≈ 2 000 ₪ HT pour une sortie isolée, ou trois interventions regroupées à 750 ₪ HT. Pas d’adresse d’entreprise fictive à Jérusalem.",
    en: "Simulation, not a measured route: 160 km round trip × 1.40 = 224 ILS; 3 hours × 150 = 450 ILS. Economic load before the job: 674 ILS. Internal floor ≈ 2,000 ILS HT for an isolated trip, or three grouped jobs at 750 ILS HT. No fictitious Jerusalem business address.",
  } as T3,
};

export const nitzanScenarios = {
  title: { he: "כמה לקוחות צריך — המחשה, לא תחזית", fr: "Combien de clients faut-il — illustration, pas prévision", en: "How many clients are needed — illustration, not a forecast" } as T3,
  intro: {
    he: "עלות רכישה מלאה כוללת ניהול ומדיה. הנחות לתוכנית בסיס: 1,000 מדיה + 2,000 ניהול. *תוחלת חשבונאית, לא מספר אנשים שנצפה: 0.5 ≈ לקוח כל חודשיים.",
    fr: "Le coût d’acquisition complet inclut honoraires et pub. Hypothèses : 1 000 ₪ média + 2 000 ₪ gestion. *Espérance arithmétique, pas une promesse : 0,5 ≈ un client tous les deux mois.",
    en: "Full acquisition cost includes fees and ads. Assumptions: 1,000 media + 2,000 management. *Arithmetic expectation, not a promise: 0.5 ≈ one client every two months.",
  } as T3,
  cols: {
    he: ["תרחיש", "מיטיב", "מרכזי", "מחמיר"],
    fr: ["Scénario", "Favorable", "Central", "Défavorable"],
    en: ["Scenario", "Favourable", "Central", "Unfavourable"],
  } as Record<"he" | "fr" | "en", string[]>,
  rows: {
    he: [
      ["עלות / פנייה מתאימה (מדיה)", "50 ₪", "100 ₪", "200 ₪"],
      ["פניות מתאימות", "20", "10", "5"],
      ["שיעור סגירה בהנחה", "30%", "20%", "10%"],
      ["לקוחות ממוצעים*", "6", "2", "0.5"],
      ["רכישה מלאה / לקוח", "500 ₪", "1,500 ₪", "6,000 ₪"],
    ],
    fr: [
      ["Coût / contact qualifié (média)", "50 ₪", "100 ₪", "200 ₪"],
      ["Contacts qualifiés", "20", "10", "5"],
      ["Taux de signature supposé", "30 %", "20 %", "10 %"],
      ["Clients moyens attendus*", "6", "2", "0,5"],
      ["Acquisition complète / client", "500 ₪", "1 500 ₪", "6 000 ₪"],
    ],
    en: [
      ["Cost / qualified contact (media)", "50 ₪", "100 ₪", "200 ₪"],
      ["Qualified contacts", "20", "10", "5"],
      ["Assumed close rate", "30%", "20%", "10%"],
      ["Expected clients*", "6", "2", "0.5"],
      ["Full acquisition / client", "500 ₪", "1,500 ₪", "6,000 ₪"],
    ],
  } as Record<"he" | "fr" | "en", string[][]>,
  viability: {
    he: "אם חוזה אחזקה משאיר 350 ₪ לחודש אחרי חומרים, רכב, קבלני משנה ושווי זמן — צריך תשעה חוזים פעילים נוספים כדי לכסות 3,000 ₪ שיווק בחודש אחד. שלושה חוזים שנשמרים שלושה חודשים מכסים חודש רכישה אחד, לא שלושה חודשי שיווק. לצמיחה 4,300 דרושים כ־13 חוזים שקולים; להאצה 6,500 כ־19. פרויקט שמשאיר 1,500 משנה את המשוואה — אם המרווח נמדד.",
    fr: "Si un contrat d’entretien laisse 350 ₪/mois après matériaux, véhicule et temps, il faut neuf contrats actifs de plus pour couvrir 3 000 ₪ de marketing sur un mois. Trois contrats gardés trois mois couvrent un mois d’acquisition, pas trois. Croissance 4 300 → ~13 ; Accélération 6 500 → ~19.",
    en: "If an upkeep contract leaves 350 ILS/month after materials, vehicle, subcontract and time, nine extra active contracts are needed to cover 3,000 ILS of marketing in one month. Three contracts kept three months cover one acquisition month, not three. Growth 4,300 → ~13 equivalent contracts; Acceleration 6,500 → ~19.",
  } as T3,
};

export const nitzanYear: { t: T3; d: T3 }[] = [
  {
    t: { he: "חודשים 1–3 · הוכחה", fr: "Mois 1–3 · preuve", en: "Months 1–3 · proof" },
    d: { he: "2,000 + 1,000 ₪. קליטה אמינה, ערוץ אחד, אזור עיקרי, השוואת יצירות וסגירות ראשונות.", fr: "2 000 + 1 000 ₪. Capture fiable, un canal, une zone, comparaison des créas et premières signatures.", en: "2,000 + 1,000 ILS. Reliable intake, one channel, one main zone, creative comparison and first signed jobs." },
  },
  {
    t: { he: "חודשים 4–6 · צפיפות", fr: "Mois 4–6 · densité", en: "Months 4–6 · density" },
    d: { he: "2,000 + 1,500 ₪. אותו בסיס; מסלול מקומי צפוף יותר. ערוץ אחד פעיל, השני נבדק בתור. עלייה רק אחרי תרומה.", fr: "2 000 + 1 500 ₪. Même forfait Essentiel. Un canal actif, le second testé ensuite. Hausse conditionnée à la contribution.", en: "2,000 + 1,500 ILS. Same Essential retainer. One active channel, the second tested in turn. Raise only after contribution." },
  },
  {
    t: { he: "חודשים 7–12 · הרחבה", fr: "Mois 7–12 · extension", en: "Months 7–12 · extension" },
    d: { he: "2,000 + 2,000 ₪. חיזוק הערוץ הרווחי; אזורים נוספים אחד־אחד. מעבר ל־2,800/3,500 רק אם היקף העבודה גדל.", fr: "2 000 + 2 000 ₪. Renforcer le canal rentable. Passer à 2 800/3 500 seulement si le travail demandé augmente.", en: "2,000 + 2,000 ILS. Strengthen the profitable channel. Move to 2,800/3,500 only if the work volume increases." },
  },
];

export const nitzanYearNote: T3 = {
  he: "אם כל השלבים מאושרים: 24,000 ניהול + 19,500 מדיה = 43,500 ₪ לפני מסים. זה אינו התחייבות שנתית. אם הבדיקה נכשלת — אין העלאה אוטומטית.",
  fr: "Si toutes les étapes sont validées : 24 000 ₪ d’honoraires + 19 500 ₪ de média = 43 500 ₪ HT. Ce n’est pas un engagement. Si le premier test échoue, l’augmentation ne se fait pas.",
  en: "If every step is validated: 24,000 fees + 19,500 media = 43,500 ILS before tax. That is not a commitment. If the first test fails, there is no automatic increase.",
};

export const nitzanVat = {
  title: { he: "תשלום בפועל ומע״מ", fr: "Budget réellement payé et TVA", en: "Cash actually paid and VAT" } as T3,
  cols: {
    he: ["מסלול", "ניהול HT", "עם מע״מ 18%", "מדיה", "מזומן מינימלי"],
    fr: ["Plan", "Honoraires HT", "Avec TVA 18 %", "Média", "Décaissement min."],
    en: ["Plan", "Fees HT", "With 18% VAT", "Media", "Minimum cash"],
  } as Record<"he" | "fr" | "en", string[]>,
  rows: [
    ["בסיס / Essentiel", "2,000", "2,360", "1,000", "3,360"],
    ["צמיחה / Croissance", "2,800", "3,304", "1,500", "4,804"],
    ["האצה / Accélération", "3,500", "4,130", "3,000", "7,130"],
  ],
  cap: {
    he: "אם התקרה היא 3,000 ₪ TTC הכול: אחרי 2,360 ניהול עם מע״מ נשארים 640 למדיה. אין לקרוא לבסיס «3,000 הכול כלול». מעמד המס של הסוכנות טרם נמסר. [18]",
    fr: "Si le plafond est strictement 3 000 ₪ TTC : il reste 640 ₪ de média après 2 360 d’honoraires TTC. Ne pas appeler Essentiel « 3 000 tout compris ». Statut fiscal de l’agence non fourni. [18]",
    en: "If the ceiling is strictly 3,000 ILS incl. VAT all-in: 640 ILS remains for media after 2,360 VAT-inclusive fees. Do not brand Essential as “3,000 all included”. Agency tax status not supplied. [18]",
  } as T3,
};

export const nitzanSeo = {
  title: { he: "תגיות מוצעות לאתר הקיים", fr: "Balises proposées pour le site existant", en: "Proposed tags for the existing site" } as T3,
  note: {
    he: "נוסחים להכנה, לא שינויים שבוצעו. בתוך שעות האתר המוגדרות, בעדיפות בית והעמודים המקודמים. meta-keywords אינו כלי קידום בגוגל; תיאור מטא אינו מבטיח דירוג.",
    fr: "Textes prêts, pas des changements déjà faits. Dans les heures site du forfait. meta-keywords n’est pas un levier Google ; une meta description ne garantit pas un ranking.",
    en: "Drafts, not changes already made. Inside the defined site hours. meta-keywords is not a Google ranking tool; a meta description does not guarantee rank.",
  } as T3,
  rows: [
    { page: "/", title: "גנן באשדוד והסביבה | הניצן שבגן" },
    { page: "/services", title: "הקמה ואחזקת גינות באשדוד והסביבה | הניצן שבגן" },
    { page: "/gallery", title: "עבודות גינון, גינות גג ומרפסות | הניצן שבגן" },
    { page: "/about", title: "ישראל דב והניצן שבגן | תכנון, הקמה ואחזקת גינות" },
    { page: "/contact", title: "הצעת מחיר לגינה באשדוד והסביבה | הניצן שבגן" },
  ],
  desc: {
    he: "הניצן שבגן: תכנון, הקמה ואחזקה של גינות באשדוד והסביבה, גינות גג ומרפסת ותאורת גן. שלחו תמונה בוואטסאפ לבדיקת הצורך ולהצעת מחיר מותאמת.",
    fr: "הניצן שבגן: תכנון, הקמה ואחזקה של גינות באשדוד והסביבה, גינות גג ומרפסת ותאורת גן. שלחו תמונה בוואטסאפ לבדיקת הצורך ולהצעת מחיר מותאמת.",
    en: "הניצן שבגן: תכנון, הקמה ואחזקה של גינות באשדוד והסביבה, גינות גג ומרפסת ותאורת גן. שלחו תמונה בוואטסאפ לבדיקת הצורך ולהצעת מחיר מותאמת.",
  } as T3,
};

export const nitzanTerms: T3 = {
  he: "פיילוט מומלץ 90 יום, חיוב חודשי, בלי נעילה שנתית. סיום בסוף חודש ששולם בהודעה של שבעה ימים. אין הבטחת פניות, מכירות או דירוג. חשבונות, דומיין, נתונים ויצירות ששולמו נשארים אצל הלקוח. מדיה בתקרה מאושרת ובכרטיס הלקוח. הקמה אינה מכסה מיגרציה מורכבת. בתוקף עד 30.09.2026. הוכן לעיון צלחיה; לא נשלח לגנן. לא הותקן פיקסל ולא הוצאה מדיה במחקר זה.",
  fr: "Pilote 90 jours, facturation mensuelle, sans engagement annuel ; résiliation en fin de mois payé avec préavis de 7 jours. Pas de garantie de leads, ventes ou ranking. Comptes, domaine, données et créas payées restent au client. Proposition rédigée pour Tselahya ; non envoyée au jardinier. Aucun pixel installé.",
  en: "Recommended 90-day pilot, monthly billing, no annual lock. End at the close of a paid month with seven days’ notice. No lead, sale or ranking guarantee. Accounts, domain, data and paid creatives stay with the client. Prepared for Tselahya review; not sent to the gardener. No pixel installed and no media spent in this study.",
};

export const nitzanClose: T3 = {
  he: "DreamNova.studio · David Amor, Senior Project Manager · 0584921492. הצעה לעיון, לא חוזה חתום.",
  fr: "DreamNova.studio · David Amor, Senior Project Manager · 0584921492. Proposition pour examen, pas un contrat signé.",
  en: "DreamNova.studio · David Amor, Senior Project Manager · 0584921492. Proposal for review, not a signed contract.",
};

export const nitzanSources: { n: string; t: T3; href: string }[] = [
  { n: "1", t: { he: "אתר העסק", fr: "Site audité", en: "Audited site" }, href: "https://nitzan-shebagan.co.il/" },
  { n: "4", t: { he: "Mental — אתרים ודפי נחיתה", fr: "Mental — sites et landing", en: "Mental — sites and landings" }, href: "https://mental.co.il/pricing/" },
  { n: "5", t: { he: "המקצוענים — מחירון גינון", fr: "HaMiktzoanim — prix jardinage", en: "HaMiktzoanim — gardening prices" }, href: "https://www.pro.co.il/gardners/pricing" },
  { n: "7", t: { he: "Easy — גננים בגן יבנה", fr: "Easy — concurrence Gan Yavne", en: "Easy — Gan Yavne gardeners" }, href: "https://easy.co.il/list/Gardeners-and-Gardening-Companies?region=598" },
  { n: "9", t: { he: "המקצוענים — גננים בירושלים", fr: "HaMiktzoanim — Jérusalem", en: "HaMiktzoanim — Jerusalem gardeners" }, href: "https://www.pro.co.il/gardners/jerusalem" },
  { n: "10", t: { he: "גוגל Ads — נוכחות גאוגרפית", fr: "Google Ads — présence", en: "Google Ads — presence targeting" }, href: "https://support.google.com/google-ads/answer/1722038?hl=en-GB" },
  { n: "12", t: { he: "מטא — מודעות לוואטסאפ", fr: "Meta — pubs WhatsApp", en: "Meta — ads to WhatsApp" }, href: "https://www.facebook.com/business/help/447934475640650" },
  { n: "13", t: { he: "טיקטוק — תקציבי מינימום", fr: "TikTok — budgets minimums", en: "TikTok — minimum budgets" }, href: "https://ads.tiktok.com/resources/help/article/budget?lang=en" },
  { n: "16", t: { he: "מטא — מניעת כפילות Pixel/CAPI", fr: "Meta — déduplication Pixel/CAPI", en: "Meta — Pixel/CAPI dedupe" }, href: "https://www.facebook.com/business/help/823677331451951" },
  { n: "17", t: { he: "ישראל — חובת יידוע באיסוף", fr: "Israël — information à la collecte", en: "Israel — duty to notify on collection" }, href: "https://www.gov.il/he/pages/duty_to_notify" },
];
