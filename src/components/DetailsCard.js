import React from "react";

const DetailsCard = ({ name, imgSrc }) => {
  return (
    <article className='details-card'>
      <header className='details-card-header'>
        <div className='avatar'>
          <img
            className='details-card-img'
            src={process.env.PUBLIC_URL + imgSrc}
            alt='details'
          />
          <svg className='half-circle' viewBox='0 0 106 57'>
            <path d='M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4'></path>
          </svg>
        </div>
      </header>
      <footer className='details-card-footer'>
        <h1 className='details-card-name'>{name}</h1>
      </footer>
    </article>
  );
};

export default DetailsCard;
