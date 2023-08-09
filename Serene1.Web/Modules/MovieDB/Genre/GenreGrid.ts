﻿import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { GenreColumns, GenreRow, GenreService } from '../../ServerTypes/MovieDB';
import { GenreDialog } from './GenreDialog';

@Decorators.registerClass('Serene1.MovieDB.GenreGrid')
export class GenreGrid extends EntityGrid<GenreRow, any> {
    protected getColumnsKey() { return GenreColumns.columnsKey; }
    protected getDialogType() { return GenreDialog; }
    protected getRowDefinition() { return GenreRow; }
    protected getService() { return GenreService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}