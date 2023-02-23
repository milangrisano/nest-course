import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { Console } from 'console';
import { ConfigModule } from '@nestjs/config';
import { JoiValidationSchema } from './config/joi.validation';


@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: JoiValidationSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),
    MongooseModule.forRoot( process.env.MONGODB ),
    PokemonModule,
    CommonModule,
    SeedModule
  ],  
})
export class AppModule {}
