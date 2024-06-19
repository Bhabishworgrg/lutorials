import React from 'react';

const Image = ({ name }) => {
  return <img src={`${process.env.PUBLIC_URL}/assets/images/${ name }`} />;
};

export default Image;