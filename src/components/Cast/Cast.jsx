import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'shared/services/movie-api';

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const data = await getMovieCredits(id);
        setCredits(data.cast);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchCredits();
  }, [id]);

  const creditsList = credits?.map(({ id, name, popularity }) => (
    <li key={id}>
      <h5>{name}</h5>
      <p>popularity: {popularity}</p>
    </li>
  ));

  return <ul>{creditsList}</ul>;
};

export default Cast;
