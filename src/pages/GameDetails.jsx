import React, { useEffect } from 'react';
import { Heading, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGameById } from '../state/gameSlice';


const GameDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const currentGame = useSelector((state) => state.games.currentGame);

  useEffect(() => {
    dispatch(fetchGameById(slug));
  }, [dispatch, slug]);

  return (
    <>
      <div>
        <Heading>Title: {currentGame.name_original}</Heading>
        <p>| Released on: {currentGame.released } | ESRB Rating: {currentGame.esrb_rating.name } |</p>
        <p>Details: {currentGame.description_raw}</p>
        <Image src={currentGame.background_image_additional} />
        </div>
    </>
  );
};

export default GameDetails;