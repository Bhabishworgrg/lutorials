import React from 'react';

const OutsideLink = ({ link, title }) => {
    return (
        <a className='outside-link' href={ link } target='_blank' rel='noreferrer'>
            { title }
        </a>
    )
}

export default OutsideLink;