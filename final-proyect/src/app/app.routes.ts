import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { PrivateComponent } from "./components/private/private.component";
import { SingUpComponent } from "./components/sing-up/sing-up.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { Component } from "@angular/core";

export const routes: Routes = [
	{ path: "home", component: HomeComponent, title: "Home" },
	{ path: "login", component: LoginComponent, title: "Login" },
	{ path: "private", component: PrivateComponent, title: "Private" },
	{ path: "singup", component: SingUpComponent, title: "Sing Up" },
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "**", component: NotFoundComponent, title: "Error 404" }
];
