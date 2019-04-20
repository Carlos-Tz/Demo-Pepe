import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
 // url='http://localhost/pepe/';
  url='https://didocu.com/pepegaucho/';

  constructor(private http: HttpClient) { }
  mail_(mail: Object){
    return this.http.post(`${this.url}mail3.php`, JSON.stringify(mail));
  }

}
