// Only include fully tested and supported languages
export type Language = 'en' | 'hi' | 'te';

export interface Translations {
  appTitle: string;
  appSubtitle: string;
  language: string;
  cardiacArrest: string;
  stroke: string;
  heartAttack: string;
  severeBleeding: string;
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
  // Severe Bleeding specific translations
  bloodFlowingHeavily: string;
  bloodSoakingThroughClothing: string;
  spurtingBlood: string;
  personBecomingPaleWeak: string;
  uncontrolledBleedingAfter10Min: string;
  dialImmediatelyIfSevereBleeding: string;
  applyFirmPressure: string;
  useCleanClothGauzeHand: string;
  elevateLimbIfPossible: string;
  raiseBleedingArmLegAboveHeart: string;
  doNotRemoveCloth: string;
  addMoreLayersDontRemoveOriginal: string;
  keepPersonCalmStill: string;
  layDownIfDizzyBlanketIfCold: string;
  sayCardiacArrest: string;
  sayStroke: string;
  sayHeartAttack: string;
  saySevereBleeding: string;
  // Our Goal modal translations
  ourGoal: string;
  ourGoalTitle: string;
  ourGoalProblem1: string;
  ourGoalProblem2: string;
  ourGoalMissionTitle: string;
  ourGoalMission1: string;
  ourGoalMission2: string;
  ourGoalMission3: string;
  ourGoalVision: string;
  ourGoalCallToAction: string;
  close: string;
}

// English translations (Base)
const englishTranslations: Translations = {
  appTitle: "Emergency First Aid",
  appSubtitle: "Life-saving guidance for rural India",
  language: "Language",
  cardiacArrest: "Cardiac Arrest",
  stroke: "Stroke",
  heartAttack: "Heart Attack",
  severeBleeding: "Severe Bleeding",
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
  // Severe Bleeding specific translations
  bloodFlowingHeavily: "Blood flowing heavily from a wound",
  bloodSoakingThroughClothing: "Blood soaking through clothing or bandages", 
  spurtingBlood: "Spurting blood (may indicate arterial bleed)",
  personBecomingPaleWeak: "Person becoming pale, weak, or dizzy",
  uncontrolledBleedingAfter10Min: "Uncontrolled bleeding after 10 minutes of pressure",
  dialImmediatelyIfSevereBleeding: "Dial 112 immediately if bleeding is severe or doesn't stop.",
  applyFirmPressure: "Apply Firm Pressure",
  useCleanClothGauzeHand: "Use clean cloth, gauze, or hand to press directly on the wound.",
  elevateLimbIfPossible: "Elevate the Limb (if possible)",
  raiseBleedingArmLegAboveHeart: "Raise the bleeding arm or leg above heart level unless it causes more pain.",
  doNotRemoveCloth: "Do Not Remove Cloth",
  addMoreLayersDontRemoveOriginal: "If blood soaks through, add more layers, but don't remove the original cloth.",
  keepPersonCalmStill: "Keep Person Calm and Still",
  layDownIfDizzyBlanketIfCold: "Lay them down if feeling dizzy or weak. Keep the injured limb elevated while lying down. Cover with blanket if pale or cold.",
  saySevereBleeding: "Say: \"Uncontrolled bleeding — [body part], blood not stopping.\"",
  // Our Goal modal translations
  ourGoal: "Our Goal",
  ourGoalTitle: "Our Goal",
  ourGoalProblem1: "Every year, millions of lives are lost in India due to sudden medical emergencies like cardiac arrest, heart attack, stroke, and severe bleeding.",
  ourGoalProblem2: "In many cases, death occurs before medical help arrives — not because the condition was untreatable, but because no one nearby knew what to do in those first critical minutes.",
  ourGoalMissionTitle: "Our mission is simple:",
  ourGoalMission1: "Empower every family to have at least one person who can give life-saving first aid.",
  ourGoalMission2: "Provide clear, quick, and reliable guidance during emergencies.",
  ourGoalMission3: "Bridge the gap in healthcare access, especially in rural areas where hospitals and trained professionals are far away.",
  ourGoalVision: "With the right knowledge at the right time, countless lives can be saved. This app is here to make that possible — one person, one family, one village at a time.",
  ourGoalCallToAction: "Together, we can turn ordinary people into life-savers.",
  close: "Close"
};

// Hindi translations (Complete and tested)
const hindiTranslations: Translations = {
  appTitle: "आपातकालीन प्राथमिक चिकित्सा",
  appSubtitle: "ग्रामीण भारत के लिए जीवनरक्षक मार्गदर्शन",
  language: "भाषा",
  cardiacArrest: "हृदयाघात",
  stroke: "स्ट्रोक",
  heartAttack: "हार्ट अटैक",
  severeBleeding: "गंभीर रक्तस्राव",
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
  // Severe Bleeding specific translations
  bloodFlowingHeavily: "घाव से तेजी से खून बह रहा है",
  bloodSoakingThroughClothing: "खून कपड़ों या पट्टियों में भीग रहा है",
  spurtingBlood: "उछलता हुआ खून (धमनी से खून निकलने का संकेत हो सकता है)",
  personBecomingPaleWeak: "व्यक्ति पीला, कमजोर, या चक्कर महसूस कर रहा है",
  uncontrolledBleedingAfter10Min: "10 मिनट दबाने के बाद भी बेकाबू खून बहना",
  dialImmediatelyIfSevereBleeding: "यदि खून बहना गंभीर है या नहीं रुक रहा तो तुरंत 112 डायल करें।",
  applyFirmPressure: "मजबूत दबाव डालें",
  useCleanClothGauzeHand: "घाव पर सीधे दबाने के लिए साफ कपड़ा, पट्टी, या हाथ का उपयोग करें।",
  elevateLimbIfPossible: "अंग को ऊंचा करें (यदि संभव हो)",
  raiseBleedingArmLegAboveHeart: "खून बह रहे हाथ या पैर को दिल के स्तर से ऊंचा उठाएं जब तक दर्द न बढ़े।",
  doNotRemoveCloth: "कपड़ा न हटाएं",
  addMoreLayersDontRemoveOriginal: "यदि खून भीग जाए तो और परतें जोड़ें, लेकिन मूल कपड़ा न हटाएं।",
  keepPersonCalmStill: "व्यक्ति को शांत और स्थिर रखें",
  layDownIfDizzyBlanketIfCold: "यदि चक्कर आ रहा या कमजोरी महसूस हो रहा है तो लिटाएं। घायल अंग को ऊंचा रखें। पीला या ठंडा लगे तो कंबल ओढ़ाएं।",
  saySevereBleeding: "कहें: \"बेकाबू खून बह रहा है — [शरीर का हिस्सा], खून नहीं रुक रहा।\"",
  // Our Goal modal translations
  ourGoal: "हमारा लक्ष्य",
  ourGoalTitle: "हमारा लक्ष्य",
  ourGoalProblem1: "हर साल, भारत में हृदयाघात, हार्ट अटैक, स्ट्रोक और गंभीर रक्तस्राव जैसी अचानक आने वाली चिकित्सा आपातकालीन स्थितियों के कारण लाखों लोगों की जान चली जाती है।",
  ourGoalProblem2: "कई मामलों में, चिकित्सा सहायता पहुंचने से पहले ही मृत्यु हो जाती है — इसलिए नहीं कि स्थिति का इलाज संभव नहीं था, बल्कि इसलिए कि आसपास किसी को नहीं पता था कि उन पहले महत्वपूर्ण मिनटों में क्या करना है।",
  ourGoalMissionTitle: "हमारा मिशन सरल है:",
  ourGoalMission1: "हर परिवार को सशक्त बनाना ताकि कम से कम एक व्यक्ति जीवनरक्षक प्राथमिक चिकित्सा दे सके।",
  ourGoalMission2: "आपातकाल के दौरान स्पष्ट, त्वरित और विश्वसनीय मार्गदर्शन प्रदान करना।",
  ourGoalMission3: "स्वास्थ्य सेवा पहुंच में अंतर को पाटना, विशेष रूप से ग्रामीण क्षेत्रों में जहां अस्पताल और प्रशिक्षित पेशेवर दूर हैं।",
  ourGoalVision: "सही समय पर सही ज्ञान के साथ, अनगिनत जीवन बचाए जा सकते हैं। यह ऐप इसे संभव बनाने के लिए यहां है — एक व्यक्ति, एक परिवार, एक गांव के रूप में।",
  ourGoalCallToAction: "मिलकर, हम आम लोगों को जीवन बचाने वाला बना सकते हैं।",
  close: "बंद करें"
};

// Telugu translations (Complete and tested)
const teluguTranslations: Translations = {
  appTitle: "అత్యవసర ప్రథమ చికిత్స",
  appSubtitle: "గ్రామీణ భారతదేశం కోసం ప్రాణరక్షక మార్గదర్శకత్వం",
  language: "భాష",
  cardiacArrest: "కార్డియాక్ అరెస్ట్",
  stroke: "స్ట్రోక్",
  heartAttack: "హార్ట్ అటాక్",
  severeBleeding: "తీవ్రమైన రక్తస్రావం",
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
  // Severe Bleeding specific translations
  bloodFlowingHeavily: "గాయం నుండి ఎక్కువగా రక్తం కారుచున్నది",
  bloodSoakingThroughClothing: "రక్తం బట్టలు లేదా కట్టలలో నానుచున్నది",
  spurtingBlood: "చిమ్మే రక్తం (ధమనిలో రక్తస్రావం అయి ఉండవచ్చు)",
  personBecomingPaleWeak: "వ్యక్తి లేతగా, బలహీనంగా లేదా తలతిరుగుట అనుభవిస్తున్నారు",
  uncontrolledBleedingAfter10Min: "10 నిమిషాల ఒత్తిడి తర్వాత కూడా అదుపు లేని రక్తస్రావం",
  dialImmediatelyIfSevereBleeding: "రక్తస్రావం తీవ్రంగా ఉంటే లేదా ఆగకపోతే వెంటనే 112 డయల్ చేయండి।",
  applyFirmPressure: "గట్టి ఒత్తిడి వేయండి",
  useCleanClothGauzeHand: "గాయంపై నేరుగా నొక్కడానికి శుభ్రమైన వస్త్రం, గేజ్ లేదా చేతిని ఉపయోగించండి।",
  elevateLimbIfPossible: "అవయవాన్ని పైకి లేపండి (వీలైతే)",
  raiseBleedingArmLegAboveHeart: "రక్తస్రావం అయిన చేయి లేదా కాలును హృదయ స్థాయికంటే పైకి లేపండి, నొప్పి పెరగకుంటే।",
  doNotRemoveCloth: "వస్త్రాన్ని తొలగించవద్దు",
  addMoreLayersDontRemoveOriginal: "రక్తం నానితే మరిన్ని పొరలు జోడించండి, కానీ అసలు వస్త్రాన్ని తొలగించవద్దు।",
  keepPersonCalmStill: "వ్యక్తిని ప్రశాంతంగా మరియు నిశ్చలంగా ఉంచండి",
  layDownIfDizzyBlanketIfCold: "తలతిరుగుట లేదా బలహీనత అనిపిస్తే వారిని పడుకోబెట్టండి। గాయపడిన అవయవాన్ని ఎత్తుగా ఉంచండి। లేతగా లేదా చల్లగా ఉంటే దుప్పటితో కప్పండి।",
  saySevereBleeding: "చెప్పండి: \"అదుపు లేని రక్తస్రావం — [శరీర భాగం], రక్తం ఆగట్లేదు.\"",
  // Our Goal modal translations
  ourGoal: "మా లక్ష్యం",
  ourGoalTitle: "మా లక్ష్యం",
  ourGoalProblem1: "ప్రతి సంవత్సరం, కార్డియాక్ అరెస్ట్, హార్ట్ అటాక్, స్ట్రోక్ మరియు తీవ్రమైన రక్తస్రావం వంటి అకస్మాత్ వైద్య అత్యవసర పరిస్థితుల వలన భారతదేశంలో లక్షలాది మంది ప్రాణాలు కోల్పోతున్నారు।",
  ourGoalProblem2: "అనేక సందర్భాలలో, వైద్య సహాయం రాకముందే మృత్యువు సంభవిస్తుంది — పరిస్థితికి చికిత్స అందుబాటులో లేకపోవడం వల్ల కాదు, ఆ మొదటి కీలకమైన నిమిషాలలో ఏమి చేయాలో దగ్గరలో ఎవరికీ తెలియకపోవడం వల్ల।",
  ourGoalMissionTitle: "మా మిషన్ సరళమైనది:",
  ourGoalMission1: "ప్రతి కుటుంబంలో కనీసం ఒక వ్యక్తి ప్రాణరక్షణ ప్రథమ చికిత్స అందించగలిగేలా శక్తివంతం చేయడం।",
  ourGoalMission2: "అత్యవసర పరిస్థితుల్లో స్పష్టమైన, వేగవంతమైన మరియు నమ్మకమైన మార్గదర్శకత్వం అందించడం।",
  ourGoalMission3: "ఆరోగ్య సేవల అందుబాటులో ఉన్న అంతరాన్ని తగ్గించడం, ముఖ్యంగా ఆసుపత్రులు మరియు శిక్షణ పొందిన నిపుణులు దూరంగా ఉన్న గ్రామీణ ప్రాంతాలలో।",
  ourGoalVision: "సరైన సమయంలో సరైన జ్ఞానంతో, లెక్కలేని ప్రాణాలను రక్షించవచ్చు. ఈ యాప్ దానిని సాధ్యం చేయడానికి ఇక్కడ ఉంది — ఒక వ్యక్తి, ఒక కుటుంబం, ఒక గ్రామం చొప్పున।",
  ourGoalCallToAction: "కలిసి, మనం సాధారణ వ్యక్తులను ప్రాణ రక్షకులుగా మార్చగలం।",
  close: "మూసివేయండి"
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