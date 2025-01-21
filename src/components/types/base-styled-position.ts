// packages
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface BaseStyledPositionProps {
	pos?: string; top?: string; bottom?: string; left?: string; right?: string; // position
}

/*export const BaseStyledPosition = styled.div<{ props: BaseStyledPositionProps }>`
	position: ${({ props }) => props.pos && props.pos};
	top: ${({ props }) => props.top && props.top};
	right: ${({ props }) => props.right && props.right};
	bottom: ${({ props }) => props.bottom && props.bottom};
	left: ${({ props }) => props.left && props.left};
`;

export const bps = (props: BaseStyledPositionProps) => css`
	position: ${props.pos};
	top: ${props.top};
	right: ${props.right};
	bottom: ${props.bottom};
	left: ${props.left};
`;*/