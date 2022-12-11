import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, []);

  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
