export type Language = 'en' | 'hi' | 'bn' | 'ta' | 'te' | 'mr';

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
}

export const translations: Record<Language, Translations> = {
  en: {
    appTitle: "Emergency First Aid",
    appSubtitle: "Life-saving guidance for critical situations",
    language: "Language",
    cardiacArrest: "Cardiac Arrest",
    stroke: "Stroke",
    heartAttack: "Heart Attack",
    sepsis: "Sepsis",
    emergencyContacts: "Emergency Contacts",
    call112: "Call 112",
    contacts: "Contacts",
    worksOffline: "Works Offline",
    playAudio: "Play Audio Instructions",
    call112Now: "CALL 112 NOW",
    findAED: "Find Nearest AED",
    findHospital: "Find Nearest Hospital",
    checkResponsiveness: "Check Responsiveness",
    positionHands: "Position Hands",
    pushHardFast: "Push Hard & Fast",
    fastTest: "FAST Test",
    faceDrooping: "Face Drooping",
    armWeakness: "Arm Weakness", 
    speechDifficulty: "Speech Difficulty",
    timeToCall: "Time to Call",
    warningSigns: "Warning Signs",
    callEmergency: "Call Emergency",
    giveAspirin: "Give Aspirin",
    stayCalmRest: "Stay Calm & Rest",
    dangerSigns: "Danger Signs",
    highFever: "High Fever/Chills",
    fastHeartRate: "Fast Heart Rate",
    breathingProblems: "Breathing Problems",
    confusion: "Confusion"
  },
  hi: {
    appTitle: "आपातकालीन प्राथमिक चिकित्सा",
    appSubtitle: "जीवन रक्षक मार्गदर्शन",
    language: "भाषा",
    cardiacArrest: "हृदयगति रोकना",
    stroke: "आघात",
    heartAttack: "दिल का दौरा",
    sepsis: "सेप्सिस",
    emergencyContacts: "आपातकालीन संपर्क",
    call112: "112 पर कॉल करें",
    contacts: "संपर्क",
    worksOffline: "ऑफ़लाइन काम करता है",
    playAudio: "ऑडियो निर्देश चलाएं",
    call112Now: "अभी 112 पर कॉल करें",
    findAED: "निकटतम AED खोजें",
    findHospital: "निकटतम अस्पताल खोजें",
    checkResponsiveness: "प्रतिक्रिया जांचें",
    positionHands: "हाथ की स्थिति",
    pushHardFast: "जोर से और तेज़ दबाएं",
    fastTest: "FAST परीक्षण",
    faceDrooping: "चेहरा लटकना",
    armWeakness: "बांह की कमजोरी",
    speechDifficulty: "बोलने में कठिनाई",
    timeToCall: "कॉल करने का समय",
    warningSigns: "चेतावनी के संकेत",
    callEmergency: "आपातकाल पर कॉल करें",
    giveAspirin: "एस्पिरिन दें",
    stayCalmRest: "शांत रहें और आराम करें",
    dangerSigns: "खतरे के संकेत",
    highFever: "तेज़ बुखार/ठंड लगना",
    fastHeartRate: "तेज़ हृदय गति",
    breathingProblems: "सांस लेने में समस्या",
    confusion: "भ्रम"
  },
  bn: {
    appTitle: "জরুরি প্রাথমিক চিকিৎসা",
    appSubtitle: "জীবন রক্ষাকারী নির্দেশনা",
    language: "ভাষা",
    cardiacArrest: "হৃদযন্ত্র বন্ধ",
    stroke: "স্ট্রোক",
    heartAttack: "হার্ট অ্যাটাক",
    sepsis: "সেপসিস",
    emergencyContacts: "জরুরি যোগাযোগ",
    call112: "১১২ কল করুন",
    contacts: "যোগাযোগ",
    worksOffline: "অফলাইনে কাজ করে",
    playAudio: "অডিও নির্দেশনা চালান",
    call112Now: "এখনই ১১২ কল করুন",
    findAED: "নিকটতম AED খুঁজুন",
    findHospital: "নিকটতম হাসপাতাল খুঁজুন",
    checkResponsiveness: "সাড়া পরীক্ষা করুন",
    positionHands: "হাত অবস্থান",
    pushHardFast: "জোরে এবং দ্রুত চাপুন",
    fastTest: "FAST পরীক্ষা",
    faceDrooping: "মুখ ঝুলে পড়া",
    armWeakness: "হাতের দুর্বলতা",
    speechDifficulty: "কথা বলতে অসুবিধা",
    timeToCall: "কল করার সময়",
    warningSigns: "সতর্কতা চিহ্ন",
    callEmergency: "জরুরি কল করুন",
    giveAspirin: "অ্যাসপিরিন দিন",
    stayCalmRest: "শান্ত থাকুন এবং বিশ্রাম নিন",
    dangerSigns: "বিপদের চিহ্ন",
    highFever: "উচ্চ জ্বর/ঠান্ডা লাগা",
    fastHeartRate: "দ্রুত হৃদস্পন্দন",
    breathingProblems: "শ্বাসকষ্ট",
    confusion: "বিভ্রান্তি"
  },
  ta: {
    appTitle: "அவசர முதலுதவி",
    appSubtitle: "உயிர் காக்கும் வழிகாட்டுதல்",
    language: "மொழி",
    cardiacArrest: "இதய நிறுத்தம்",
    stroke: "பக்கவாதம்",
    heartAttack: "மாரடைப்பு",
    sepsis: "செப்சிஸ்",
    emergencyContacts: "அவசர தொடர்புகள்",
    call112: "112 அழைக்கவும்",
    contacts: "தொடர்புகள்",
    worksOffline: "ஆஃப்லைனில் வேலை செய்கிறது",
    playAudio: "ஆடியோ வழிகாட்டுதல்களை இயக்கவும்",
    call112Now: "இப்போதே 112 அழைக்கவும்",
    findAED: "அருகிலுள்ள AED கண்டறியவும்",
    findHospital: "அருகிலுள்ள மருத்துவமனை கண்டறியவும்",
    checkResponsiveness: "பதிலளிப்பைச் சரிபார்க்கவும்",
    positionHands: "கைகளின் நிலை",
    pushHardFast: "கடினமாகவும் வேகமாகவும் அழுத்தவும்",
    fastTest: "FAST பரிசோதனை",
    faceDrooping: "முகம் தொங்குதல்",
    armWeakness: "கை பலவீனம்",
    speechDifficulty: "பேச்சு சிரமம்",
    timeToCall: "அழைக்க வேண்டிய நேரம்",
    warningSigns: "எச்சரிக்கை அறிகுறிகள்",
    callEmergency: "அவசர அழைப்பு",
    giveAspirin: "ஆஸ்பிரின் கொடுக்கவும்",
    stayCalmRest: "அமைதியாக இருங்கள் மற்றும் ஓய்வு எடுங்கள்",
    dangerSigns: "ஆபத்து அறிகுறிகள்",
    highFever: "அதிக காய்ச்சல்/குளிர்",
    fastHeartRate: "வேகமான இதயத் துடிப்பு",
    breathingProblems: "சுவாச பிரச்சினைகள்",
    confusion: "குழப்பம்"
  },
  te: {
    appTitle: "అత్యవసర ప్రథమ చికిత్స",
    appSubtitle: "జీవన రక్షక మార్గదర్శకత్వం",
    language: "భాష",
    cardiacArrest: "గుండె ఆగిపోవడం",
    stroke: "స్ట్రోక్",
    heartAttack: "గుండెపోటు",
    sepsis: "సెప్సిస్",
    emergencyContacts: "అత్యవసర పరిచయాలు",
    call112: "112కు కాల్ చేయండి",
    contacts: "పరిచయాలు",
    worksOffline: "ఆఫ్‌లైన్‌లో పని చేస్తుంది",
    playAudio: "ఆడియో సూచనలను ప్లే చేయండి",
    call112Now: "ఇప్పుడే 112కు కాల్ చేయండి",
    findAED: "సమీపంలోని AEDని కనుగొనండి",
    findHospital: "సమీపంలోని ఆసుపత్రిని కనుగొనండి",
    checkResponsiveness: "స్పందనను తనిఖీ చేయండి",
    positionHands: "చేతుల స్థానం",
    pushHardFast: "గట్టిగా మరియు వేగంగా నొక్కండి",
    fastTest: "FAST పరీక్ష",
    faceDrooping: "ముఖం వేలాడడం",
    armWeakness: "చేయి బలహీనత",
    speechDifficulty: "మాట్లాడడంలో కష్టం",
    timeToCall: "కాల్ చేయాల్సిన సమయం",
    warningSigns: "హెచ్చరిక సంకేతాలు",
    callEmergency: "అత్యవసర కాల్",
    giveAspirin: "ఆస్పిరిన్ ఇవ్వండి",
    stayCalmRest: "ప్రశాంతంగా ఉండండి మరియు విశ్రమించండి",
    dangerSigns: "ప్రమాద సంకేతాలు",
    highFever: "అధిక జ్వరం/చలి",
    fastHeartRate: "వేగమైన గుండె స్పందన",
    breathingProblems: "శ్వాస సమస్యలు",
    confusion: "గందరగోళం"
  },
  mr: {
    appTitle: "आपत्कालीन प्राथमिक वैद्यकीय मदत",
    appSubtitle: "जीवन वाचवणारे मार्गदर्शन",
    language: "भाषा",
    cardiacArrest: "हृदयविकार थांबणे",
    stroke: "पक्षाघात",
    heartAttack: "हृदयविकाराचा झटका",
    sepsis: "सेप्सिस",
    emergencyContacts: "आपत्कालीन संपर्क",
    call112: "112 ला कॉल करा",
    contacts: "संपर्क",
    worksOffline: "ऑफलाइन काम करते",
    playAudio: "ऑडिओ सूचना चालवा",
    call112Now: "आता 112 ला कॉल करा",
    findAED: "जवळचे AED शोधा",
    findHospital: "जवळचे रुग्णालय शोधा",
    checkResponsiveness: "प्रतिसाद तपासा",
    positionHands: "हातांची स्थिती",
    pushHardFast: "कडकपणे आणि वेगाने दाबा",
    fastTest: "FAST चाचणी",
    faceDrooping: "चेहरा लटकणे",
    armWeakness: "हातातील कमकुवतपणा",
    speechDifficulty: "बोलण्यात अडचण",
    timeToCall: "कॉल करण्याची वेळ",
    warningSigns: "चेतावणी चिन्हे",
    callEmergency: "आपत्कालीन कॉल करा",
    giveAspirin: "अस्पिरिन द्या",
    stayCalmRest: "शांत राहा आणि विश्रांती घ्या",
    dangerSigns: "धोक्याची चिन्हे",
    highFever: "उच्च ताप/थंडी वाजून येणे",
    fastHeartRate: "वेगवान हृदयगती",
    breathingProblems: "श्वासोच्छवासाच्या समस्या",
    confusion: "गोंधळ"
  }
};

export const getTranslation = (language: Language): Translations => {
  return translations[language] || translations.en;
};
