import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfigs = () => MongooseModule.forRoot(process.env.DB_URI || '', {});
