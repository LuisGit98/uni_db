import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = [
    {
      name: 'jose',
      last: 'chepo',
      age: 23,
    },
    {
      name: 'ramon',
      last: 'cepo',
      age: 23,
    },
    {
      name: 'robert',
      last: 'cheo',
      age: 23,
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getData(){
    return this.users;
  }
}
