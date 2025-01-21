// packages
import React, { MouseEvent, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
// types
import { BaseProps } from '../../types';
import { BaseInteractiveProps } from '../../bases/base-interactive';
import { BadgeProps } from '../badge';
import { Ripple } from '../../bases/ripple';

export interface IconButtonProps extends BaseInteractiveProps, BaseProps {
	// user props
	type?: string;
	icon?: ReactNode;
	iconOn?: ReactNode;
	iconOff?: ReactNode;
	badge?: ReactElement<BadgeProps>;
	bgColor?: string;
	textColor?: string;
	round?: string;
	hasLabel?: boolean;
	showRippleEffect?: boolean;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton = ({ label, type, hasLabel, icon, iconOn, iconOff, size = 'M', colorScheme = 'green', bgColor, textColor = 'white', round = '8px', isDisabled, showRippleEffect, onClick, ...props }: IconButtonProps) => {
	const [isOn, setOn] = useState(false);

	const iconButton = css`
		border-radius:${round === 'none' ? '0px' : round === 'full' ? '9999px' : round};
		color:${textColor}; background:var(--color-${colorScheme}-6);
	`;

	const handleClick = (e: any) => {
		if (type === 'action') {
			onClick && onClick(e);
		} else if (type === 'toggle') {
			setOn(!isOn);
			onClick && onClick(e);
		}
	}

	return (
		<button className={`c-icon-button ${type} size-${size.toLowerCase()}`} disabled={isDisabled} onClick={handleClick} css={iconButton}>
			{showRippleEffect && <Ripple color={`var(--color-black-a10)`} duration={1000} size={0.75} />}
			{type === 'action' ? <div className='c-icon-button__icon'>
				{icon}
			</div> : <div className='c-icon-button__icon'>
				{isOn ? iconOn : iconOff}
			</div>}
			{hasLabel && label}
		</button>
	);
}