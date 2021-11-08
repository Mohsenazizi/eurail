import React from 'react';
import useContactList from './useContactList';
import ContactTabs from '../ContactTabs/ContactTabs';
import ContactItems from '../ContactItems/ContactItems';
import './contactList.style.scss';

export const ContactList: React.FC = () => {
  const { loading, error, contacts } = useContactList();

  if (loading) {
    return (<> ...loading</>);
  }

  if (error) {
    return (<>error</>);
  }

  return (
    <section className="contacts-container">
      <section className="contacts-container__tabs">
        <ContactTabs users={contacts?.users} tabs={contacts?.tabs} />
      </section>

      <section className="contacts-container__list">
        <ContactItems users={contacts?.users} />
      </section>
    </section>
  );
};
