import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularGamesData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upcomming: upcomingGamesData.data.results,
    },
  });
};
