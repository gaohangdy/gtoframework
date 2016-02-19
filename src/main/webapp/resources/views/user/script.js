var app = app || {};
app.heying = app.heying || {};
app.heying.mgm = app.heying.mgm || {};
app.heying.mgm.user = app.heying.mgm.user || {};

(function () {
    app.heying.mgm.user.model = Backbone.Model.extend({
    });

    app.heying.mgm.user.collection = Backbone.Collection.extend({
        model: app.heying.mgm.user.model,
        url: 'rest/user/search'
    });

    app.heying.mgm.user.viewList = Backbone.View.extend({
        className: '.btn-warning',
        events: {
            "click": "editRowData"            
        },
        editRowData: function(e) {
            var userid = $(e.target).attr('data-userid');
            this.collection.each(function(model){
                if (userid === model.get("userId")) {
                    setDetailData(model);
                }
            }); 
        },        
        render: function () {
            var g = $("#userlist_template").html();
            var f = Handlebars.compile(g);
            var e;
            var h = this;
            e = f(this.collection.toJSON());
            this.$el.html(e);
        }, initialize: function () {            
//            this.collection.on("reset", this.render, this);
            searchModel = new app.heying.mgm.user.model();
            searchModel.set("userType", 1);
//            searchModel.set("userType",2);
            searchModel.set("userId", "abcd");
//            setModelData(searchModel);
            this.collection.fetch({data: searchModel.toJSON()});
        }
    });
    
    setModelData = function () {
        var panel = $('#modalFormUser');
        panel.find('.panel-body').find("[name='userId']");
        alert(panel);
        //userModel.set("userId", );
    };  
    
    setDetailData = function (model) {
        $('#userForm').find('input[name=userId]').attr('readonly', 'readonly');
        $('#userForm').find('input[name=userId]').val(model.get('userId'));
        $('#userForm').find('input[name=userName]').val(model.get('userName'));
        $('#userForm').find('input[name=password]').val('');
        $('#userForm').find('input[name=passwordRepeat]').val('');
        $('#userForm').find('input[name=email]').val(model.get('email'));
        $('#userForm').find('input[name=officeTel]').val(model.get('officeTel'));
        $('#userForm').find('input[name=tel]').val(model.get('tel'));
        $('#userForm').find('input[name=userType]').val(model.get('type'));
        $('#userForm').find('input[name=userRank]').val(model.get('rank'));
        $('#userForm').find('input[name=invoiceFlag]').val(model.get('invoice'));
        
    };
    
    var userModel = new app.heying.mgm.user.model();
    var userList = new app.heying.mgm.user.collection();
    var userListView = new app.heying.mgm.user.viewList({el: $("#testList"), collection: userList});

    userList.fetch({url: 'rest/user/search', success: function (collection, response) {
            userListView.render();
            
            $('.modal-with-form').magnificPopup({
                    type: 'inline',
                    preloader: false,
                    focus: '#name',
                    modal: true,

                    // When elemened is focused, some mobile browsers in some cases zoom in
                    // It looks not nice, so we disable it:
                    callbacks: {
                            beforeOpen: function() {
                                    if($(window).width() < 700) {
                                            this.st.focus = false;
                                    } else {
                                            this.st.focus = '#name';
                                    }
                            }
                    }
            });            
        }, error: function () {
            alert('error');
        }});
 

    Handlebars.registerHelper("displayUserType", function (e) {
        switch (e) {
            case 0:
                return "管理员";
            case 1:
                return "总务财务";
            case 2:
                return "总部客服";
            case 3:
                return "合作机构";
            case 4:
                return "合伙人";
        }
    });

    Handlebars.registerHelper("displayUserRank", function (e) {
        switch (e) {
            case 0:
                return "----";
            case 1:
                return "首席咨询师";
            case 2:
                return "高级咨询师";
            case 3:
                return "管理顾问";
            case 4:
                return "助理顾问";
        }
    });

    Handlebars.registerHelper("displayInvoice", function (e) {
        var tagString;

        if (e) {
            tagString = '<button class="btn btn-success btn-circle" type="button"><i class="fa fa-check"></i></button>';
        } else {
            tagString = '<button class="btn btn-warning btn-circle" type="button"><i class="fa fa-times"></i></button>';
        }
        return new Handlebars.SafeString(tagString);
    });    
}());