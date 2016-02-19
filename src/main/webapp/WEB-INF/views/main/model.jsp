<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!-- Modal Form -->
<div id="modalForm" class="modal-block modal-block-primary mfp-hide">
    
    
</div>
<script type="text/javascript">

    $(document).ready(function () {

    });

</script>
<script id="modelpage_template" type="text/x-handlebars-template">  
<div class="panel panel-default"> 
    <div class="panel-heading">
        <h2 class="panel-title">Registration Form</h2>
    </div>
    <div class="panel-body bk-noradius">
        <div class="form-group mt-lg">
            <label class="col-sm-3 control-label">ID</label>
            <div class="col-sm-9">
                <input type="text" name="id" class="form-control" placeholder="Type your name..." value="{{userid}}" required/>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-3 control-label">Name</label>
            <div class="col-sm-9">
                <input type="text" name="name" class="form-control" placeholder="Type your email..." value="{{username}}" required/>
            </div>
        </div>
    </div>
    <div class="panel-footer">
        <div class="row">
            <div class="col-md-12 text-right">
                <button class="btn btn-primary modal-confirm">Submit</button>
                <button class="btn btn-default modal-dismiss">Cancel</button>
            </div>
        </div>
    </div>   
</div>    
</script>    
<script src="resources/views/model/model.js"></script>