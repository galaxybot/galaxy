webpackJsonp([5],[function(e,i,n){(function(e,i){var a=n(1),t=a,r=n(52).GalaxyApp,o=n(6),l=n(53);window.app=function(n,c){window.Galaxy=new r(n,c),Galaxy.debug("login app");var p=encodeURI(n.redirect);if(!n.show_welcome_with_login){var d=a.param({use_panels:"True",redirect:p});return void(window.location.href=Galaxy.root+"user/login?"+d)}var w=e.View.extend({initialize:function(i){this.page=i,this.model=new e.Model({title:o("Login required")}),this.setElement(this._template())},render:function(){this.page.$("#galaxy_main").prop("src",n.welcome_url)},_template:function(){var e=n.root+"user/login?"+t.param({redirect:p});return'<iframe src="'+e+'" frameborder="0" style="width: 100%; height: 100%;"/>'}});t(function(){Galaxy.page=new l.View(i.extend(n,{Right:w}))})}}).call(i,n(2),n(3))}]);
//# sourceMappingURL=login.bundled.js.map