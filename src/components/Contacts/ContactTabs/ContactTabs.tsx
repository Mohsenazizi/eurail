import React, { useCallback } from 'react';
import { useContactContext } from '../../../store';
import { Contacts } from '../../../types';
import './contactTabs.style.scss';

interface TabsProps {
  tabs: Contacts['tabs'],
  users: Contacts['users']
}
const ContactTabs: React.FC<TabsProps> = ({ tabs, users }) => {
  const { setSelectedItemIndex, setSelectedCategory, selectedCategory } = useContactContext();

  const onCategoryClick = useCallback((category: string) => () => {
    setSelectedCategory(category);
    setSelectedItemIndex(-1);
  }, [setSelectedCategory, setSelectedItemIndex]);

  return (
    <ul className="contact-tabs__list">
      {
      tabs?.map((tab: string) => (
        <li
          key={tab}
          className="contact-tabs__item"
        >
          <button
            type="button"
            disabled={users === undefined || users[tab] === undefined}
            className={`contact-tabs__btn ${tab === selectedCategory ? 'contact-tabs__selected' : ''}`}
            onClick={onCategoryClick(tab)}
          >
            {tab}
            {users !== undefined && users[tab] !== undefined && (
            <span>
              (
              {users[tab].length}
              )
            </span>
            )}
          </button>
        </li>
      ))
    }

    </ul>
  );
};
export default ContactTabs;
