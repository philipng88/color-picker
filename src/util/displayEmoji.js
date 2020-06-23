/* eslint-disable react/self-closing-comp */
import React from "react";
import "../vendors/flag/flag.min.css";

const displayEmoji = (emoji) => {
  let emojiDisplay;
  switch (emoji) {
    case "🇦🇩":
      emojiDisplay = <i className="flag andorra"></i>;
      break;
    case "🇦🇪":
      emojiDisplay = <i className="flag united arab emirates"></i>;
      break;
    case "🇦🇫":
      emojiDisplay = <i className="flag afghanistan"></i>;
      break;
    case "🇦🇬":
      emojiDisplay = <i className="flag antigua"></i>;
      break;
    case "🇦🇮":
      emojiDisplay = <i className="flag anguilla"></i>;
      break;
    case "🇦🇱":
      emojiDisplay = <i className="flag albania"></i>;
      break;
    case "🇦🇲":
      emojiDisplay = <i className="flag armenia"></i>;
      break;
    case "🇦🇴":
      emojiDisplay = <i className="flag angola"></i>;
      break;
    case "🇦🇷":
      emojiDisplay = <i className="flag argentina"></i>;
      break;
    case "🇦🇸":
      emojiDisplay = <i className="flag american samoa"></i>;
      break;
    case "🇦🇹":
      emojiDisplay = <i className="flag austria"></i>;
      break;
    case "🇦🇺":
      emojiDisplay = <i className="flag australia"></i>;
      break;
    case "🇦🇼":
      emojiDisplay = <i className="flag aruba"></i>;
      break;
    case "🇦🇽":
      emojiDisplay = <i className="flag aland islands"></i>;
      break;
    case "🇦🇿":
      emojiDisplay = <i className="flag azerbaijan"></i>;
      break;
    case "🇧🇦":
      emojiDisplay = <i className="flag bosnia"></i>;
      break;
    case "🇧🇧":
      emojiDisplay = <i className="flag barbados"></i>;
      break;
    case "🇧🇩":
      emojiDisplay = <i className="flag bangladesh"></i>;
      break;
    case "🇧🇪":
      emojiDisplay = <i className="flag belgium"></i>;
      break;
    case "🇧🇫":
      emojiDisplay = <i className="flag burkina faso"></i>;
      break;
    case "🇧🇬":
      emojiDisplay = <i className="flag bulgaria"></i>;
      break;
    case "🇧🇭":
      emojiDisplay = <i className="flag bahrain"></i>;
      break;
    case "🇧🇮":
      emojiDisplay = <i className="flag burundi"></i>;
      break;
    case "🇧🇯":
      emojiDisplay = <i className="flag benin"></i>;
      break;
    case "🇧🇲":
      emojiDisplay = <i className="flag bermuda"></i>;
      break;
    case "🇧🇳":
      emojiDisplay = <i className="flag brunei"></i>;
      break;
    case "🇧🇴":
      emojiDisplay = <i className="flag bolivia"></i>;
      break;
    case "🇧🇷":
      emojiDisplay = <i className="flag brazil"></i>;
      break;
    case "🇧🇸":
      emojiDisplay = <i className="flag bahamas"></i>;
      break;
    case "🇧🇹":
      emojiDisplay = <i className="flag bhutan"></i>;
      break;
    case "🇧🇻":
      emojiDisplay = <i className="flag bouvet island"></i>;
      break;
    case "🇧🇼":
      emojiDisplay = <i className="flag botswana"></i>;
      break;
    case "🇧🇾":
      emojiDisplay = <i className="flag belarus"></i>;
      break;
    case "🇧🇿":
      emojiDisplay = <i className="flag belize"></i>;
      break;
    case "🇨🇦":
      emojiDisplay = <i className="flag canada"></i>;
      break;
    case "🇨🇨":
      emojiDisplay = <i className="flag cocos islands"></i>;
      break;
    case "🇨🇩":
      emojiDisplay = <i className="flag congo"></i>;
      break;
    case "🇨🇫":
      emojiDisplay = <i className="flag central african republic"></i>;
      break;
    case "🇨🇬":
      emojiDisplay = <i className="flag congo brazzaville"></i>;
      break;
    case "🇨🇭":
      emojiDisplay = <i className="flag switzerland"></i>;
      break;
    case "🇨🇮":
      emojiDisplay = <i className="flag cote divoire"></i>;
      break;
    case "🇨🇰":
      emojiDisplay = <i className="flag cook islands"></i>;
      break;
    case "🇨🇱":
      emojiDisplay = <i className="flag chile"></i>;
      break;
    case "🇨🇲":
      emojiDisplay = <i className="flag cameroon"></i>;
      break;
    case "🇨🇳":
      emojiDisplay = <i className="flag china"></i>;
      break;
    case "🇨🇴":
      emojiDisplay = <i className="flag colombia"></i>;
      break;
    case "🇨🇷":
      emojiDisplay = <i className="flag costa rica"></i>;
      break;
    case "🇨🇺":
      emojiDisplay = <i className="flag cuba"></i>;
      break;
    case "🇨🇻":
      emojiDisplay = <i className="flag cape verde"></i>;
      break;
    case "🇨🇽":
      emojiDisplay = <i className="flag christmas island"></i>;
      break;
    case "🇨🇾":
      emojiDisplay = <i className="flag cyprus"></i>;
      break;
    case "🇨🇿":
      emojiDisplay = <i className="flag czech republic"></i>;
      break;
    case "🇩🇪":
      emojiDisplay = <i className="flag germany"></i>;
      break;
    case "🇩🇯":
      emojiDisplay = <i className="flag djibouti"></i>;
      break;
    case "🇩🇰":
      emojiDisplay = <i className="flag denmark"></i>;
      break;
    case "🇩🇲":
      emojiDisplay = <i className="flag dominica"></i>;
      break;
    case "🇩🇴":
      emojiDisplay = <i className="flag dominican republic"></i>;
      break;
    case "🇩🇿":
      emojiDisplay = <i className="flag algeria"></i>;
      break;
    case "🇪🇨":
      emojiDisplay = <i className="flag ecuador"></i>;
      break;
    case "🇪🇪":
      emojiDisplay = <i className="flag estonia"></i>;
      break;
    case "🇪🇬":
      emojiDisplay = <i className="flag egypt"></i>;
      break;
    case "🇪🇭":
      emojiDisplay = <i className="flag western sahara"></i>;
      break;
    case "🇪🇷":
      emojiDisplay = <i className="flag eritrea"></i>;
      break;
    case "🇪🇸":
      emojiDisplay = <i className="flag spain"></i>;
      break;
    case "🇪🇹":
      emojiDisplay = <i className="flag ethiopia"></i>;
      break;
    case "🇪🇺":
      emojiDisplay = <i className="flag european union"></i>;
      break;
    case "🇫🇮":
      emojiDisplay = <i className="flag finland"></i>;
      break;
    case "🇫🇯":
      emojiDisplay = <i className="flag fiji"></i>;
      break;
    case "🇫🇰":
      emojiDisplay = <i className="flag falkland islands"></i>;
      break;
    case "🇫🇲":
      emojiDisplay = <i className="flag micronesia"></i>;
      break;
    case "🇫🇴":
      emojiDisplay = <i className="flag faroe islands"></i>;
      break;
    case "🇫🇷":
      emojiDisplay = <i className="flag france"></i>;
      break;
    case "🇬🇦":
      emojiDisplay = <i className="flag gabon"></i>;
      break;
    case "🇬🇧":
      emojiDisplay = <i className="flag united kingdom"></i>;
      break;
    case "🇬🇩":
      emojiDisplay = <i className="flag grenada"></i>;
      break;
    case "🇬🇪":
      emojiDisplay = <i className="flag georgia"></i>;
      break;
    case "🇬🇫":
      emojiDisplay = <i className="flag french guiana"></i>;
      break;
    case "🇬🇭":
      emojiDisplay = <i className="flag ghana"></i>;
      break;
    case "🇬🇮":
      emojiDisplay = <i className="flag gibraltar"></i>;
      break;
    case "🇬🇱":
      emojiDisplay = <i className="flag greenland"></i>;
      break;
    case "🇬🇲":
      emojiDisplay = <i className="flag gambia"></i>;
      break;
    case "🇬🇳":
      emojiDisplay = <i className="flag guinea"></i>;
      break;
    case "🇬🇵":
      emojiDisplay = <i className="flag guadeloupe"></i>;
      break;
    case "🇬🇶":
      emojiDisplay = <i className="flag equatorial guinea"></i>;
      break;
    case "🇬🇷":
      emojiDisplay = <i className="flag greece"></i>;
      break;
    case "🇬🇸":
      emojiDisplay = <i className="flag sandwich islands"></i>;
      break;
    case "🇬🇹":
      emojiDisplay = <i className="flag guatemala"></i>;
      break;
    case "🇬🇺":
      emojiDisplay = <i className="flag guam"></i>;
      break;
    case "🇬🇼":
      emojiDisplay = <i className="flag guinea-bissau"></i>;
      break;
    case "🇬🇾":
      emojiDisplay = <i className="flag guyana"></i>;
      break;
    case "🇭🇰":
      emojiDisplay = <i className="flag hong kong"></i>;
      break;
    case "🇭🇲":
      emojiDisplay = <i className="flag heard island"></i>;
      break;
    case "🇭🇳":
      emojiDisplay = <i className="flag honduras"></i>;
      break;
    case "🇭🇷":
      emojiDisplay = <i className="flag croatia"></i>;
      break;
    case "🇭🇹":
      emojiDisplay = <i className="flag haiti"></i>;
      break;
    case "🇭🇺":
      emojiDisplay = <i className="flag hungary"></i>;
      break;
    case "🇮🇩":
      emojiDisplay = <i className="flag indonesia"></i>;
      break;
    case "🇮🇪":
      emojiDisplay = <i className="flag ireland"></i>;
      break;
    case "🇮🇱":
      emojiDisplay = <i className="flag israel"></i>;
      break;
    case "🇮🇳":
      emojiDisplay = <i className="flag india"></i>;
      break;
    case "🇮🇴":
      emojiDisplay = <i className="flag indian ocean territory"></i>;
      break;
    case "🇮🇶":
      emojiDisplay = <i className="flag iraq"></i>;
      break;
    case "🇮🇷":
      emojiDisplay = <i className="flag iran"></i>;
      break;
    case "🇮🇸":
      emojiDisplay = <i className="flag iceland"></i>;
      break;
    case "🇮🇹":
      emojiDisplay = <i className="flag italy"></i>;
      break;
    case "🇯🇲":
      emojiDisplay = <i className="flag jamaica"></i>;
      break;
    case "🇯🇴":
      emojiDisplay = <i className="flag jordan"></i>;
      break;
    case "🇯🇵":
      emojiDisplay = <i className="flag japan"></i>;
      break;
    case "🇰🇪":
      emojiDisplay = <i className="flag kenya"></i>;
      break;
    case "🇰🇬":
      emojiDisplay = <i className="flag kyrgyzstan"></i>;
      break;
    case "🇰🇭":
      emojiDisplay = <i className="flag cambodia"></i>;
      break;
    case "🇰🇮":
      emojiDisplay = <i className="flag kiribati"></i>;
      break;
    case "🇰🇲":
      emojiDisplay = <i className="flag comoros"></i>;
      break;
    case "🇰🇳":
      emojiDisplay = <i className="flag saint kitts and nevis"></i>;
      break;
    case "🇰🇵":
      emojiDisplay = <i className="flag north korea"></i>;
      break;
    case "🇰🇷":
      emojiDisplay = <i className="flag south korea"></i>;
      break;
    case "🇰🇼":
      emojiDisplay = <i className="flag kuwait"></i>;
      break;
    case "🇰🇾":
      emojiDisplay = <i className="flag cayman islands"></i>;
      break;
    case "🇰🇿":
      emojiDisplay = <i className="flag kazakhstan"></i>;
      break;
    case "🇱🇦":
      emojiDisplay = <i className="flag laos"></i>;
      break;
    case "🇱🇧":
      emojiDisplay = <i className="flag lebanon"></i>;
      break;
    case "🇱🇨":
      emojiDisplay = <i className="flag saint lucia"></i>;
      break;
    case "🇱🇮":
      emojiDisplay = <i className="flag liechtenstein"></i>;
      break;
    case "🇱🇰":
      emojiDisplay = <i className="flag sri lanka"></i>;
      break;
    case "🇱🇷":
      emojiDisplay = <i className="flag liberia"></i>;
      break;
    case "🇱🇸":
      emojiDisplay = <i className="flag lesotho"></i>;
      break;
    case "🇱🇹":
      emojiDisplay = <i className="flag lithuania"></i>;
      break;
    case "🇱🇺":
      emojiDisplay = <i className="flag luxembourg"></i>;
      break;
    case "🇱🇻":
      emojiDisplay = <i className="flag latvia"></i>;
      break;
    case "🇱🇾":
      emojiDisplay = <i className="flag libya"></i>;
      break;
    case "🇲🇦":
      emojiDisplay = <i className="flag morocco"></i>;
      break;
    case "🇲🇨":
      emojiDisplay = <i className="flag monaco"></i>;
      break;
    case "🇲🇩":
      emojiDisplay = <i className="flag moldova"></i>;
      break;
    case "🇲🇪":
      emojiDisplay = <i className="flag montenegro"></i>;
      break;
    case "🇲🇬":
      emojiDisplay = <i className="flag madagascar"></i>;
      break;
    case "🇲🇭":
      emojiDisplay = <i className="flag marshall islands"></i>;
      break;
    case "🇲🇰":
      emojiDisplay = <i className="flag macedonia"></i>;
      break;
    case "🇲🇱":
      emojiDisplay = <i className="flag mali"></i>;
      break;
    case "🇲🇲":
      emojiDisplay = <i className="flag myanmar"></i>;
      break;
    case "🇲🇳":
      emojiDisplay = <i className="flag mongolia"></i>;
      break;
    case "🇲🇴":
      emojiDisplay = <i className="flag macau"></i>;
      break;
    case "🇲🇵":
      emojiDisplay = <i className="flag northern mariana islands"></i>;
      break;
    case "🇲🇶":
      emojiDisplay = <i className="flag martinique"></i>;
      break;
    case "🇲🇷":
      emojiDisplay = <i className="flag mauritania"></i>;
      break;
    case "🇲🇸":
      emojiDisplay = <i className="flag montserrat"></i>;
      break;
    case "🇲🇹":
      emojiDisplay = <i className="flag malta"></i>;
      break;
    case "🇲🇺":
      emojiDisplay = <i className="flag mauritius"></i>;
      break;
    case "🇲🇻":
      emojiDisplay = <i className="flag maldives"></i>;
      break;
    case "🇲🇼":
      emojiDisplay = <i className="flag malawi"></i>;
      break;
    case "🇲🇽":
      emojiDisplay = <i className="flag mexico"></i>;
      break;
    case "🇲🇾":
      emojiDisplay = <i className="flag malaysia"></i>;
      break;
    case "🇲🇿":
      emojiDisplay = <i className="flag mozambique"></i>;
      break;
    case "🇳🇦":
      emojiDisplay = <i className="flag namibia"></i>;
      break;
    case "🇳🇨":
      emojiDisplay = <i className="flag new caledonia"></i>;
      break;
    case "🇳🇪":
      emojiDisplay = <i className="flag niger"></i>;
      break;
    case "🇳🇫":
      emojiDisplay = <i className="flag norfolk island"></i>;
      break;
    case "🇳🇬":
      emojiDisplay = <i className="flag nigeria"></i>;
      break;
    case "🇳🇮":
      emojiDisplay = <i className="flag nicaragua"></i>;
      break;
    case "🇳🇱":
      emojiDisplay = <i className="flag netherlands"></i>;
      break;
    case "🇳🇴":
      emojiDisplay = <i className="flag norway"></i>;
      break;
    case "🇳🇵":
      emojiDisplay = <i className="flag nepal"></i>;
      break;
    case "🇳🇷":
      emojiDisplay = <i className="flag nauru"></i>;
      break;
    case "🇳🇺":
      emojiDisplay = <i className="flag niue"></i>;
      break;
    case "🇳🇿":
      emojiDisplay = <i className="flag new zealand"></i>;
      break;
    case "🇴🇲":
      emojiDisplay = <i className="flag oman"></i>;
      break;
    case "🇵🇦":
      emojiDisplay = <i className="flag panama"></i>;
      break;
    case "🇵🇪":
      emojiDisplay = <i className="flag peru"></i>;
      break;
    case "🇵🇫":
      emojiDisplay = <i className="flag french polynesia"></i>;
      break;
    case "🇵🇬":
      emojiDisplay = <i className="flag new guinea"></i>;
      break;
    case "🇵🇭":
      emojiDisplay = <i className="flag philippines"></i>;
      break;
    case "🇵🇰":
      emojiDisplay = <i className="flag pakistan"></i>;
      break;
    case "🇵🇱":
      emojiDisplay = <i className="flag poland"></i>;
      break;
    case "🇵🇲":
      emojiDisplay = <i className="flag saint pierre"></i>;
      break;
    case "🇵🇳":
      emojiDisplay = <i className="flag pitcairn islands"></i>;
      break;
    case "🇵🇷":
      emojiDisplay = <i className="flag puerto rico"></i>;
      break;
    case "🇵🇸":
      emojiDisplay = <i className="flag palestine"></i>;
      break;
    case "🇵🇹":
      emojiDisplay = <i className="flag portugal"></i>;
      break;
    case "🇵🇼":
      emojiDisplay = <i className="flag palau"></i>;
      break;
    case "🇵🇾":
      emojiDisplay = <i className="flag paraguay"></i>;
      break;
    case "🇶🇦":
      emojiDisplay = <i className="flag qatar"></i>;
      break;
    case "🇷🇪":
      emojiDisplay = <i className="flag reunion"></i>;
      break;
    case "🇷🇴":
      emojiDisplay = <i className="flag romania"></i>;
      break;
    case "🇷🇸":
      emojiDisplay = <i className="flag serbia"></i>;
      break;
    case "🇷🇺":
      emojiDisplay = <i className="flag russia"></i>;
      break;
    case "🇷🇼":
      emojiDisplay = <i className="flag rwanda"></i>;
      break;
    case "🇸🇦":
      emojiDisplay = <i className="flag saudi arabia"></i>;
      break;
    case "🇸🇧":
      emojiDisplay = <i className="flag solomon islands"></i>;
      break;
    case "🇸🇨":
      emojiDisplay = <i className="flag seychelles"></i>;
      break;
    case "🇸🇩":
      emojiDisplay = <i className="flag sudan"></i>;
      break;
    case "🇸🇪":
      emojiDisplay = <i className="flag sweden"></i>;
      break;
    case "🇸🇬":
      emojiDisplay = <i className="flag singapore"></i>;
      break;
    case "🇸🇭":
      emojiDisplay = <i className="flag saint helena"></i>;
      break;
    case "🇸🇮":
      emojiDisplay = <i className="flag slovenia"></i>;
      break;
    case "🇸🇯":
      emojiDisplay = <i className="flag svalbard"></i>;
      break;
    case "🇸🇰":
      emojiDisplay = <i className="flag slovakia"></i>;
      break;
    case "🇸🇱":
      emojiDisplay = <i className="flag sierra leone"></i>;
      break;
    case "🇸🇲":
      emojiDisplay = <i className="flag san marino"></i>;
      break;
    case "🇸🇳":
      emojiDisplay = <i className="flag senegal"></i>;
      break;
    case "🇸🇴":
      emojiDisplay = <i className="flag somalia"></i>;
      break;
    case "🇸🇷":
      emojiDisplay = <i className="flag suriname"></i>;
      break;
    case "🇸🇹":
      emojiDisplay = <i className="flag sao tome"></i>;
      break;
    case "🇸🇻":
      emojiDisplay = <i className="flag el salvador"></i>;
      break;
    case "🇸🇾":
      emojiDisplay = <i className="flag syria"></i>;
      break;
    case "🇸🇿":
      emojiDisplay = <i className="flag swaziland"></i>;
      break;
    case "🇹🇨":
      emojiDisplay = <i className="flag caicos islands"></i>;
      break;
    case "🇹🇩":
      emojiDisplay = <i className="flag chad"></i>;
      break;
    case "🇹🇫":
      emojiDisplay = <i className="flag french territories"></i>;
      break;
    case "🇹🇬":
      emojiDisplay = <i className="flag togo"></i>;
      break;
    case "🇹🇭":
      emojiDisplay = <i className="flag thailand"></i>;
      break;
    case "🇹🇯":
      emojiDisplay = <i className="flag tajikistan"></i>;
      break;
    case "🇹🇰":
      emojiDisplay = <i className="flag tokelau"></i>;
      break;
    case "🇹🇱":
      emojiDisplay = <i className="flag timorleste"></i>;
      break;
    case "🇹🇲":
      emojiDisplay = <i className="flag turkmenistan"></i>;
      break;
    case "🇹🇳":
      emojiDisplay = <i className="flag tunisia"></i>;
      break;
    case "🇹🇴":
      emojiDisplay = <i className="flag tonga"></i>;
      break;
    case "🇹🇷":
      emojiDisplay = <i className="flag turkey"></i>;
      break;
    case "🇹🇹":
      emojiDisplay = <i className="flag trinidad"></i>;
      break;
    case "🇹🇻":
      emojiDisplay = <i className="flag tuvalu"></i>;
      break;
    case "🇹🇼":
      emojiDisplay = <i className="flag taiwan"></i>;
      break;
    case "🇹🇿":
      emojiDisplay = <i className="flag tanzania"></i>;
      break;
    case "🇺🇦":
      emojiDisplay = <i className="flag ukraine"></i>;
      break;
    case "🇺🇬":
      emojiDisplay = <i className="flag uganda"></i>;
      break;
    case "🇺🇲":
      emojiDisplay = <i className="flag us minor islands"></i>;
      break;
    case "🇺🇸":
      emojiDisplay = <i className="flag united states"></i>;
      break;
    case "🇺🇾":
      emojiDisplay = <i className="flag uruguay"></i>;
      break;
    case "🇺🇿":
      emojiDisplay = <i className="flag uzbekistan"></i>;
      break;
    case "🇻🇦":
      emojiDisplay = <i className="flag vatican city"></i>;
      break;
    case "🇻🇨":
      emojiDisplay = <i className="flag saint vincent"></i>;
      break;
    case "🇻🇪":
      emojiDisplay = <i className="flag venezuela"></i>;
      break;
    case "🇻🇬":
      emojiDisplay = <i className="flag british virgin islands"></i>;
      break;
    case "🇻🇮":
      emojiDisplay = <i className="flag us virgin islands"></i>;
      break;
    case "🇻🇳":
      emojiDisplay = <i className="flag vietnam"></i>;
      break;
    case "🇻🇺":
      emojiDisplay = <i className="flag vanuatu"></i>;
      break;
    case "🇼🇫":
      emojiDisplay = <i className="flag wallis and futuna"></i>;
      break;
    case "🇼🇸":
      emojiDisplay = <i className="flag samoa"></i>;
      break;
    case "🇾🇪":
      emojiDisplay = <i className="flag yemen"></i>;
      break;
    case "🇾🇹":
      emojiDisplay = <i className="flag mayotte"></i>;
      break;
    case "🇿🇦":
      emojiDisplay = <i className="flag south africa"></i>;
      break;
    case "🇿🇲":
      emojiDisplay = <i className="flag zambia"></i>;
      break;
    case "🇿🇼":
      emojiDisplay = <i className="flag zimbabwe"></i>;
      break;
    default:
      emojiDisplay = emoji || "🎨";
      break;
  }
  return emojiDisplay;
};

export default displayEmoji;
