/**
 * Interface for subject area
 */
export interface ISubject {
	_id: string;
	name: string;
	databaseName: string;
}

/**
 * Interface for book
 */
export interface IBook {
	_id: string;
	name: string;
	language: string;
	description: string;
	availability: boolean;
	studentId: string;
	databaseName?: string;
}
