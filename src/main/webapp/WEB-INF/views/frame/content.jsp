<%-- 
    Document   : content
    Created on : 2016-2-10, 20:56:31
    Author     : hang
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
    String servletPath = request.getServletPath();
    String pageName = servletPath.split("/")[servletPath.split("/").length -1];
    String mainPagePath = "../main/" + pageName;
%>
<!-- Start: Content -->
<div class="container-fluid content">	
    <div class="row">

        <%@include file="sidebar.jsp"%>

        <%--<%@include file="main.jsp"%>--%>
        <jsp:include page="<%= mainPagePath%>"/> 

        <%@include file="footer.jsp"%>

    </div>
</div><!--/container-->
<script type="text/javascript">

    $(document).ready(function(){
        alert('<%= mainPagePath%>');
    });

</script>

