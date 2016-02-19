<%-- 
    Document   : user
    Created on : 2016-2-10, 22:03:21
    Author     : hang
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!-- Modal Form -->
<div id="modalFormCourse" class="modal-block modal-block-primary mfp-hide">

</div>    
            
<script id="createcourse_template" type="text/x-handlebars-template">
    <div class="panel panel-primary">
        <!--<form id="form" action="form-validation.html" class="form-horizontal">-->
        <form id="courseForm" method="post" class="form-horizontal">
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">课程登录</h4>
                </div> 
                <div class="panel-body">                 
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">课程名 <span class="required">*</span></label>
                        <div class="col-md-9">
                            <input type="text" name="coursetitle" class="form-control" placeholder="课程名" required/>
                            <!--<input type="password" class="form-control input-sm" name="password" id="w1-password" minlength="6" required="">-->
                        </div>
                    </div>                     
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">课程主题 <span class="required">*</span></label>
                        <div class="col-md-9">
                            <input type="text" name="coursetheme" class="form-control" placeholder="课程主题" required/>
                        </div>
                    </div>  
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="select">类型 <span class="required">*</span></label>
                        <div class="col-md-3">
                            <select id="courseTypeSelect" name="coursetype" class="form-control" size="1" required>
                                <option value="">请选择</option>
                                <option value="0">构建班</option>
                                <option value="1">实操课</option>
                                <option value="2">Opp</option>
                            </select>
                            <label class="error" for="courseTypeSelect"></label>
                        </div>
                    </div>  
                    <div class="form-group">
                        <label class="col-md-2 control-label">培训时间：</label>
                        <div class="col-md-6">
                            <div class="input-daterange input-group">
                                <span class="input-group-addon">
                                    <i class="fa fa-calendar"></i>
                                </span>
                                <input type="date" class="form-control" name="sdate" />
                                <span class="input-group-addon">to</span>
                                <input type="date" class="form-control" name="edate" />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">培训地点 <span class="required">*</span></label>
                        <div class="col-md-3">
                            <input type="text" name="location" class="form-control" placeholder="培训地点" required/>
                        </div>
                    </div>  
                    <div id="teacherPanel" class="form-group">

                    </div>            
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">企业数 <span class="required">*</span></label>
                        <div class="col-md-2">                            
                            <input type="number" class="form-control" name="maxcomp" min="1" max="10" required/>
                        </div>
                    </div> 
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">学员数 <span class="required">*</span></label>
                        <div class="col-md-2">
                            <input type="number" class="form-control" name="maxstudent" min="1" max="10" required/>
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
        </form>
    </div>    
</script>
<%@include file="../common/teacherSelect.jsp"%>
<!--<script src="resources/common/js/teacherSelect.js"></script>-->
