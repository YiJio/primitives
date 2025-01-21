// packages
import React, { Children, cloneElement, Fragment, isValidElement, ReactElement, ReactNode } from 'react';
import { css } from '@emotion/react';
// types
import { BaseProps } from '../../types';
// theme
import { ColorKeys, useTheme } from '../../../theme';

interface StepperItemProps extends BaseProps {
	// user props
	onClick?: () => void;
	// parent props
	activeStepFromParent?: number;
	labelFromParent?: string;
	numberFromParent?: number;
	colorSchemeFromParent?: ColorKeys;
}

const StepperItem = ({ className, onClick, ...props }: StepperItemProps) => {
	const { theme } = useTheme();
	const colorScheme = theme.colors[props.colorSchemeFromParent]?.[5];

	const item = css`
		&:before { background:repeating-linear-gradient(90deg, ${`${colorScheme}1a`}, ${`${colorScheme}1a`} 4px, var(--color-white-a100) 4px, var(--color-white-a100) 6px); }
		&.inProgress:before { background:repeating-linear-gradient(90deg, ${`${colorScheme}80`}, ${`${colorScheme}80`} 4px, var(--color-white-a100) 4px, var(--color-white-a100) 6px); }

		& .c-stepper__number { border-color:${`${colorScheme}1a`}; }
		&.inProgress .c-stepper__number { border-color:${`${colorScheme}80`}; }
		&.isActive .c-stepper__number { border-color:${colorScheme}; }
	`;

	return (
		<div className={`c-stepper__item${className ? ` ${className}` : ''}${props.activeStepFromParent === props.numberFromParent - 1 ? ' isActive' : ''}${props.activeStepFromParent >= props.numberFromParent - 1 ? ' inProgress' : ''}`} onClick={onClick} css={item}>
			<div className='c-stepper__number'>{props.numberFromParent}</div>
			<div className='c-stepper__label'>{props.labelFromParent}</div>
		</div>
	);
}

export interface StepperProps extends BaseProps {
	// user props
	colorScheme?: ColorKeys;
	activeStep?: number;
	steps?: string[];
	children: ReactElement<StepperItemProps>[];
}

export const Stepper = ({ className, colorScheme = 'red', activeStep, steps = [], ...props }: StepperProps) => {
	const childrenCount = Children.count(props.children);
	const childrenArray = Children.toArray(props.children);

	if (childrenCount === 0) {
		throw new Error('`Stepper` must have `Stepper.Item` children components!')
	} else if (childrenCount === 1) {
		throw new Error('`Stepper` must have at least two `Stepper.Item` components!');
	}

	const isStepperItem = (child: ReactNode): child is ReactElement<StepperItemProps> => isValidElement(child) && child.type === StepperItem;

	return (
		<div className={`c-stepper${className ? ` ${className}` : ''}`}>
			{childrenArray.map((child, index) => {
				if (!isStepperItem(child)) {
					throw new Error('`Stepper` can only take `Stepper.Item` children components!');
				}
				const label = steps[index] || `Step ${index + 1}`;
				return (<Fragment key={index}>
					{cloneElement(child, { numberFromParent: index + 1, labelFromParent: label, activeStepFromParent: activeStep, colorSchemeFromParent: colorScheme })}
				</Fragment>);
			})}
		</div>
	);
}

Stepper.displayName = 'Stepper';
Stepper.Item = StepperItem;