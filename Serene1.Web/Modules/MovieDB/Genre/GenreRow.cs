using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Serene1.MovieDB;

[ConnectionKey("Default"), Module("MovieDB"), TableName("[mov].[Genre]")]
[DisplayName("Genre"), InstanceName("Genre")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[LookupScript("MovieDB.Genre")]
public sealed class GenreRow : Row<GenreRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Movie Id"), Identity, IdProperty]
    public int? MovieId
    {
        get => fields.MovieId[this];
        set => fields.MovieId[this] = value;
    }

    [DisplayName("Title"), Size(200), NotNull, QuickSearch, NameProperty]
    public string Title
    {
        get => fields.Title[this];
        set => fields.Title[this] = value;
    }

    [DisplayName("Description"), Size(1000)]
    public string Description
    {
        get => fields.Description[this];
        set => fields.Description[this] = value;
    }

    [DisplayName("Storyline")]
    public string Storyline
    {
        get => fields.Storyline[this];
        set => fields.Storyline[this] = value;
    }

    [DisplayName("Year")]
    public int? Year
    {
        get => fields.Year[this];
        set => fields.Year[this] = value;
    }

    [DisplayName("Release Date")]
    public DateTime? ReleaseDate
    {
        get => fields.ReleaseDate[this];
        set => fields.ReleaseDate[this] = value;
    }

    [DisplayName("Runtime")]
    public int? Runtime
    {
        get => fields.Runtime[this];
        set => fields.Runtime[this] = value;
    }

    [DisplayName("Kind"), NotNull]
    public int? Kind
    {
        get => fields.Kind[this];
        set => fields.Kind[this] = value;
    }

    public class RowFields : RowFieldsBase
    {
        public Int32Field MovieId;
        public StringField Title;
        public StringField Description;
        public StringField Storyline;
        public Int32Field Year;
        public DateTimeField ReleaseDate;
        public Int32Field Runtime;
        public Int32Field Kind;

    }
}