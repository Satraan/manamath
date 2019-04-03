import React from 'react';

const ButtonBar = (props) => {
  return (
    <div className={props.classes}>
      <p>{props.present}</p>
    </div>
  )
};

export default ButtonBar;
