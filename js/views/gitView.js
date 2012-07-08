window.gitView = Backbone.View.extend({
      el:'#midText',
      render: function(){
        var template = _.template( $('#gitTemplate').html());
        $(template(this.model.toJSON())).appendTo($(this.el));
        console.log(this.model.id);
        //$('#repo_'+this.model.get('id')).fadeIn();
      }
    });

