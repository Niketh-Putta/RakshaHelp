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
  
  // Emergency screen content
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
    addContact: "Add Contact",
    contactName: "Contact Name",
    contactPhone: "Phone Number",
    relationship: "Relationship",
    save: "Save",
    cancel: "Cancel",
    deleteContact: "Delete",
    noContacts: "No emergency contacts added yet",
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
    confusion: "Confusion",
    
    // Emergency screen content
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
    dialAsSoonAsStroke: "Dial 112 as soon as any stroke signs appear.",
    askPersonSmileArms: "Ask person to smile, raise both arms, and speak a sentence.",
    layOnSideElevated: "Lay them on one side with head slightly elevated.",
    dontGiveFoodDrink: "Don't give food or drink",
    mayCauseChoking: "May cause choking.",
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
  }
};

export const getTranslation = (language: Language): Translations => {
  return translations[language] || translations.en;
};
