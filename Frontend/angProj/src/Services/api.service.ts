import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://todoapp-fullstack-p1i3.onrender.com/api/Values';

  constructor(private http: HttpClient) { }

  private getOrCreateDeviceId(): string {
    let id = localStorage.getItem('my_device_id');
    if (!id) {

      id = crypto.randomUUID();
      localStorage.setItem('my_device_id', id);
    }

    return id;
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-Device-Id': this.getOrCreateDeviceId()
    });
  }

  getItems(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/Get-List`, { headers: this.getHeaders() });;
  }

  getActiveItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Active`, { headers: this.getHeaders() });
  }

  getCompletedItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Completed`, { headers: this.getHeaders() });
  }

  addNewItem(item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Add-Item`, item, { headers: this.getHeaders() });
  }

  updateItemStatus(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-item/${id}`, {}, { headers: this.getHeaders() });
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Delete-Item/${id}`, { headers: this.getHeaders() });
  }
}
