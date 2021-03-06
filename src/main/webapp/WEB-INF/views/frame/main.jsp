<%-- 
    Document   : main
    Created on : 2016-2-10, 21:08:05
    Author     : hang
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
    String servletPath = request.getServletPath();
    String pageName = servletPath.split("/")[servletPath.split("/").length -1];
    
%>
<!-- Main Page -->
<div class="main ">
    <!-- Page Header -->
    <div class="page-header">
        <div class="pull-left">
            <ol class="breadcrumb visible-sm visible-md visible-lg">								
                <li><a href="index.html"><i class="icon fa fa-home"></i>Home</a></li>
                <li><a href="#"><i class="fa fa-briefcase"></i>UI Features</a></li>
                <li class="active"><i class="fa fa-spinner"></i><%=pageName%></li>
            </ol>						
        </div>
        <div class="pull-right">
            <h2>Modals</h2>
        </div>					
    </div>
    <!-- End Page Header -->
    <div class="row">      
        <!--<div class="col-md-12">-->	           
            <div class="panel panel-default">
                <div class="panel-body">
                    <a class="bk-margin-5 modal-with-form btn btn-labeled btn-primary" onclick="$('#userForm').find('input[name=userId]').removeAttr('readonly', 'readonly');" 
                       href="#modalFormUser">
                        <span class="btn-label"><i class="fa fa-plus"></i></span>新建用户
                    </a>                     
                    <%@include file="../create/user.jsp"%>
                </div>
            </div>          

            <%@include file="../user/list.jsp"%>
        <!--</div>-->
    </div>
</div>
<!-- End Main Page -->
