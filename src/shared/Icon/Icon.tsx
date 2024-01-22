import React from 'react';
import {
  LogoIcon,
  StatsIcon,
  PlusIcon,
  MenuIcon,
  EnlargeIcon,
  DecreaseIcon,
  EditIcon,
  DeleteIcon,
} from '../Icons';
import styles from './icon.css';
import classNames from 'classnames';

const LIST = {
  logo: LogoIcon,
  stats: StatsIcon,
  plus: PlusIcon,
  menu: MenuIcon,
  enlarge: EnlargeIcon,
  decrease: DecreaseIcon,
  edit: EditIcon,
  delete: DeleteIcon,
};

export enum EIcon {
  logo = 'logo',
  stats = 'stats',
  plus = 'plus',
  menu = 'menu',
  enlarge = 'enlarge',
  decrease = 'decrease',
  edit = 'edit',
  delete = 'delete',
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