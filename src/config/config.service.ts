import * as dotenv from 'dotenv';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };
  getAppPort: any;

  constructor() {
    dotenv.config();
    this.envConfig = process.env;
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
