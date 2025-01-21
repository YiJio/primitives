// packages
import React from 'react';
import { css } from '@emotion/react';
// types
import { BaseProps } from '../types';

export interface DividerProps extends BaseProps {
	// user props
	textClassName?: string;
	m?: string;
	content?: string;
	direction?: string;
}

export const Divider = ({ className, textClassName, m, content, direction = 'horizontal' }: DividerProps) => {

	const isVertical = direction === 'vertical';

	const divider = css`
		background:${content && !isVertical ? 'transparent' : '#e5e5e5'}; margin:${m ? m : isVertical ? '0 12px' : '24px 0'}; width:${isVertical ? '1px' : '100%'}; height:${isVertical ? '100%' : '1px'}; min-height:${isVertical && '1em'}; display:${isVertical ? 'inline-block' : content ? 'flex' : ''}; vertical-align:${isVertical && 'middle'};
		${content && !isVertical && `flex-direction:row; align-items:center;`}
		${content && !isVertical && `&:before, &:after { content:''; flex:1 1 auto; border-top:1px solid var(--color-gray-2); border-top:1px solid #e5e5e5; }`}
	`;
	const text = css`flex:0 0 auto; padding:0 12px;`;

	return (<>
		{direction === 'vertical'
			? <div className={`l-divider l-divider--vertical${className ? ` ${className}` : ''}`} css={divider} />
			: content
				? <div className={`l-divider l-divider--horizontal l-divider--with-text${className ? ` ${className}` : ''}`} css={divider}>
					<span className={`l-divider__text${textClassName ? ` ${textClassName}` : ''}`} css={text}>{content}</span>
				</div>
				: <div className={`l-divider l-divider--horizontal${className ? ` ${className}` : ''}`} css={divider} />}
	</>);
}

Divider.displayName = 'Divider';