import { Tutor } from "./tutor";

export interface Pet {
  id?: number;
  name: string;
  breed: string;
  dateOfBirth: string; 
  color: string;
  weight: number;
  vaccinationDate: string;
  vaccinationType: string;
  tutor?: Tutor; // Referência ao Tutor
}
