import { StringEditor, IntegerEditor, DateEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface MovieDBForm {
    Title: StringEditor;
    Description: StringEditor;
    Storyline: StringEditor;
    Year: IntegerEditor;
    ReleaseDate: DateEditor;
    Runtime: IntegerEditor;
    Kind: IntegerEditor;
}

export class MovieDBForm extends PrefixedContext {
    static formKey = 'mov.Genre.MovieDB';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!MovieDBForm.init)  {
            MovieDBForm.init = true;

            var w0 = StringEditor;
            var w1 = IntegerEditor;
            var w2 = DateEditor;

            initFormType(MovieDBForm, [
                'Title', w0,
                'Description', w0,
                'Storyline', w0,
                'Year', w1,
                'ReleaseDate', w2,
                'Runtime', w1,
                'Kind', w1
            ]);
        }
    }
}