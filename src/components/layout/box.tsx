// packages
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// theme
import { useTheme } from '../../theme';
// types
import { BaseStyleProps } from '../types';
// bases
import { Prim } from '../bases';

export interface BoxProps extends BaseStyleProps { }

export const Box = (props: BoxProps) => {
	const { theme } = useTheme();

	return (
		<Prim as={props.as || 'div'} className={props.className} props={props}>
			{props.children}
		</Prim>
	);
}

Box.displayName = 'Box';