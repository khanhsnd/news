import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { FirebaseController } from './firebase.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FirebaseService } from './firebase.service';
import * as admin from 'firebase-admin';
import * as firebase from 'firebase-admin';
import * as path from 'path';
@Global()
@Module({
    imports: [HttpModule, ConfigModule.forRoot({
        isGlobal: true
    })],
    controllers: [FirebaseController],
    providers: [FirebaseService,
        {
            provide: 'FIREBASE_ADMIN',
            useFactory: (configService: ConfigService) => {
                const databaseURL = configService.get<string>('FIREBASE_DATABASE_URL');
                if (!admin.apps.length) {
                    admin.initializeApp({
                        credential: firebase.credential.cert(path.join('together-ec6be-b13790f7c674.json')),
                        databaseURL,
                    });
                }

                return admin;
            },
            inject: [ConfigService],
        }
    ],
    exports: ['FIREBASE_ADMIN'],
})
export class FirebaseModule { }
