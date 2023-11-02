import { Options } from '@mikro-orm/mysql';
import * as process from 'process';

const MikroOrmConfig: Options = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  dbName: process.env.DB_NAME,
  timezone: '+07:00',
  entities: ['./dist/common/entities'],
  entitiesTs: ['./src/common/entities'],
  type: 'mysql',
}

export default MikroOrmConfig
