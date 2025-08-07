// Only include fully tested and supported languages
export type Language = 'en' | 'hi' | 'te';

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

// English translations (Base)
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
  noContacts: "No emergency contacts added yet",
  worksOffline: "Works offline",
  playAudio: "Play audio instructions",
  call112Now: "CALL 112 NOW",
  findAED: "Find AED",
  findHospital: "Find Hospital",
  checkResponsiveness: "Check responsiveness",
  positionHands: "Position hands",
  pushHardFast: "Push hard and fast",
  fastTest: "F.A.S.T. Test",
  faceDrooping: "Face Drooping",
  armWeakness: "Arm Weakness", 
  speechDifficulty: "Speech Difficulty",
  timeToCall: "Time to Call",
  warningSigns: "Warning Signs",
  callEmergency: "Call Emergency",
  giveAspirin: "Give Aspirin",
  stayCalmRest: "Stay Calm & Rest",
  dangerSigns: "Danger Signs",
  highFever: "High Fever",
  fastHeartRate: "Fast Heart Rate",
  breathingProblems: "Breathing Problems",
  confusion: "Confusion",
  stepByStepActions: "Step-by-Step Actions",
  suddenCollapse: "Sudden collapse",
  noPulseBreathing: "No pulse or breathing",
  lossOfConsciousness: "Loss of consciousness",
  gaspingSeizureLike: "Gasping or seizure-like movements",
  noResponse: "Unresponsive to shouts or shaking",
  dialImmediately: "Dial 112 immediately. Don't wait to confirm symptoms.",
  dontWaitToConfirm: "Don't wait to confirm - call now",
  startChestCompressions: "Start Chest Compressions",
  pushHardFast100120: "Push hard and fast in the center of the chest (100-120 per minute).",
  useAEDIfAvailable: "Use AED if available",
  followAEDPrompts: "Turn on AED and follow voice prompts. Continue compressions.",
  continueCPR: "Continue CPR",
  dontStopCompressions: "Don't stop compressions until help arrives or patient starts breathing.",
  fastWarning: "Act F.A.S.T. - every minute counts!",
  faceDroopingOneSide: "Face drooping on one side",
  armWeaknessText: "Arm weakness - cannot raise both arms",
  speechDifficultyText: "Speech difficulty or slurred speech",
  timeToActFast: "Time to act F.A.S.T.",
  dialAsSoonAsStroke: "Dial 112 as soon as you suspect stroke.",
  askPersonSmileArms: "Ask person to smile, raise both arms, speak a sentence.",
  layOnSideElevated: "Lay person on side with head elevated",
  dontGiveFoodDrink: "Don't give food or drinks",
  mayCauseChoking: "May cause choking if swallowing is affected.",
  chestPainPressure: "Chest pain or pressure",
  painInArmsNeckJaw: "Pain in arms, neck, jaw, or back",
  shortnessOfBreath: "Shortness of breath",
  coldSweatNausea: "Cold sweat, nausea, lightheadedness",
  dialRightAway: "Dial 112 right away. Do not delay.",
  doNotDelay: "Do not delay",
  chewAspirinUnlessAllergic: "Chew 1 adult aspirin (325mg) unless allergic. Don't give to children.",
  keepSeatedLoosenClothing: "Keep person seated, loosen tight clothing.",
  readyToStartCPR: "Be ready to start CPR if they collapse.",
  feverOrLowTemp: "Fever or very low body temperature",
  fastHeartRateBreathing: "Fast heart rate or breathing",
  confusionDrowsiness: "Confusion or drowsiness",
  paleColdSkin: "Pale or cold skin",
  infectionSymptoms: "Signs of infection (wound, UTI, pneumonia)",
  mentionSymptomsInfection: "Dial 112. Mention symptoms and any known infection.",
  layPersonFlat: "Lay person flat",
  keepLyingWarm: "Keep them lying down and warm.",
  dontGiveFoodMeds: "Don't give food or medicine",
  avoidUnlessInstructed: "Avoid unless instructed by medical professionals.",
  monitorVitalSigns: "Monitor vital signs",
  checkBreathingSkinAlertness: "Check breathing, skin color, and alertness.",
  sayCardiacArrest: "Say: \"Possible cardiac arrest, patient unconscious and not breathing.\"",
  sayStroke: "Say: \"Possible stroke - face drooping and speech slurred.\"",
  sayHeartAttack: "Say: \"Chest pain, suspected heart attack.\"",
  saySepsis: "Say: \"Possible sepsis - infection with confusion and fast breathing.\""
};

// Hindi translations (Complete and tested)
const hindiTranslations: Translations = {
  appTitle: "आपातकालीन प्राथमिक चिकित्सा",
  appSubtitle: "ग्रामीण भारत के लिए जीवनरक्षक मार्गदर्शन",
  language: "भाषा",
  cardiacArrest: "हृदयाघात",
  stroke: "स्ट्रोक",
  heartAttack: "हार्ट अटैक",
  sepsis: "सेप्सिस",
  emergencyContacts: "आपातकालीन संपर्क",
  call112: "112 पर कॉल करें",
  contacts: "संपर्क",
  addContact: "संपर्क जोड़ें",
  contactName: "संपर्क का नाम",
  contactPhone: "फोन नंबर",
  relationship: "रिश्ता",
  save: "सहेजें",
  cancel: "रद्द करें",
  deleteContact: "संपर्क हटाएं",
  noContacts: "अभी तक कोई आपातकालीन संपर्क नहीं जोड़े गए",
  worksOffline: "ऑफलाइन काम करता है",
  playAudio: "ऑडियो निर्देश चलाएं",
  call112Now: "अभी 112 पर कॉल करें",
  findAED: "AED खोजें",
  findHospital: "अस्पताल खोजें",
  checkResponsiveness: "प्रतिक्रिया जांचें",
  positionHands: "हाथों की स्थिति",
  pushHardFast: "जोर से और तेज दबाएं",
  fastTest: "F.A.S.T. टेस्ट",
  faceDrooping: "चेहरा लटकना",
  armWeakness: "हाथ की कमजोरी",
  speechDifficulty: "बोलने में कठिनाई",
  timeToCall: "कॉल करने का समय",
  warningSigns: "चेतावनी के संकेत",
  callEmergency: "आपातकाल पर कॉल करें",
  giveAspirin: "एस्पिरिन दें",
  stayCalmRest: "शांत रहें और आराम करें",
  dangerSigns: "खतरे के संकेत",
  highFever: "तेज बुखार",
  fastHeartRate: "तेज हृदय गति",
  breathingProblems: "सांस की समस्या",
  confusion: "भ्रम",
  stepByStepActions: "चरणबद्ध क्रियाएं",
  suddenCollapse: "अचानक गिरना",
  noPulseBreathing: "नाड़ी या सांस नहीं",
  lossOfConsciousness: "होश का जाना",
  gaspingSeizureLike: "हांफना या दौरे जैसी गतिविधियां",
  noResponse: "चिल्लाने या हिलाने पर कोई प्रतिक्रिया नहीं",
  dialImmediately: "तुरंत 112 डायल करें। लक्षणों की पुष्टि का इंतजार न करें।",
  dontWaitToConfirm: "पुष्टि का इंतजार न करें - अभी कॉल करें",
  startChestCompressions: "छाती का दबाव शुरू करें",
  pushHardFast100120: "छाती के केंद्र में जोर से और तेज दबाएं (प्रति मिनट 100-120)।",
  useAEDIfAvailable: "यदि उपलब्ध हो तो AED का उपयोग करें",
  followAEDPrompts: "AED चालू करें और वॉयस प्रॉम्प्ट का पालन करें। दबाव जारी रखें।",
  continueCPR: "CPR जारी रखें",
  dontStopCompressions: "मदद आने या मरीज की सांस शुरू होने तक दबाव न रोकें।",
  fastWarning: "F.A.S.T. से काम लें - हर मिनट गिनती का है!",
  faceDroopingOneSide: "एक तरफ चेहरा लटकना",
  armWeaknessText: "हाथ की कमजोरी - दोनों हाथ नहीं उठा सकते",
  speechDifficultyText: "बोलने में कठिनाई या अस्पष्ट बोली",
  timeToActFast: "F.A.S.T. से काम करने का समय",
  dialAsSoonAsStroke: "स्ट्रोक का संदेह होते ही 112 डायल करें।",
  askPersonSmileArms: "व्यक्ति से मुस्कराने, दोनों हाथ उठाने, एक वाक्य बोलने को कहें।",
  layOnSideElevated: "व्यक्ति को सिर ऊंचा रखकर करवट पर लिटाएं",
  dontGiveFoodDrink: "खाना या पानी न दें",
  mayCauseChoking: "निगलने में परेशानी होने पर दम घुट सकता है।",
  chestPainPressure: "छाती में दर्द या दबाव",
  painInArmsNeckJaw: "बांह, गर्दन, जबड़े या पीठ में दर्द",
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

// Telugu translations (Complete and tested)
const teluguTranslations: Translations = {
  appTitle: "అత్యవసర ప్రథమ చికిత్స",
  appSubtitle: "గ్రామీణ భారతదేశం కోసం ప్రాణరక్షక మార్గదర్శకత్వం",
  language: "భాష",
  cardiacArrest: "కార్డియాక్ అరెస్ట్",
  stroke: "స్ట్రోక్",
  heartAttack: "హార్ట్ అటాక్",
  sepsis: "సెప్సిస్",
  emergencyContacts: "అత్యవసర పరిచయాలు",
  call112: "112 కాల్ చేయండి",
  contacts: "పరిచయాలు",
  addContact: "పరిచయం జోడించండి",
  contactName: "పరిచయ పేరు",
  contactPhone: "ఫోన్ నంబర్",
  relationship: "సంబంధం",
  save: "సేవ్ చేయండి",
  cancel: "రద్దు చేయండి",
  deleteContact: "పరిచయాన్ని తొలగించండి",
  noContacts: "ఇంకా అత్యవసర పరిచయాలు జోడించబడలేదు",
  worksOffline: "ఆఫ్‌లైన్‌లో పనిచేస్తుంది",
  playAudio: "ఆడియో సూచనలు ప్లే చేయండి",
  call112Now: "ఇప్పుడే 112 కాల్ చేయండి",
  findAED: "AED కనుగొనండి",
  findHospital: "ఆసుపత్రి కనుగొనండి",
  checkResponsiveness: "ప్రతిస్పందనను తనిఖీ చేయండి",
  positionHands: "చేతుల స్థానం",
  pushHardFast: "గట్టిగా మరియు వేగంగా నొక్కండి",
  fastTest: "F.A.S.T. టెస్ట్",
  faceDrooping: "ముఖం వేలాడటం",
  armWeakness: "చేయి బలహీనత",
  speechDifficulty: "మాట్లాడటంలో కష్టం",
  timeToCall: "కాల్ చేయవలసిన సమయం",
  warningSigns: "హెచ్చరిక సంకేతాలు",
  callEmergency: "అత్యవసర కాల్ చేయండి",
  giveAspirin: "ఆస్పిరిన్ ఇవ్వండి",
  stayCalmRest: "ప్రశాంతంగా ఉండి విశ్రమించండి",
  dangerSigns: "ప్రమాద సంకేతాలు",
  highFever: "అధిక జ్వరం",
  fastHeartRate: "వేగవంతమైన హృదయ స్పందన",
  breathingProblems: "శ్వాస సమస్యలు",
  confusion: "గందరగోళం",
  stepByStepActions: "దశల వారీ చర్యలు",
  suddenCollapse: "అకస్మాత్తుగా కూలిపోవుట",
  noPulseBreathing: "నాడిమిట్టు లేదా శ్వాస లేకపోవుట",
  lossOfConsciousness: "స్పృహ కోల్పోవుట",
  gaspingSeizureLike: "ఊపిరి పీల్చుకోవడం లేదా మూర్ఛ లాంటి కదలికలు",
  noResponse: "కేకలు లేదా వణుకుకు ప్రతిస్పందన లేకపోవుట",
  dialImmediately: "వెంటనే 112 డయల్ చేయండి. లక్షణాలను నిర్ధారించడానికి వేచి ఉండకండి.",
  dontWaitToConfirm: "నిర్ధారించడానికి వేచి ఉండకండి - ఇప్పుడే కాల్ చేయండి",
  startChestCompressions: "ఛాతీ కంప్రెషన్లు మొదలుపెట్టండి",
  pushHardFast100120: "ఛాతీ మధ్యలో గట్టిగా మరియు వేగంగా నొక్కండి (నిమిషానికి 100-120).",
  useAEDIfAvailable: "అందుబాటులో ఉంటే AED ఉపయోగించండి",
  followAEDPrompts: "AED ఆన్ చేసి వాయిస్ ప్రాంప్ట్లను అనుసరించండి. కంప్రెషన్లను కొనసాగించండి.",
  continueCPR: "CPR కొనసాగించండి",
  dontStopCompressions: "సహాయం వచ్చే వరకు లేదా రోగి శ్వాస తీసుకోవడం మొదలుపెట్టే వరకు కంప్రెషన్లను ఆపకండి.",
  fastWarning: "F.A.S.T.గా చర్య తీసుకోండి - ప్రతి నిమిషం ముఖ్యం!",
  faceDroopingOneSide: "ఒక వైపు ముఖం వేలాడటం",
  armWeaknessText: "చేయి బలహీనత - రెండు చేతులను పైకి లేపలేకపోవుట",
  speechDifficultyText: "మాట్లాడటంలో కష్టం లేదా అస్పష్టమైన మాట",
  timeToActFast: "F.A.S.T.గా చర్య తీసుకోవాల్సిన సమయం",
  dialAsSoonAsStroke: "స్ట్రోక్ అనుమానం వచ్చిన వెంటనే 112 డయల్ చేయండి.",
  askPersonSmileArms: "వ్యక్తిని నవ్వమని, రెండు చేతులను పైకి లేపమని, ఒక వాక్యం చెప్పమని అడగండి.",
  layOnSideElevated: "వ్యక్తిని తల పైకి లేపి ప్రక్కన పడుకోబెట్టండి",
  dontGiveFoodDrink: "ఆహారం లేదా పానీయాలు ఇవ్వకండి",
  mayCauseChoking: "మింగడంలో ఇబ్బంది ఉంటే ఉక్కిరిబిక్కిరి కావచ్చు.",
  chestPainPressure: "ఛాతీ నొప్పి లేదా ఒత్తిడి",
  painInArmsNeckJaw: "చేతులు, మెడ, దవడ లేదా వీపులో నొప్పి",
  shortnessOfBreath: "ఊపిరాడకపోవుట",
  coldSweatNausea: "చల్లని చెమట, వికారం, తలనొప్పి",
  dialRightAway: "వెంటనే 112 డయల్ చేయండి. ఆలస్యం చేయకండి.",
  doNotDelay: "ఆలస్యం చేయకండి",
  chewAspirinUnlessAllergic: "అలెర్జీ లేకుంటే 1 పెద్దవారి ఆస్పిరిన్ (325mg) నమలండి. పిల్లలకు ఇవ్వకండి.",
  keepSeatedLoosenClothing: "వ్యక్తిని కూర్చోబెట్టి, గట్టిగా ఉన్న బట్టలను వదులు చేయండి.",
  readyToStartCPR: "వారు కూలిపోతే CPR మొదలుపెట్టడానికి సిద్ధంగా ఉండండి.",
  feverOrLowTemp: "జ్వరం లేదా చాలా తక్కువ శరీర ఉష్ణోగ్రత",
  fastHeartRateBreathing: "వేగవంతమైన హృదయ స్పందన లేదా శ్వాస",
  confusionDrowsiness: "గందరగోళం లేదా మగత",
  paleColdSkin: "లేత లేదా చల్లని చర్మం",
  infectionSymptoms: "సంక్రమణ లక్షణాలు (గాయం, UTI, న్యుమోనియా వంటివి)",
  mentionSymptomsInfection: "112 డయల్ చేయండి. లక్షణాలు మరియు తెలిసిన సంక్రమణను పేర్కొనండి.",
  layPersonFlat: "వ్యక్తిని చదునుగా పడుకోబెట్టండి",
  keepLyingWarm: "వారిని పడుకోబెట్టి వెచ్చగా ఉంచండి.",
  dontGiveFoodMeds: "ఆహారం లేదా మందులు ఇవ్వకండి",
  avoidUnlessInstructed: "వైద్య నిపుణులు సూచించకపోతే తప్పించండి.",
  monitorVitalSigns: "ముఖ్య సంకేతాలను పర్యవేక్షించండి",
  checkBreathingSkinAlertness: "శ్వాస, చర్మ రంగు మరియు అప్రమత్తతను తనిఖీ చేయండి.",
  sayCardiacArrest: "చెప్పండి: \"సంభావ్య కార్డియాక్ అరెస్ట్, రోగి అపస్మారక స్థితిలో మరియు శ్వాసించడం లేదు.\"",
  sayStroke: "చెప్పండి: \"సంభావ్య స్ట్రోక్ - ముఖం వేలాడుతోంది మరియు మాట అస్పష్టంగా ఉంది.\"",
  sayHeartAttack: "చెప్పండి: \"ఛాతీ నొప్పి, అనుమానిత హృదయాఘాతం.\"",
  saySepsis: "చెప్పండి: \"సంభావ్య సెప్సిస్ - గందరగోళం మరియు వేగవంతమైన శ్వాసతో సంక్రమణ.\""
};

// Translation mapping with fallback
const allTranslations: Record<Language, Translations> = {
  en: englishTranslations,
  hi: hindiTranslations,
  te: teluguTranslations
};

// Safe translation getter with fallback
export function getTranslation(language: Language): Translations {
  const translation = allTranslations[language];
  if (!translation) {
    console.warn(`Translation for language '${language}' not found, falling back to English`);
    return englishTranslations;
  }
  return translation;
}

export const availableLanguages = [
  { code: 'en' as Language, name: '🇺🇸 English' },
  { code: 'hi' as Language, name: '🇮🇳 हिंदी (Hindi)' },
  { code: 'te' as Language, name: '🇮🇳 తెలుగు (Telugu)' }
];