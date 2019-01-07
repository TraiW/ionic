import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable()
export class MovementData {

    constructor(public http: HttpClient) {
        console.log('Hello MovementData Provider');
    }

    getRemoteData(){
        this.http.get('http://localhost:3000/json').pipe(
            map(res => res )).subscribe( data => console.log(data) );
        
    }
}