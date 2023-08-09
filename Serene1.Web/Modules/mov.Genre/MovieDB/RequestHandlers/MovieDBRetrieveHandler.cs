using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.mov.Genre.MovieDBRow>;
using MyRow = Serene1.mov.Genre.MovieDBRow;

namespace Serene1.mov.Genre;

public interface IMovieDBRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class MovieDBRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieDBRetrieveHandler
{
    public MovieDBRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}