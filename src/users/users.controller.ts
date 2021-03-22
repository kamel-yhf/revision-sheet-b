import { Body, Controller, Get, Post } from '@nestjs/common';
import { Deck } from 'src/decks/deck.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async addUser(
    @Body('username') userName: string,
    @Body('email') userEmail: string,
    @Body('password') userPassword: string,
    @Body('deck') userDeck: Deck,
  ) {
    const generatedId = await this.usersService.insertUser(
      userName,
      userEmail,
      userPassword,
      userDeck,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllUsers(){
      const users = await this.usersService.getAllUsers();
      return users;
  }
}
