import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_COLLECTION } from '../../constants/database';
import { ConfigsController } from './configs.controller';
import { ConfigsService } from './configs.service';
import { ConfigSchema } from '../../shared/configs/config.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: DB_COLLECTION.CONFIG, schema: ConfigSchema }])],
  controllers: [ConfigsController],
  providers: [ConfigsService],
})
export class ConfigsModule {}
