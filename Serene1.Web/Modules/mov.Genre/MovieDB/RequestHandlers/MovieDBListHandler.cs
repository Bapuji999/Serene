using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.mov.Genre.MovieDBRow>;
using MyRow = Serene1.mov.Genre.MovieDBRow;

namespace Serene1.mov.Genre;

public interface IMovieDBListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class MovieDBListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieDBListHandler
{
    public MovieDBListHandler(IRequestContext context)
            : base(context)
    {
    }
}