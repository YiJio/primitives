// packages
import React, { Children, cloneElement, Fragment, isValidElement, ReactElement, ReactNode, useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { HiMinus, HiCheck, HiXMark } from 'react-icons/hi2';
// types
import { BaseProps } from '../../types';
import { CheckboxProps } from '../checkbox';
// components
import { Checkbox } from '../checkbox';

export interface CheckboxGroupProps extends BaseProps {
	// user props
	name?: string;
	icon?: ReactNode;
	isDisabled?: boolean;
	colorScheme?: string;
	onChange?: (checks: boolean[]) => void;
	children: ReactElement<CheckboxProps>[];
}

export const CheckboxGroup = ({ name, icon, isDisabled, colorScheme, onChange, ...props }: CheckboxGroupProps) => {
	const [checkedItems, setCheckedItems] = useState([]);
	const [isAllChecked, setAllChecked] = useState(false);
	const [indeterminate, setIndeterminate] = useState(false);

	const childrenCount = Children.count(props.children);
	const childrenArray = Children.toArray(props.children);

	if (childrenCount === 0) {
		throw new Error('`CheckboxGroup` must have `Checkbox` as children components!')
	} else if (childrenCount === 1) {
		throw new Error('`CheckboxGroup` must have at least two `Checkbox` components!');
	}

	const isCheckboxItem = (child: ReactNode): child is ReactElement<CheckboxProps> => isValidElement(child) && child.type === Checkbox;

	const groupStyles = css`
		& > .c-checkbox-group__list { padding:0 12px; }
	`;

	const onCheck = (index: number) => {
		const updateChecks = checkedItems.map((item, i) => {
			if (i === index) { return !item; }
			else { return item; }
		});
		setCheckedItems(updateChecks);
		if (onChange) { onChange(updateChecks); }
	}

	const onCheckAll = () => {
		const prevState = isAllChecked;
		const updateChecks = checkedItems.map((item, i) => {
			return item = !prevState;
		});
		setCheckedItems(updateChecks);
		setAllChecked(!prevState);
		if (onChange) { onChange(updateChecks); }
	}

	useEffect(() => {
		let temp = Array(childrenCount).fill(false);
		setCheckedItems(temp);
	}, []);

	useEffect(() => {
		let hasFalse = 0, hasTrue = 0;
		for (var i = 0; i < checkedItems.length; i++) {
			if (checkedItems[i]) { hasTrue++; }
			else { hasFalse++; }
		}
		if (hasTrue === childrenCount) {
			setIndeterminate(false);
			setAllChecked(true)
		} else if (hasFalse === childrenCount) {
			setIndeterminate(false);
			setAllChecked(false);
		} else {
			setIndeterminate(true);
		}
	}, [checkedItems]);

	return (
		<div className='c-checkbox-group' css={groupStyles}>
			<Checkbox name={name} label='All' colorScheme={colorScheme} isChecked={isAllChecked} onChange={onCheckAll} isIndeterminateFromGroup={indeterminate} isDisabled={isDisabled} />
			{/*<div className='checkbox-group__item'>
				{checkboxChildren}
			</div>*/}
			<div className='c-checkbox-group__list'>
				{childrenArray.map((child, index) => {
					if (!isCheckboxItem(child)) {
						throw new Error('`CheckboxGroup` can only take `Checkbox` children components!');
					}
					return (<Fragment key={index}>
						{cloneElement(child, { name, iconFromGroup: icon, colorScheme, isChecked: checkedItems[index] || false, onChange: () => onCheck(index) })}
					</Fragment>);
				})}
			</div>
		</div>
	);
}

CheckboxGroup.displayName = 'CheckboxGroup';