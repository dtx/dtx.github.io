window.aboutMeView = Backbone.View.extend({
        el: '#aboutmeContainer',
        initialize:function(){
          this.render();
        },
        render:function(){
          console.log(this.model.toJSON());
          //make a new model
          //compile the template using underscore, using the new model
          var template = _.template( $('#aboutMeTemplate').html());
          $(template(this.model.toJSON())).appendTo($(this.el));
          //Load the compiled template to the el attribute
          //this.$el.html(template);
        }
      });

