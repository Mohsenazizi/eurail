import { User } from '../types/User';
import { Users, Contacts } from '../types';
import randomUser from './randomUser';
import config from '../config';

export const getUsers = async (): Promise<Contacts> => {
  const { data } = await randomUser.get<Users>('', {
    results: config.numberCards.toString(),
    nat: 'US',
  });

  if (typeof data === 'string') {
    return Promise.reject(data);
  }

  if (data === null || data.results === undefined || data.results.length === 0) {
    return Promise.reject(Error('There are no users'));
  }

  if (data !== null && 'error' in data) {
    return Promise.reject(data.error);
  }

  const users: Record<string, User[]> = data.results
    .reduce<Record<string, User[]>>(
      (groupedUsers, user) => {
        const group = user.name.first.charAt(0).toLocaleLowerCase();
        if (!(group in groupedUsers)) {
          groupedUsers[group] = [user];
        } else {
          groupedUsers[group].push(user);
        }
        return groupedUsers;
      }, {},
    );
  const tabs: string[] = Array.from(
    new Set([...Object.keys(users || {}), ...config.tabs]),
  ).sort();

  return Promise.resolve({
    users,
    tabs,
  });
};
