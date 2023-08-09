import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { MovieDBGrid } from './MovieDBGrid';

export default function pageInit() {
    initFullHeightGridPage(new MovieDBGrid($('#GridDiv')).element);
}