// packages
import React, { Children } from 'react';
import { css } from '@emotion/react';
// types
import { BaseProps, BaseStyledFlexProps } from '../types';
// bases
import { Prim } from '../bases';

interface StackItemProps {
	// parent props
	classNameFromParent?: string;
	childrenFromParent: React.ReactNode;
}

// StackItem is not mandatory child of Stack but is created to wrap the child
const StackItem = ({ classNameFromParent, childrenFromParent }: StackItemProps) => {
	
	const itemStyles = css``;

	return (
		<div className={`l-stack__item${classNameFromParent ? ` ${classNameFromParent}` : ''}`} css={itemStyles}>
			{childrenFromParent}
		</div>
	);
}

export interface StackProps extends BaseStyledFlexProps, BaseProps {
	// user props
	itemClassName?: string;
	direction?: string;
	divider?: React.ReactNode;
}

export const Stack = ({ className, itemClassName, direction, wrap = 'wrap', gap = '8px', colGap, rowGap, divider, ...props }: StackProps) => {
	const childrenCount = Children.count(props.children);
	const childrenArray = Children.toArray(props.children);

	const stackStyles = css`
		display:flex; flex-direction:${direction === 'vertical' ? 'column' : 'row'}; flex-wrap:${wrap ? 'wrap' : ''}; gap:${gap || '8px'}; column-gap:${colGap}; row-gap:${rowGap};
	`;

	return (
		<Prim className={`l-stack${className ? ` ${className}` : ''}`} props={{ display: 'flex', direction: direction === 'vertical' ? 'column' : 'row', wrap, gap, colGap, rowGap }}>
			{childrenArray.map((child, index) => {
				const isLast = index === childrenCount - 1;
				return (<React.Fragment key={index}>
					<StackItem classNameFromParent={itemClassName} childrenFromParent={child} />
					{!isLast && divider}
				</React.Fragment>);
			})}
		</Prim>
	);
}

Stack.displayName = 'Stack';