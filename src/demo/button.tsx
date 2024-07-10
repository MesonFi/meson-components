import React, { useState } from 'react';
import { Button } from 'meson-components';

const Component = () => {
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');
  return (
    <>
      <div style={{ padding: 64 }}>
        <Button style={{ marginRight: 16 }} onClick={() => setDirection('ltr')}>
          ltr
        </Button>
        <Button onClick={() => setDirection('rtl')}> rtl </Button>
      </div>
      <div style={{ padding: 64, fontSize: 24, direction, paddingTop: 0 }}>
        <p>主按钮：</p>
        <Button.MainButton>Connect Your Wallet</Button.MainButton>
        <hr />
        <p>主按钮宽度占满：</p>
        <Button.MainButton block>Connect Your Wallet</Button.MainButton>
        <hr />
        <p>主按钮禁用状态：</p>
        <Button.MainButton disabled>Connect Your Wallet</Button.MainButton>
        <hr />
        <p>按钮：</p>
        <Button>Connect Your Wallet</Button>
        <hr />
        <p>带icon的按钮：</p>
        <Button
          icon={
            <img
              src='https://meson.fi/_next/static/media/bnb.3a67f55c.png'
              style={{
                width: 24,
                height: 24,
              }}
            />
          }
        >
          Connect Your Wallet
        </Button>
      </div>
    </>
  );
};

export default Component;
