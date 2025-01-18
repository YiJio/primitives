// packages
import React from 'react';
import styled from '@emotion/styled';
// own
import { BaseProps, BaseStyle } from './base';

// extends base
// base props used:
// 			display: flex
// props:
// 			direction
// 			align
// 			justify
// 			wrap
// 			gap
// 			gapX
// 			gapY
// 			basis
// 			grow
// 			shrink


interface FlexStyleProps extends BaseProps {
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

const FlexStyle = styled(BaseStyle)<{ /*theme: Theme;*/ props: FlexStyleProps }>`
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


export interface FlexProps extends FlexStyleProps {
	
}

export const Flex = (props: FlexProps) => {
	return (
		<FlexStyle props={props}>{props.children}</FlexStyle>
	);
}

Flex.displayName = 'Flex';