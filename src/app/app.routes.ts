import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import { Feedback } from './feedback/feedback';




export const routes: Routes = [
    {
        path:'',
        redirectTo: 'demo',
        pathMatch: 'full',
    },
    {
        path: 'demo',
        component: Demo,
    },

{
    path: 'feedback',
    component: Feedback,
}

];
