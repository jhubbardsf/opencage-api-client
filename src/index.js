import dotenv from 'dotenv';
import { geocode, version } from './opencage';

dotenv.config();
// const opencage = {
//   geocode,
//   version,
// };
// export default opencage;

export { geocode, version };
