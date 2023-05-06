import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LabsModule } from './labs/labs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lab } from './labs/lab.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database:'db.sqlite',
    entities:[Lab],
    synchronize: true
  }), LabsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
