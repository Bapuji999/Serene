import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { GenreForm, GenreRow, GenreService } from '../../ServerTypes/MovieDB';

@Decorators.registerClass('Serene1.MovieDB.GenreDialog')
export class GenreDialog extends EntityDialog<GenreRow, any> {
    protected getFormKey() { return GenreForm.formKey; }
    protected getIdProperty() { return GenreRow.idProperty; }
    protected getLocalTextPrefix() { return GenreRow.localTextPrefix; }
    protected getNameProperty() { return GenreRow.nameProperty; }
    protected getService() { return GenreService.baseUrl; }
    protected getDeletePermission() { return GenreRow.deletePermission; }
    protected getInsertPermission() { return GenreRow.insertPermission; }
    protected getUpdatePermission() { return GenreRow.updatePermission; }

    protected form = new GenreForm(this.idPrefix);
}