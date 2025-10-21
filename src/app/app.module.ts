import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../modules/auth/auth.module';
import { UsersModule } from '../modules/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { DatabaseService } from 'src/database/database.service';
import { CardsModule } from 'src/modules/cards/cards.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    PassportModule,
    CardsModule
  ],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
