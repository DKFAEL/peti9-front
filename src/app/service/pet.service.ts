import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet'; 

@Injectable({
  providedIn: 'root'
})
export class PetService {

  
  private apiUrl = 'http://localhost:8080/api/pets';

  constructor(private http: HttpClient) {}

  registerPet(tutorId: number, pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${this.apiUrl}/${tutorId}`, pet);
  }

  getPetById(petId: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.apiUrl}/${petId}`);
  }

  getPetsByName(name: string): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.apiUrl}?name=${name}`);
  }

  updatePetName(petId: number, newName: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${petId}`, { newName });
  }

  deletePet(petId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${petId}`);
  }
}