import { StringEditor, IntegerEditor, DateEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface GenreForm {
    Title: StringEditor;
    Description: StringEditor;
    Storyline: StringEditor;
    Year: IntegerEditor;
    ReleaseDate: DateEditor;
    Runtime: IntegerEditor;
    Kind: IntegerEditor;
}

export class GenreForm extends PrefixedContext {
    static formKey = 'MovieDB.Genre';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!GenreForm.init)  {
            GenreForm.init = true;

            var w0 = StringEditor;
            var w1 = IntegerEditor;
            var w2 = DateEditor;

            initFormType(GenreForm, [
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