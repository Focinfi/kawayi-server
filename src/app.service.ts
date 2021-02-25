import { Injectable } from '@nestjs/common';
const blake2 = require('blake2');

@Injectable()
export class AppService {
  getHello(): string {    
    let h = blake2.createHash('blake2b', {digestLength: 32});
    h.update(Buffer.from("testing"));
    return h.digest("hex");
  }
}
