<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<div class="row"> 
    <div class="col-md-12" id="testList">		
    </div>
</div>
<script id="userlist_template" type="text/x-handlebars-template">  
    {{#each []}}
<div class="panel bk-bg-white">
    <div class="panel-body">
        <div class="row">
            <div class="col-xs-1">
                <div class="bk-avatar">
                    <img src="download?path={{icon}}" alt="" class="img-circle bk-img-60 bk-border-off">
                </div>
            </div>  
            <div class="col-xs-10">
                <div class="row">
                    <label class="col-md-1 control-label">ID：</label>
                    <div class="col-md-2">
                        <h4 class="panel-title">{{userId}}</h4>
                    </div>
                    <label class="col-md-1 control-label">姓名：</label>
                    <div class="col-md-2">
                        <h4 class="panel-title">{{userName}}</h4>
                    </div>
                    <label class="col-md-1 control-label">类型：</label>
                    <div class="col-md-2">
                        <h4 class="panel-title">{{displayUserType type}}</h4>
                    </div>    
                    <label class="col-md-1 control-label">级别：</label>
                    <div class="col-md-2">
                        <h4 class="panel-title">{{displayUserRank rank}}</h4>
                    </div>            
                </div>  
                <div class="row">
                    <label class="col-md-1 control-label">座机：</label>
                    <div class="col-md-5">
                        <h4 class="panel-title">{{officeTel}}</h4>
                    </div> 
                    <label class="col-md-1 control-label">手机：</label>
                    <div class="col-md-5">
                        <h4 class="panel-title">{{tel}}</h4>
                    </div>                  
                </div>   
                <div class="row">
                    <label class="col-md-1 control-label">发票：</label>
                    <div class="col-md-11">
                        {{displayInvoice invoice}}
                    </div>                     
                </div>
        
            </div>
            <div class="col-xs-1">
                <div class="bk-avatar">
                    <a class="modal-with-form btn btn-warning btn-sm" 
                       href="#modalFormUser" data-userid="{{userId}}">编辑
                    </a>                    
                </div>
            </div>      
        </div>
    </div>
</div>
    {{/each}}
</script>

