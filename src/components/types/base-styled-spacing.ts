// packages
import React from 'react';
import styled from '@emotion/styled';

export interface BaseStyledSpacingProps {
	p?: string; pt?: string; pb?: string; pl?: string; pr?: string; px?: string; py?: string; // padding
	m?: string; mt?: string; mb?: string; ml?: string; mr?: string; mx?: string; my?: string; // margin
}

/*export const BaseStyledSpacing = styled.div<{ props: BaseStyledSpacingProps }>`
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
`;*/