import { Injectable } from '@nestjs/common';
import * as sql from 'mssql';
import dbConfig from '../config.json';

@Injectable()
export class DbService {
  constructor() {
    sql.connect(dbConfig.musigma);
    console.log('Connected to database');
  }

  async runQuery(query: string) {
    console.log(query);
    const res = sql.query(query);
    return res;
  }
}
