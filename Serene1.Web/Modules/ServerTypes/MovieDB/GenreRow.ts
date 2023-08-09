import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface GenreRow {
    MovieId?: number;
    Title?: string;
    Description?: string;
    Storyline?: string;
    Year?: number;
    ReleaseDate?: string;
    Runtime?: number;
    Kind?: number;
}

export abstract class GenreRow {
    static readonly idProperty = 'MovieId';
    static readonly nameProperty = 'Title';
    static readonly localTextPrefix = 'MovieDB.Genre';
    static readonly lookupKey = 'MovieDB.Genre';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<GenreRow>('MovieDB.Genre') }
    static async getLookupAsync() { return getLookupAsync<GenreRow>('MovieDB.Genre') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<GenreRow>();
}