import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersModule } from './abonnements/abonnements.module';
import { ConfigModule } from '@nestjs/config';
import { EurekaModule } from 'nestjs-eureka';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB_URL),EurekaModule.forRoot({
    eureka: {
        host: process.env.EUREKA_HOST,
        port: process.env.EUREKA_PORT,
        servicePath: '/eureka/apps/',
        maxRetries: 10,
        requestRetryDelay: 10000,
    },
    service: {
        name: 'abonnement-service',
        port: parseInt(process.env.APP_PORT) || 5000,
    },
}), UsersModule], 
})
export class AppModule {}
