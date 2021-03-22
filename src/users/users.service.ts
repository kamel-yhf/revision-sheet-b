import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deck } from 'src/decks/deck.model';
import { User } from './user.model';
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  //create user
  async insertUser(
    username: string,
    email: string,
    password: string,
    deck: Deck,
  ) {
    const hash = this.hashPassword(password);
    const newUser = new this.userModel({
      username: username,
      email: email,
      password: hash,
      deck: deck,
    });
    const result = await newUser.save();
    return result.id as string;
  }

  //get all users
  async getAllUsers() {
    const users = await this.userModel.find().exec();
    return users;
  }

  //get one user
  async getOneUser(userId: string) {
    const user = await this.userModel.findById(userId);
    return {
      id: user.id,
      name: user.username,
      email: user.email,
      password: user.password,
      deck: user.deck,
    };
  }

  // hash password whith bcrypt
  hashPassword(password) {
    const salt = 10;
    const hash = bcrypt.hashSync(password, salt);

    return hash;
  }
}
