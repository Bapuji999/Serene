using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.MovieDB.GenreRow>;
using MyRow = Serene1.MovieDB.GenreRow;

namespace Serene1.MovieDB;

public interface IGenreRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class GenreRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGenreRetrieveHandler
{
    public GenreRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}