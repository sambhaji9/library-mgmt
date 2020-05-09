export interface ISubject {
	_id: string;
	name: string;
	databaseName: string;
}

export interface IBook {
	_id: string;
	name: string;
	language: string;
	description: string;
	availability: boolean;
}
