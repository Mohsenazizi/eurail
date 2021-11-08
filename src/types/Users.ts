import { User } from './User';
import { Info } from './Info';

export interface Users {
  info?: Info,
  results?: User[],
  error?:string
}
