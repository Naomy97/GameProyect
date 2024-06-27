export interface Videojuego {
	plataform: {
		ps: boolean;
		xbox: boolean;
		switch: boolean;
		pc: boolean;
	};
	price: {
		ps: number;
		xbox: number;
		switch: number;
		pc: number;
	};
	_id: any;
	name: string;
	frontPage: string;
	genre: string;
	category: string;
	calification: number;
	players: any;
	online: boolean;
	editor: string;
	departureDate: Date;
	classification: string;
	downloadSize: string;
	soppotedLenguages: string;
	historyMode: boolean;
	historyTime: Number;
}
