(function(){
  if (location.href.search(/[^0-9A-Z]([B0-9][0-9A-Z]{9})([^0-9A-Z]|$)/) != -1) {
    var u ='http://' + location.host + '/dp/' + RegExp.$1 + '/';
    prompt('Copy Amazon Short URL',document.title + ' ' + u);
  }
}());
