// images platform
import playstaion from "../img/playstation.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import steam from "../img/steam.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

//🔥 get platform images
export const getPlatform = (platform) => {
  switch (platform) {
    case "NES":
      return nintendo;
    case "SNES":
      return nintendo;
    case "Game Boy":
      return nintendo;
    case "Game Boy Color":
      return nintendo;
    case "Game Boy Advance":
      return nintendo;
    case "Nintendo DS":
      return nintendo;
    case "Nintendo 3DS":
      return nintendo;
    case "Wii":
      return nintendo;
    case "Wii U":
      return nintendo;
    case "Nintendo 64":
      return nintendo;
    case "GameCube":
      return nintendo;
    case "Nintendo Switch":
      return nintendo;
    case "PlayStation 1":
      return playstaion;
    case "PlayStation 2":
      return playstaion;
    case "PSP":
      return playstaion;
    case "PlayStation 3":
      return playstaion;
    case "PS Vita":
      return playstaion;
    case "PlayStation 4":
      return playstaion;
    case "PlayStation 5":
      return playstaion;
    case "Xbox":
      return xbox;
    case "Xbox 360":
      return xbox;
    case "Xbox One":
      return xbox;
    case "Xbox Series S/X":
      return xbox;
    case "PC":
      return steam;
    case "iOS":
      return apple;
    case "macOS":
      return apple;
    case "Classic Macintosh":
      return apple;
    default:
      return gamepad;
  }
};
