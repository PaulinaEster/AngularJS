angular.module("listaTelefonica").factory("timestempInterceptor", function(){
  return{
    request: function(config){
      let url = config.url;
      if(url.indexOf("view") > -1) return config;
      let temp = new Date().getTime(); 
      config.url = url + "?timestamp=" + temp;
      return config;
    }
  };
});