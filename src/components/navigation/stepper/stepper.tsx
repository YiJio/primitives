// packages
import React, { Children, cloneElement } from 'react';
import { css } from '@emotion/react';

interface StepperItemProps {
	className?: string;
	activeStepFromParent?: number;
	labelFromParent?: string;
	numberFromParent?: number;
	onClick?: () => void;
}

const StepperItem = ({ className, activeStepFromParent, labelFromParent, numberFromParent, onClick }: StepperItemProps) => {

	const itemStyles = css`
		position:relative; display:flex; flex-direction:column; align-items:center; gap:4px; width:80px; cursor:pointer;

		&:before { position:absolute; content:''; top:calc(32px / 2 - 2px); left:-24px; width:48px; height:4px; background:repeating-linear-gradient(90deg, rgb(var(--color-primary-5) / 10%), rgb(var(--color-primary-5) / 10%) 4px, var(--surface) 4px, var(--surface) 6px); z-index:0; }

		&:first-child:before { display:none; }

		&.inProgress .c-stepper__number { border-color:rgb(var(--color-primary-5) / 50%); }
		&.inProgress:before { background:repeating-linear-gradient(90deg, rgb(var(--color-primary-5) / 50%), rgb(var(--color-primary-5) / 50%) 4px, var(--surface) 4px, var(--surface) 6px); }
		&.isActive .stepper__number { border-color:rgb(var(--color-primary-5)); font-weight:700; }
		&.isActive .stepper__label, &:hover .stepper__label { opacity:1; }
	`;
	const numberStyles = css`
		width:32px; height:32px; display:flex; align-items:center; justify-content:center; border-radius:50%; border:4px solid rgb(var(--color-primary-5) / 10%); background:rgb(var(--color-white)); color:var(--text-on--secondary); font-size:14px; line-height:1; z-index:1;
	`;
	const labelStyles = css`
		font-size:12px; font-weight:500; text-align:center; color:var(--text-on--secondary); opacity:0.5;
	`;

	return (
		<div className={`c-stepper__item${className ? ` ${className}` : ''}${activeStepFromParent === numberFromParent - 1 ? ' isActive' : ''}${activeStepFromParent >= numberFromParent - 1 ? ' inProgress' : ''}`} onClick={onClick} css={itemStyles}>
			<div className='c-stepper__number' css={numberStyles}>{numberFromParent}</div>
			<div className='c-stepper__label' css={labelStyles}>{labelFromParent}</div>
		</div>
	);
}

export interface StepperProps {
	className?: string;
	activeStep?: number;
	steps?: string[];
	children: React.ReactElement<StepperItemProps>[];
}

export const Stepper = ({ className, activeStep, steps = [], children }: StepperProps) => {
	const childrenCount = Children.count(children);
	const childrenArray = Children.toArray(children);

	if (childrenCount === 0) {
		throw new Error('`Stepper` must have `Stepper.Item` children components!')
	} else if (childrenCount === 1) {
		throw new Error('`Stepper` must have at least two `Stepper.Item` components!');
	}

	const isStepperItem = (child: React.ReactNode): child is React.ReactElement<StepperItemProps> => React.isValidElement(child) && child.type === StepperItem;

	const styles = css`
		margin:40px auto; display:flex; align-items:center; justify-content:center;
	`;

	return (
		<div className={`c-stepper${className ? ` ${className}` : ''}`} css={styles}>
			{childrenArray.map((child, index) => {
				if (!isStepperItem(child)) {
					throw new Error('`Stepper` can only take `Stepper.Item` children components!');
				}
				const label = steps[index] || `Step ${index + 1}`;
				return (<React.Fragment key={index}>
					{cloneElement(child, { numberFromParent: index + 1, labelFromParent: label, activeStepFromParent: activeStep })}
				</React.Fragment>);
			})}
		</div>
	);
}

Stepper.displayName = 'Stepper';
Stepper.Item = StepperItem;