import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        description:
          "The Emotion Stimulator feature is designed to help children understand and recognize different emotions. It includes an introduction to various emotions, engaging stories that illustrate these emotions in real-life situations, and interactive games that reinforce emotional learning. This feature aims to make emotional education fun and accessible for children, especially those with special needs, by using visual and interactive elements.",
        happy: "Happy",
        sad: "Sad",
        angry: "Angry",
        welcome: "Welcome",
        description:
          "The Emotion Stimulator feature is designed to help children understand and recognize different emotions. It includes an introduction to various emotions, engaging stories that illustrate these emotions in real-life situations, and interactive games that reinforce emotional learning. This feature aims to make emotional education fun and accessible for children, especially those with special needs, by using visual and interactive elements.",
        happy: "Happy",
        sad: "Sad",
        angry: "Angry",
        next: "Next",
        back: "Back",
        loading: "Loading...",
        yourBrowserDoesNotSupportTheVideoTag:
          "Your browser does not support the video tag.",
        hello: "Hello",
        goodbye: "Goodbye",
        emotion: "Emotion",
        surprise: "Surprise",
        tryAgain: "Try Again",
        home: "Home",
        character: "Character",
        play: "Play",
        pause: "Pause",
        stop: "Stop",
        mute: "Mute",
        unmute: "Unmute",
        language: "Language",
        clickMe: "clickMe",
      },
    },
    si: {
      translation: {
        welcome: "ආයුබෝවන්",
        description:
          "භාවනාවන් හඳුනා ගැනීමට සහ තේරුම් ගැනීමට ළමයින්ට උපකාරී වන ආකාරයෙන් මෙම භාවනාව ප්‍රතිලාභ සැපයීමට සැලසුම් කර ඇත. මෙම භාවනාවන් ප්‍රායෝගික පරිසරවල දර්ශනය කිරීම සඳහා සමාජය තුළ ඇති විවිධ භාවනාවන් වෙත හඳුන්වාදීම, කතාන්දර සහ අන්තර්ක්‍රියාකාරී ක්‍රීඩා ඇතුළත් වේ. මෙම විශේෂාංගය විශේෂ අවශ්‍යතා සහිත ළමුන් සඳහා විෂයභාර අධ්‍යාපනය ප්‍රයෝජනවත් සහ පෙනෙන කරමින් අන්තර්ක්‍රියාකාරී අංග භාවිතා කරමින් මනෝභාව අධ්‍යාපනය සතුටින් සිදු කිරීමේ අරමුණ ඇත.",
        happy: "සතුටු",
        sad: "දුක්",
        angry: " තරහ",
        welcome: "ආයුබෝවන්",
        description:
          "භාවනාවන් හඳුනා ගැනීමට සහ තේරුම් ගැනීමට ළමයින්ට උපකාරී වන ආකාරයෙන් මෙම භාවනාව ප්‍රතිලාභ සැපයීමට සැලසුම් කර ඇත. මෙම භාවනාවන් ප්‍රායෝගික පරිසරවල දර්ශනය කිරීම සඳහා සමාජය තුළ ඇති විවිධ භාවනාවන් වෙත හඳුන්වාදීම, කතාන්දර සහ අන්තර්ක්‍රියාකාරී ක්‍රීඩා ඇතුළත් වේ. මෙම විශේෂාංගය විශේෂ අවශ්‍යතා සහිත ළමුන් සඳහා විෂයභාර අධ්‍යාපනය ප්‍රයෝජනවත් සහ පෙනෙන කරමින් අන්තර්ක්‍රියාකාරී අංග භාවිතා කරමින් මනෝභාව අධ්‍යාපනය සතුටින් සිදු කිරීමේ අරමුණ ඇත.",
        happy: "සතුටු",
        sad: "දුක්",
        angry: "තරහ",
        next: "මීළඟ",
        back: "ආපසු",
        loading: "පූරණය වෙමින්...",
        yourBrowserDoesNotSupportTheVideoTag:
          "ඔබේ බ්‍රවුසර් මෙම වීඩියෝ ටැගය සහය නොදක්වයි.",
        hello: "හෙලෝ",
        goodbye: "ආයුබෝවන්",
        emotion: "භාවනාව",
        surprise: "අදහස් දැක්වීම",
        tryAgain: "නැවත උත්සාහ කරන්න",
        home: "මුල් පිටුව",
        character: "චරිත",
        play: "චුදන්න",
        pause: "විරාමය",
        stop: "නවත්වන්න",
        mute: "නිහතමානී",
        unmute: "නිහතමානී නොකරන්න",
        language: "භාෂාව",
        clickMe: "ඔබන්න",
      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
