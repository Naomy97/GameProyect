export interface Game {
	id: string;
	title: string;
	price: number;
	// Agrega más propiedades según sea necesario
}

export interface StoreState {
	games: Game[];
	error: string | null;
}
