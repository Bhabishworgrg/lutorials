import React, { useState } from 'react';
import { Prism } from 'react-syntax-highlighter';
import { cb } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const CodeBlock = ({ code, language }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  return (
    <div style={{ display: 'grid' }} onMouseOver={ handleMouseOver } onMouseOut={ handleMouseOut }>
      <Prism language={ language } style={ cb } >
        { code }
      </Prism>

      <div style={{ gridArea: '1/2' }}>
        { isHovering && <button className='copyButton' onClick={() => navigator.clipboard.writeText(code)} >
          <FontAwesomeIcon icon={ faCopy } />
        </button> }
      </div>
    </div>
  );
};

export default CodeBlock;
