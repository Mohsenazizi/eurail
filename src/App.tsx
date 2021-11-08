import React from 'react';
import { ContactList } from './components';
import { ContactProvider } from './store';
import './styles/main.scss';

const App: React.FC = () => (
  <ContactProvider>
    <ContactList />
  </ContactProvider>
);

export default App;
