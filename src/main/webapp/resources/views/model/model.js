var app = app || {};
app.heying = app.heying || {};
app.heying.mgm = app.heying.mgm || {};
app.heying.mgm.modelpage = app.heying.mgm.modelpage || {};

(function () {
    app.heying.mgm.modelpage.model = Backbone.Model.extend({
        url: 'rest/createuser'
    });    

    app.heying.mgm.modelpage.view = Backbone.View.extend({
        className: '.btn.btn-primary.modal-confirm',
        events: {
            "click": "saveData"            
        },
        saveData: function(e) {
            alert('You will save input data!');
            this.model.set('username', 'changedname');
            this.model.save();
        },        
        render: function () {
            var template = Handlebars.compile($("#modelpage_template").html());
            var e;
            e = template(this.model.toJSON());
            this.$el.html(e);
        }, initialize: function () {            
////            this.collection.on("reset", this.render, this);
//            searchModel = new app.heying.mgm.user.model();
//            searchModel.set("userType", 1);
////            searchModel.set("userType",2);
//            searchModel.set("userId", "abcd");
////            setModelData(searchModel);
//            this.collection.fetch({data: searchModel.toJSON()});
        }
    });    

        var modelData = new app.heying.mgm.modelpage.model();
        modelData.set('userid', '001');
        modelData.set('username', 'test user');
        var g = new app.heying.mgm.modelpage.view({el: $("#modalForm"), model: modelData});
        g.render();    
}());