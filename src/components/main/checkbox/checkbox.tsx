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

export const Checkbox = ({ name, label, icon, iconFromGroup, value, isChecked, isDisabled, isInvalid, isReadOnly, isRequired, isIndeterminateFromGroup, colorScheme = 'green', onChange }: CheckboxProps) => {

	const checkbox = css`
		input:hover ~ & { background:var(--color-${colorScheme}-1); }
		input:checked ~ & { background:var(--color-${colorScheme}-2); }
		input:checked ~ & svg { color:var(--color-${colorScheme}-contrast); }

		&.isIndeterminate { background:var(--color-${colorScheme}-2); color:var(--color-${colorScheme}-contrast); }
	`;

	return (
		<label className='c-check'>
			<input type='checkbox' name={name} value={value} checked={isChecked} onChange={onChange} disabled={isDisabled} />
			{label}
			{isIndeterminateFromGroup ? <span className={`c-checkbox isIndeterminate`} css={checkbox}>
				<HiMinus />
			</span> : <span className={`c-checkbox`} css={checkbox}>
				{iconFromGroup ? iconFromGroup : icon ? icon : <HiXMark />}
			</span>}
		</label>
	);
}

Checkbox.displayName = 'Checkbox';