using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Serene1.mov.Genre.MovieDBRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.mov.Genre.MovieDBRow;

namespace Serene1.mov.Genre;

public interface IMovieDBSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class MovieDBSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieDBSaveHandler
{
    public MovieDBSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}