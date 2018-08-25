import dotenv from 'dotenv';
import { geocode, version } from './src';

dotenv.config();
// const opencage = {
//   geocode,
//   version,
// };
// export default opencage;

export { geocode, version };
