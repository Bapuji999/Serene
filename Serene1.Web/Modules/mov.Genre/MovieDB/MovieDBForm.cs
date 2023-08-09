using Serenity.ComponentModel;
using System;

namespace Serene1.mov.Genre.Forms;

[FormScript("mov.Genre.MovieDB")]
[BasedOnRow(typeof(MovieDBRow), CheckNames = true)]
public class MovieDBForm
{
    public string Title { get; set; }
    public string Description { get; set; }
    public string Storyline { get; set; }
    public int Year { get; set; }
    public DateTime ReleaseDate { get; set; }
    public int Runtime { get; set; }
    public int Kind { get; set; }
}