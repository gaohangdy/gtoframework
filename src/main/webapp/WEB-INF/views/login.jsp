<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <title>和英咨询业务管理核算系统</title>
        <!-- start: CSS file-->
        <!-- Vendor CSS-->
        <link href="resources/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="resources/assets/vendor/skycons/css/skycons.css" rel="stylesheet" />
        <link href="resources/assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" />

        <!-- Plugins CSS-->
        <link href="resources/assets/plugins/bootkit/css/bootkit.css" rel="stylesheet" />	

        <!-- Theme CSS -->
        <link href="resources/assets/css/jquery.mmenu.css" rel="stylesheet" />

        <!-- Page CSS -->		
        <link href="resources/assets/css/style.css" rel="stylesheet" />
        <link href="resources/assets/css/add-ons.min.css" rel="stylesheet" />        

        <!-- end: CSS file-->	

        <!-- Head Libs -->
        <script src="resources/assets/plugins/modernizr/js/modernizr.js"></script>
    </head>
    <body>        
        <!-- Start: Content -->
        <div class="container-fluid content">
            <div class="row">
                <!-- Main Page -->
                <div id="content" class="col-sm-12 full">
                    <div class="row">
                        <div class="login-box">
                            <div class="panel">
                                <div class="panel-body">								
                                    <div class="header bk-margin-bottom-20 text-center">										
                                        <img src="resources/images/logo.jpg" class="img-responsive" alt="" />
                                        <h4>用户登录</h4>
                                    </div>
                                    <c:if test="${param.error ne null}">
                                    <div class="msg-error"><b></b>账户名与密码不匹配，请重新输入</div>
                                    </c:if>
                                    <c:if test="${param.logout ne null}">
                                    <div class="msg-error"><b></b>账户名与密码不匹配，请重新输入</div>
                                    </c:if>                                        
                                    <form class="form-horizontal login" action="${pageContext.servletContext.contextPath}/login" method="post">
                                        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}">
                                        <div class="bk-padding-left-20 bk-padding-right-20">
                                            <div class="form-group">
                                                <label>用户名</label>
                                                <div class="input-group input-group-icon">
                                                    <input type="text" class="form-control bk-radius" name="username" placeholder="用户名"/>
                                                    <span class="input-group-addon">
                                                        <span class="icon">
                                                            <i class="fa fa-user"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>											
                                            <div class="form-group">
                                                <label>密码</label>
                                                <div class="input-group input-group-icon">
                                                    <input type="password" class="form-control bk-radius" name="password" placeholder="密码"/>
                                                    <span class="input-group-addon">
                                                        <span class="icon">
                                                            <i class="fa fa-key"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="row bk-margin-top-20 bk-margin-bottom-10">
                                                <div class="col-sm-8">
                                                    <div class="checkbox-custom checkbox-default">
                                                        <input id="RememberMe" name="rememberme" type="checkbox" />
                                                        <label for="RememberMe">自动登录</label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4 text-right">
                                                    <button type="submit" class="btn btn-primary hidden-xs">登录</button>
                                                    <button type="submit" class="btn btn-primary btn-block btn-lg visible-xs bk-margin-top-20">登录</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>		
                        </div>
                    </div>			
                </div>
                <!-- End Main Page -->
            </div>
        </div><!--/container-->


        <!-- start: JavaScript-->

        <!-- Vendor JS-->				
        <script src="resources/assets/vendor/js/jquery.min.js"></script>
        <script src="resources/assets/vendor/js/jquery-2.1.1.min.js"></script>
        <script src="resources/assets/vendor/js/jquery-migrate-1.2.1.min.js"></script>
        <script src="resources/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="resources/assets/vendor/skycons/js/skycons.js"></script>	

        <!-- Plugins JS-->
        <script src="resources/assets/plugins/bootkit/js/bootkit.js"></script>

        <!-- Theme JS -->		
        <script src="resources/assets/js/jquery.mmenu.min.js"></script>
        <script src="resources/assets/js/core.min.js"></script>

        <!-- Pages JS -->
        <script src="resources/assets/js/pages/page-login.js"></script>

        <!-- end: JavaScript-->    
    </body>
</html>