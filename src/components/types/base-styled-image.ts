// packages
import React from 'react';
import styled from '@emotion/styled';

export interface BaseStyledImageProps {
	fit?: string; aspectRatio?: string;
}

/*export const BaseStyledImage = styled(BaseStyledSize)<{ props: BaseStyledImageProps }>`
	object-fit: ${({ props }) => props.fit && props.fit};
	aspect-ratio: ${({ props }) => props.aspectRatio && props.aspectRatio};
`;*/