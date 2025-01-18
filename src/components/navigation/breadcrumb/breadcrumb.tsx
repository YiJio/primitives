// packages
import React, { Children, cloneElement } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface BreadcrumbItemProps {
	className?: string;
	isLastFromParent?: boolean;
	link?: string;
	isExternalLink?: boolean;
	children: React.ReactNode;
}

const BreadcrumbItem = ({ className, isLastFromParent, link, isExternalLink = false, children }: BreadcrumbItemProps) => {
	return (
		<li className={`c-breadcrumb__item${className ? ` ${className}` : ''}`}>
			{link && !isLastFromParent ? <>
				{isExternalLink ? <a href={link} target='_blank'>{children}</a> : <Link to={link}>{children}</Link>}
			</> : <span>{children}</span>}
		</li>
	);
}

const BreadcrumbStyle = styled.div`
	display:flex; gap:8px; list-style:none; padding:0; margin:0;
`;

export interface BreadcrumbProps {
	as?: any;
	className?: string;
	separator?: React.ReactNode;
	children: React.ReactElement<BreadcrumbItemProps>[];
}

export const Breadcrumb = ({ as, className, separator = '/', children, ...props }: BreadcrumbProps) => {
	const childrenCount = Children.count(children);
	const childrenArray = Children.toArray(children);

	if(childrenCount === 0) {
		throw new Error('`Breadcrumb` must have `Breadcrumb.Item` children components!')
	} else if(childrenCount === 1) {
		throw new Error('`Breadcrumb` must have at least two `Breadcrumb.Item` components!');
	}

	const isBreadcrumbItem = (child: React.ReactNode): child is React.ReactElement<BreadcrumbItemProps> => React.isValidElement(child) && child.type === BreadcrumbItem;

	return (
		<BreadcrumbStyle as={as || 'ol'} className={`c-breadcrumb${className ? ` ${className}` : ''}`}>
			{childrenArray.map((child, index) => {
				if(!isBreadcrumbItem(child)) {
					throw new Error('`Breadcrumb` can only take `Breadcrumb.Item` children components!');
				}
				const isLast = index === childrenCount - 1;
				return (<React.Fragment key={index}>
					{cloneElement(child, { isLastFromParent: isLast })}
					{!isLast && (<li className='c-breadcrumb__separator'>{separator}</li>)}
				</React.Fragment>);
			})}
		</BreadcrumbStyle>
	);
}

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.Item = BreadcrumbItem;