using Serenity.ComponentModel;
using System;

namespace Serene1.MovieDB.Forms;

[FormScript("MovieDB.Genre")]
[BasedOnRow(typeof(GenreRow), CheckNames = true)]
public class GenreForm
{
    public string Title { get; set; }
    public string Description { get; set; }
    public string Storyline { get; set; }
    public int Year { get; set; }
    public DateTime ReleaseDate { get; set; }
    public int Runtime { get; set; }
    public int Kind { get; set; }
}