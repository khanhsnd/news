import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { API_ENDPOINT } from './dto/enum';
@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {

  }
  async getGoldExchangeRate() {
    const { data } = await lastValueFrom(this.httpService.get(API_ENDPOINT.BTMC_GOLD_EXCHANGE));
    return data.DataList.Data;
  }
}
