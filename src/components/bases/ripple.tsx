// packages
import React, { useLayoutEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';

const useDebounce = (rippleCount: number, duration: number, cleanUp: () => void) => {
	useLayoutEffect(() => {
		let bounce: any | null;
		if (rippleCount > 0) {
			clearTimeout(bounce);

			bounce = setTimeout(() => {
				cleanUp();
				clearTimeout(bounce);
			}, duration * 4);
		}
		return () => clearTimeout(bounce);
	}, [rippleCount, duration, cleanUp]);
};

interface RippleProps {
	duration?: number;
	color?: string;
	size?: number;
}

export const Ripple = ({ duration, color, size = 1 }: RippleProps) => {
	const [rippleArray, setRippleArray] = useState([]);
	const buttonRef = useRef(null);

	const rippleS = css`background-color:${color}; animation-duration:${duration}ms;`;

	useDebounce(rippleArray.length, duration, () => {
		setRippleArray([]);
	});

	const addRipple = (e: any) => {
		const rippleWrapper = e.currentTarget.getBoundingClientRect();
		const rect = buttonRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 4;
		const y = e.clientY - rect.top - rect.height / 2;
		const theSize = rippleWrapper.width > rippleWrapper.height ? rippleWrapper.width : rippleWrapper.height;
		const newRipple = { x, y, width: theSize * size, height: theSize * size };
		setRippleArray([...rippleArray, newRipple]);
	}

	return (
		<div ref={buttonRef} className='ripple__wrapper' onMouseDown={addRipple}>
			{rippleArray.length > 0 && rippleArray.map((ripple, index) => {
				return (<div key={index} className='ripple' style={{ top: ripple.y, left: ripple.x, width: ripple.width, height: ripple.height }} css={rippleS}></div>)
			})}
		</div>
	);
}