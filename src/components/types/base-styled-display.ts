// packages
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BaseProps } from './base';

export interface BaseStyledDisplayProps extends BaseProps {
	display?: string; // display
}

/*export const BaseStyledDisplay = styled.div<{ props: BaseStyledDisplayProps }>`
	display: ${({ props }) => props.display && props.display};
`;

export const bds = (props: BaseStyledDisplayProps) => css`
	display: ${props.display && props.display};
`;*/