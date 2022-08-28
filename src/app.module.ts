import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CamarasModule } from './camaras/camaras.module';

@Module({
  imports: [CamarasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
