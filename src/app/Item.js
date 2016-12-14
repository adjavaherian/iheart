import React from 'react';

export default function Item (props) {
    return (
      <div className="item">
        <div className="name">{props.name}</div>
        <div className="image"><img src={props.image} /></div>
        <div className="description">{props.description}</div>
      </div>
    );

};
