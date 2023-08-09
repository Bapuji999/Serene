using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Serene1.mov.Genre.Columns;

[ColumnsScript("mov.Genre.MovieDB")]
[BasedOnRow(typeof(MovieDBRow), CheckNames = true)]
public class MovieDBColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int MovieId { get; set; }
    [EditLink]
    public string Title { get; set; }
    public string Description { get; set; }
    public string Storyline { get; set; }
    public int Year { get; set; }
    public DateTime ReleaseDate { get; set; }
    public int Runtime { get; set; }
    public int Kind { get; set; }
}