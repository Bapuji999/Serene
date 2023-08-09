﻿using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.MovieDB.MovieRow>;
using MyRow = Serene1.MovieDB.MovieRow;

namespace Serene1.MovieDB;

public interface IMovieListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class MovieListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieListHandler
{
    public MovieListHandler(IRequestContext context)
            : base(context)
    {
    }
}