import { InjectionToken } from "@angular/core";
import { IAppConfig } from './iapp.config';

export let APP_CONFIG = new InjectionToken("app.config");

export const AppConfig: IAppConfig = {
    endpoint: {
        url: "http://api.vla.vn/",
        api: "http://api.vla.vn/api/"
    }
};
