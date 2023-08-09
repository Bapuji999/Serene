import { Decorators, EntityGrid, QuickSearchField } from '@serenity-is/corelib';
import { text } from '@serenity-is/corelib/q';
import { MovieColumns, MovieRow, MovieService } from '../../ServerTypes/MovieDB';
import { MovieDialog } from './MovieDialog';

@Decorators.registerClass('MovieTutorial.MovieDB.MovieGrid')
export class MovieGrid extends EntityGrid<MovieRow, any> {
    protected getColumnsKey() { return MovieColumns.columnsKey; }
    protected getDialogType() { return MovieDialog; }
    protected getRowDefinition() { return MovieRow; }
    protected getService() { return MovieService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }

    protected getQuickSearchFields(): QuickSearchField[] {
        const txt = (s) =>
            text(`Db.${MovieRow.localTextPrefix}.${s}`).toLowerCase();
        const fld = MovieRow.Fields;

        return [
            { name: "", title: "all" },
            { name: fld.Description, title: txt(fld.Description) },
            { name: fld.Storyline, title: txt(fld.Storyline) },
            { name: fld.Year, title: txt(fld.Year) }
        ];
    }
}