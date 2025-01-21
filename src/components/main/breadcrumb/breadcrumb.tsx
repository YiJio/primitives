// packages
import React, { Children, cloneElement, Fragment, isValidElement, ReactElement, ReactNode, } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// types
import { BaseProps } from '../../types';

interface BreadcrumbItemProps extends BaseProps {
	// user props
	link?: string;
	isExternalLink?: boolean;
	// parent props
	isLastFromParent?: boolean;
}

const BreadcrumbItem = ({ className, link, isExternalLink = false, ...props }: BreadcrumbItemProps) => {
	return (
		<li className={`c-breadcrumb__item${className ? ` ${className}` : ''}`}>
			{link && !props.isLastFromParent ? <>
				{isExternalLink ? <a href={link} target='_blank'>{props.children}</a> : <Link to={link}>{props.children}</Link>}
			</> : <span>{props.children}</span>}
		</li>
	);
}

export interface BreadcrumbProps extends BaseProps {
	separator?: React.ReactNode;
	children: ReactElement<BreadcrumbItemProps>[];
}

export const Breadcrumb = ({ className, separator = '/', ...props }: BreadcrumbProps) => {
	const childrenCount = Children.count(props.children);
	const childrenArray = Children.toArray(props.children);

	if(childrenCount === 0) {
		throw new Error('`Breadcrumb` must have `Breadcrumb.Item` children components!')
	} else if(childrenCount === 1) {
		throw new Error('`Breadcrumb` must have at least two `Breadcrumb.Item` components!');
	}

	const isBreadcrumbItem = (child: ReactNode): child is ReactElement<BreadcrumbItemProps> => isValidElement(child) && child.type === BreadcrumbItem;

	return (
		<div className={`c-breadcrumb${className ? ` ${className}` : ''}`}>
			{childrenArray.map((child, index) => {
				if(!isBreadcrumbItem(child)) {
					throw new Error('`Breadcrumb` can only take `Breadcrumb.Item` children components!');
				}
				const isLast = index === childrenCount - 1;
				return (<Fragment key={index}>
					{cloneElement(child, { isLastFromParent: isLast })}
					{!isLast && (<li className='c-breadcrumb__separator'>{separator}</li>)}
				</Fragment>);
			})}
		</div>
	);
}

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.Item = BreadcrumbItem;