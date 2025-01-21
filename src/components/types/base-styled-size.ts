// packages
import React from 'react';
import styled from '@emotion/styled';

export interface BaseStyledSizeProps {
	w?: string; minW?: string; maxW?: string; // width
	h?: string; minH?: string; maxH?: string; // height
	fontSize?: string; // fonts
}

/*export const BaseStyledSize = styled.div<{ props: BaseStyledSizeProps }>`
	width: ${({ props }) => props.w && props.w};
	min-width: ${({ props }) => props.minW && props.minW};
	max-width: ${({ props }) => props.maxW && props.maxW};
	height: ${({ props }) => props.h && props.h};
	min-height: ${({ props }) => props.minH && props.minH};
	max-height: ${({ props }) => props.maxH && props.maxH};
	font-size: ${({ props }) => props.fontSize && props.fontSize};
`;*/