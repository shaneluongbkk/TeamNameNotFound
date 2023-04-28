import React from 'react';

type BasicButtonComponentProps = {
  title: string;
  onClick?: () => void;
  //backgroundColor: string;
  //color: string;
};

function BasicButtonComponent(props: BasicButtonComponentProps) {

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <button className="btn btn-light" onClick={handleClick}>
      {props.title}</button>
  );
}

export default BasicButtonComponent;
