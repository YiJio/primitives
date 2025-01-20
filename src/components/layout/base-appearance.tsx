// packages
import React from 'react';
import styled from '@emotion/styled';
// own
import { useTheme } from '../../theme';
import { BaseStyle, BaseStyleProps } from './base';

// extends BaseStyle with font, bg, border, radii options
// to-do: outline?

export interface BaseAppearanceStyleProps extends BaseStyleProps {
	fontColor?: string; // font
	bg?: string; bgColor?: string; // bg
	bd?: string; bdWidth?: string; bdStyle?: string; bdColor?: string; // border
	bdTop?: string; bdTopWidth?: string; bdTopStyle?: string; bdTopColor?: string; // border top
	bdBottom?: string; bdBottomWidth?: string; bdBottomStyle?: string; bdBottomColor?: string; // border bottom
	bdLeft?: string; bdLeftWidth?: string; bdLeftStyle?: string; bdLeftColor?: string; // border left
	bdRight?: string; bdRightWidth?: string; bdRightStyle?: string; bdRightColor?: string;	// border right
	round?: string; roundTop?: string; roundBottom?: string; roundLeft?: string; roundRight?: string; // regular border radius
	roundTopLeft?: string; roundTopRight?: string; roundBottomLeft?: string; roundBottomRight?: string; // specific border radius
}

// call a color util here to deal with theme (such as getContrastingText)
export const BaseAppearanceStyle = styled(BaseStyle)<{ /*theme: Theme;*/ props: BaseAppearanceStyleProps }>`
	color: ${({ props }) => props.fontColor && props.fontColor};
	background: ${({ props }) => props.bg && props.bg};
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
	border-radius: ${({ props }) => props.round === 'full' ? '50%' : props.round === 'none' ? '0' : props.round};
	${({ props }) => props.roundTop && `border-top-left-radius: ${props.roundTop}; border-top-right-radius: ${props.roundTop}`};
	${({ props }) => props.roundBottom && `border-bottom-left-radius: ${props.roundBottom}; border-bottom-right-radius: ${props.roundBottom}`};
	${({ props }) => props.roundLeft && `border-top-left-radius: ${props.roundLeft}; border-bottom-left-radius: ${props.roundLeft}`};
	${({ props }) => props.roundRight && `border-top-right-radius: ${props.roundRight}; border-bottom-right-radius: ${props.roundRight}`};
`;