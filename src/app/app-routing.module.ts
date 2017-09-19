import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayout, SimpleLayout } from './containers';
import { AuthGuard } from './services'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'


  },
  {
    path: '',
    component: FullLayout,
    data: {
      title: 'Home'
    },

    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'product',
        loadChildren: './views/product/product.module#ProductModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'share',
        loadChildren: './views/share/share.module#ShareModule',
        canActivate: [AuthGuard]
      }
      //,
      // {
      //   path: 'icons',
      //   loadChildren: './views/icons/icons.module#IconsModule'
      // },
      // {
      //   path: 'widgets',
      //   loadChildren: './views/widgets/widgets.module#WidgetsModule'
      // },
      // {
      //   path: 'charts',
      //   loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      // }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayout,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}