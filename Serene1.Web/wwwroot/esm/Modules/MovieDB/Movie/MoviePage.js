import{e as f,f as p,g as n,h as s}from"../../../_chunks/chunk-NCEE4Z4A.js";import{a as e,b as c,c as l,e as u,f as d}from"../../../_chunks/chunk-K3EI6ARL.js";var v=c(u(),1);var a=c(d(),1),g=c(u(),1);var m=c(d(),1);var t=class extends m.EntityDialog{constructor(){super(...arguments);this.form=new p(this.idPrefix)}getFormKey(){return p.formKey}getRowDefinition(){return n}getService(){return s.baseUrl}};e(t,"MovieDialog"),t=l([m.Decorators.registerClass("Serene1.MovieDB.MovieDialog")],t);var r=class extends a.EntityGrid{getColumnsKey(){return f.columnsKey}getDialogType(){return t}getRowDefinition(){return n}getService(){return s.baseUrl}constructor(o){super(o)}getQuickSearchFields(){let o=e(x=>(0,g.text)(`Db.${n.localTextPrefix}.${x}`).toLowerCase(),"txt"),i=n.Fields;return[{name:"",title:"all"},{name:i.Description,title:o(i.Description)},{name:i.Storyline,title:o(i.Storyline)},{name:i.Year,title:o(i.Year)}]}};e(r,"MovieGrid"),r=l([a.Decorators.registerClass("MovieTutorial.MovieDB.MovieGrid")],r);function D(){(0,v.initFullHeightGridPage)(new r($("#GridDiv")).element)}e(D,"pageInit");export{D as default};
//# sourceMappingURL=MoviePage.js.map
