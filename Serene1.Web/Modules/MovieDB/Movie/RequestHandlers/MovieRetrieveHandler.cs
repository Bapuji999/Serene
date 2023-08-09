using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.MovieDB.MovieRow>;
using MyRow = Serene1.MovieDB.MovieRow;

namespace Serene1.MovieDB;

public interface IMovieRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class MovieRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieRetrieveHandler
{
    public MovieRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}