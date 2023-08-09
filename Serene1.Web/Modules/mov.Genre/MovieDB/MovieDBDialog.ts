import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { MovieDBForm, MovieDBRow, MovieDBService } from '../../ServerTypes/mov.Genre';

@Decorators.registerClass('Serene1.mov.Genre.MovieDBDialog')
export class MovieDBDialog extends EntityDialog<MovieDBRow, any> {
    protected getFormKey() { return MovieDBForm.formKey; }
    protected getRowDefinition() { return MovieDBRow; }
    protected getService() { return MovieDBService.baseUrl; }

    protected form = new MovieDBForm(this.idPrefix);
}