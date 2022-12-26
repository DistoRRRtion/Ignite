// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animation.js";

// redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

// router
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ name, released, id, image }) => {
  // load detail handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden"; // delete second scroll bar
    dispatch(loadDetail(id));
  };

  const strPathId = id.toString();

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={strPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${strPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${strPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
