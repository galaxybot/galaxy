define([],function(){return{openFileBrowser:function(a){var b=window.Galaxy.config.genomespace_ui_url,c=b+"upload/loadUrlToGenomespace.html?getLocation=true",d=window.open(c,"GenomeSpace File Browser","height=360px,width=600px");successCalBack=a.successCallback,window.addEventListener("message",function(a){successCalBack(a.data)},!1),d.focus(),null!=a.errorCallback&&(d.setCallbackOnGSUploadError=config.errorCallback)}}});
//# sourceMappingURL=../../../maps/mvc/tool/tool-genomespace.js.map