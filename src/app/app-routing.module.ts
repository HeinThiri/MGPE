import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkPageComponent } from './Pages/link-page/link-page.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {path:'link',component:LinkPageComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
