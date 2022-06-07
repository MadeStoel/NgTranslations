import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgTranslationsComponent } from '@madestoel/ng-translations';

const routes: Routes = [
  {
    path: 'tra',
    component: NgTranslationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
