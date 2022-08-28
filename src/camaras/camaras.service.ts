import { Injectable } from '@nestjs/common';
import { findCamaraDTO } from './dto/findCamaraDTO';

import { v4 as uuid } from 'uuid';

@Injectable()
export class CamarasService {

  findOne(body: findCamaraDTO) {
    let camara = {
      sedeId: body.sedeId,
      aforo: body.aforo,
      slots: this.getRandom(1, body.aforo),
      camaraId: uuid(),
    };
    return camara;
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }; 

}
