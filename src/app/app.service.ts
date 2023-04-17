export class AppService {

    userProfile: object = {};

    get userDetails(): any {
        return this.userDetails.clone();
    }

}