import React from 'react';
import {
  LogoIcon,
  StatsIcon,
  PlusIcon,
} from '../Icons';
import styles from './icon.css';
import classNames from 'classnames';

const LIST = {
  logo: LogoIcon,
  stats: StatsIcon,
  plus: PlusIcon,
};

export enum EIcon {
  logo = 'logo',
  stats = 'stats',
  plus = 'plus',
}

interface IIconsProps {
  name: EIcon;
  size?: number;
}

export interface IIconProps {
  size?: number;
}

export function Icons({ name, size }: IIconsProps) {
  const classes = classNames({ [styles[`size${size}`]]: size });
  const IconComponent = LIST[name];
  return <IconComponent size={size} />;
}