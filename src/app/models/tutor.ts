import { Pet } from "./pet";

export interface Tutor {
    id?: number;
  name: string;
  nickname?: string;
  dateOfBirth?: string; 
  pets?: Pet[]; // Referência aos Pets
}
