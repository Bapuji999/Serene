using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Serene1.mov.Genre.Pages;

[PageAuthorize(typeof(MovieDBRow))]
public class MovieDBPage : Controller
{
    [Route("mov.Genre/MovieDB")]
    public ActionResult Index()
    {
        return this.GridPage("@/mov.Genre/MovieDB/MovieDBPage",
            MovieDBRow.Fields.PageTitle());
    }
}