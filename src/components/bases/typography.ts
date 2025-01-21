// packages
import React from 'react';
import styled from '@emotion/styled';
// types
import { BaseStyledTypographyProps } from '../types';

export const Typography = styled.div<{ /*theme: Theme;*/ props: BaseStyledTypographyProps }>`
	color: ${({ props }) => props.color ? props.color : 'inherit'};
	font-family: ${({ props }) => props.family ? props.family : 'sans-serif'}; font-size: ${({ props }) => props.size && props.size}; font-weight: ${({ props }) => props.weight && props.weight}; font-style: ${({ props }) => props.style && props.style}; font-variant: ${({ props }) => props.variant && props.variant}; font-kerning: ${({ props }) => props.kerning && props.kerning};
	letter-spacing: ${({ props }) => props.tracking && props.tracking}; word-spacing: ${({ props }) => props.spacing && props.spacing};
	text-decoration: ${({ props }) => props.decoration && props.decoration}; text-transform: ${({ props }) => props.casing && props.casing}; text-shadow: ${({ props }) => props.shadow && props.shadow};
	line-height: ${({ props }) => props.leading && props.leading};
`;