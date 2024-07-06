// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import hii from "./assets/hii.png";
// import "./components/speechbubble.css";
// import voice from "./assets/Untitled video - Made with Clipchamp.mp3";
// import { Howl } from "howler";
// import play from "./assets/police_animation.mp4";
// import emotionsData from "./emotionsData.json";

// const dialogues = [
//   "Hey kiddos! 🎉",
//   "Hope you’re all having an awesome day! 😄🌟",
//   "I’ve been thinking a lot lately... 🤔💭",
//   "Sometimes, it’s tricky for me to show what I’m feeling inside. 😟💔",
//   "But you know what? 🌟",
//   "I bet you amazing kids can help me figure it out! 🤝🙌",
//   "Let’s have some fun and learn how to express our feelings together! 🚀✨",
// ];

// const dialogueTimings = [
//   { start: 0, end: 1 },
//   { start: 1, end: 3 },
//   { start: 3, end: 4 },
//   { start: 4, end: 9 },
//   { start: 9, end: 10 },
//   { start: 10, end: 13 },
//   { start: 13, end: 17 },
// ];

// const SpeechBubble = () => {
//   const [currentDialogue, setCurrentDialogue] = useState(0);
//   const [sound, setSound] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const soundInstance = new Howl({
//       src: [voice],
//       sprite: dialogueTimings.reduce((sprites, timing, index) => {
//         sprites[`dialogue${index}`] = [
//           timing.start * 1000,
//           (timing.end - timing.start) * 1000,
//         ];
//         return sprites;
//       }, {}),
//     });

//     setSound(soundInstance);

//     const interval = setInterval(() => {
//       setCurrentDialogue((prevDialogue) => {
//         const nextDialogue = prevDialogue + 1;
//         if (nextDialogue < dialogues.length) {
//           return nextDialogue;
//         } else {
//           clearInterval(interval);
//           return prevDialogue;
//         }
//       });
//     }, (dialogueTimings[currentDialogue].end - dialogueTimings[currentDialogue].start) * 1000);

//     return () => {
//       clearInterval(interval);
//       if (soundInstance) {
//         soundInstance.stop();
//       }
//     };
//   }, [currentDialogue]);

//   useEffect(() => {
//     if (sound) {
//       sound.play(`dialogue${currentDialogue}`);
//     }
//   }, [currentDialogue, sound]);

//   const handleNextClick = () => {
//     navigate("/next");
//   };

//   const handleNextClick1 = () => {
//     navigate("/");
//   };

//   return (
//     <div className="App">
//       <video autoPlay muted loop className="background-video">
//         <source src={play} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="background-overlay"></div>
//       <div className="content">
//         <div className="speech-bubble">{dialogues[currentDialogue]}</div>
//         <img src={hii} alt="character" className="character-image" />
//         <button className="next-button fixed-button" onClick={handleNextClick}>
//           Next
//         </button>
//         <button
//           className="back-button fixed1-button"
//           onClick={handleNextClick1}
//         >
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SpeechBubble;

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Howl } from "howler";
// import emotionsData from "./emotionsData.json";
// import "./components/speechbubble.css";

// import hiiImage from "./assets/hii.png";
// import voiceAudio from "./assets/Untitled video - Made with Clipchamp.mp3";
// import playVideo from "./assets/police_animation.mp4";
// import sadImage from "./assets/sad.png";
// import sadAudio from "./assets/sad.mp3";
// import sadVideo from "./assets/sad_animation.mp4";
// import angryImage from "./assets/angryy.png";
// import angryAudio from "./assets/angryy.mp3";
// import angryVideo from "./assets/angryy_animation.mp4";

// const assets = {
//   "hii.png": hiiImage,
//   "Untitled video - Made with Clipchamp.mp3": voiceAudio,
//   "police_animation.mp4": playVideo,
//   "sad.png": sadImage,
//   "sad.mp3": sadAudio,
//   "sad_animation.mp4": sadVideo,
//   "angryy.png": angryImage,
//   "angryy.mp3": angryAudio,
//   "angryy_animation.mp4": angryVideo,
// };

// const SpeechBubble = () => {
//   const [currentDialogue, setCurrentDialogue] = useState(0);
//   const [sound, setSound] = useState(null);
//   const [emotionData, setEmotionData] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const emotion = location.state?.emotion || "happiness";
//     const data = emotionsData.find((e) => e.emotion === emotion);
//     setEmotionData(data);

//     const soundInstance = new Howl({
//       src: [assets[data.voice]],
//       sprite: data.dialogueTimings.reduce((sprites, timing, index) => {
//         sprites[`dialogue${index}`] = [
//           timing.start * 1000,
//           (timing.end - timing.start) * 1000,
//         ];
//         return sprites;
//       }, {}),
//     });

//     setSound(soundInstance);

//     const interval = setInterval(() => {
//       setCurrentDialogue((prevDialogue) => {
//         const nextDialogue = prevDialogue + 1;
//         if (nextDialogue < data.dialogues.length) {
//           return nextDialogue;
//         } else {
//           clearInterval(interval);
//           return prevDialogue;
//         }
//       });
//     }, (data.dialogueTimings[currentDialogue].end - data.dialogueTimings[currentDialogue].start) * 1000);

//     return () => {
//       clearInterval(interval);
//       if (soundInstance) {
//         soundInstance.stop();
//       }
//     };
//   }, [currentDialogue, location.state?.emotion]);

//   useEffect(() => {
//     if (sound) {
//       sound.play(`dialogue${currentDialogue}`);
//     }
//   }, [currentDialogue, sound]);

//   if (!emotionData) {
//     return <div>Loading...</div>;
//   }

//   const handleNextClick = () => {
//     navigate("/next", { state: { emotion: emotionData.emotion } });
//   };

//   const handleNextClick1 = () => {
//     navigate("/", { state: { emotion: emotionData.emotion } });
//   };

//   return (
//     <div className="App">
//       <video autoPlay muted loop className="background-video">
//         <source src={assets[emotionData.video]} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="background-overlay"></div>
//       <div className="content">
//         <div className="speech-bubble">
//           {emotionData.dialogues[currentDialogue]}
//         </div>
//         <img
//           src={assets[emotionData.image]}
//           alt="character"
//           className="character-image"
//         />
//         <button className="next-button fixed-button" onClick={handleNextClick}>
//           Skip
//         </button>
//         <button
//           className="back-button fixed1-button"
//           onClick={handleNextClick1}
//         >
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SpeechBubble;
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Howl } from "howler";
import emotionsData from "./emotionsData.json";
import "./components/speechbubble.css";
import { useTranslation } from "react-i18next"; // Import useTranslation

// Static imports for assets
import hiiImage from "./assets/hii.png";
import voiceAudio from "./assets/Untitled video - Made with Clipchamp.mp3";
import playVideo from "./assets/police_animation.mp4";
import sadImage from "./assets/sad.png";
import sadAudio from "./assets/sad.mp3";
import sadVideo from "./assets/sad_animation.mp4";
import angryImage from "./assets/angryy.png";
import angryAudio from "./assets/angryy.mp3";
import angryVideo from "./assets/angryy_animation.mp4";

const assets = {
  "hii.png": hiiImage,
  "Untitled video - Made with Clipchamp.mp3": voiceAudio,
  "police_animation.mp4": playVideo,
  "sad.png": sadImage,
  "sad.mp3": sadAudio,
  "sad_animation.mp4": sadVideo,
  "angryy.png": angryImage,
  "angryy.mp3": angryAudio,
  "angryy_animation.mp4": angryVideo,
};

const SpeechBubble = () => {
  const { t } = useTranslation();
  const [currentDialogue, setCurrentDialogue] = useState(0);
  const [sound, setSound] = useState(null);
  const [emotionData, setEmotionData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const emotion = location.state?.emotion || "happiness";
    const data = emotionsData.find((e) => e.emotion === emotion);
    setEmotionData(data);

    const soundInstance = new Howl({
      src: [assets[data.voice]],
      sprite: data.dialogueTimings.reduce((sprites, timing, index) => {
        sprites[`dialogue${index}`] = [
          timing.start * 1000,
          (timing.end - timing.start) * 1000,
        ];
        return sprites;
      }, {}),
    });

    setSound(soundInstance);

    const interval = setInterval(() => {
      setCurrentDialogue((prevDialogue) => {
        const nextDialogue = prevDialogue + 1;
        if (nextDialogue < data.dialogues.length) {
          return nextDialogue;
        } else {
          clearInterval(interval);
          return prevDialogue;
        }
      });
    }, (data.dialogueTimings[currentDialogue].end - data.dialogueTimings[currentDialogue].start) * 1000);

    return () => {
      clearInterval(interval);
      if (soundInstance) {
        soundInstance.stop();
      }
    };
  }, [currentDialogue, location.state?.emotion]);

  useEffect(() => {
    if (sound) {
      sound.play(`dialogue${currentDialogue}`);
    }
  }, [currentDialogue, sound]);

  if (!emotionData) {
    return <div>{t("loading")}</div>; // Use translation for "Loading..."
  }

  const handleNextClick = () => {
    navigate("/next", { state: { emotion: emotionData.emotion } });
  };

  const handleNextClick1 = () => {
    navigate("/", { state: { emotion: emotionData.emotion } });
  };

  return (
    <div className="App">
      <video autoPlay muted loop className="background-video">
        <source src={assets[emotionData.video]} type="video/mp4" />
        {t("yourBrowserDoesNotSupportTheVideoTag")} {/* Translation */}
      </video>
      <div className="background-overlay"></div>
      <div className="content">
        <div className="speech-bubble">
          {t(emotionData.dialogues[currentDialogue])}
        </div>{" "}
        {/* Translation */}
        <img
          src={assets[emotionData.image]}
          alt="character"
          className="character-image"
        />
        <button className="next-button fixed-button" onClick={handleNextClick}>
          {t("next")} {/* Translation */}
        </button>
        <button
          className="back-button1 fixed1-button"
          onClick={handleNextClick1}
        >
          {t("back")} {/* Translation */}
        </button>
      </div>
    </div>
  );
};

export default SpeechBubble;
