import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import useData from '../hooks/useData';

const GenreList = () => {

  //const {genres} = useGenres();
  const {data} = useGenres();
  return (
    <ul>

      {//genres.map(genre => <li key={genre.id}>{genre.name}</li>)
      data.map(genre => <li key={genre.id}>{genre.name}</li>)
      }
    </ul>
  )
}

export default GenreList