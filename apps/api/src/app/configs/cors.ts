import { CorsOptions } from 'cors';

const allowedOrigins = ['http://localhost:3000'];

const options: CorsOptions = {
  origin: allowedOrigins,
};

export default options;
