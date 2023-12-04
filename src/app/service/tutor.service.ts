import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutor } from '../models/tutor'; 

@Injectable({
  providedIn: 'root',
})
export class TutorService {
  private apiUrl = 'http://localhost:8080/api/tutors';

  constructor(private http: HttpClient) {}

  registerTutor(tutor: Tutor): Observable<Tutor> {
    return this.http.post<Tutor>(this.apiUrl, tutor);
  }

  getTutorById(tutorId: number): Observable<Tutor> {
    return this.http.get<Tutor>(`${this.apiUrl}/${tutorId}`);
  }

  getTutorsByName(name: string): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(`${this.apiUrl}?name=${name}`);
  }

  getAllTutors(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(`${this.apiUrl}/all`);
  }
}
