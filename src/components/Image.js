import React from 'react';

const Image = ({ name }) => {
  return <p><img src={`${process.env.PUBLIC_URL}/assets/images/${ name }`} /></p>;
};

export default Image;