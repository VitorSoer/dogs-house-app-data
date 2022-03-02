import { Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FeaturesModule } from './features/features.module';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_SERVER),
    PetsModule,
    FeaturesModule,
    PhotosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
