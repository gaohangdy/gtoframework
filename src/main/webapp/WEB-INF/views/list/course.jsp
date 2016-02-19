<%-- 
    Document   : course
    Created on : 2016-2-17, 1:17:37
    Author     : hang
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>


<div class="price-table">									

</div>	

<script id="listCourse_template" type="text/x-handlebars-template">
    {{#each []}}
    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 bk-margin-bottom-20"> 
        <ul>
            <div class="label label-warning">报名截止</div>
            <li class="header bk-fg-primary">{{coursetitle}}</li>																
            <li class="text-left">课程主题：{{coursetheme}}</li>
            <li class="text-left">授课老师：{{teachername}}</li>  
            <li class="text-left">培训时间：2016.01.15</li>
            <li class="text-left">培训地点：青岛</li>
            <li class="text-left">剩余名额：15</li> 
            <!--<li class="select"><a class="btn btn-sm btn-warning" href="page-pricing-tables.html#">我要报名</a></li>-->
            <li class="select">
                <button class="bk-margin-5 btn btn-labeled btn-warning" type="button">
                    <span class="btn-label"><i class="fa fa-bookmark"></i></span>报名</button>     
                <button class="bk-margin-5 btn btn-labeled btn-info" type="button">
                    <span class="btn-label"><i class="fa fa-bookmark"></i></span>编辑</button> 
                <button class="bk-margin-5 btn btn-labeled btn-danger" type="button">
                    <span class="btn-label"><i class="fa fa-times"></i></span>删除</button>   
            </li>
        </ul>
    </div>   
    {{/each}} 
</script>