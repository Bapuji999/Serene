using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serene1.mov.Genre.MovieDBRow;

namespace Serene1.mov.Genre;

public interface IMovieDBDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class MovieDBDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMovieDBDeleteHandler
{
    public MovieDBDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}