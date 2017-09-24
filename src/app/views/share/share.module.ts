import { NgModule } from '@angular/core';
import { ShareRoutingModule } from './share-routing.module';
import { StatusesComponent } from './status/statuses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes';






@NgModule({
    declarations: [StatusesComponent],
    imports: [
        ShareRoutingModule,
        NgbModule,
        CommonModule,
        FormsModule,
        PipesModule
    ]

})
export class ShareModule {

}