import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { useEffect } from "react";
// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// components
import Game from "../components/Game";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcomming } = useSelector((state) => state.games);
  console.log(upcomming);

  return (
    <GameList>
      <h2 style={{ color: "red" }}>Upcoming Games</h2>
      <Games>
        {upcomming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
