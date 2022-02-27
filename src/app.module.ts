import { Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_SERVER),
    PetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
