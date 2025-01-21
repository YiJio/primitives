/*// packages
import React from 'react';
import styled from '@emotion/styled';
// own
import { BaseProps, BaseStyle, BaseStyleProps } from '../bases/base';
import { Utils } from '../../utils/Utils';

const FLEX_ENUMS = [
	{ key: 'display', values: ['flex', 'inline-flex'] },
	{ key: 'direction', values: ['row', 'column', 'row-reverse', 'column-reverse'] },
	{ key: 'align', values: ['start', 'center', 'end', 'baseline', 'stretch'] },
	{ key: 'justify', values: ['start', 'center', 'end', 'between', 'around', 'evenly', 'stretch'] },
	{ key: 'wrap', values: ['nowrap', 'wrap', 'wrap-reverse'] },
];

export interface FlexStyleProps extends BaseStyleProps {
	display?: string; direction?: string;
	align?: string; justify?: string; wrap?: string;
	gap?: string; colGap?: string; rowGap?: string;
	basis?: string; grow?: string; shrink?: string;
}

const validateEnums = (field: string, value: string): boolean => {
	const item = Utils.getFromIndex(FLEX_ENUMS, 'key', field);
	return item.values.includes(value);
}

const FlexStyle = styled(BaseStyle) <{ props: FlexStyleProps }>`
	display: ${({ props }) => (validateEnums('display', props.display) ? props.display : 'flex')};
	flex-direction: ${({ props }) => (validateEnums('direction', props.direction) && props.direction)};
	align-items: ${({ props }) => (validateEnums('align', props.align) && props.align)};
	justify-content: ${({ props }) => (validateEnums('justify', props.justify) && props.justify)};
	flex-wrap: ${({ props }) => (validateEnums('wrap', props.wrap) && props.wrap)};
	gap: ${({ props }) => props.gap && props.gap};
	column-gap: ${({ props }) => props.colGap && props.colGap};
	row-gap: ${({ props }) => props.rowGap && props.rowGap};
	flex-grow: ${({ props }) => props.grow && props.grow};
	flex-shrink: ${({ props }) => props.shrink && props.shrink};
`;

export interface FlexProps extends FlexStyleProps, BaseProps { }
export const Flex = (props: FlexProps) => {
	return (
		<FlexStyle as={props.as || 'div'} className={props.className} props={props}>
			{props.children}
		</FlexStyle>
	);
}

Flex.displayName = 'Flex';*/