import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
// images platform
import playstaion from "../img/playstation.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import steam from "../img/steam.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
// images star
import starFull from "../img/star-full.png";
import starEmpty from "../img/star-empty.png";

const GameDetail = ({ pathId }) => {
  //🔥 data
  const { screen, game, isLoading } = useSelector((state) => state.detail);

  //🔥 exit detail
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    const element = e.target;

    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  //🔥 get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstaion;
      case "Xbox One":
        return xbox;
      case "Nintendo Switch":
        return nintendo;
      case "PC":
        return steam;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //🔥 get star images
  const getStars = () => {
    const rating = Math.floor(game.rating);
    const star = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(<img alt="star" src={starFull} key={i}></img>);
      } else {
        star.push(<img alt="star" src={starEmpty} key={i}></img>);
      }
    }

    return star;
  };
  return (
    <>
      {!isLoading && (
        <CardShadow onClick={exitDetailHandler} className="shadow">
          <Detail layoutId={pathId}>
            <Stats>
              <Rating>
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </Rating>
              <Info>
                <h3>Platforms :</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
              {/* <motion.img
                layoutId={`image ${pathId}`}
                src={game.background_image}
                alt={game.name}
              /> */}
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  alt={game.name}
                  key={screen.id}
                />
                // <img
                //   // src={screen.image}
                //   src={screen.image}
                //   alt={game.name}
                //   key={screen.id}
                // />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 70%;
  border-radius: 1rem;
  padding: 2rem 7rem;
  background: white;
  position: absolute;
  left: 15%;
  color: black;
  margin-top: 2rem;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Rating = styled(motion.div)`
  img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
  h3 {
    padding: 1rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
