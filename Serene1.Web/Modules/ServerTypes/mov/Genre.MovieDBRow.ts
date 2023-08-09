import { fieldsProxy } from "@serenity-is/corelib/q";

export interface MovieDBRow {
    MovieId?: number;
    Title?: string;
    Description?: string;
    Storyline?: string;
    Year?: number;
    ReleaseDate?: string;
    Runtime?: number;
    Kind?: number;
}

export abstract class MovieDBRow {
    static readonly idProperty = 'MovieId';
    static readonly nameProperty = 'Title';
    static readonly localTextPrefix = 'mov.Genre.MovieDB';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<MovieDBRow>();
}