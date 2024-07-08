import React from 'react';
import ReactDom from 'react-dom/client';
import ButtonDemo from './demo/button';
import './index.less';

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);
const Component = () => {
  return (
    <div>
      <ButtonDemo />
    </div>
  );
};

root.render(<Component />);
