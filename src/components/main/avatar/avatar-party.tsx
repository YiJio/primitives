// packages
import React, { Children, cloneElement, Fragment, isValidElement, ReactElement, ReactNode } from 'react';
import { css } from '@emotion/react';
// utils
import { ColorUtils } from '../../../utils/ColorUtils';
// types
import { BaseProps } from '../../types';
import { AvatarProps } from '../avatar';
import { BadgeProps } from '../badge';
// components
import { Avatar } from '../avatar';

export interface AvatarPartyProps extends BaseProps {
	// user props
	round?: string;
	size?: string;
	bgColor?: string;
	bdColor?: string;
	bdWidth?: string;
	badge?: ReactElement<BadgeProps>;
}

export const AvatarParty = ({ round = 'full', size = 'L', bgColor = '#eee', bdColor = '#eee', bdWidth = '0', badge, ...props }: AvatarPartyProps) => {

	const childrenCount = Children.count(props.children);
	const childrenArray = Children.toArray(props.children);

	const maxUsers = childrenCount < 4 ? childrenCount : 4;
	const userClass = `u${maxUsers}`;
	const badgeProps = badge && badge.props;
	const theSize = parseInt(size) ? 'L' : size;

	const avatarParty = css`
		background:${bgColor}; border-color:${bdColor}; border-width:${bdWidth}; border-radius:${round === 'none' ? '0px' : round === 'full' ? '9999px' : round};
	`;
	
	const isAvatar = (child: ReactNode): child is ReactElement<AvatarProps> => isValidElement(child) && child.type === Avatar;
	
	return (
		<div className='l-wrapper l-wrapper--inline'>
			<div className={`c-avatar-party ${userClass} size-${theSize.toLowerCase()}`} css={avatarParty}>
				{childrenArray.map((child, index) => {
					if (!isAvatar(child)) {
						throw new Error('`AvatarParty` can only take `Avatar` children components!');
					}
					return (<Fragment key={index}>
						{index < maxUsers && <>
							{cloneElement(child, { round: 'none', fromParty: true })}
						</>}
					</Fragment>);
				})}
				{badge && cloneElement(badge, { position: badgeProps.position || 'bottom', variant: badgeProps.variant || 'dot', size: badgeProps.size || 'M', colorScheme: badgeProps.colorScheme, bgColor: badgeProps.bgColor, textColor: badgeProps.textColor, hasBorder: true, icon: badgeProps.icon, content: badgeProps.content, maxNum: badgeProps.maxNum })}
			</div>
		</div>
	);
}