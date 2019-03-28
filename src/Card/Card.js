import React from 'react';

const card = (props) => {
  return (
    <div className="Card">
      <p onClick={props.click}>{props.title}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.title}/>
      <hr/>
    </div>
  )
};

export default card;
