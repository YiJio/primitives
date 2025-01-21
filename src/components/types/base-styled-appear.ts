// packages
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// own
import { useTheme } from '../../theme';

// extends BaseStyle with font, bg, border, radii options
// to-do: outline?

export interface BaseStyledAppearProps {
	color?: string; // text
	bg?: string; bgImage?: string; bgSize?: string; bgRepeat?: string; bgColor?: string; // bg
	bd?: string; bdWidth?: string; bdStyle?: string; bdColor?: string; // border
	bdTop?: string; bdTopWidth?: string; bdTopStyle?: string; bdTopColor?: string; // border top
	bdBottom?: string; bdBottomWidth?: string; bdBottomStyle?: string; bdBottomColor?: string; // border bottom
	bdLeft?: string; bdLeftWidth?: string; bdLeftStyle?: string; bdLeftColor?: string; // border left
	bdRight?: string; bdRightWidth?: string; bdRightStyle?: string; bdRightColor?: string;	// border right
}

// call a color util here to deal with theme (such as getContrastingText)
/*export const BaseStyledAppear = styled.div<{ props: BaseStyledAppearProps }>`
	color: ${({ props }) => props.color && props.color};
	background: ${({ props }) => props.bg && props.bg};
	background-image: ${({ props }) => props.bgImage && props.bgImage};
	background-size: ${({ props }) => props.bgSize && props.bgSize};
	background-repeat: ${({ props }) => props.bgRepeat && props.bgRepeat};
	background-color: ${({ props }) => props.bgColor && props.bgColor};
	border: ${({ props }) => props.bd && props.bd};
	border-width: ${({ props }) => props.bdWidth && props.bdWidth};
	border-style: ${({ props }) => props.bdStyle && props.bdStyle};
	border-color: ${({ props }) => props.bdColor && props.bdColor};
	border-top: ${({ props }) => props.bdTop && props.bdTop};
	border-top-width: ${({ props }) => props.bdTopWidth && props.bdTopWidth};
	border-top-style: ${({ props }) => props.bdTopStyle && props.bdTopStyle};
	border-top-color: ${({ props }) => props.bdTopColor && props.bdTopColor};
	border-bottom: ${({ props }) => props.bdBottom && props.bdBottom};
	border-bottom-width: ${({ props }) => props.bdBottomWidth && props.bdBottomWidth};
	border-bottom-style: ${({ props }) => props.bdBottomStyle && props.bdBottomStyle};
	border-bottom-color: ${({ props }) => props.bdBottomColor && props.bdBottomColor};
	border-left: ${({ props }) => props.bdLeft && props.bdLeft};
	border-left-width: ${({ props }) => props.bdLeftWidth && props.bdLeftWidth};
	border-left-style: ${({ props }) => props.bdLeftStyle && props.bdLeftStyle};
	border-left-color: ${({ props }) => props.bdLeftColor && props.bdLeftColor};
	border-right: ${({ props }) => props.bdRight && props.bdRight};
	border-right-width: ${({ props }) => props.bdRightWidth && props.bdRightWidth};
	border-right-style: ${({ props }) => props.bdRightStyle && props.bdRightStyle};
	border-right-color: ${({ props }) => props.bdRightColor && props.bdRightColor};
`;*/

/*export const bas = (props: BaseStyledAppearProps) => css`
	color: ${props.color};
	background: ${props.bg};
	background-image: ${props.bgImage};
	background-size: ${props.bgSize};
	background-repeat: ${props.bgRepeat};
	background-color: ${props.bgColor};
	border: ${props.bd};
	border-width: ${props.bdWidth};
	border-style: ${props.bdStyle};
	border-color: ${props.bdColor};
	border-top: ${props.bdTop};
	border-top-width: ${props.bdTopWidth};
	border-top-style: ${props.bdTopStyle};
	border-top-color: ${props.bdTopColor};
	border-bottom: ${props.bdBottom};
	border-bottom-width: ${props.bdBottomWidth};
	border-bottom-style: ${props.bdBottomStyle};
	border-bottom-color: ${props.bdBottomColor};
	border-left: ${props.bdLeft};
	border-left-width: ${props.bdLeftWidth};
	border-left-style: ${props.bdLeftStyle};
	border-left-color: ${props.bdLeftColor};
	border-right: ${props.bdRight};
	border-right-width: ${props.bdRightWidth};
	border-right-style: ${props.bdRightStyle};
	border-right-color: ${props.bdRightColor};
`;*/