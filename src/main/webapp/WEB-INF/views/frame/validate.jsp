<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<div id="modalFormValidate" class="modal-block modal-block-primary mfp-hide">
    <div class="panel panel-default">
        <!--<form id="form" action="form-validation.html" class="form-horizontal">-->
        <form id="userForm" action="${pageContext.servletContext.contextPath}/user/add" method="post" enctype="multipart/form-data" class="form-horizontal" novalidate="novalidate">
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h2 class="panel-title">用户登录</h2>
                </div> 
                <div class="panel-body">
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">用户名 <span class="required">*</span></label>
                        <div class="col-md-9">
                            <input type="text" name="userId" class="form-control" placeholder="用户名" required/>
                            <!--<input type="password" class="form-control input-sm" name="password" id="w1-password" minlength="6" required="">-->
                        </div>
                    </div>                    
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">姓名 <span class="required">*</span></label>
                        <div class="col-md-9">
                            <input type="text" name="userName" class="form-control" placeholder="姓名" required/>
                        </div>
                    </div>  
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">密码 <span class="required">*</span></label>
                        <div class="col-md-9">
                            <input type="password" name="password" class="form-control" placeholder="密码" required/>
                        </div>
                    </div>     
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">确认密码 <span class="required">*</span></label>
                        <div class="col-md-9">
                            <input type="password" name="passwordRepeat" class="form-control" placeholder="确认密码" required/>
                        </div>
                    </div>   
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="nf-email">邮箱 <span class="required">*</span></label>
                        <div class="col-md-9">
                            <input type="email" name="email" class="form-control" placeholder="邮件地址" required/>
                        </div>
                    </div> 
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">办公电话 <span class="required">*</span></label>
                        <div class="col-md-9">
                            <input type="text" name="officeTel" class="form-control" placeholder="电话" required/>
                        </div>
                    </div>     
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">手机 <span class="required">*</span></label>
                        <div class="col-md-9">
                            <input type="text" name="tel" class="form-control" placeholder="电话" required/>
                        </div>
                    </div>                        
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="select">用户类型 <span class="required">*</span></label>
                        <div class="col-md-3">
                            <select id="userTypeSelect" name="userType" class="form-control" required>
                                <option value="0">请选择</option>
                                <option value="1">总务财务</option>
                                <option value="2">总部客服</option>
                                <option value="3">合作机构</option>
                                <option value="3">合伙人</option>
                            </select>
                            <label class="error" for="userTypeSelect"></label>
                        </div>
                    </div>    
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="select">等级 <span class="required">*</span></label>
                        <div class="col-md-3">
                            <select id="select" name="userRank" class="form-control" size="1" required>
                                <option value="0">请选择</option>
                                <option value="1">首席咨询师</option>
                                <option value="2">高级咨询师</option>
                                <option value="3">管理顾问</option>
                                <option value="4">助理顾问</option>
                            </select>
                        </div>
                    </div> 
                    <div class="form-group">
                        <label class="col-md-2 control-label">发票 </label>
                        <div class="col-md-9">
                            <div class="checkbox-custom checkbox-inline">
                                <input type="checkbox" name="invoiceFlag" value="true"> 
                                <label for="inline-checkbox1"> 可以开具发票</label>
                            </div>
                        </div>
                    </div>  
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">用户头像：</label>
                        <%@include file="../common/uploadPreview.jsp"%>
                    </div>  
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">用户头像：</label>
                        <%@include file="../common/fileupload.jsp"%>
                    </div>  
                    <div class="row">
                        <div class="col-sm-9 col-sm-offset-3">
                            <!--<button class="bk-margin-5 btn btn-info">Submit</button>-->
                            <button class="btn btn-primary modal-confirm" onclick="$('#userForm').submit()">保存</button>
                            <button class="btn btn-default modal-dismiss">取消</button>     
                        </div>
                    </div>
                </div>									
            </div>
        </form>
    </div>
</div>