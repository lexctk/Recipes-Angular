(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{oQBx:function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=function(){return function(){}}(),i=u("pMnS"),o=u("ZYCi"),r=u("Ip0R"),c=function(){return function(n,l,u,e){this.name=n,this.description=l,this.imagePath=u,this.ingredients=e}}(),a=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),s=e.nb({encapsulation:0,styles:[[".img-thumbnail[_ngcontent-%COMP%]{max-width:150px;max-height:300px;-o-object-fit:cover;object-fit:cover}a[_ngcontent-%COMP%]{cursor:pointer;color:inherit}"]],data:{}});function p(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,13,"a",[["class","list-group-item clearfix mt-2"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==e.zb(n,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.ob(1,671744,[[2,4]],0,o.n,[o.k,o.a,r.g],{routerLink:[0,"routerLink"]},null),e.Ab(2,1),e.ob(3,1720320,null,2,o.m,[o.k,e.k,e.D,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.Fb(603979776,1,{links:1}),e.Fb(603979776,2,{linksWithHrefs:1}),(n()(),e.pb(6,0,null,null,7,"div",[["class","d-flex"]],null,null,null,null,null)),(n()(),e.pb(7,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.pb(8,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),e.Hb(9,null,["",""])),(n()(),e.pb(10,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Hb(11,null,["",""])),(n()(),e.pb(12,0,null,null,1,"div",[["class","ml-auto"]],null,null,null,null,null)),(n()(),e.pb(13,0,null,null,0,"img",[["class","img-thumbnail"]],[[8,"src",4],[8,"alt",0]],null,null,null,null))],function(n,l){var u=n(l,2,0,l.component.i);n(l,1,0,u),n(l,3,0,"active")},function(n,l){var u=l.component;n(l,0,0,e.zb(l,1).target,e.zb(l,1).href),n(l,9,0,u.recipe.name),n(l,11,0,u.recipe.description),n(l,13,0,u.recipe.imagePath,e.rb(1,"",u.recipe.name,""))})}var b=u("ceC1"),d=function(){function n(n){this.recipeService=n}return n.prototype.ngOnInit=function(){var n=this;this.recipes=this.recipeService.getRecipes(),this.subscription=this.recipeService.recipesChanged.subscribe(function(l){n.recipes=l})},n.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},n}(),g=e.nb({encapsulation:0,styles:[[""]],data:{}});function m(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-recipe-item",[],null,null,null,p,s)),e.ob(1,114688,null,0,a,[],{recipe:[0,"recipe"],i:[1,"i"]},null)],function(n,l){n(l,1,0,l.context.$implicit,l.context.index)},null)}function h(n){return e.Jb(0,[(n()(),e.gb(16777216,null,null,1,null,m)),e.ob(1,278528,null,0,r.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(2,0,null,null,2,"button",[["class","btn btn-primary mt-3"],["routerLink","new"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==e.zb(n,3).onClick()&&t),t},null,null)),e.ob(3,16384,null,0,o.l,[o.k,o.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),(n()(),e.Hb(-1,null,["New Recipe"]))],function(n,l){n(l,1,0,l.component.recipes),n(l,3,0,"new")},null)}var v=u("GXvH"),f=function(){function n(n,l){this.dataStorageService=n,this.recipeService=l}return n.prototype.ngOnInit=function(){var n=this;this.recipeService.getRecipes().length<=0&&this.dataStorageService.getRecipes().subscribe(function(l){n.recipeService.setRecipes(l)})},n}(),z=e.nb({encapsulation:0,styles:[[""]],data:{}});function C(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,2,"div",[["class","col-md-4"]],null,null,null,null,null)),(n()(),e.pb(2,0,null,null,1,"app-recipe-list",[],null,null,null,h,g)),e.ob(3,245760,null,0,d,[b.a],null,null),(n()(),e.pb(4,0,null,null,2,"div",[["class","col-md-8"]],null,null,null,null,null)),(n()(),e.pb(5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.ob(6,212992,null,0,o.p,[o.b,e.O,e.j,[8,null],e.h],null,null)],function(n,l){n(l,3,0),n(l,6,0)},null)}function y(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-recipes",[],null,null,null,C,z)),e.ob(1,114688,null,0,f,[v.a,b.a],null,null)],function(n,l){n(l,1,0)},null)}var k=e.lb("app-recipes",f,y,{},{},[]),I=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),S=e.nb({encapsulation:0,styles:[[""]],data:{}});function x(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Please select a recipe"]))],null,null)}function w(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-recipe-start",[],null,null,null,x,S)),e.ob(1,114688,null,0,I,[],null,null)],function(n,l){n(l,1,0)},null)}var D=e.lb("app-recipe-start",I,w,{},{},[]),P=u("gIcY"),A=u("Hf/j"),R=u("ZYjt"),H=e.nb({encapsulation:2,styles:[],data:{}});function N(n){return e.Jb(0,[],null,null)}var O=function(){function n(n,l,u){this.router=n,this.activatedRoute=l,this.recipeService=u,this.editMode=!1,this.changesSaved=!1}return n.prototype.ngOnInit=function(){var n=this;this.activatedRoute.params.subscribe(function(l){n.id=+l.id,n.editMode=null!=l.id;var u="",e="",t="",i=new P.d([]);if(n.editMode){var o=n.recipeService.getRecipe(n.id);if(u=o.name,e=o.description,t=o.imagePath,o.ingredients)for(var r=0,c=o.ingredients;r<c.length;r++){var a=c[r];i.push(new P.i({ingredientName:new P.g(a.ingredientName,P.q.required),ingredientAmount:new P.g(a.ingredientAmount,[P.q.required,P.q.min(0)])}))}}n.recipeForm=new P.i({recipeName:new P.g(u,P.q.required),recipeDescription:new P.g(e),recipeImagePath:new P.g(t,P.q.required),recipeIngredients:i})})},n.prototype.onSubmit=function(){this.changesSaved=!0;var n=new c(this.recipeForm.value.recipeName,this.recipeForm.value.recipeDescription,this.recipeForm.value.recipeImagePath,this.recipeForm.value.recipeIngredients);this.editMode?this.recipeService.setRecipe(this.id,n):this.recipeService.addRecipe(n),this.router.navigate(["../"],{relativeTo:this.activatedRoute})},n.prototype.canDeactivate=function(){return!(!this.changesSaved&&this.recipeForm.dirty)||confirm("Do you want to discard the changes?")},n.prototype.getIngredientControls=function(){return this.recipeForm.get("recipeIngredients").controls},n.prototype.onAddIngredient=function(){this.recipeForm.get("recipeIngredients").push(new P.i({ingredientName:new P.g(null,P.q.required),ingredientAmount:new P.g(null,[P.q.required,P.q.min(0)])}))},n.prototype.onCancel=function(){this.router.navigate(["../"],{relativeTo:this.activatedRoute}).then()},n.prototype.onDeleteIngredient=function(n){this.recipeForm.get("recipeIngredients").removeAt(n)},n}(),T=e.nb({encapsulation:0,styles:[["input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:red}.img-edit[_ngcontent-%COMP%]{width:100%;max-height:300px;-o-object-fit:cover;object-fit:cover}"]],data:{}});function E(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,26,"div",[["class","row"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),e.ob(1,212992,null,0,P.k,[[3,P.b],[8,null],[8,null]],{name:[0,"name"]},null),e.Eb(2048,null,P.b,null,[P.k]),e.ob(3,16384,null,0,P.o,[[4,P.b]],null,null),(n()(),e.pb(4,0,null,null,8,"div",[["class","col-8 form-group"]],null,null,null,null,null)),(n()(),e.pb(5,0,null,null,1,"label",[["for","ingredientName"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Ingredient Name"])),(n()(),e.pb(7,0,null,null,5,"input",[["class","form-control"],["formControlName","ingredientName"],["id","ingredientName"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0;return"input"===l&&(t=!1!==e.zb(n,8)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==e.zb(n,8).onTouched()&&t),"compositionstart"===l&&(t=!1!==e.zb(n,8)._compositionStart()&&t),"compositionend"===l&&(t=!1!==e.zb(n,8)._compositionEnd(u.target.value)&&t),t},null,null)),e.ob(8,16384,null,0,P.c,[e.D,e.k,[2,P.a]],null,null),e.Eb(1024,null,P.l,function(n){return[n]},[P.c]),e.ob(10,671744,null,0,P.h,[[3,P.b],[8,null],[8,null],[6,P.l],[2,P.v]],{name:[0,"name"]},null),e.Eb(2048,null,P.m,null,[P.h]),e.ob(12,16384,null,0,P.n,[[4,P.m]],null,null),(n()(),e.pb(13,0,null,null,9,"div",[["class","col-2 form-group"]],null,null,null,null,null)),(n()(),e.pb(14,0,null,null,1,"label",[["for","ingredientAmount"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Amount"])),(n()(),e.pb(16,0,null,null,6,"input",[["class","form-control"],["formControlName","ingredientAmount"],["id","ingredientAmount"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,u){var t=!0;return"input"===l&&(t=!1!==e.zb(n,17)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==e.zb(n,17).onTouched()&&t),"compositionstart"===l&&(t=!1!==e.zb(n,17)._compositionStart()&&t),"compositionend"===l&&(t=!1!==e.zb(n,17)._compositionEnd(u.target.value)&&t),"change"===l&&(t=!1!==e.zb(n,18).onChange(u.target.value)&&t),"input"===l&&(t=!1!==e.zb(n,18).onChange(u.target.value)&&t),"blur"===l&&(t=!1!==e.zb(n,18).onTouched()&&t),t},null,null)),e.ob(17,16384,null,0,P.c,[e.D,e.k,[2,P.a]],null,null),e.ob(18,16384,null,0,P.s,[e.D,e.k],null,null),e.Eb(1024,null,P.l,function(n,l){return[n,l]},[P.c,P.s]),e.ob(20,671744,null,0,P.h,[[3,P.b],[8,null],[8,null],[6,P.l],[2,P.v]],{name:[0,"name"]},null),e.Eb(2048,null,P.m,null,[P.h]),e.ob(22,16384,null,0,P.n,[[4,P.m]],null,null),(n()(),e.pb(23,0,null,null,3,"div",[["class","col-2 form-group align-self-end"]],null,null,null,null,null)),(n()(),e.pb(24,0,null,null,2,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.onDeleteIngredient(n.context.index)&&e),e},null,null)),(n()(),e.pb(25,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["icon","trash-alt"]],[[8,"innerHTML",1]],null,null,N,H)),e.ob(26,573440,null,0,A.a,[R.b,A.b],{iconProp:[0,"iconProp"]},null)],function(n,l){n(l,1,0,l.context.index),n(l,10,0,"ingredientName"),n(l,20,0,"ingredientAmount"),n(l,26,0,"trash-alt")},function(n,l){n(l,0,0,e.zb(l,3).ngClassUntouched,e.zb(l,3).ngClassTouched,e.zb(l,3).ngClassPristine,e.zb(l,3).ngClassDirty,e.zb(l,3).ngClassValid,e.zb(l,3).ngClassInvalid,e.zb(l,3).ngClassPending),n(l,7,0,e.zb(l,12).ngClassUntouched,e.zb(l,12).ngClassTouched,e.zb(l,12).ngClassPristine,e.zb(l,12).ngClassDirty,e.zb(l,12).ngClassValid,e.zb(l,12).ngClassInvalid,e.zb(l,12).ngClassPending),n(l,16,0,e.zb(l,22).ngClassUntouched,e.zb(l,22).ngClassTouched,e.zb(l,22).ngClassPristine,e.zb(l,22).ngClassDirty,e.zb(l,22).ngClassValid,e.zb(l,22).ngClassInvalid,e.zb(l,22).ngClassPending),n(l,25,0,e.zb(l,26).renderedIconHTML)})}function _(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,48,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0,i=n.component;return"submit"===l&&(t=!1!==e.zb(n,2).onSubmit(u)&&t),"reset"===l&&(t=!1!==e.zb(n,2).onReset()&&t),"ngSubmit"===l&&(t=!1!==i.onSubmit()&&t),t},null,null)),e.ob(1,16384,null,0,P.t,[],null,null),e.ob(2,540672,null,0,P.j,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Eb(2048,null,P.b,null,[P.j]),e.ob(4,16384,null,0,P.o,[[4,P.b]],null,null),(n()(),e.pb(5,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.pb(6,0,null,null,1,"label",[["for","recipeName"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Recipe Name"])),(n()(),e.pb(8,0,null,null,5,"input",[["class","form-control"],["formControlName","recipeName"],["id","recipeName"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0;return"input"===l&&(t=!1!==e.zb(n,9)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==e.zb(n,9).onTouched()&&t),"compositionstart"===l&&(t=!1!==e.zb(n,9)._compositionStart()&&t),"compositionend"===l&&(t=!1!==e.zb(n,9)._compositionEnd(u.target.value)&&t),t},null,null)),e.ob(9,16384,null,0,P.c,[e.D,e.k,[2,P.a]],null,null),e.Eb(1024,null,P.l,function(n){return[n]},[P.c]),e.ob(11,671744,null,0,P.h,[[3,P.b],[8,null],[8,null],[6,P.l],[2,P.v]],{name:[0,"name"]},null),e.Eb(2048,null,P.m,null,[P.h]),e.ob(13,16384,null,0,P.n,[[4,P.m]],null,null),(n()(),e.pb(14,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.pb(15,0,null,null,1,"label",[["for","recipeDescription"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Description"])),(n()(),e.pb(17,0,null,null,5,"textarea",[["class","form-control"],["formControlName","recipeDescription"],["id","recipeDescription"],["rows","4"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0;return"input"===l&&(t=!1!==e.zb(n,18)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==e.zb(n,18).onTouched()&&t),"compositionstart"===l&&(t=!1!==e.zb(n,18)._compositionStart()&&t),"compositionend"===l&&(t=!1!==e.zb(n,18)._compositionEnd(u.target.value)&&t),t},null,null)),e.ob(18,16384,null,0,P.c,[e.D,e.k,[2,P.a]],null,null),e.Eb(1024,null,P.l,function(n){return[n]},[P.c]),e.ob(20,671744,null,0,P.h,[[3,P.b],[8,null],[8,null],[6,P.l],[2,P.v]],{name:[0,"name"]},null),e.Eb(2048,null,P.m,null,[P.h]),e.ob(22,16384,null,0,P.n,[[4,P.m]],null,null),(n()(),e.pb(23,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.pb(24,0,null,null,1,"label",[["for","recipeImagePath"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Image Path"])),(n()(),e.pb(26,0,[["recipeImagePath",1]],null,5,"input",[["class","form-control"],["formControlName","recipeImagePath"],["id","recipeImagePath"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0;return"input"===l&&(t=!1!==e.zb(n,27)._handleInput(u.target.value)&&t),"blur"===l&&(t=!1!==e.zb(n,27).onTouched()&&t),"compositionstart"===l&&(t=!1!==e.zb(n,27)._compositionStart()&&t),"compositionend"===l&&(t=!1!==e.zb(n,27)._compositionEnd(u.target.value)&&t),t},null,null)),e.ob(27,16384,null,0,P.c,[e.D,e.k,[2,P.a]],null,null),e.Eb(1024,null,P.l,function(n){return[n]},[P.c]),e.ob(29,671744,null,0,P.h,[[3,P.b],[8,null],[8,null],[6,P.l],[2,P.v]],{name:[0,"name"]},null),e.Eb(2048,null,P.m,null,[P.h]),e.ob(31,16384,null,0,P.n,[[4,P.m]],null,null),(n()(),e.pb(32,0,null,null,0,"img",[["alt",""],["class","img-edit"]],[[8,"src",4]],null,null,null,null)),(n()(),e.pb(33,0,null,null,11,"div",[["class","mt-3"],["formArrayName","recipeIngredients"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),e.ob(34,212992,null,0,P.e,[[3,P.b],[8,null],[8,null]],{name:[0,"name"]},null),e.Eb(2048,null,P.b,null,[P.e]),e.ob(36,16384,null,0,P.o,[[4,P.b]],null,null),(n()(),e.pb(37,0,null,null,4,"div",[["class","d-flex align-items-center justify-content-between"]],null,null,null,null,null)),(n()(),e.pb(38,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Ingredients"])),(n()(),e.pb(40,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.onAddIngredient()&&e),e},null,null)),(n()(),e.Hb(-1,null,["+"])),(n()(),e.pb(42,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,E)),e.ob(44,278528,null,0,r.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(45,0,null,null,1,"button",[["class","btn btn-primary m-2"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),e.Hb(-1,null,["Save"])),(n()(),e.pb(47,0,null,null,1,"button",[["class","btn btn-danger m-2"],["type","button"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.onCancel()&&e),e},null,null)),(n()(),e.Hb(-1,null,["Cancel"]))],function(n,l){var u=l.component;n(l,2,0,u.recipeForm),n(l,11,0,"recipeName"),n(l,20,0,"recipeDescription"),n(l,29,0,"recipeImagePath"),n(l,34,0,"recipeIngredients"),n(l,44,0,u.getIngredientControls())},function(n,l){var u=l.component;n(l,0,0,e.zb(l,4).ngClassUntouched,e.zb(l,4).ngClassTouched,e.zb(l,4).ngClassPristine,e.zb(l,4).ngClassDirty,e.zb(l,4).ngClassValid,e.zb(l,4).ngClassInvalid,e.zb(l,4).ngClassPending),n(l,8,0,e.zb(l,13).ngClassUntouched,e.zb(l,13).ngClassTouched,e.zb(l,13).ngClassPristine,e.zb(l,13).ngClassDirty,e.zb(l,13).ngClassValid,e.zb(l,13).ngClassInvalid,e.zb(l,13).ngClassPending),n(l,17,0,e.zb(l,22).ngClassUntouched,e.zb(l,22).ngClassTouched,e.zb(l,22).ngClassPristine,e.zb(l,22).ngClassDirty,e.zb(l,22).ngClassValid,e.zb(l,22).ngClassInvalid,e.zb(l,22).ngClassPending),n(l,26,0,e.zb(l,31).ngClassUntouched,e.zb(l,31).ngClassTouched,e.zb(l,31).ngClassPristine,e.zb(l,31).ngClassDirty,e.zb(l,31).ngClassValid,e.zb(l,31).ngClassInvalid,e.zb(l,31).ngClassPending),n(l,32,0,e.zb(l,26).value),n(l,33,0,e.zb(l,36).ngClassUntouched,e.zb(l,36).ngClassTouched,e.zb(l,36).ngClassPristine,e.zb(l,36).ngClassDirty,e.zb(l,36).ngClassValid,e.zb(l,36).ngClassInvalid,e.zb(l,36).ngClassPending),n(l,45,0,!u.recipeForm.valid)})}function F(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-recipe-edit",[],null,null,null,_,T)),e.ob(1,114688,null,0,O,[o.k,o.a,b.a],null,null)],function(n,l){n(l,1,0)},null)}var J=e.lb("app-recipe-edit",O,F,{},{},[]),L=u("3V6w"),j=u("W4xs"),M=function(){function n(n,l,u,e){this.recipeService=n,this.router=l,this.activatedRoute=u,this.authService=e}return n.prototype.ngOnInit=function(){var n=this;this.activatedRoute.params.subscribe(function(l){n.i=+l.id,n.recipe=n.recipeService.getRecipe(n.i)})},n.prototype.onAddToShoppingList=function(){this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients),this.router.navigate(["/shopping-list"]).then()},n.prototype.onEditRecipe=function(){this.authService.isAuthenticated()?this.router.navigate(["edit"],{relativeTo:this.activatedRoute}).then():this.router.navigate(["/login"]).then()},n.prototype.onDeleteRecipe=function(){this.authService.isAuthenticated()?(this.recipeService.removeRecipe(this.i),this.router.navigate(["/recipes"]).then()):this.router.navigate(["/login"]).then()},n.prototype.isAuthenticated=function(){return this.authService.isAuthenticated()},n}(),q=e.nb({encapsulation:0,styles:[[".img-header[_ngcontent-%COMP%]{width:100%;max-height:300px;-o-object-fit:cover;object-fit:cover}a[_ngcontent-%COMP%]{cursor:pointer}"]],data:{}});function V(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),e.pb(1,0,null,null,1,"a",[["class","dropdown-item"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.onEditRecipe()&&e),e},null,null)),(n()(),e.Hb(-1,null,["Edit Recipe"])),(n()(),e.pb(3,0,null,null,1,"a",[["class","dropdown-item"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.onDeleteRecipe()&&e),e},null,null)),(n()(),e.Hb(-1,null,["Delete Recipe"]))],null,null)}function U(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"li",[["class","list-group-item"]],null,null,null,null,null)),(n()(),e.Hb(1,null,[" "," - "," "]))],null,function(n,l){n(l,1,0,l.context.$implicit.ingredientName,l.context.$implicit.ingredientAmount)})}function G(n){return e.Jb(0,[e.Bb(0,r.n,[]),(n()(),e.pb(1,0,null,null,2,"h1",[],null,null,null,null,null)),(n()(),e.Hb(2,null,["",""])),e.Db(3,1),(n()(),e.pb(4,0,null,null,0,"img",[["class","img-header mb-3"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),e.pb(5,0,null,null,9,"div",[["class","d-flex flex-row-reverse mb-3"]],null,null,null,null,null)),(n()(),e.pb(6,0,null,null,8,"div",[["class","btn-group"],["role","group"]],null,null,null,null,null)),(n()(),e.pb(7,0,null,null,2,"button",[["appDropdown",""],["aria-expanded","false"],["aria-haspopup","true"],["class","btn btn-secondary dropdown-toggle"],["data-toggle","dropdown"],["id","btnGroupDrop1"],["type","button"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==e.zb(n,8).onClick()&&t),t},null,null)),e.ob(8,81920,null,0,L.a,[e.k,e.D],null,null),(n()(),e.Hb(-1,null,[" Manage Recipe "])),(n()(),e.pb(10,0,null,null,4,"div",[["aria-labelledby","btnGroupDrop1"],["class","dropdown-menu"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,V)),e.ob(12,16384,null,0,r.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(13,0,null,null,1,"a",[["class","dropdown-item"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.onAddToShoppingList()&&e),e},null,null)),(n()(),e.Hb(-1,null,["To Shopping list"])),(n()(),e.pb(15,0,null,null,1,"h3",[["class","mt-3"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Ingredients"])),(n()(),e.pb(17,0,null,null,2,"ul",[["class","list-group my-3"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,U)),e.ob(19,278528,null,0,r.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Hb(20,null,[" ","\n"]))],function(n,l){var u=l.component;n(l,8,0),n(l,12,0,u.isAuthenticated()),n(l,19,0,u.recipe.ingredients)},function(n,l){var u=l.component,t=e.Ib(l,2,0,n(l,3,0,e.zb(l,0),u.recipe.name));n(l,2,0,t),n(l,4,0,u.recipe.imagePath,e.rb(1,"",u.recipe.name,"")),n(l,20,0,u.recipe.description)})}function W(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-recipe-detail",[],null,null,null,G,q)),e.ob(1,114688,null,0,M,[b.a,o.k,o.a,j.a],null,null)],function(n,l){n(l,1,0)},null)}var K=e.lb("app-recipe-detail",M,W,{},{},[]),Y=function(){function n(){}return n.prototype.canDeactivate=function(n,l,u,e){return n.canDeactivate()},n}(),$=u("PCNd"),B=function(){function n(n,l){this.authService=n,this.router=l}return n.prototype.canActivate=function(n,l){return!!this.authService.isAuthenticated()||(this.router.navigate(["/login"]).then(),!1)},n.ngInjectableDef=e.S({factory:function(){return new n(e.W(j.a),e.W(o.k))},token:n,providedIn:"root"}),n}(),Z=function(){return function(){}}();u.d(l,"RecipesModuleNgFactory",function(){return Q});var Q=e.mb(t,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[i.a,k,D,J,K]],[3,e.j],e.x]),e.xb(4608,r.k,r.j,[e.u,[2,r.r]]),e.xb(4608,P.f,P.f,[]),e.xb(4608,P.u,P.u,[]),e.xb(4608,Y,Y,[]),e.xb(1073742336,r.b,r.b,[]),e.xb(1073742336,A.f,A.f,[]),e.xb(1073742336,$.a,$.a,[]),e.xb(1073742336,P.r,P.r,[]),e.xb(1073742336,P.p,P.p,[]),e.xb(1073742336,o.o,o.o,[[2,o.u],[2,o.k]]),e.xb(1073742336,Z,Z,[]),e.xb(1073742336,t,t,[]),e.xb(1024,o.i,function(){return[[{path:"",component:f,children:[{path:"",component:I},{path:"new",canActivate:[B],component:O,canDeactivate:[Y]},{path:":id",component:M},{path:":id/edit",canActivate:[B],component:O,canDeactivate:[Y]}]}]]},[])])})}}]);