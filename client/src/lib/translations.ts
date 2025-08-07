export type Language = 'en' | 'hi' | 'bn' | 'ta' | 'te' | 'mr' | 'kn' | 'ml' | 'gu' | 'pa' | 'or' | 'as' | 'ur' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ru' | 'zh' | 'ja' | 'ko' | 'ar';

export interface Translations {
  appTitle: string;
  appSubtitle: string;
  language: string;
  cardiacArrest: string;
  stroke: string;
  heartAttack: string;
  sepsis: string;
  emergencyContacts: string;
  call112: string;
  contacts: string;
  addContact: string;
  contactName: string;
  contactPhone: string;
  relationship: string;
  save: string;
  cancel: string;
  deleteContact: string;
  noContacts: string;
  worksOffline: string;
  playAudio: string;
  call112Now: string;
  findAED: string;
  findHospital: string;
  checkResponsiveness: string;
  positionHands: string;
  pushHardFast: string;
  fastTest: string;
  faceDrooping: string;
  armWeakness: string;
  speechDifficulty: string;
  timeToCall: string;
  warningSigns: string;
  callEmergency: string;
  giveAspirin: string;
  stayCalmRest: string;
  dangerSigns: string;
  highFever: string;
  fastHeartRate: string;
  breathingProblems: string;
  confusion: string;
  stepByStepActions: string;
  suddenCollapse: string;
  noPulseBreathing: string;
  lossOfConsciousness: string;
  gaspingSeizureLike: string;
  noResponse: string;
  dialImmediately: string;
  dontWaitToConfirm: string;
  startChestCompressions: string;
  pushHardFast100120: string;
  useAEDIfAvailable: string;
  followAEDPrompts: string;
  continueCPR: string;
  dontStopCompressions: string;
  fastWarning: string;
  faceDroopingOneSide: string;
  armWeaknessText: string;
  speechDifficultyText: string;
  timeToActFast: string;
  dialAsSoonAsStroke: string;
  askPersonSmileArms: string;
  layOnSideElevated: string;
  dontGiveFoodDrink: string;
  mayCauseChoking: string;
  chestPainPressure: string;
  painInArmsNeckJaw: string;
  shortnessOfBreath: string;
  coldSweatNausea: string;
  dialRightAway: string;
  doNotDelay: string;
  chewAspirinUnlessAllergic: string;
  keepSeatedLoosenClothing: string;
  readyToStartCPR: string;
  feverOrLowTemp: string;
  fastHeartRateBreathing: string;
  confusionDrowsiness: string;
  paleColdSkin: string;
  infectionSymptoms: string;
  mentionSymptomsInfection: string;
  layPersonFlat: string;
  keepLyingWarm: string;
  dontGiveFoodMeds: string;
  avoidUnlessInstructed: string;
  monitorVitalSigns: string;
  checkBreathingSkinAlertness: string;
  sayCardiacArrest: string;
  sayStroke: string;
  sayHeartAttack: string;
  saySepsis: string;
}

const englishTranslations: Translations = {
  appTitle: "Emergency First Aid",
  appSubtitle: "Life-saving guidance for rural India",
  language: "Language",
  cardiacArrest: "Cardiac Arrest",
  stroke: "Stroke",
  heartAttack: "Heart Attack", 
  sepsis: "Sepsis",
  emergencyContacts: "Emergency Contacts",
  call112: "Call 112",
  contacts: "Contacts",
  addContact: "Add Contact",
  contactName: "Contact Name",
  contactPhone: "Phone Number",
  relationship: "Relationship",
  save: "Save",
  cancel: "Cancel",
  deleteContact: "Delete Contact",
  noContacts: "No emergency contacts added yet.",
  worksOffline: "Works offline",
  playAudio: "Play Audio",
  call112Now: "CALL 112 NOW",
  findAED: "Find AED",
  findHospital: "Find Hospital",
  checkResponsiveness: "Check Responsiveness",
  positionHands: "Position Hands",
  pushHardFast: "Push Hard & Fast",
  fastTest: "F.A.S.T. Test",
  faceDrooping: "Face drooping?",
  armWeakness: "Arm weakness?",
  speechDifficulty: "Speech difficulty?",
  timeToCall: "Time to call 112",
  warningSigns: "Warning Signs",
  callEmergency: "Call Emergency",
  giveAspirin: "Give Aspirin",
  stayCalmRest: "Stay Calm & Rest",
  dangerSigns: "Danger Signs",
  highFever: "High fever/chills",
  fastHeartRate: "Fast heart rate",
  breathingProblems: "Breathing problems",
  confusion: "Confusion",
  stepByStepActions: "Step-by-Step Actions",
  suddenCollapse: "Sudden collapse",
  noPulseBreathing: "No pulse or breathing",
  lossOfConsciousness: "Loss of consciousness",
  gaspingSeizureLike: "May have gasping or seizure-like movements",
  noResponse: "No response when spoken to or shaken",
  dialImmediately: "Dial 112 immediately. Don't wait to confirm symptoms.",
  dontWaitToConfirm: "Don't wait to confirm symptoms",
  startChestCompressions: "Start Chest Compressions",
  pushHardFast100120: "Push hard and fast in the center of the chest (100–120 per minute).",
  useAEDIfAvailable: "Use AED if available",
  followAEDPrompts: "Follow AED voice prompts. Only use if trained or guided.",
  continueCPR: "Continue CPR until help arrives",
  dontStopCompressions: "Don't stop compressions unless person revives or emergency responders take over.",
  fastWarning: "Warning Signs (Use FAST)",
  faceDroopingOneSide: "Face drooping on one side",
  armWeaknessText: "Arm weakness",
  speechDifficultyText: "Speech difficulty",
  timeToActFast: "Time to act fast",
  dialAsSoonAsStroke: "Dial 112 as soon as any stroke signs appear",
  askPersonSmileArms: "Ask person to smile, raise both arms, and speak a sentence",
  layOnSideElevated: "Lay them on one side with head slightly elevated",
  dontGiveFoodDrink: "Don't give food or drink",
  mayCauseChoking: "May cause choking",
  chestPainPressure: "Chest pain or pressure",
  painInArmsNeckJaw: "Pain in arms, neck, jaw, or back",
  shortnessOfBreath: "Shortness of breath",
  coldSweatNausea: "Cold sweat, nausea, lightheadedness",
  dialRightAway: "Dial 112 right away. Do not delay.",
  doNotDelay: "Do not delay",
  chewAspirinUnlessAllergic: "Chew 1 adult aspirin (325mg) unless allergic. No kids.",
  keepSeatedLoosenClothing: "Keep person seated, loosen tight clothing.",
  readyToStartCPR: "Be ready to start CPR if they collapse.",
  feverOrLowTemp: "Fever or very low body temperature",
  fastHeartRateBreathing: "Fast heart rate or breathing",
  confusionDrowsiness: "Confusion or drowsiness",
  paleColdSkin: "Pale or cold skin",
  infectionSymptoms: "Infection symptoms (e.g., wound, UTI, pneumonia)",
  mentionSymptomsInfection: "Dial 112. Mention symptoms and known infection.",
  layPersonFlat: "Lay Person Flat",
  keepLyingWarm: "Keep them lying down and warm.",
  dontGiveFoodMeds: "Don't give food or meds",
  avoidUnlessInstructed: "Avoid unless instructed by medical professionals.",
  monitorVitalSigns: "Monitor Vital Signs",
  checkBreathingSkinAlertness: "Check breathing, skin color, and alertness.",
  sayCardiacArrest: "Say: \"Possible cardiac arrest, patient unconscious and not breathing.\"",
  sayStroke: "Say: \"Possible stroke – face drooping and speech slurred.\"",
  sayHeartAttack: "Say: \"Chest pain, suspected heart attack.\"",
  saySepsis: "Say: \"Possible sepsis – infection with confusion and rapid breathing.\""
};

const hindiTranslations: Translations = {
  appTitle: "आपातकालीन प्राथमिक चिकित्सा",
  appSubtitle: "ग्रामीण भारत के लिए जीवनरक्षक मार्गदर्शन",
  language: "भाषा",
  cardiacArrest: "हृदयाघात",
  stroke: "स्ट्रोक",
  heartAttack: "हार्ट अटैक",
  sepsis: "सेप्सिस",
  emergencyContacts: "आपातकालीन संपर्क",
  call112: "112 कॉल करें",
  contacts: "संपर्क",
  addContact: "संपर्क जोड़ें",
  contactName: "संपर्क का नाम",
  contactPhone: "फोन नंबर",
  relationship: "रिश्ता",
  save: "सहेजें",
  cancel: "रद्द करें",
  deleteContact: "संपर्क हटाएं",
  noContacts: "अभी तक कोई आपातकालीन संपर्क नहीं जोड़ा गया।",
  worksOffline: "ऑफलाइन काम करता है",
  playAudio: "ऑडियो चलाएं",
  call112Now: "अभी 112 कॉल करें",
  findAED: "AED खोजें",
  findHospital: "अस्पताल खोजें",
  checkResponsiveness: "प्रतिक्रिया जांचें",
  positionHands: "हाथ की स्थिति",
  pushHardFast: "जोर से और तेज दबाएं",
  fastTest: "F.A.S.T. परीक्षण",
  faceDrooping: "चेहरा लटक रहा है?",
  armWeakness: "हाथ में कमजोरी?",
  speechDifficulty: "बोलने में कठिनाई?",
  timeToCall: "112 कॉल करने का समय",
  warningSigns: "चेतावनी के संकेत",
  callEmergency: "आपातकाल कॉल करें",
  giveAspirin: "एस्पिरिन दें",
  stayCalmRest: "शांत रहें और आराम करें",
  dangerSigns: "खतरे के संकेत",
  highFever: "तेज बुखार/ठंड लगना",
  fastHeartRate: "तेज हृदय गति",
  breathingProblems: "सांस लेने में समस्या",
  confusion: "भ्रम",
  stepByStepActions: "चरणबद्ध कार्य",
  suddenCollapse: "अचानक गिर जाना",
  noPulseBreathing: "नाड़ी या सांस नहीं",
  lossOfConsciousness: "होश खो देना",
  gaspingSeizureLike: "हांफना या दौरे जैसी हलचल हो सकती है",
  noResponse: "बोलने या हिलाने पर कोई प्रतिक्रिया नहीं",
  dialImmediately: "तुरंत 112 डायल करें। लक्षणों की पुष्टि का इंतजार न करें।",
  dontWaitToConfirm: "लक्षणों की पुष्टि का इंतजार न करें",
  startChestCompressions: "छाती दबाना शुरू करें",
  pushHardFast100120: "छाती के बीच में जोर से और तेज दबाएं (100-120 प्रति मिनट)।",
  useAEDIfAvailable: "यदि उपलब्ध हो तो AED का उपयोग करें",
  followAEDPrompts: "AED की आवाज के निर्देशों का पालन करें। केवल प्रशिक्षित या मार्गदर्शन में उपयोग करें।",
  continueCPR: "मदद आने तक CPR जारी रखें",
  dontStopCompressions: "तब तक दबाना बंद न करें जब तक व्यक्ति होश में न आ जाए या आपातकालीन कर्मी न आ जाएं।",
  fastWarning: "चेतावनी संकेत (FAST का उपयोग करें)",
  faceDroopingOneSide: "एक तरफ चेहरा लटक रहा है",
  armWeaknessText: "हाथ में कमजोरी",
  speechDifficultyText: "बोलने में कठिनाई",
  timeToActFast: "तुरंत कार्य करने का समय",
  dialAsSoonAsStroke: "जैसे ही कोई स्ट्रोक के लक्षण दिखें, 112 डायल करें",
  askPersonSmileArms: "व्यक्ति से मुस्कराने, दोनों हाथ उठाने और एक वाक्य बोलने को कहें",
  layOnSideElevated: "उन्हें एक तरफ लिटाएं और सिर थोड़ा ऊंचा रखें",
  dontGiveFoodDrink: "खाना या पानी न दें",
  mayCauseChoking: "गला घुट सकता है",
  chestPainPressure: "छाती में दर्द या दबाव",
  painInArmsNeckJaw: "हाथ, गर्दन, जबड़े या पीठ में दर्द",
  shortnessOfBreath: "सांस फूलना",
  coldSweatNausea: "ठंडा पसीना, मिचली, चक्कर आना",
  dialRightAway: "तुरंत 112 डायल करें। देरी न करें।",
  doNotDelay: "देरी न करें",
  chewAspirinUnlessAllergic: "1 वयस्क एस्पिरिन (325mg) चबाएं जब तक एलर्जी न हो। बच्चों को न दें।",
  keepSeatedLoosenClothing: "व्यक्ति को बैठाकर रखें, टाइट कपड़े ढीले करें।",
  readyToStartCPR: "यदि वे गिर जाएं तो CPR शुरू करने के लिए तैयार रहें।",
  feverOrLowTemp: "बुखार या बहुत कम शरीर का तापमान",
  fastHeartRateBreathing: "तेज हृदय गति या सांस",
  confusionDrowsiness: "भ्रम या सुस्ती",
  paleColdSkin: "पीली या ठंडी त्वचा",
  infectionSymptoms: "संक्रमण के लक्षण (जैसे घाव, UTI, निमोनिया)",
  mentionSymptomsInfection: "112 डायल करें। लक्षण और ज्ञात संक्रमण का उल्लेख करें।",
  layPersonFlat: "व्यक्ति को लिटाएं",
  keepLyingWarm: "उन्हें लेटाकर और गर्म रखें।",
  dontGiveFoodMeds: "खाना या दवा न दें",
  avoidUnlessInstructed: "चिकित्सा पेशेवरों द्वारा निर्देश दिए बिना बचें।",
  monitorVitalSigns: "महत्वपूर्ण संकेतों की निगरानी करें",
  checkBreathingSkinAlertness: "सांस, त्वचा का रंग और सचेतता की जांच करें।",
  sayCardiacArrest: "कहें: \"संभावित हृदयाघात, रोगी बेहोश और सांस नहीं ले रहा।\"",
  sayStroke: "कहें: \"संभावित स्ट्रोक - चेहरा लटक रहा और बोली अस्पष्ट।\"",
  sayHeartAttack: "कहें: \"छाती में दर्द, संदिग्ध हार्ट अटैक।\"",
  saySepsis: "कहें: \"संभावित सेप्सिस - भ्रम और तेज सांस के साथ संक्रमण।\""
};

// Create translations for all languages
const createDefaultTranslations = (): Record<Language, Translations> => {
  const translations: Record<Language, Translations> = {} as Record<Language, Translations>;
  
  // English
  translations.en = englishTranslations;
  
  // Hindi
  translations.hi = hindiTranslations;
  
  // Bengali
  translations.bn = {
    ...englishTranslations,
    appTitle: "জরুরি প্রাথমিক চিকিৎসা",
    appSubtitle: "গ্রামীণ ভারতের জন্য জীবনরক্ষাকারী নির্দেশনা",
    language: "ভাষা",
    cardiacArrest: "কার্ডিয়াক অ্যারেস্ট",
    stroke: "স্ট্রোক",
    heartAttack: "হার্ট অ্যাটাক",
    sepsis: "সেপসিস",
    call112Now: "এখনই ১১২ কল করুন",
    warningSigns: "সতর্কতা চিহ্ন",
    stepByStepActions: "ধাপে ধাপে কার্যক্রম"
  };
  
  // Tamil
  translations.ta = {
    ...englishTranslations,
    appTitle: "அவசர முதலுதவி",
    appSubtitle: "கிராமப்புற இந்தியாவிற்கான உயிர்காக்கும் வழிகாட்டுதல்",
    language: "மொழி",
    cardiacArrest: "இதய நிறுத்தம்",
    stroke: "பக்கவாதம்",
    heartAttack: "மாரடைப்பு",
    sepsis: "செப்சிஸ்",
    call112Now: "இப்போதே 112 அழைக்கவும்",
    warningSigns: "எச்சரிக்கை அறிகுறிகள்",
    stepByStepActions: "படிப்படியான செயல்கள்"
  };
  
  // Telugu
  translations.te = {
    ...englishTranslations,
    appTitle: "అత్యవసర ప్రథమ చికిత్స",
    appSubtitle: "గ్రామీణ భారతదేశం కోసం ప్రాణరక్షక మార్గదర్శకత్వం",
    language: "భాష",
    cardiacArrest: "కార్డియాక్ అరెస్ట్",
    stroke: "స్ట్రోక్",
    heartAttack: "హార్ట్ అటాక్",
    sepsis: "సెప్సిస్",
    call112Now: "ఇప్పుడే 112 కాల్ చేయండి",
    warningSigns: "హెచ్చరిక సంకేతాలు",
    stepByStepActions: "దశల వారీ చర్యలు"
  };
  
  // Marathi
  translations.mr = {
    ...englishTranslations,
    appTitle: "आपत्कालीन प्राथमिक उपचार",
    appSubtitle: "ग्रामीण भारतासाठी जीवनरक्षक मार्गदर्शन",
    language: "भाषा",
    cardiacArrest: "कार्डियाक अरेस्ट",
    stroke: "स्ट्रोक",
    heartAttack: "हार्ट अटैक",
    sepsis: "सेप्सिस",
    call112Now: "आताच 112 वर कॉल करा",
    warningSigns: "चेतावणीची चिन्हे",
    stepByStepActions: "पायरी-पायरीच्या कृती"
  };
  
  // Spanish
  translations.es = {
    ...englishTranslations,
    appTitle: "Primeros Auxilios de Emergencia",
    appSubtitle: "Guía que salva vidas para la India rural",
    language: "Idioma",
    cardiacArrest: "Paro Cardíaco",
    stroke: "Accidente Cerebrovascular",
    heartAttack: "Ataque al Corazón",
    sepsis: "Sepsis",
    call112Now: "LLAMAR AL 112 AHORA",
    warningSigns: "Señales de Advertencia",
    stepByStepActions: "Acciones Paso a Paso"
  };
  
  // French
  translations.fr = {
    ...englishTranslations,
    appTitle: "Premiers Secours d'Urgence",
    appSubtitle: "Guidance vitale pour l'Inde rurale",
    language: "Langue",
    cardiacArrest: "Arrêt Cardiaque",
    stroke: "Accident Vasculaire Cérébral",
    heartAttack: "Crise Cardiaque",
    sepsis: "Septicémie",
    call112Now: "APPELEZ LE 112 MAINTENANT",
    warningSigns: "Signes d'Alerte",
    stepByStepActions: "Actions Étape par Étape"
  };
  
  // German
  translations.de = {
    ...englishTranslations,
    appTitle: "Notfall Erste Hilfe",
    appSubtitle: "Lebensrettende Anleitung für ländliches Indien",
    language: "Sprache",
    cardiacArrest: "Herzstillstand",
    stroke: "Schlaganfall",
    heartAttack: "Herzinfarkt",
    sepsis: "Sepsis",
    call112Now: "JETZT 112 ANRUFEN",
    warningSigns: "Warnzeichen",
    stepByStepActions: "Schrittweise Maßnahmen"
  };
  
  // Add remaining languages with basic translations
  const remainingLanguages: Language[] = ['kn', 'ml', 'gu', 'pa', 'or', 'as', 'ur', 'it', 'pt', 'ru', 'zh', 'ja', 'ko', 'ar'];
  
  remainingLanguages.forEach(lang => {
    translations[lang] = {
      ...englishTranslations,
      // Keep most content in English but translate key UI elements
      appTitle: englishTranslations.appTitle,
      language: lang === 'kn' ? "ಭಾಷೆ" :
               lang === 'ml' ? "ഭാഷ" :
               lang === 'gu' ? "ભાષા" :
               lang === 'pa' ? "ਭਾਸ਼ਾ" :
               lang === 'or' ? "ଭାଷା" :
               lang === 'as' ? "ভাষা" :
               lang === 'ur' ? "زبان" :
               lang === 'it' ? "Lingua" :
               lang === 'pt' ? "Idioma" :
               lang === 'ru' ? "Язык" :
               lang === 'zh' ? "语言" :
               lang === 'ja' ? "言語" :
               lang === 'ko' ? "언어" :
               lang === 'ar' ? "اللغة" : "Language"
    };
  });
  
  return translations;
};

const translations = createDefaultTranslations();

export const getTranslation = (language: Language): Translations => {
  return translations[language] || translations.en;
};