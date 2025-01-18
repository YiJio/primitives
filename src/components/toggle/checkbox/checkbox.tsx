// packages
import React, { Children, isValidElement, cloneElement, useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { HiMinus, HiCheck, HiXMark } from 'react-icons/hi2';

export interface CheckboxProps {
	name?: string;
	label?: string;
	icon?: React.ReactNode;
	iconFromGroup?: React.ReactNode;
	value?: string;
	isChecked?: boolean;
	isDisabled?: boolean;
	isInvalid?: boolean;
	isReadOnly?: boolean;
	isRequired?: boolean;
	isIndeterminateFromGroup?: boolean;
	colorScheme?: string;
	onChange?: () => void;
}

export const Checkbox = ({ name, label, icon, iconFromGroup, value, isChecked, isDisabled, isInvalid, isReadOnly, isRequired, isIndeterminateFromGroup, colorScheme, onChange }: CheckboxProps) => {

	const checkboxStyles = css`
		display:block; position:relative; margin-top:8px; min-width:120px; padding-left:28px; user-select:none; cursor:pointer; line-height:16px;

		&[disabled] { cursor:not-allowed; }

		& .c-check__box { position:absolute; top:0; left:0; width:20px; height:20px; }

		& input { position:absolute; width:0; height:0; opacity:0; cursor:pointer; }
	`;

	const checkStyles = css`
		display:flex; align-items:center; justify-content:center; background:var(--color-gray-0); border-radius:0; position:absolute; top:0; left:0; width:20px; height:20px;

		& svg { stroke-width:2px; font-size:16px; }

		input ~ & svg { display:none; }
		input:hover ~ & { background:var(--color-${colorScheme}-1); }
		input:hover:disabled ~ &, input:checked:disabled ~ & { background:var(--color-gray-0); cursor:not-allowed; }
		input:disabled ~ & svg, input:checked:disabled ~ & svg { opacity:0.5; }
		input:checked ~ & { background:var(--color-${colorScheme}-2); }
		input:checked ~ & svg { display:flex; color:var(--color-${colorScheme}-contrast); }

		&.isIndeterminate { background:var(--color-${colorScheme}-2); color:var(--color-${colorScheme}-contrast); }
		&.isIndeterminate svg { display:flex; }
	`;

	return (
		<label className='c-check' css={checkboxStyles}>
			<input type='checkbox' name={name} value={value} checked={isChecked} onChange={onChange} disabled={isDisabled} />
			{label}
			{isIndeterminateFromGroup ? <span className={`c-check__box isIndeterminate`} css={checkStyles}>
				<HiMinus />
			</span> : <span className={`c-check__box`} css={checkStyles}>
				{iconFromGroup ? iconFromGroup : icon ? icon : <HiXMark />}
			</span>}
		</label>
	);
}

export interface CheckboxGroupProps {
	name?: string;
	icon?: React.ReactNode;
	isDisabled?: boolean;
	colorScheme?: string;
	onChange?: (checks: boolean[]) => void;
	children: React.ReactElement<CheckboxProps>[];
}

export const CheckboxGroup = ({ name, icon, isDisabled, colorScheme, onChange, children }: CheckboxGroupProps) => {
	const [checkedItems, setCheckedItems] = useState([]);
	const [isAllChecked, setAllChecked] = useState(false);
	const [indeterminate, setIndeterminate] = useState(false);

	const childrenCount = Children.count(children);
	const childrenArray = Children.toArray(children);

	if (childrenCount === 0) {
		throw new Error('`CheckboxGroup` must have `Checkbox` as children components!')
	} else if (childrenCount === 1) {
		throw new Error('`CheckboxGroup` must have at least two `Checkbox` components!');
	}

	const isCheckboxItem = (child: React.ReactNode): child is React.ReactElement<CheckboxProps> => React.isValidElement(child) && child.type === Checkbox;

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
					return (<React.Fragment key={index}>
						{cloneElement(child, { name, iconFromGroup: icon, colorScheme, isChecked: checkedItems[index] || false, onChange: () => onCheck(index) })}
					</React.Fragment>);
				})}
			</div>
		</div>
	);
}

Checkbox.displayName = 'Checkbox';
CheckboxGroup.displayName = 'CheckboxGroup';