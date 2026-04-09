import { HOME_PATHS } from "@shared/constants/paths.constants";
import { HomeComponent } from "./pages/home/home.component";
import { Route } from "@angular/router";

export const HOME_ROUTES: Route[] = [
    { path: HOME_PATHS.HOME, component : HomeComponent }
]