// packages
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// own
import { useTheme } from '../../theme';
// utils
import { Utils } from '../../utils/Utils';
// types
import { BaseStyleProps } from '../types';
// bases
import { Prim } from '../bases';

const CENTER_ENUMS = [
	{ key: 'display', values: ['flex', 'inline-flex'] },
];

const validateEnums = (field: string, value: string): boolean => {
	const item = Utils.getFromIndex(CENTER_ENUMS, 'key', field);
	return item.values.includes(value);
}

export interface CenterProps extends BaseStyleProps { }

export const Center = (props: CenterProps) => {
	const { theme } = useTheme();

	const center = css`display: ${validateEnums('display', props.display) ? props.display : 'flex'};
	align-items:center; justify-content:center;`;

	return (
		<Prim as={props.as || 'div'} className={props.className} props={props} css={center}>
			{props.children}
		</Prim>
	);
}

Center.displayName = 'Center';