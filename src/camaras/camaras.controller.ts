import { Controller, Post, Body } from '@nestjs/common';
import { CamarasService } from './camaras.service';
import { findCamaraDTO } from './dto/findCamaraDTO';

@Controller('camaras')
export class CamarasController {
  constructor(private readonly camarasService: CamarasService) {}

  @Post('slots')
  findOne(@Body() body: findCamaraDTO) {
    return this.camarasService.findOne(body);
  }

}
