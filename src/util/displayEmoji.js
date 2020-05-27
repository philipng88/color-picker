import React from "react";
import "../vendors/flag/flag.min.css";

const displayEmoji = (emoji) => {
  let emojiDisplay;
  switch (emoji) {
    case "🇳🇱":
      emojiDisplay = <i className="nl flag"></i>;
      break;
    case "🇺🇸":
      emojiDisplay = <i className="us flag"></i>;
      break;
    case "🇦🇺":
      emojiDisplay = <i className="au flag"></i>;
      break;
    case "🇬🇧":
      emojiDisplay = <i className="gb flag"></i>;
      break;
    case "🇪🇸":
      emojiDisplay = <i className="es flag"></i>;
      break;
    case "🇮🇳":
      emojiDisplay = <i className="in flag"></i>;
      break;
    case "🇫🇷":
      emojiDisplay = <i className="fr flag"></i>;
      break;
    default:
      emojiDisplay = emoji || "🎨";
      break;
  }
  return emojiDisplay;
};

export default displayEmoji;
