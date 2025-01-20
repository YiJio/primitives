// packages
import React from 'react';
import styled from '@emotion/styled';
// own
import { BaseProps, BaseStyle, BaseStyleProps } from './base';

export interface ContainerStyleProps extends BaseStyleProps {
	isFluid?: boolean;
}

const defaultStyles: ContainerStyleProps = {
	pos: 'relative', p: '8px', m: 'auto', w: '100%', maxW: '100%',
}
const mergeStyles = (props: ContainerStyleProps): ContainerStyleProps => ({
  ...defaultStyles,
  ...props,
  maxW: props.isFluid ? '100%' : props.maxW || defaultStyles.maxW,
});

export const ContainerStyle = styled(BaseStyle)<{ /*theme: Theme;*/ props: ContainerStyleProps }>``;

export interface ContainerProps extends ContainerStyleProps, BaseProps { }
export const Container = (props: ContainerProps) => {
	const mergedProps = mergeStyles(props);

	return (
		<ContainerStyle as={props.as || 'div'} className={props.className} props={mergedProps}>
			{props.children}
		</ContainerStyle>
	);
}

Container.displayName = 'Container';