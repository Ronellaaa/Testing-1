// import React from "react";
// import { Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Pic from "./assets/people-hanging-out-with-robot.jpg";
// import "./components/Firstpage.css";
// import emotions from "./assets/emotions.png";
// import animationGif from "./assets/heavenly-joy-jerkins-i-am-so-excited.gif";
// import topRightGif from "./assets/cbse-tayari.gif";
// import cute from "./assets/cute.webp";
// import gif from "./assets/joy.webp";
// import sad1 from "./assets/blue-cry.gif";
// import angry from "./assets/inside-out.gif";
// import monster from "./assets/monster.png";
// import hero from "./assets/hero.png";
// import hero1 from "./assets/hero1.png";
// import video from "./assets/Untitled video - Made with Clipchamp.mp4";

// function Firstpage() {
//   const navigate = useNavigate();

//   const handleNextClick = () => {
//     navigate("/speech", { state: { emotion: "happiness" } });
//   };
//   const handleNextClick1 = () => {
//     navigate("/speech", { state: { emotion: "sadness" } });
//   };
//   const handleNextClick2 = () => {
//     navigate("/speech", { state: { emotion: "anger" } });
//   };

//   return (
//     <div className="bb">
//       {/* Small introduction about the emotion simulator */}
//       <div className="row flex-lg-row-reverse align-items-center g-5 box1">
//         <h1 className="head">Emotion Simulator</h1>
//         <div className="col-10 col-sm-8 col-lg-8 intro">
//           <div className="p-5 text-center rounded-3 intro">
//             <img
//               src={topRightGif}
//               alt="Top Right Animation"
//               className="top-right-gif"
//             />
//             <p className="lead intro">
//               The Emotion Stimulator feature is designed to help children
//               understand and recognize different emotions. It includes an
//               introduction to various emotions, engaging stories that illustrate
//               these emotions in real-life situations, and interactive games that
//               reinforce emotional learning. This feature aims to make emotional
//               education fun and accessible for children, especially those with
//               special needs, by using visual and interactive elements.
//             </p>
//             <img
//               src={animationGif}
//               alt="Animation"
//               className="gif-img ml-3 mb-3"
//             />
//           </div>
//         </div>
//         {/* Emotion chart */}
//         <div className="col-lg-4">
//           <img src={cute} alt="Cute" className="cute" />
//           <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 emotion">
//             Emotions
//           </h2>
//           <div className="left">
//             <img src={emotions} alt="Emotions" className="small-img" />
//           </div>
//         </div>
//       </div>

//       {/* Emotion selections */}
//       <div>
//         <img src={monster} alt="Monster" className="monster" />
//       </div>
//       <div className="hero-pic">
//         <img src={hero} alt="Hero" className="monster1" />
//         <img src={hero1} alt="Hero 1" className="monster1" />
//       </div>
//       <div className="thumbnail">
//         <div className="col">
//           <div className="card mb-4 rounded-3 shadow-sm border-dark">
//             <div className="card-header py-3 heading1">
//               <h4 className="my-0 h2">Happy</h4>
//             </div>
//             <div className="card-body happy">
//               <img src={gif} alt="Joy" className="card-img-top" />
//               <button
//                 type="button"
//                 className="w-100 btn1 btn-lg btn2"
//                 onClick={handleNextClick}
//               >
//                 👉 CLICK ME👈
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className="card mb-4 rounded-3 shadow-sm border-dark">
//             <div className="card-header py-3 heading2">
//               <h4 className="my-0 h2">Sad</h4>
//             </div>
//             <div className="card-body sad">
//               <img src={sad1} alt="Sad" className="card-img-top" />
//               <Link to="/speech" state={{ emotion: "sadness" }}>
//                 <button
//                   type="button"
//                   className="w-100 btn-lg btn1 btn3"
//                   // onClick={handleNextClick1}
//                 >
//                   👉 CLICK ME👈
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className="card mb-4 rounded-3 shadow-sm border-dark">
//             <div className="card-header py-3 heading3">
//               <h4 className="my-0 h2">Angry</h4>
//             </div>
//             <div className="card-body angry">
//               <img src={angry} alt="Angry" className="card-img-top" />

//               <button
//                 type="button"
//                 className="w-100 btn1 btn4"
//                 onClick={handleNextClick2}
//               >
//                 👉 CLICK ME👈
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Firstpage;

import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Pic from "./assets/people-hanging-out-with-robot.jpg";
import "./components/Firstpage.css";
import emotions from "./assets/emotions.png";
import animationGif from "./assets/heavenly-joy-jerkins-i-am-so-excited.gif";
import topRightGif from "./assets/cbse-tayari.gif";
import cute from "./assets/cute.webp";
import gif from "./assets/joy.webp";
import sad1 from "./assets/blue-cry.gif";
import angry from "./assets/inside-out.gif";
import monster from "./assets/monster.png";
import hero from "./assets/hero.png";
import hero1 from "./assets/hero1.png";
import video from "./assets/Untitled video - Made with Clipchamp.mp4";

function Firstpage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleNextClick = () => {
    navigate("/speech", { state: { emotion: "happiness" } });
  };
  const handleNextClick1 = () => {
    navigate("/speech", { state: { emotion: "sadness" } });
  };
  const handleNextClick2 = () => {
    navigate("/speech", { state: { emotion: "anger" } });
  };

  return (
    <div className="bb">
      <div className="language-buttons">
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("si")}>Sinhala</button>
      </div>
      {/* Small introduction about the emotion simulator */}
      <div className="row flex-lg-row-reverse align-items-center g-5 box1">
        <h1 className="head">{t("welcome")}</h1>
        <div className="col-10 col-sm-8 col-lg-8 intro">
          <div className="p-5 text-center rounded-3 intro">
            <img
              src={topRightGif}
              alt="Top Right Animation"
              className="top-right-gif"
            />
            <p className="lead intro">{t("description")}</p>
            <img
              src={animationGif}
              alt="Animation"
              className="gif-img ml-3 mb-3"
            />
          </div>
        </div>
        {/* Emotion chart */}
        <div className="col-lg-4">
          <img src={cute} alt="Cute" className="cute" />
          <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 emotion">
            {t("emotions")}
          </h2>
          <div className="left">
            <img src={emotions} alt="Emotions" className="small-img" />
          </div>
        </div>
      </div>

      {/* Emotion selections */}
      <div>
        <img src={monster} alt="Monster" className="monster" />
      </div>
      <div className="hero-pic">
        <img src={hero} alt="Hero" className="monster1" />
        <img src={hero1} alt="Hero 1" className="monster1" />
      </div>
      <div className="thumbnail">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-dark">
            <div className="card-header py-3 heading1">
              <h4 className="my-0 h2">{t("happy")}</h4>
            </div>
            <div className="card-body happy">
              <img src={gif} alt="Joy" className="card-img-top" />
              <button
                type="button"
                className="w-100 btn1 btn-lg btn2"
                onClick={handleNextClick}
              >
                {t("clickMe")}
              </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-dark">
            <div className="card-header py-3 heading2">
              <h4 className="my-0 h2">{t("sad")}</h4>
            </div>
            <div className="card-body sad">
              <img src={sad1} alt="Sad" className="card-img-top" />
              <Link to="/speech" state={{ emotion: "sadness" }}>
                <button type="button" className="w-100 btn-lg btn1 btn3">
                  {t("clickMe")}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-dark">
            <div className="card-header py-3 heading3">
              <h4 className="my-0 h2">{t("angry")}</h4>
            </div>
            <div className="card-body angry">
              <img src={angry} alt="Angry" className="card-img-top" />
              <button
                type="button"
                className="w-100 btn1 btn4"
                onClick={handleNextClick2}
              >
                {t("clickMe")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
