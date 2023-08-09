import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { MovieDBColumns, MovieDBRow, MovieDBService } from '../../ServerTypes/mov.Genre';
import { MovieDBDialog } from './MovieDBDialog';

@Decorators.registerClass('Serene1.mov.Genre.MovieDBGrid')
export class MovieDBGrid extends EntityGrid<MovieDBRow, any> {
    protected getColumnsKey() { return MovieDBColumns.columnsKey; }
    protected getDialogType() { return MovieDBDialog; }
    protected getRowDefinition() { return MovieDBRow; }
    protected getService() { return MovieDBService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}