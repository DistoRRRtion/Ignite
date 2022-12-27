import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
import starFull from "../img/star-full.png";
import starEmpty from "../img/star-empty.png";
import { getPlatform } from "./GetIconPlatform";
import { useLocation } from "react-router-dom";

const GameDetail = ({ pathId }) => {
  //🔥 data
  const { screen, game, isLoading } = useSelector((state) => state.detail);

  const { pathname } = useLocation();

  const scrollBody = () => {
    if (pathname === "/") {
      document.body.style.overflow = "auto";
    }
  };
  scrollBody();

  //🔥 exit detail
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    const element = e.target;

    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
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
                <GameName layoutId={`title ${pathId}`}>{game.name}</GameName>
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
  @media (max-width: 1500px) {
    padding: 2rem 2rem;
  }
  @media (max-width: 1200px) {
    width: 80%;
    left: 10%;
    h3 {
      font-size: 1.5rem;
      padding: 0rem 0rem 1rem 0rem;
    }
    div {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1500px) {
    display: block;
  }
`;

const GameName = styled(motion.h3)`
  font-size: 2rem;
  max-width: 100%;
  margin-right: 10rem;
`;

const Rating = styled(motion.div)`
  img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline;
  }
  @media (max-width: 1200px) {
    p {
      font-size: 1rem;
    }
    img {
      width: 1rem;
      height: 1rem;
    }
  }
`;

const Info = styled(motion.div)`
  text-align: center;
  @media (max-width: 1500px) {
    text-align: left;
  }
  @media (max-width: 1200px) {
    h3 {
      font-size: 1rem;
    }
  }
`;

const Platforms = styled(motion.div)`
  display: flex;
  img {
    margin-right: 1rem;
  }
  @media (max-width: 1500px) {
    max-height: 3rem;
    max-width: 3rem;
  }
  @media (max-width: 1200px) {
    max-height: 2rem;
    max-width: 2rem;
  }
  @media (max-width: 700px) {
    max-height: 1.3rem;
    max-width: 1.3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
  @media (max-width: 1200px) {
    margin-top: 2rem;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
  @media (max-width: 1000px) {
    margin: 3rem 0rem;
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 700px) {
    p {
      font-size: 0.7rem;
    }
  }
`;

export default GameDetail;
