// packages
import React from 'react';
import styled from '@emotion/styled';
// own
import { BaseProps, BaseStyle } from './base';

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

interface BreadcrumbItemProps {
	className?: string;
	isLastFromParent?: boolean;
	link?: string;
	isExternalLink?: boolean;
	children: React.ReactNode;
}

const GridItem = ({ className, isLastFromParent, link, isExternalLink = false, children }: BreadcrumbItemProps) => {
	return (
		<li className={`c-breadcrumb__item${className ? ` ${className}` : ''}`}>
			{link && !isLastFromParent ? <>
				{isExternalLink ? <a href={link} target='_blank'>{children}</a> : <Link to={link}>{children}</Link>}
			</> : <span>{children}</span>}
		</li>
	);
}

/* direct children */
// Grid.Item (not mandatory)
// props:
//			colSpan && !rowSpan: -> grid-column: span ? / span ?
// 			rowSpan && !colSpan: -> grid-row: span ? / span ?
//			^ both -> grid-area: span R / span C / span R / span C


interface GridStyleProps extends BaseProps {
	display?: 'flex' | 'inline-flex';
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
	justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'stretch';
	wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
	gap?: string;
	gapX?: string;
	gapY?: string;
	basis?: string;
	grow?: string;
	shrink?: string;
}

const GridStyle = styled(BaseStyle)<{ /*theme: Theme;*/ props: FlexStyleProps }>`
	display: ${({ props }) => props.display ? props.display : 'flex'};
	flex-direction: ${({ props }) => props.direction && props.direction};
	align-items: ${({ props }) => props.align && props.align};
	justify-content: ${({ props }) => props.justify && props.justify};
	flex-wrap: ${({ props }) => props.wrap && props.wrap};
	gap: ${({ props }) => props.gap && props.gap};
	column-gap: ${({ props }) => props.gapX && props.gapX};
	row-gap: ${({ props }) => props.gapY && props.gapY};
	flex-grow: ${({ props }) => props.grow && props.grow};
	flex-shrink: ${({ props }) => props.shrink && props.shrink};
`;


export interface GridProps extends GridStyleProps {
	
}

export const Grid = (props: GridProps) => {
	return (
		<GridStyle as={props.as || 'div'} className={props.className} props={props}>{props.children}</GridStyle>
	);
}

Grid.displayName = 'Grid';
Grid.Item = GridItem;