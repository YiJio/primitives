// packages
import React from 'react';
import { css } from '@emotion/react';
// own

export interface DividerProps {
	className?: string;
	textClassName?: string;
	m?: string;
	isVertical?: boolean;
	text?: string;
}

export const Divider = ({ className, textClassName, m, isVertical, text }: DividerProps) => {

	const dividerStyles = css`background:#e5e5e5;`;
	const dividerHStyles = css`height:1px; margin:${m || '24px'} 0; width:100%;`;
	const dividerVStyles = css`margin:0 ${m || '12px'}; width:1px; min-height:1em; height:100%; display:inline-block; vertical-align:middle;`;
	const dividerWithTextStyles = css`
		display:flex; flex-direction:row; align-items:center; background:transparent;
		&:before, &:after { content:''; flex:1 1 auto; border-top:1px solid var(--color-gray-2); border-top:1px solid #e5e5e5; }
	`;
	const textStyles = css`flex:0 0 auto; padding:0 12px;`;

	return (<>
		{isVertical
			? <div className={`l-divider l-divider--vertical${className ? ` ${className}` : ''}`} css={[dividerStyles, dividerVStyles]} />
			: text
				? <div className={`l-divider l-divider--horizontal l-divider--with-text${className ? ` ${className}` : ''}`} css={[dividerStyles, dividerHStyles, dividerWithTextStyles]}>
					<span className={`l-divider__text${textClassName ? ` ${textClassName}` : ''}`} css={textStyles}>{text}</span>
				</div>
				: <div className={`l-divider l-divider--horizontal${className ? ` ${className}` : ''}`} css={[dividerStyles, dividerHStyles]} />}
	</>);
}

Divider.displayName = 'Divider';