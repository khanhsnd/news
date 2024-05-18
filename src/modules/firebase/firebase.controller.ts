import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { TestDto } from 'src/dto/test.dto';

@Controller('firebase')
export class FirebaseController {
    constructor(
        private readonly _firebaseService: FirebaseService
    ) { }
    @Post(':path')
    async setData(@Param('path') path: string, @Body() data: TestDto) {
        await this._firebaseService.setData(path, data);
        return { message: 'Data set successfully' };
    }

}
