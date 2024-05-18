import { Inject, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { app } from 'firebase-admin';

@Injectable()
export class FirebaseService {
    oauthClient: app.App;
    private database: admin.database.Database;
    constructor(@Inject('FIREBASE_ADMIN') private readonly firebase: typeof admin) {
        this.database = this.firebase.database();
        this.oauthClient = this.firebase.app()
    }

    // Example method to read data
    async getData(path: string): Promise<any> {
        const ref = this.database.ref(path);
        const snapshot = await ref.once('value');
        return snapshot.val();
    }

    // Example method to write data
    async setData(path: string, data: any): Promise<void> {
        const ref = this.database.ref(path).push();
        await ref.set(data);
    }

    async updateData(path: string, data: any): Promise<void> {
        const ref = this.database.ref(path);
        await ref.set(data);
    }
    async delete(path: string): Promise<void> {
        const ref = this.database.ref(path);
        await ref.remove()
    }
    async getTokenInfo() {
        const tokenInfo = await this.oauthClient
            .auth()
            .verifyIdToken('loginDto.token', true);

    }
}
