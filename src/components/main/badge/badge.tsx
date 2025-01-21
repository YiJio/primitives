// packages
import React, { ReactNode, useState } from 'react';
import { css } from '@emotion/react';
// types
import { BaseProps } from '../../types';

export interface BadgeProps extends BaseProps {
	// user props
	position?: string;
	variant?: string;
	size?: string;
	colorScheme?: string;
	bgColor?: string;
	textColor?: string;
	hasBorder?: boolean;
	icon?: ReactNode;
	content?: any;
	maxNum?: number;
	onClick?: () => void;
}

export const Badge = ({ position = 'top-right', variant = 'dot', size = 'S', colorScheme = 'red', bgColor, textColor, hasBorder, icon, content, maxNum = 99, onClick, ...props }: BadgeProps) => {

	const theSize = parseInt(size) ? 'S' : size;
	const theValue = !parseInt(content) ? content : content < 0 ? 0 : content >= maxNum ? `${maxNum}+` : content;
	let thePosition = 'tr';
	switch(position) {
		case 'top-left': thePosition = 'tl'; break;
		case 'bottom-right': thePosition = 'br'; break;
		case 'bottom-left': thePosition = 'bl'; break;
	}

	const badge = css`
		margin:${hasBorder && '1px'}; background:${bgColor ? bgColor : `var(--color-${colorScheme}-5)`}; color:${textColor ? textColor : `var(--color-${colorScheme}-contrast)`}; outline-color:${hasBorder && `var(--color-white-a100)`};
		&.action:hover { background:var(--color-${colorScheme}-6); }
	`;

	return (
		<div className={`c-badge ${variant} size-${theSize.toLowerCase()} pos-${thePosition}`} css={badge} onClick={onClick}>
			{variant === 'number' && theValue}
			{variant === 'action' && icon}
		</div>
	);
}