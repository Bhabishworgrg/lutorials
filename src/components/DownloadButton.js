import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const DownloadButton = ({ name, link }) => {
    return(
        <a href={ link }>
            <button>
                <FontAwesomeIcon icon={ faDownload } />
                { name }
            </button>
        </a>
    );
};

export default DownloadButton;