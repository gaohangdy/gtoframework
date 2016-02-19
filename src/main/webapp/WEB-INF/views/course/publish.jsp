<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<div class="register-box">  																		
    <form class="form-horizontal register" action="index.html" method="post">									
        <div class="form-group">
            <label>名称</label>
            <input name="name" type="text" class="form-control" placeholder="课程名称" id="fullname">
        </div>
        <div class="form-group">
            <label>课程类型</label>        
            <select class="form-control">
                <option value ="volvo">构建班</option>
                <option value ="saab">实操班</option>
                <option value="opel">OPP</option>
            </select>
        </div>            
        <div class="form-group">
            <label>课程主题</label>
            <input name="email" type="email" class="form-control" placeholder="课程主题" id="username">
        </div>	
        <div class="form-group">
            <label>地点</label>
            <input name="email" type="email" class="form-control" placeholder="课程主题" id="username">
        </div>	        
        <div class="form-group">
            <div class="row">
                <div class="col-sm-6">
                    <label>培训时间       开始</label>
                    <input type="date" class="form-control bk-margin-bottom-10" id="start_date" />                    
                </div>
                <div class="col-sm-6">
                    <label>结束</label>
                    <input type="date" class="form-control bk-margin-bottom-10" id="end_date" />
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-sm-6">
                    <label>最大报名企业数</label>
                    <input type="number" class="form-control bk-margin-bottom-10" id="maxComp" min="1" max="10" />
                </div>
                <div class="col-sm-6">
                    <label>最大报名学员数</label>
                    <input type="number" class="form-control bk-margin-bottom-10" id="maxStdu" min="1" max="30" />
                </div>
            </div>
        </div>        
        <div class="row bk-margin-top-20 bk-margin-bottom-10">
            <div class="col-sm-12 text-right">
                <button type="submit" class="btn btn-primary hidden-xs">登录</button>
                <button type="submit" class="btn btn-primary btn-block btn-lg visible-xs bk-margin-top-20">登录</button>
            </div>
        </div>												
    </form>															
</div> 