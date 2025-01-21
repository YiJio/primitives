// packages
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// own
import { useTheme } from '../../theme';

export interface BaseStyledTypographyProps {
	color?: string;
	family?: string;
	size?: string;
	weight?: string;
	style?:string;
	variant?:string;
	kerning?: string;
	tracking?: string;
	spacing?: string;
	decoration?: string;
	casing?: string;
	shadow?: string;
	leading?: string;
}