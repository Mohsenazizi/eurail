import React, { useCallback } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import { useContactContext } from '../../../store';
import { Contacts } from '../../../types';
import './contactItems.style.scss';

interface ContactItemsProps {
  users: Contacts['users'],
}

const ContactItems: React.FC<ContactItemsProps> = ({ users }) => {
  const { selectedItemIndex, setSelectedItemIndex, selectedCategory } = useContactContext();

  const onContactItemClick = useCallback((item: number) => () => {
    setSelectedItemIndex(item);
  }, [setSelectedItemIndex]);

  const onCardClose = useCallback(() => setSelectedItemIndex(-1), [setSelectedItemIndex]);

  return (
    <>
      {selectedCategory && (
      <ul className="contacts-items__container">
        {users !== undefined && users[selectedCategory].map((user, index) => (
          <li
            className="contacts-items__item"
          >
            <button
              type="button"
              className="contacts-items__content"
              onClick={onContactItemClick(index)}
            >
              {`${user.name.last}, ${user.name.first}`}
            </button>
            {selectedItemIndex === index
              && (
              <ContactCard
                user={user}
                onCardClose={onCardClose}
              />
              )}
          </li>
        ))}
      </ul>
      )}
    </>
  );
};

export default ContactItems;
