/*// packages
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// own
import { BaseProps, BaseStyle } from '../bases/base';

interface GridItemProps {
	className?: string;
	colSpan?: number;
	rowSpan?: number;
	children: React.ReactNode;
}

// GridItem is not mandatory child of Grid
const GridItem = ({ className, colSpan, rowSpan, children }: GridItemProps) => {

	const itemStyles = css`
		grid-column: ${(colSpan && !rowSpan) && `span ${colSpan} / span ${colSpan}`};
		grid-row: ${(rowSpan && !colSpan) && `span ${rowSpan} / span ${rowSpan}`};
		grid-area: ${(rowSpan && colSpan) && `span ${rowSpan} / span ${colSpan} / span ${rowSpan} / span ${colSpan}`};
	`;

	return (
		<div className={className} css={itemStyles}>
			{children}
		</div>
	);
}

interface GridStyleProps extends BaseProps {
	gap?: string; colGap?: string; rowGap?: string;
}

const GridStyle = styled(BaseStyle) <{ props: GridStyleProps }>`
	display: grid;
	grid-template-columns: 
`;


export interface GridProps extends GridStyleProps {
	className?: string;
}


// extends base
// base props used:
//			?
// props:
//			rows: 1
//			cols: 3
//			itemW: 1fr
// style props:
// 			gap: 8px
// 			gapX
// 			gapY

export const Grid = (props: GridProps) => {
	return (
		<GridStyle as={props.as || 'div'} className={props.className} props={props}>{props.children}</GridStyle>
	);
}

Grid.displayName = 'Grid';
Grid.Item = GridItem;*/