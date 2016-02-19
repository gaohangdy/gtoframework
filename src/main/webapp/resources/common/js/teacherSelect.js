var app = app || {};
app.heying = app.heying || {};
app.heying.mgm = app.heying.mgm || {};
app.heying.mgm.common = app.heying.mgm.common || {};
app.heying.mgm.common.teacher = app.heying.mgm.common.teacher || {};

(function () {
    app.heying.mgm.common.teacher.model = Backbone.Model.extend({
    });

    app.heying.mgm.common.teacher.collection = Backbone.Collection.extend({});

    app.heying.mgm.common.teacher.view = Backbone.View.extend({
        render: function () {
            var source = $('#selectTeacher_template').html();
            var template = Handlebars.compile(source);
            var html;
            html = template(this.collection.toJSON());
            this.$el.html(html);
        }, initialize: function () {
            this.compiledTemplate = _.template($('#selectTeacher_template').text());
        }
    });

}());