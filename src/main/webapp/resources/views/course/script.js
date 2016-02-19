var app = app || {};
app.heying = app.heying || {};
app.heying.mgm = app.heying.mgm || {};
app.heying.mgm.course = app.heying.mgm.course || {};

(function () {
    app.heying.mgm.course.model = Backbone.Model.extend({
        url: 'rest/course/create'
    });
    
    app.heying.mgm.course.collection = Backbone.Collection.extend({
        model: app.heying.mgm.course.model,
        url: 'rest/course/search'        
    });

    app.heying.mgm.course.view = Backbone.View.extend({
        events: {
            "click .btn.btn-primary.modal-confirm": "saveData",
            "change input[name=coursetitle]": "setModelData",
            "change input[name=coursetheme]": "setModelData",
            "change select[name=coursetype]": "setModelData",
            "change input[name=sdate]": "setModelData",
            "change input[name=edate]": "setModelData",
            "change input[name=location]": "setModelData",
            "change input[name=maxcomp]": "setModelData",
            "change input[name=maxstudent]": "setModelData",
            "change select[name=teacher]": "setModelData"
            
        },
        render: function () {
            var template = Handlebars.compile($("#createcourse_template").html());
            var e;
            e = template(this.model.toJSON());
            this.$el.html(e);

            var teacherCollection = new app.heying.mgm.common.teacher.collection();
            var model1 = new app.heying.mgm.common.teacher.model();
            model1.set("userid", "001");
            model1.set("username", "name111");

            var model2 = new app.heying.mgm.common.teacher.model();
            model2.set("userid", "002");
            model2.set("username", "name222");

            teacherCollection.add(model1);
            teacherCollection.add(model2);
            var teacherView = new app.heying.mgm.common.teacher.view({el: $('#teacherPanel'), collection: teacherCollection});
            teacherView.render();
        }, initialize: function () {
        },
        saveData: function (event) {
            this.model.save(this.model.toJSON(), {
                success: function (model, response) {
                    console.log('success');
                },
                error: function (model, response) {
                    console.log('error');
                }
                
            });
        },
        setModelData: function (event) {
            this.model.set(event.target.name, $(event.target).val());
        }
    });
    
    app.heying.mgm.course.viewList = Backbone.View.extend({ 
        render: function () {
            var source = $('#listCourse_template').html();
            var template = Handlebars.compile(source);
            var html;
            html = template(this.collection.toJSON());
            this.$el.html(html);
        }        
    });        
    
    var courseModel = new app.heying.mgm.course.model();
    var courseCollection = new app.heying.mgm.course.collection();
//    modelData.set('userid', '001');
//    modelData.set('username', 'test user');
    var g = new app.heying.mgm.course.view({el: $("#modalFormCourse"), model: courseModel, collection: courseCollection});
    g.render();
    
    var courseListView = new app.heying.mgm.course.viewList({el: $(".price-table"), collection: courseCollection});
    courseCollection.fetch({url: 'rest/course/search', success: function (collection, response) {
            courseListView.render();                       
        }, error: function () {
            alert('error');
        }});    
}());