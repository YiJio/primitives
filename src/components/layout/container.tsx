// packages
import React from 'react';
import { css } from '@emotion/react';
// own

export interface ContainerProps {
	className?: string;
	maxW?: string;
	children: React.ReactNode;
}

export const Container = ({ className, maxW, children }: ContainerProps) => {

	const containerStyles = css`
		position:relative; padding:8px; margin:auto; width:100%; max-width:${maxW || '100%'};
	`;

	return (
		<div className={`l-container${className ? ` ${className}` : ''}`} css={containerStyles}>
			{children}
		</div>
	);
}

Container.displayName = 'Container';