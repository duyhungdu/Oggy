import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../services';


@Component({
    selector: 'app - statuses',
    templateUrl: './statuses.component.html'
})
export class StatusesComponent implements OnInit {
    constructor(private _apiService: APIService) {
    }
    config: any = {
        keyword: "",
        currentPage: 1,
        collectionSize: 0,
        recordsPerPage: 15,
        maxSize: 5
    };
    modules: any = [{ code: 'product', title: 'Sản phẩm' }, { code: 'newsarticle', title: 'Bài viết' }];
    selectedModule: any = { code: 'product', title: 'Sản phẩm' };
    statuses: any = [];

    param: any = {
        type: this.selectedModule.code,
        keyword: this.config.keyword,
        pageSize: this.config.recordsPerPage,
        pageNumber: this.config.currentPage
    }
    loadData(): void {
        this._apiService.get("Status/Search", this.param).subscribe(response => {
            this.statuses = response.data;
            this.config.collectionSize = response.totalItems;
        });
    }
    changePage(pageIndex) {
        this.param.pageNumber = pageIndex;
        this.loadData();
    }
    ngOnInit(): void {
        this.loadData();
    }
    filter(): void {
        this.param.type = this.selectedModule.code;
        this.param.keyword = this.config.keyword;
        this.loadData();
    }
    selectModule($event) {
        $event.preventDefault();
        this.param.type = $event.target.value;
        this.param.keyword = this.config.keyword;
        this.loadData();
    }
}