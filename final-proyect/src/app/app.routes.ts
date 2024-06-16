import { Routes } from "@angular/router";
import { activateGuard } from "./guards/activate.guard";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { GameStoreComponent } from "./components/game-store/game-store.component";
import { SingUpComponent } from "./components/sing-up/sing-up.component";
import { SupportComponent } from "./components/support/support.component";
import { CommunityComponent } from "./components/community/community.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { Component } from "@angular/core";

export const routes: Routes = [
	{ path: "home", component: HomeComponent, title: "Home" },
	{ path: "login", component: LoginComponent, title: "Login" },
	{ path: "gamestore", component: GameStoreComponent, title: "Game Store", canActivate: [activateGuard] },
	{ path: "singup", component: SingUpComponent, title: "Sing Up" },
	{ path: "support", component: SupportComponent, title: "Support", canActivate: [activateGuard] },
	{ path: "community", component: CommunityComponent, title: "Community", canActivate: [activateGuard] },
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "**", component: NotFoundComponent, title: "Error 404" }
];
