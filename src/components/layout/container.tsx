// packages
import React from 'react';
import { css } from '@emotion/react';
// types
import { BaseProps } from '../types';

export interface ContainerProps extends BaseProps {
	// user props
	maxW?: string;
}

export const Container = ({ className, maxW, ...props }: ContainerProps) => {

	const container = css`
		position:relative; padding:8px; margin:auto; width:100%; max-width:${maxW || '100%'};
	`;

	return (
		<div className={`l-container${className ? ` ${className}` : ''}`} css={container}>
			{props.children}
		</div>
	);
}

Container.displayName = 'Container';