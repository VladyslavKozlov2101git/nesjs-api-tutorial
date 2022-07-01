import { Injectable } from '@nestjs/common';
import {User, Bookmarl} from '@prisma/client'

@Injectable({})
export class AuthService {
  signup() {
    return 'It works!';
  }
  signin() {
    return 'It works!';
  }
}
