import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntryWithUser } from '../models/entry-with-user';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private apiUrl = 'http://localhost/litepost_api/entries';

  constructor(private http: HttpClient) {}

  getEntries(): Observable<EntryWithUser[]> {
    return this.http.get<{success: number, data: EntryWithUser[]}>(this.apiUrl + '/view.php').pipe(
      map( response => response.data )
    );
  }

  // getEntryByID( id: any ): Observable<EntryWithUser>{
  //   return this.http.get<EntryWithUser>( this.apiUrl + '/view.php?id=' + id );
  // }

  getEntryByID(id: string): Observable<EntryWithUser> {
    return this.http.get<{ success: number, data: EntryWithUser[] }>(`${this.apiUrl}/view.php?id=${id}`).pipe(
      map(response => response.data[0]) // Extract the first element from the data array
    );
  }
}
