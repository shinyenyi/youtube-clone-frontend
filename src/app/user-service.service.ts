import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  subscribeToUser(userId: string): Observable<boolean> {
    return this.http.post<boolean>("http://localhost:8080/api/user/subscribe/" + userId, null);
  }

  unSubscribeFromUser(userId: string): Observable<boolean> {
    return this.http.post<boolean>("http://localhost:8080/api/user/unsubscribe/" + userId, null);
  }

  registerUser() {
    this.http.get("http://localhost:8080/api/user/register", { responseType: "text" }).subscribe(
      {
        next: data => {
          sessionStorage.setItem("userId", data);
        },
        error: error => { },
        complete: () => { }
      }
    );
  }
}
