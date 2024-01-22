import * as React from 'react';
import { IIconProps } from '../Icon/Icon';

export function MenuIcon({ size }: IIconProps) {
    return (
        <svg
            width={size || '26'}
            height={size || '6'}
            viewBox="0 0 26 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle id="Ellipse 6" cx="3" cy="3" r="3" fill="#C4C4C4" />
            <circle id="Ellipse 7" cx="13" cy="3" r="3" fill="#C4C4C4" />
            <circle id="Ellipse 8" cx="23" cy="3" r="3" fill="#C4C4C4" />
        </svg>
    )
}