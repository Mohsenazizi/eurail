import { useEffect, useState } from 'react';
import { getUsers } from '../../../services';
import { Contacts } from '../../../types';

type UseContact = {
  contacts: Contacts | null,
  loading: boolean,
  error: string
}

export const useContactList = (): UseContact => {
  const [contacts, setContacts] = useState<Contacts | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((data) => {
        setContacts(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    contacts,
    loading,
    error,
  };
};

export default useContactList;
