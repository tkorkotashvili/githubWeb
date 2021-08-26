import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//local imports
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';
import { RepositoryContributorsComponent } from './pages/repository-contributors/repository-contributors.component';

export const routes: Routes = [

  {
    path: "users",
    children: [
      {
        path: "",
        component: ListComponent
      },
      {
        path: ":user/details",
        component: DetailsComponent
      },
      {
        path: ":user/details/:repository/contributors",
        component: RepositoryContributorsComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
