import { User } from './User';

export type Contacts = {
  users?: Record<string, User[]>,
  tabs?: string[]
};
