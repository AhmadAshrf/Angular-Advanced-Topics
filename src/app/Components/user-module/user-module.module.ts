import { AuthGuard } from './../../gurd/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EdituserProfileComponent } from './edituser-profile/edituser-profile.component';


const routes:Routes = [
  {path: '', redirectTo:'/user/userProfile', pathMatch:'full'},
  {path: 'userProfile', component:UserProfileComponent, canActivate:[AuthGuard]},
  {path: 'editProfile', component:EdituserProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    UserProfileComponent,
    EdituserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModuleModule { }
