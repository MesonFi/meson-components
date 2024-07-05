import React, { ReactNode } from 'react';
export interface IButtonProps {
  children?: ReactNode;
}

const Button: React.FC<IButtonProps> = (props) => {
  return <div className='meson-button'>{props.children}</div>;
};

export default Button;
