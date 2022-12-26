// const key = process.env.REACT_APP_RAWG_API;
const YOUR_API_KEY = `?key=${process.env.REACT_APP_RAWG_API}`;

// getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// base url
const base_url = "https://api.rawg.io/api/";

// Popular Games
const popular_games = `games${YOUR_API_KEY}&dates=${lastYear},${currentDate}&ordering=-metacritic&page_size=9`;
const upcoming_games = `games${YOUR_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=9`;
const newGames = `games${YOUR_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=9`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//🔥 game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}${YOUR_API_KEY}`;

//🔥 game screenshot
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots${YOUR_API_KEY}`;

//🔥 searched game
export const searchGameURL = (game_name) =>
  `${base_url}games${YOUR_API_KEY}&search=${game_name}&ordering=-rating`;
// https://api.rawg.io/api/games?key=cf9a8ce674fa497bb97efa1ab44c260f&search=doom
