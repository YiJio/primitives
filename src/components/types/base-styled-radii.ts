// packages
import React from 'react';
import styled from '@emotion/styled';

export interface BaseStyledRadiiProps {
	round?: string; roundTop?: string; roundBottom?: string; roundLeft?: string; roundRight?: string; // regular border radius
	roundTopLeft?: string; roundTopRight?: string; roundBottomLeft?: string; roundBottomRight?: string; // specific border radius
}

/*export const BaseStyledRadii = styled.div<{ props: BaseStyledRadiiProps }>`
	border-radius: ${({ props }) => props.round === 'full' ? '50%' : props.round === 'none' ? '0' : props.round};
	${({ props }) => props.roundTop && `border-top-left-radius: ${props.roundTop}; border-top-right-radius: ${props.roundTop}`};
	${({ props }) => props.roundBottom && `border-bottom-left-radius: ${props.roundBottom}; border-bottom-right-radius: ${props.roundBottom}`};
	${({ props }) => props.roundLeft && `border-top-left-radius: ${props.roundLeft}; border-bottom-left-radius: ${props.roundLeft}`};
	${({ props }) => props.roundRight && `border-top-right-radius: ${props.roundRight}; border-bottom-right-radius: ${props.roundRight}`};
`;*/