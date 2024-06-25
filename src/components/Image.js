import React, { useEffect, useRef, useState } from 'react';

const Image = ({ name }) => {
  const imgRef = useRef(null);
  const [newWidth, setNewWidth] = useState(null);

  useEffect(() => {
    const handleImageLoad = () => {
      const originalWidth = imgRef.current.naturalWidth;
      const newWidth = 0.7 * originalWidth;
      setNewWidth(newWidth);
    };

    const imgElement = imgRef.current;

    if (imgElement.complete) {
      handleImageLoad();
    } else {
      imgElement.addEventListener('load', handleImageLoad);
      return () => imgElement.removeEventListener('load', handleImageLoad);
    }
  }, []);

  return (
    <div style={{ textAlign: 'center' }} className='pb-5'>
      <img ref={ imgRef }
      src={ `${process.env.PUBLIC_URL}/assets/images/${name}` }
      style={{ width: newWidth ? `${newWidth}px` : 'auto', maxWidth: '100%' }}
      />
    </div>
  );
};

export default Image;