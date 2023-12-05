import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    RegistrationComponent,

    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  exports: [
    HeaderComponent,
    RegistrationComponent
  ]
})
export class ComponentsModule { }