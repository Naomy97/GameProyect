import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExploreComponent } from "./explore.component";
import { By } from "@angular/platform-browser";

describe("ExploreComponent", () => {
	let component: ExploreComponent;
	let fixture: ComponentFixture<ExploreComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ExploreComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ExploreComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should render game titles", () => {
		const dummyGames = [
			{ id: 1, name: "Game 1" },
			{ id: 2, name: "Game 2" }
		];
		component.games = dummyGames;
		fixture.detectChanges();

		const compiled = fixture.nativeElement;
		const gameElements = compiled.querySelectorAll(".game-title");
		expect(gameElements.length).toBe(2);
		expect(gameElements[0].textContent).toContain("Game 1");
	});
});
