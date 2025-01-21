// packages
import React, { Children, cloneElement, Fragment, isValidElement, ReactElement, ReactNode } from 'react';
import { css } from '@emotion/react';
// utils
import { ColorUtils } from '../../../utils/ColorUtils';
// types
import { BaseProps } from '../../types';
import { AvatarProps } from '../avatar/avatar';
// components
import { Avatar } from '../avatar/avatar';

export interface AvatarGroupProps extends BaseProps {
	// user props
	round?: string;
	size?: string;
	gap?: string;
	bdColor?: string;
	bdWidth?: string;
	maxUsers?: number;
	isFirstOnTop?: boolean;
}

export const AvatarGroup = ({ round = 'full', size = 'L', gap = '10px', bdColor = '#eee', bdWidth = '0', maxUsers = 2, isFirstOnTop, ...props }: AvatarGroupProps) => {

	const childrenCount = Children.count(props.children);
	const childrenArray = Children.toArray(props.children);

	const theSize = parseInt(size) ? 'L' : size;

	const avatarGroup = css`
		& span.z { margin-left:${gap}; }
		& .c-avatar { background:${bdColor}; border-color:${bdColor}; border-width:${bdWidth}; border-radius:${round === 'none' ? '0px' : round === 'full' ? '9999px' : round}; }
	`;

	const isAvatar = (child: ReactNode): child is ReactElement<AvatarProps> => isValidElement(child) && child.type === Avatar;

	return (
		<div className='c-avatar-group' css={avatarGroup}>
			{childrenArray.map((child, index) => {
				if (!isAvatar(child)) {
					throw new Error('`AvatarGroup` can only take `Avatar` children components!');
				}
				return (<Fragment key={index}>
					{index < maxUsers
						? isFirstOnTop
							? <span className='z' style={{ zIndex: (maxUsers - index) }}>{cloneElement(child, { sizeFromParent: theSize })}</span>
							: <span className='z'>{cloneElement(child, { sizeFromParent: theSize })}</span>
						: ''
					}
				</Fragment>);
			})}
			{maxUsers !== childrenCount && <span className='z'>
				<div className={`c-avatar c-avatar-group__plus size-${theSize.toLowerCase()}`}>
					+{childrenCount - maxUsers}
				</div>
			</span>}
		</div>
	);
}