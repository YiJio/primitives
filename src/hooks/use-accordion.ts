import { useState } from 'react';

const useAccordion = ({ allowMultiple = false, allowToggle = true }) => {
	const [activeItems, setActiveItems] = useState([]);

	const toggleItem = (itemKey: string) => {
    setActiveItems((prevItems) => {
      const isItemActive = prevItems.includes(itemKey);

      if (allowMultiple) {
        // allow multiple items to be active
        if (isItemActive && allowToggle) {
          // allow toggling if specified
          return prevItems.filter((key) => key !== itemKey);
        } else {
          return [...prevItems, itemKey];
        }
      } else {
        // only allow one item to be active at a time
        if (isItemActive && !allowToggle) {
          // don't allow toggling if specified
          return prevItems;
        } else {
          return isItemActive ? [] : [itemKey];
        }
      }
    });
  };

	return { activeItems, toggleItem, };
};

export default useAccordion;