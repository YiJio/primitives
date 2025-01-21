// packages
import React from 'react';
import styled from '@emotion/styled';
// types
import { BaseStyleProps } from '../types';

export const Prim = styled.div<{ /*theme: Theme;*/ props: BaseStyleProps }>`
	display: ${({ props }) => props.display && props.display};

	padding: ${({ props }) => props.p && props.p};
	padding-top: ${({ props }) => props.pt ? props.pt : props.py ? props.py : ''};
	padding-bottom: ${({ props }) => props.pb ? props.pb : props.py ? props.py : ''};
	padding-left: ${({ props }) => props.pl ? props.pl : props.px ? props.px : ''};
	padding-right: ${({ props }) => props.pr ? props.pr : props.px ? props.px : ''};
	margin: ${({ props }) => props.m && props.m};
	margin-top: ${({ props }) => props.mt ? props.mt : props.my ? props.my : ''};
	margin-bottom: ${({ props }) => props.mb ? props.mb : props.my ? props.my : ''};
	margin-left: ${({ props }) => props.ml ? props.ml : props.mx ? props.mx : ''};
	margin-right: ${({ props }) => props.mr ? props.mr : props.mx ? props.mx : ''};

	width: ${({ props }) => props.w && props.w};
	min-width: ${({ props }) => props.minW && props.minW};
	max-width: ${({ props }) => props.maxW && props.maxW};
	height: ${({ props }) => props.h && props.h};
	min-height: ${({ props }) => props.minH && props.minH};
	max-height: ${({ props }) => props.maxH && props.maxH};
	font-size: ${({ props }) => props.fontSize && props.fontSize};

	position: ${({ props }) => props.pos && props.pos};
	top: ${({ props }) => props.top && props.top};
	right: ${({ props }) => props.right && props.right};
	bottom: ${({ props }) => props.bottom && props.bottom};
	left: ${({ props }) => props.left && props.left};

	border-radius: ${({ props }) => props.round === 'full' ? '50%' : props.round === 'none' ? '0' : props.round};
	${({ props }) => props.roundTop && `border-top-left-radius: ${props.roundTop}; border-top-right-radius: ${props.roundTop}`};
	${({ props }) => props.roundBottom && `border-bottom-left-radius: ${props.roundBottom}; border-bottom-right-radius: ${props.roundBottom}`};
	${({ props }) => props.roundLeft && `border-top-left-radius: ${props.roundLeft}; border-bottom-left-radius: ${props.roundLeft}`};
	${({ props }) => props.roundRight && `border-top-right-radius: ${props.roundRight}; border-bottom-right-radius: ${props.roundRight}`};

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

	display: ${({ props }) => props.display && props.display};
	flex-direction: ${({ props }) => props.direction && props.direction};
	align-items: ${({ props }) => props.align && props.align};
	justify-content: ${({ props }) => props.justify && props.justify};
	flex-wrap: ${({ props }) => props.wrap && props.wrap};
	gap: ${({ props }) => props.gap && props.gap};
	column-gap: ${({ props }) => props.colGap && props.colGap};
	row-gap: ${({ props }) => props.rowGap && props.rowGap};
	flex-grow: ${({ props }) => props.grow && props.grow};
	flex-shrink: ${({ props }) => props.shrink && props.shrink};

	object-fit: ${({ props }) => props.fit && props.fit};
	aspect-ratio: ${({ props }) => props.aspectRatio && props.aspectRatio};
`;