import { MovieKind } from "../MovieTutorial/MovieDB.MovieKind";
import { fieldsProxy } from "@serenity-is/corelib/q";

export interface MovieRow {
    MovieId?: number;
    Title?: string;
    Description?: string;
    Storyline?: string;
    Year?: number;
    ReleaseDate?: string;
    Runtime?: number;
    Kind?: MovieKind;
    GenreId?: number;
    GenreName?: string;
}

export abstract class MovieRow {
    static readonly idProperty = 'MovieId';
    static readonly nameProperty = 'Title';
    static readonly localTextPrefix = 'MovieDB.Movie';
    static readonly deletePermission = 'General';
    static readonly insertPermission = 'General';
    static readonly readPermission = 'General';
    static readonly updatePermission = 'General';

    static readonly Fields = fieldsProxy<MovieRow>();
}