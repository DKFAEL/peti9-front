import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PetService } from 'src/app/service/pet.service';
import { TutorService } from 'src/app/service/tutor.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private petService: PetService,
    private tutorService: TutorService
  ) {
    this.registrationForm = this.formBuilder.group({
      tutor: this.formBuilder.group({
        name: ['', Validators.required],
        nickname: [''],
        dateOfBirth: ['', Validators.required]
      }),
      pets: this.formBuilder.array([]),
    });
  }

  get petControls() {
    return (this.registrationForm.get('pets') as FormArray).controls;
  }

  getPetGroup(index: number): FormGroup {
    return this.petControls.at(index) as FormGroup;
  }

  addPet() {
    const petFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      color: ['', Validators.required],
      weight: ['', Validators.required],
      vaccinationDate: ['', Validators.required],
      vaccinationType: ['', Validators.required]
    });

    this.petControls.push(petFormGroup);
  }

  removePet(index: number) {
    this.petControls.splice(index, 1);
  }

  register(): void {
    const tutorData = this.registrationForm.get('tutor')?.value;
    const petData = this.registrationForm.get('pets')?.value;

    this.tutorService.registerTutor(tutorData).subscribe((registeredTutor) => {
      if (registeredTutor && registeredTutor.id !== undefined) {
        this.petService.registerPet(registeredTutor.id, petData).subscribe((registeredPet) => {
          console.log('Tutor and pet registered successfully:', registeredTutor, registeredPet);
        });
      }
    });

  }
}
