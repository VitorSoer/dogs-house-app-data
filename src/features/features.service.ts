import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { Feature, FeatureDocument } from './entities/feature.entity';

@Injectable()
export class FeaturesService {
  constructor(
    @InjectModel(Feature.name) private featureModel: Model<FeatureDocument>,
  ) {}

  create(createFeatureDto: CreateFeatureDto) {
    const feature = new this.featureModel(createFeatureDto);
    return feature.save();
  }

  findAll() {
    return this.featureModel.find();
  }

  findOne(id: string) {
    return this.featureModel.findById(id);
  }

  update(id: string, updateFeatureDto: UpdateFeatureDto) {
    return this.featureModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateFeatureDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.featureModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
