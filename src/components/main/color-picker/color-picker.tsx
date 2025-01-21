// packages
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// theme
import { useTheme } from '../../../theme';
// types
import { BaseProps, BaseStyledTypographyProps } from '../../types';
// bases
import { Typography } from '../../bases';

export interface IconProps extends BaseStyledTypographyProps, BaseProps {
	icon?: React.ReactElement;
}

export const Icon = ({ as, className, icon, size, color, ...props }: IconProps) => {
	const { theme } = useTheme();

	return (
		<Typography as={as || 'p'} className={className} props={props}>
			{props.children}
		</Typography>
	);
}

Icon.displayName = 'Icon';