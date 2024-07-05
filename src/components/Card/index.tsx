import React, { ReactNode } from 'react';
// import './index.less';
export interface ICardrops {
  children?: ReactNode;
}

const Card: React.FC<ICardrops> = (props) => {
  return <div className='meson-card'>{props.children}</div>;
};

export default Card;
