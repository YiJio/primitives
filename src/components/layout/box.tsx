// packages
import React from 'react';
import styled from '@emotion/styled';
// own
import { useTheme } from '../../theme';
import { BaseProps } from './base';
import { BaseAppearanceStyle, BaseAppearanceStyleProps } from './base-appearance';

export interface BoxStyleProps extends BaseAppearanceStyleProps {}
export const BoxStyle = styled(BaseAppearanceStyle)<{ /*theme: Theme;*/ props: BoxStyleProps }>``;

export interface BoxProps extends BoxStyleProps, BaseProps {}
export const Box = (props: BoxProps) => {
	const { theme } = useTheme();

	return (
		<BoxStyle as={props.as || 'div'} className={props.className} props={props}>
			{props.children}
		</BoxStyle>
	);
}

Box.displayName = 'Box';