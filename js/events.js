Backbone.pubSub = _.extend({}, Backbone.Events);
 $(document).ready(function(){
    getContent = function(data){
      var str;
      str += '<p>'+data[0].content+'</p>';
      return str;
    };

    Backbone.pubSub.on('linkClicked', function(link){
      if(link !== 'link2'){
        $.getJSON(link+'.json', function(data){
          console.log(data[0].content);
          $('#midText').append(data[0].content);
          $('#midText').fadeIn();
          });
      }
      else{
        $.getJSON('https://api.github.com/users/dtx/repos', function(data){
          //i know for...in is bad for arrays and Strings, but idc atm.
          for( var i in data){
            var repo = new gitModel(data[i]);
            var gitV = new gitView({model:repo});
            gitV.render();
          }
          $('#midText').fadeIn();
        });
      }
    });

    var me = new Portfolio();
    var menu = new Menu();
    var aboutMe = new aboutMeView({model: me});
    var menuLink = new menuView({model:menu});
  });
