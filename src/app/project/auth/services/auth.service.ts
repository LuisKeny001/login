import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { AuthStatus, LoginResponse, Usuario } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;

  private http = inject(HttpClient);

  // private _currentUser = signal<Usuario | null>(null);
  // private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  // public currentUser = computed(() => this._currentUser());
  // public authStatus = computed(() => this._authStatus());

  constructor() {}

  login(username: string, password: string): any {
    const url = `${this.baseUrl}/login`;
    const body = { username, password };

    return this.http.post<any>(url, body)
    //.pipe(
      // tap(({ User, token }) => {
      //   this._currentUser.set(User);
      //   this._authStatus.set(AuthStatus.aunthenticated);
      //   localStorage.setItem('token', token);

      //   console.log({ User, token });
      // }),
      // map(() => true)

      //TODO: ERRORES
  //  );
  }
}
