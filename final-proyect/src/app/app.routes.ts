import { Routes } from "@angular/router";
import { activateGuard } from "./guards/activate.guard";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { PrivateComponent } from "./components/private/private.component";
import { SingUpComponent } from "./components/sing-up/sing-up.component";
import { SupportComponent } from "./components/support/support.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { Component } from "@angular/core";

export const routes: Routes = [
	{ path: "home", component: HomeComponent, title: "Home" },
	{ path: "login", component: LoginComponent, title: "Login" },
	{ path: "gamestore", component: PrivateComponent, title: "Game Store", canActivate: [activateGuard] },
	{ path: "singup", component: SingUpComponent, title: "Sing Up" },
	{ path: "support", component: SupportComponent, title: "Support", canActivate: [activateGuard] },
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "**", component: NotFoundComponent, title: "Error 404" }
];
