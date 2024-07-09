import React from 'react';

export type DirectionType = 'ltr' | 'rtl' | undefined;
export type SizeType = 'small' | 'middle' | 'large' | undefined;

export interface ConfigConsumerProps {
  direction?: DirectionType;
  size?: SizeType;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
  getTargetContainer?: () => HTMLElement | Window;
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({});

export const { Consumer: ConfigConsumer } = ConfigContext;
