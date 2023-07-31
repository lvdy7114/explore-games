import React, { useEffect } from 'react';
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
        <h1>Title: {currentGame.name}</h1>
        <p>Released on: {currentGame.released}</p>
        <p>Details: {currentGame.description_raw}</p>
        </div>
    </>
  );
};

export default GameDetails;