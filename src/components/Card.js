import React from 'react';

const Card = ({ name, email, id, username }) => {
  return (
    <div className='pa2 ma2 bg-light-green br3 bw2 shadow-5 ttc serif grow dib'>
      <img
        src={`https://robohash.org/${id}?size=200x200&&set=set${(id % 4) + 1}`}
        alt={`${username}`}
      />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};
export default Card;
