// packages
import React, { cloneElement, ReactElement } from 'react';
import { css } from '@emotion/react';
// utils
import { ColorUtils } from '../../../utils/ColorUtils';
// types
import { BaseProps } from '../../types';
import { BadgeProps } from '../badge';

export interface AvatarProps extends BaseProps {
	// user props
	name?: string;
	imgSrc?: string;
	variant?: string;
	round?: string;
	size?: string;
	bgColor?: string;
	bdColor?: string;
	bdWidth?: string;
	textColor?: string;
	badge?: ReactElement<BadgeProps>;
	// parent props
	fromParty?: boolean;
	sizeFromParent?: string;
}

export const Avatar = ({ name, imgSrc, variant, round = 'full', size = 'L', bgColor = '#eee', bdColor = '#eee', bdWidth = '0', textColor, badge, ...props }: AvatarProps) => {

	const theSize = parseInt(size) ? 'L' : size;
	const fallback = name.split(' ');
	let letters = '';
	for (var i = 0; i < fallback.length; i++) {
		if (i > 2) { break; }
		letters += fallback[i].charAt(0).toUpperCase();
	}
	const badgeProps = badge && badge.props;

	const avatar = css`
		color:${textColor ? textColor : ColorUtils.setContrastTextColor(bgColor)}; background:${bgColor} !important; border-color:${bdColor} !important; border-width:${bdWidth}; border-radius:${round === 'none' ? '0px' : round === 'full' ? '9999px' : round};
	`;

	return (
		<div className='l-wrapper l-wrapper--inline'>
			<div className={`c-avatar size-${props.sizeFromParent ? props.sizeFromParent.toLowerCase() : theSize.toLowerCase()}`} css={avatar}>
				{imgSrc && imgSrc !== '' ? <img src={imgSrc} /> : letters}
			</div>
			{(!props.fromParty && badge) && cloneElement(badge, { position: badgeProps.position || 'bottom', variant: badgeProps.variant || 'dot', size: badgeProps.size || 'M', colorScheme: badgeProps.colorScheme, bgColor: badgeProps.bgColor, textColor: badgeProps.textColor, hasBorder: true, icon: badgeProps.icon, content: badgeProps.content, maxNum: badgeProps.maxNum })}
			{props.children}
		</div>
	);
}