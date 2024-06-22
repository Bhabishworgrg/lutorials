import React from 'react';

const Video = ({ link }) => {
  return (
    <p>
        <iframe src={ link } 
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' 
        referrerpolicy='strict-origin-when-cross-origin' 
        allowfullscreen='true' />
    </p>
  );
};

export default Video;
