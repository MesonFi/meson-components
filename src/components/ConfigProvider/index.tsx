import React from 'react';
import {
  ConfigConsumerProps,
  ConfigContext,
  SizeType,
  DirectionType,
} from './context';

export interface ConfigProviderProps {
  direction?: DirectionType;
  getTargetContainer?: () => HTMLElement | Window;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
  children?: React.ReactNode;
}

const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  // const context = React.useContext<ConfigConsumerProps>(ConfigContext);
  return (
    <ConfigContext.Provider value={props}>
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
export { ConfigContext, DirectionType, SizeType };
