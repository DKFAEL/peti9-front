import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';

const routes: Routes = [
    {
         path: '',
         component: HomeComponent,
        },
        {
            path: 'registration',
            component: RegistrationComponent,
          },
        
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }