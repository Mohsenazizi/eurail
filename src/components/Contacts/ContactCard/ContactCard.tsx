import React from 'react';
import { User } from '../../../types';
import './contactCard.style.scss';

interface ContactCardProps {
  user: User,
  onCardClose: ()=>void
}

const ContactCard: React.FC<ContactCardProps> = ({ user, onCardClose }) => (
  <div className="contacts-card__container">
    <div className="contacts-card__username">
      {user.login.username}
    </div>
    <button className="contacts-card__close" type="button" onClick={onCardClose}>
      &nbsp;
    </button>
    <h2>
      {`${user.name.first}, ${user.name.last}`}
    </h2>
    <div className="contacts-card__info">
      <div
        className="contacts-card__avatar"
        style={{
          backgroundImage: `url(${user.picture.medium})`,
        }}
      />
      <ul>
        <li>
          <span>
            Email:
          </span>
          {user.email}
        </li>
        <li>
          <span>Phone:</span>
          {user.phone}
        </li>
        <li>
          <span>Street:</span>
          {`${user?.location?.street?.number}, ${user?.location?.street?.number}`}
        </li>
        <li>
          <span>Phone:</span>
          {user.phone}
        </li>
      </ul>
    </div>
  </div>
);

export default ContactCard;
