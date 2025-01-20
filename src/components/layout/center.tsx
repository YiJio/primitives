// packages
import React from 'react';
import styled from '@emotion/styled';
// own
import { useTheme } from '../../theme';
import { BaseProps } from './base';
import { BaseAppearanceStyle, BaseAppearanceStyleProps } from './base-appearance';
import { Utils } from '../../utils/Utils';

const CENTER_ENUMS = [
	{ key: 'display', values: ['flex', 'inline-flex'] },
];

const validateEnums = (field: string, value: string): boolean => {
	const item = Utils.getFromIndex(CENTER_ENUMS, 'key', field);
	return item.values.includes(value);
}

export interface CenterStyleProps extends BaseAppearanceStyleProps {}

export const CenterStyle = styled(BaseAppearanceStyle)<{ /*theme: Theme;*/ props: CenterStyleProps }>`
	display: ${({ props }) => (validateEnums('display', props.display) ? props.display : 'flex')};
	align-items:center; justify-content:center;
`;

export interface CenterProps extends CenterStyleProps, BaseProps {}
export const Center = (props: CenterProps) => {
	const { theme } = useTheme();

	return (
		<CenterStyle as={props.as || 'div'} className={props.className} props={props}>
			{props.children}
		</CenterStyle>
	);
}

Center.displayName = 'Center';