// packages
import React, { Children } from 'react';
import { css } from '@emotion/react';
// own

interface StackItemProps {
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

export interface StackProps {
	className?: string;
	itemClassName?: string;
	direction?: string;
	wrap?: boolean;
	gap?: string;
	colGap?: string;
	rowGap?: string;
	divider?: React.ReactNode;
	children: React.ReactNode;
}

export const Stack = ({ className, itemClassName, direction, wrap, gap, colGap, rowGap, divider, children }: StackProps) => {
	const childrenCount = Children.count(children);
	const childrenArray = Children.toArray(children);

	const stackStyles = css`
		display:flex; flex-direction:${direction === 'vertical' ? 'column' : 'row'}; flex-wrap:${wrap ? 'wrap' : ''}; gap:${gap || '8px'}; column-gap:${colGap}; row-gap:${rowGap};
	`;

	return (
		<div className={`l-stack${className ? ` ${className}` : ''}`} css={stackStyles}>
			{childrenArray.map((child, index) => {
				const isLast = index === childrenCount - 1;
				return (<>
					<StackItem key={index} classNameFromParent={itemClassName} childrenFromParent={child} />
					{!isLast && divider}
				</>);
			})}
		</div>
	);
}

Stack.displayName = 'Stack';