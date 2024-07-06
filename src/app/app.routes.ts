import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        loadChildren: () => import('./feature/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: '',
        loadComponent: ()=> import('./shared-ui/components/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
    }
];
