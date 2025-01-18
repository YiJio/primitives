// packages
import React from 'react';
// own
import LayoutComponent, { BaseProps } from './base';

// extends base
// base props used:
// 			?
// props:
//			?

export interface BoxProps extends BaseProps {

}

export const Box = (props: BoxProps) => {
	return (
		<LayoutComponent {...props} />
	);
}

Box.displayName = 'Box';