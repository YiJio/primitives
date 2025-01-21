import React, { Children, isValidElement, cloneElement, useRef, useState, useEffect } from 'react';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi2';
// hooks
import useAccordion from '../../../hooks/use-accordion';
// types
import { BaseProps } from '../../types';
// components
import { Icon } from '../../typography';

interface AccordionContentProps extends BaseProps {
	// parent props
	isActiveFromParent?: boolean;
}

const AccordionContent = (props: AccordionContentProps) => {

	const [height, setHeight] = useState(0);
	const contentRef = useRef(null);

	useEffect(() => {
		setHeight(contentRef.current.scrollHeight);
	}, []);

	return (
		<div ref={contentRef} className='c-accordion__content' style={{ height: props.isActiveFromParent ? height : '0' }}>
			<div className='c-accordion__details'>{props.children}</div>
		</div>
	);
}

interface AccordionHeaderProps extends BaseProps {
	// user props
	title?: string;
	icon?: React.ReactElement;
	// parent props
	isActiveFromParent?: boolean;
	hasChevronFromParent?: boolean;
	hasNumberFromParent?: boolean;
	numberFromParent?: number;
	onToggleFromParent?: () => void;
}

const AccordionHeader = ({ title, icon, ...props }: AccordionHeaderProps) => {
	return (
		<div className={'c-accordion__header' + (props.isActiveFromParent ? ' active' : '')} onClick={props.onToggleFromParent}>
			{props.hasNumberFromParent && <div className='c-accordion__number'>{props.numberFromParent}</div>}
			{icon && <div className='c-accordion__icon'>{icon}</div>}
			<div className='c-accordion__title'>{props.children ? props.children : title}</div>
			{props.hasChevronFromParent && <div className='c-accordion__chevron'>{props.isActiveFromParent ? <Icon icon={<HiChevronUp />} size='16px' /> : <Icon icon={<HiChevronDown />} size='16px' />}</div>}
		</div>
	);
}

interface AccordionItemProps extends BaseProps {
	// parent props
	isActiveFromParent?: boolean;
	hasChevronFromParent?: boolean;
	hasNumberFromParent?: boolean;
	numberFromParent?: number;
	onToggleFromParent?: () => void;
}

const AccordionItem = ({ className, ...props }: AccordionItemProps) => {

	const childrenCount = Children.count(props.children);
	if (childrenCount > 2) { throw new Error(`AccordionItem can only have two child components: AccordionHeader and AccordionContent.`); }
	const childrenArray = Children.toArray(props.children);
	let type1Count = 0; // cannot be more than 1!
	let type2Count = 0; // cannot be more than 1!

	const isAccordionHeader = (child: React.ReactNode): child is React.ReactElement<AccordionHeaderProps> => React.isValidElement(child) && child.type === AccordionHeader;
	const isAccordionContent = (child: React.ReactNode): child is React.ReactElement<AccordionContentProps> => React.isValidElement(child) && child.type === AccordionContent;

	return (
		<div className={`c-accordion__item${className ? ` ${className}` : ''}`}>
			{childrenArray.map((child, index) => {
				if (isAccordionHeader(child)) {
					type1Count++;
					if (type1Count > 1) { throw new Error('`AccordionItem` can only have one `AccordionHeader`.'); }
					return cloneElement(child, { isActiveFromParent: props.isActiveFromParent, hasChevronFromParent: props.hasChevronFromParent, hasNumberFromParent: props.hasNumberFromParent, numberFromParent: props.numberFromParent, onToggleFromParent: props.onToggleFromParent, });
				} else if(isAccordionContent(child)) {
					type2Count++;
					if (type2Count > 1) { throw new Error('`AccordionItem` can only have one `AccordionContent`.'); }
					return cloneElement(child, { isActiveFromParent: props.isActiveFromParent });
				} else {
					throw new Error('`AccordionItem` can only take one `Accordion.Header` one and `Accordion.Content` children components!')
				}
			})}
		</div>
	);
}

export interface AccordionProps extends BaseProps {
	// user props
	allowMultiple?: boolean;
	allowToggle?: boolean;
	hasChevron?: boolean;
	hasNumber?: boolean;
}

export const Accordion = ({ className, allowMultiple, allowToggle, hasChevron, hasNumber, ...props }: AccordionProps) => {
	const { activeItems, toggleItem } = useAccordion({ allowMultiple, allowToggle });

	const childrenArray = Children.toArray(props.children);

	const isAccordionItem = (child: React.ReactNode): child is React.ReactElement<AccordionItemProps> => React.isValidElement(child) && child.type === AccordionItem;

	return (
		<div className={`c-accordion${className ? ` ${className}` : ''}`}>
			{childrenArray.map((child, index) => {
				if (!isAccordionItem(child)) {
					throw new Error('`Accordion` can only take `Accordion.Item` children components!');
				}
				return (<React.Fragment key={index}>
					{cloneElement(child, { isActiveFromParent: activeItems.includes(child.key), hasChevronFromParent: hasChevron, hasNumberFromParent: hasNumber, numberFromParent: index + 1, onToggleFromParent: () => toggleItem(child.key) })}
				</React.Fragment>);
			})}
		</div>
	);
}

Accordion.displayName = 'Accordion';
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;