using MovieTutorial.MovieDB;
using Serenity.ComponentModel;
using System;

namespace Serene1.MovieDB.Forms;

[FormScript("MovieDB.Movie")]
[BasedOnRow(typeof(MovieRow), CheckNames = true)]
public class MovieForm
{
    public string Title { get; set; }
    public string Description { get; set; }
    public string Storyline { get; set; }
    public int Year { get; set; }
    public DateTime ReleaseDate { get; set; }
    public int GenreId { get; set; }
    public int Runtime { get; set; }
    public MovieKind Kind { get; set; }
}