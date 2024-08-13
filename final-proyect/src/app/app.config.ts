import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideToastr } from "ngx-toastr";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { shopcarReducer } from "./store/reducers/shopcar.reducer";
import { storeReducer } from "./store/reducers/store.reducer";
import { StoreEffects } from "./store/effects/store.effects";

@NgModule({
	imports: [
		AppComponent,
		BrowserModule,
		HttpClientModule,
		StoreModule.forRoot({ shopcar: shopcarReducer, store: storeReducer }),
		EffectsModule.forRoot([StoreEffects]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false })
	],
	providers: []
})
export class AppModule {}

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(),
		provideAnimations(),
		provideToastr({
			timeOut: 4000,
			positionClass: "toast-top-center",
			preventDuplicates: true,
			progressBar: true
		})
	]
};
