using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.MovieDB.GenreRow>;
using MyRow = Serene1.MovieDB.GenreRow;

namespace Serene1.MovieDB;

public interface IGenreListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class GenreListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGenreListHandler
{
    public GenreListHandler(IRequestContext context)
            : base(context)
    {
    }
}