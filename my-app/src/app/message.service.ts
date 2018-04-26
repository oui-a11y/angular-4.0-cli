import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    for (let i = 0; i < 3; i++) {
      this.messages.push(message);
    }
  }

  clear() {
    this.messages = [];
  }

  constructor() {
  }

}
