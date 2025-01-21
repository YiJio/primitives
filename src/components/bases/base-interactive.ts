// packages
import React from 'react';
// theme
import { ColorKeys } from '../../theme';

export interface BaseInteractiveProps {
	name?: string;
	label?: string;
	// functions
	onChange?: () => void;
	//onClick?: () => void;
	// booleans
	readOnly?: boolean;
	isDisabled?: boolean;
	isLoading?: boolean;
	// styling
	size?: string;
	variant?: string;
	colorScheme?: ColorKeys;
}