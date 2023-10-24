import React from 'react';
import {
  LogoIcon,
  StatsIcon,
} from '../Icons';
import styles from './icon.css';
import classNames from 'classnames';

const LIST = {
  logo: LogoIcon,
  stats: StatsIcon,
};

export enum EIcon {
  logo = 'logo',
  stats = 'stats'
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