import { Request } from '../helpers/Request';
import config from '../config';

const randomUser = new Request(config.userUrl);

export default randomUser;
