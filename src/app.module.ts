import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './modules/firebase/firebase.module';

@Module({
  imports: [HttpModule, FirebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
