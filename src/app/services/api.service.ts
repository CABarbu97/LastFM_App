import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://ws.audioscrobbler.com/2.0/'; // Replace with your API endpoint

  private API_KEY = 'c705f1c563b229fcb8922f6e3f964780'
  private SHARED_SECRET = 'cebcbdec5b63ab1ab768d8cdb1fab53b'

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`);
  }

  getTopArtists(): Observable<any> {
    const url = `${this.apiUrl}?method=chart.gettopartists&api_key=${this.API_KEY}&format=json`;
    return this.http.get<any>(url);
  }

  // Add more methods for other operations (e.g., postData, updateData, deleteData)
}