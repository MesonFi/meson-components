import React, { CSSProperties, ReactNode, useContext, useMemo } from 'react';
import { ConfigContext, SizeType } from '../ConfigProvider';
import classnames from 'classnames';
export interface IButtonProps {
  icon?: ReactNode;
  children?: ReactNode;
  size?: SizeType;
  block?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  classNames?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => void;
}

export type IMainButtonProps = Omit<IButtonProps, 'icon'>;

const Button: React.FC<IButtonProps> & { MainButton: typeof MainButton } = (
  props
) => {
  const { children, icon } = props;
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const { onClick } = props;
    if (props.disabled) {
      return;
    }
    onClick?.(e);
  };
  const iconNode = icon ? (
    <div className='meson-button-icon'>{icon}</div>
  ) : null;

  return (
    <button
      className={classnames('meson-button', props.classNames, {
        'meson-button-block': !!props.block,
        'meson-button-disabled': !!props.disabled,
      })}
      onClick={handleClick}
    >
      {iconNode}
      {children}
    </button>
  );
};

const MainButton: React.FC<IMainButtonProps> = (props) => {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const { onClick } = props;
    if (props.disabled) {
      return;
    }
    onClick?.(e);
  };
  return (
    <button
      className={classnames('meson-main-button', props.classNames, {
        'meson-button-block': !!props.block,
        'meson-button-disabled': !!props.disabled,
      })}
      style={props.style}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};

Button.MainButton = MainButton;

export default Button;
