import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
constructor(private httpClient: HttpClient) {}
    userProfile: object = {};

    getCurrentUserDetails(userDetails:any): Observable<any> {
        return this.httpClient.post('http://localhost:9080/checkCredentials', {userName: userDetails.userName},{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

}