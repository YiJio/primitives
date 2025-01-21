import React, { MouseEvent, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
// utils
import { ColorUtils } from '../../../utils/ColorUtils';
// types
import { BaseProps } from '../../types';
import { BadgeProps } from '../badge';
import { BaseInteractiveProps } from '../../bases/base-interactive';
// theme
import { useTheme } from '../../../theme';
import { Ripple } from '../../bases/ripple';

export interface ButtonProps extends BaseInteractiveProps, BaseProps {
	// user props
	leadingIcon?: ReactNode;
	trailingIcon?: ReactNode;
	loadingText?: string;
	badge?: ReactElement<BadgeProps>;
	w?: string;
	bgColor?: string;
	textColor?: string;
	round?: string;
	showRippleEffect?: boolean;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ label, variant = 'solid', size = 'M', leadingIcon, trailingIcon, isLoading, loadingText, isDisabled, colorScheme = 'gray', bgColor, textColor, round = 'none', w, badge, showRippleEffect = true, onClick, ...props }: ButtonProps) => {
	const [coords, setCoords] = useState<{ x?: Number; y?: number; }>({ x: -1, y: -1 });
	const [isRippling, setIsRippling] = useState(false);
	const buttonRef = useRef(null);
	const { theme } = useTheme();

	const button = css`
		width:${w}; border-radius:${round === 'none' ? '0px' : round === 'full' ? '9999px' : round};

		&.solid, &.solid:hover:disabled { color:${textColor ? textColor : bgColor ? ColorUtils.setContrastTextColor(bgColor) : `var(--color-${colorScheme}-contrast)`}; background:${bgColor ? bgColor : `var(--color-${colorScheme}-5)`}; }
		&.solid:hover { background:${bgColor ? ColorUtils.setLuminance(bgColor, 10, true) : `var(--color-${colorScheme}-6)`}; }

		&.outline, &.outline:hover:disabled { color:${textColor ? textColor : bgColor ? ColorUtils.addColor(bgColor, 1, '#000000', 0.3, true) : `var(--color-${colorScheme}-7)`}; background:transparent; border-color:${bgColor ? ColorUtils.setAlpha(bgColor, 0.5, true) : `var(--color-${colorScheme}-2)`}; }
		&.outline:hover, &.ghost:hover { background:${bgColor ? ColorUtils.setAlpha(bgColor, 0.25, true) : `var(--color-${colorScheme}-0)`}; }

		&.ghost, &.ghost:hover:disabled { color:${textColor ? textColor : bgColor ? ColorUtils.addColor(bgColor, 1, '#000000', 0.2, true) : `var(--color-${colorScheme}-7)`}; background:transparent; }

		&.soft, &.soft:hover:disabled, &.elevated, &.elevated:hover:disabled { color:${textColor ? textColor : bgColor ? ColorUtils.addColor(bgColor, 1, '#000000', 0.2, true) : `var(--color-${colorScheme}-7)`}; background:${bgColor ? ColorUtils.setAlpha(bgColor, 0.25, true) : `var(--color-${colorScheme}-0)`}; }
		&.soft:hover, &.elevated:hover { background:${bgColor ? ColorUtils.setAlpha(bgColor, 0.5, true) : `var(--color-${colorScheme}-1)`}; }

		&.elevated { box-shadow:var(--color-shadow-small); }
	`;

	const handleClick = (e: any) => {
		/*const rect = e.target.getBoundingClientRect();
		setCoords({ x: e.clientX - rect.left - rect.width / 2, y: e.clientY - rect.top - rect.height / 2});*/
		onClick && onClick(e);
	}

	/*useEffect(() => {
		if (coords.x !== -1 && coords.y !== -1) {
			setIsRippling(true);
			setTimeout(() => setIsRippling(false), 300);
		} else setIsRippling(false);
	}, [coords]);*/

	/*useEffect(() => {
		if (!isRippling) setCoords({ x: -1, y: -1 });
	}, [isRippling]);

	useEffect(() => {
    const handleRipple = (event: React.MouseEvent<HTMLDivElement>) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        setCoords({ x, y });
				setIsRippling(true);
				setTimeout(() => setIsRippling(false), 700);
      }
    };

    buttonRef.current?.addEventListener('click', handleRipple);
    return () => buttonRef.current?.removeEventListener('click', handleRipple);
  }, []);*/

	return (
		<button ref={buttonRef} className={`c-button ${variant} size-${size.toLowerCase()}`} disabled={isDisabled} onClick={handleClick} css={button}>
			{/*isRippling && <div className='ripple' style={{ top:coords.y, left:coords.x }} />*/}
			<div className='c-button__content'>
				{leadingIcon && <div className='c-button__icon'>{leadingIcon}</div>}
				{props.children ? props.children : label}
				{trailingIcon && <div className='c-button__icon'>{trailingIcon}</div>}
			</div>
			{showRippleEffect && <Ripple color={`var(--color-${variant === 'solid' ? 'black-a10' : variant === 'outline' || variant === 'ghost' ? 'white-a55' : 'white-a35'})`} duration={1000} size={0.5} />}
		</button>
	);
}