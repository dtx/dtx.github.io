window.menuView = Backbone.View.extend({
        el: '#menuContainer',
        initialize:function(){
          this.render();
        },
        render:function(){
          var template = _.template( $('#menuTemplate').html());
          $(template(this.model.toJSON())).appendTo($(this.el));
        },
        events:{
          "click #link1":'link1Clicked',
          "click #link2":'link2Clicked',
          "click #link3":'link3Clicked',
          "click #link4":'link4Clicked'
        },
        link1Clicked: function(e){
          e.preventDefault();
          $('#midText').fadeOut(function(){
              $('#midText').empty();
              Backbone.pubSub.trigger('linkClicked', "link1");
            });
        },
        link2Clicked: function(e){
          e.preventDefault();
          $('#midText').fadeOut(function(){
              $('#midText').empty();
              Backbone.pubSub.trigger('linkClicked', "link2");
          });
        },
        link3Clicked: function(e){
          e.preventDefault();
          $('#midText').fadeOut(function(){
              $('#midText').empty();
              Backbone.pubSub.trigger('linkClicked', "link3");
          });
        },
        link4Clicked: function(e){
          e.preventDefault();
          $('#midText').fadeOut(function(){
              $('#midText').empty();
              Backbone.pubSub.trigger('linkClicked', "link4");
          });
        }
});

