import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Model } from 'mongoose';
import { Photo, PhotoDocument } from './entities/photo.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectModel(Photo.name) private photoModel: Model<PhotoDocument>,
  ) {}
  create(createphotoDto: CreatePhotoDto) {
    const photo = new this.photoModel(createphotoDto);
    return photo.save();
  }

  findAll() {
    return this.photoModel.find();
  }

  findOne(id: string) {
    return this.photoModel.findById(id);
  }

  update(id: string, updatePhotoDto: UpdatePhotoDto) {
    return this.photoModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updatePhotoDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.photoModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
