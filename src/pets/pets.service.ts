import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet, PetDocument } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) {}

  create(createPetDto: CreatePetDto) {
    const pet = new this.petModel(createPetDto);
    return pet.save();
  }

  findAll(name?: string, tipo?: string) {
    if (name) {
      return this.petModel.findOne({ name });
    }
    if (tipo) {
      return this.petModel.find({ tipo });
    }
    return this.petModel.find();
  }

  findOne(id: string) {
    return this.petModel.findById(id);
  }

  update(id: string, updatePetDto: UpdatePetDto) {
    return this.petModel.findByIdAndUpdate(
      { _id: id },
      { $set: updatePetDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.petModel.deleteOne({ _id: id }).exec();
  }
}
