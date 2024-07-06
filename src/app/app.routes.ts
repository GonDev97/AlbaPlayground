import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () =>
          import('./features/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'exercise1',
        loadComponent: () =>
          import('./features/exercises/exercise1/exercise1.component').then(m => m.Exercise1Component),
    },
    {
        path: 'exercise2',
        loadComponent: () =>
          import('./features/exercises/exercise2/exercise2.component').then(m => m.Exercise2Component),
    },
    {
        path: 'exercise3',
        loadComponent: () =>
            import('./features/exercises/exercise3/exercise3.component').then(m => m.Exercise3Component),
    },
    {
        path: 'exercise4',
        loadComponent: () =>
            import('./features/exercises/exercise4/exercise4.component').then(m => m.Exercise4Component),
    },
    {
        path: 'exercise5',
        loadComponent: () =>
            import('./features/exercises/exercise5/exercise5.component').then(m => m.Exercise5Component),
    },
    
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
