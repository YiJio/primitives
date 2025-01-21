// packages
import React from 'react';
// theme
import { ColorKeys } from '../../theme';

export interface BaseInputProps {
	name?: string;
	value?: string;
	defaultValue?: string;
	placeholder?: string;
	// functions
	onChange?: () => void;
	onClick?: () => void;
	// booleans
	readOnly?: boolean;
	isRequired?: boolean;
	isDisabled?: boolean;
	// styling
	size?: string;
	colorScheme?: ColorKeys;
}