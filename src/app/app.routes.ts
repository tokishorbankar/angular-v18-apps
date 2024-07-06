import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: ()=> import('./shared-ui/components/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
    },
    {
        path: 'admin',
        loadChildren: () => import('./feature/admin/admin.module').then(m => m.AdminModule)
    },
    
];
