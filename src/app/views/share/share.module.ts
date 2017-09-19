import { NgModule } from '@angular/core';
import { ShareRoutingModule } from './share-routing.module';
import { StatusesComponent } from './status/statuses.component';


@NgModule({
    declarations: [StatusesComponent],
    imports: [
        ShareRoutingModule
    ]
})
export class ShareModule {

}