import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// style and animation
import styled from "styled-components";
import { fadeIn } from "../animation.js";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
// components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
  // get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  // fetch games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcomming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <LayoutGroup type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>

        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}

        <h2>Upcoming Games</h2>
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
        <h2>Populaar Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </LayoutGroup>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 10rem;
  margin-bottom: 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  @media (max-width: 1200px) {
    h2 {
      text-align: center;
      padding: 4rem 0rem 2rem 0rem;
    }
  }
  @media (max-width: 700px) {
    padding: 0rem 5rem;
    h2 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 560px) {
    padding: 0rem 1rem;
    h2 {
      font-size: 2rem;
      padding: 3rem 0rem 2rem 0rem;
    }
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media (max-width: 430px) {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    grid-row-gap: 2rem;
  }
`;

export default Home;
