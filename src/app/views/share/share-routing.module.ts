import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusesComponent } from './status/statuses.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Share'
        },
        children: [
            {
                path: 'statuses',
                component: StatusesComponent,
                data: {
                    title: 'Danh sách trạng thái'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShareRoutingModule { }