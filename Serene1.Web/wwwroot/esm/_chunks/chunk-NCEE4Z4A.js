import{a as r,b as n,e as d,f as S}from"./chunk-K3EI6ARL.js";var m=class{};r(m,"GenreColumns"),m.columnsKey="MovieDB.Genre";var g=n(d(),1);var i=class{};r(i,"GenreRow"),i.idProperty="MovieId",i.nameProperty="Title",i.localTextPrefix="MovieDB.Genre",i.deletePermission="Administration:General",i.insertPermission="Administration:General",i.readPermission="Administration:General",i.updatePermission="Administration:General",i.Fields=(0,g.fieldsProxy)();var M=n(d(),1),E;(t=>(t.baseUrl="MovieDB/Genre",t.Methods={Create:"MovieDB/Genre/Create",Update:"MovieDB/Genre/Update",Delete:"MovieDB/Genre/Delete",Retrieve:"MovieDB/Genre/Retrieve",List:"MovieDB/Genre/List"},["Create","Update","Delete","Retrieve","List"].forEach(e=>{t[e]=function(c,u,x){return(0,M.serviceRequest)(t.baseUrl+"/"+e,c,u,x)}})))(E||(E={}));var y=class{};r(y,"MovieColumns"),y.columnsKey="MovieDB.Movie";var B=n(d(),1);var o=class{};r(o,"MovieRow"),o.idProperty="MovieId",o.nameProperty="Title",o.localTextPrefix="MovieDB.Movie",o.deletePermission="General",o.insertPermission="General",o.readPermission="General",o.updatePermission="General",o.Fields=(0,B.fieldsProxy)();var L=n(d(),1),P;(t=>(t.baseUrl="MovieDB/Movie",t.Methods={Create:"MovieDB/Movie/Create",Update:"MovieDB/Movie/Update",Delete:"MovieDB/Movie/Delete",Retrieve:"MovieDB/Movie/Retrieve",List:"MovieDB/Movie/List"},["Create","Update","Delete","Retrieve","List"].forEach(e=>{t[e]=function(c,u,x){return(0,L.serviceRequest)(t.baseUrl+"/"+e,c,u,x)}})))(P||(P={}));var a=n(S(),1),I=n(d(),1);var v=class extends a.PrefixedContext{constructor(l){if(super(l),!v.init){v.init=!0;var t=a.StringEditor,e=a.IntegerEditor,c=a.DateEditor;(0,I.initFormType)(v,["Title",t,"Description",t,"Storyline",t,"Year",e,"ReleaseDate",c,"Runtime",e,"Kind",e])}}},D=v;r(D,"GenreForm"),D.formKey="MovieDB.Genre";var s=n(S(),1);var T=n(S(),1),q=(e=>(e[e.Film=1]="Film",e[e.TvSeries=2]="TvSeries",e[e.MiniSeries=3]="MiniSeries",e))(q||{});T.Decorators.registerEnumType(q,"MovieTutorial.MovieDB.MovieKind","MovieDB.MovieKind");var b=n(d(),1);var R=class extends s.PrefixedContext{constructor(l){if(super(l),!R.init){R.init=!0;var t=s.StringEditor,e=s.IntegerEditor,c=s.DateEditor,u=s.EnumEditor;(0,b.initFormType)(R,["Title",t,"Description",t,"Storyline",t,"Year",e,"ReleaseDate",c,"GenreId",e,"Runtime",e,"Kind",u])}}},f=R;r(f,"MovieForm"),f.formKey="MovieDB.Movie";export{m as a,D as b,i as c,E as d,y as e,f,o as g,P as h};
//# sourceMappingURL=chunk-NCEE4Z4A.js.map
