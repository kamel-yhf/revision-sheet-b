import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deck } from 'src/decks/deck.model';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  //create user
  async insertUser(username: string, email: string, password: string, deck: Deck){
      const newUser = new this.userModel({
          username: username,
          email: email,
          password: password,
          deck: deck,
      });
      const result = await newUser.save();
      return result.id as string;
  }

  //get all users
  async getAllUsers(){
    const users = await this.userModel.find().exec();
    return users;
  }
}

