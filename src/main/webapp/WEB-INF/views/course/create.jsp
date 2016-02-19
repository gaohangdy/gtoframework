<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<div class="row">
    <div class="col-md-12">							
        <div class="panel bk-bg-white">
            <div class="panel-body">
                <form action="" method="post" enctype="multipart/form-data" class="form-horizontal ">
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">课程名：</label>
                        <div class="col-md-10">
                            <input type="text" id="text-input" name="text-input" class="form-control" placeholder="课程名称">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">课程主题：</label>
                        <div class="col-md-10">
                            <input type="text" id="text-input" name="text-input" class="form-control" placeholder="课程主题">
                        </div>
                    </div>  
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="select">类型：</label>
                        <div class="col-md-3">
                            <select id="select" name="select" class="form-control" size="1">
                                <option value="0">请选择</option>
                                <option value="1">构建班</option>
                                <option value="2">实操课</option>
                                <option value="3">Opp</option>
                            </select>
                        </div>
                    </div>  
                    <div class="form-group">
                        <label class="col-md-2 control-label">培训时间：</label>
                        <div class="col-md-6">
                            <div class="input-daterange input-group" data-plugin-datepicker>
                                <span class="input-group-addon">
                                    <i class="fa fa-calendar"></i>
                                </span>
                                <input type="text" class="form-control" name="start" />
                                <span class="input-group-addon">to</span>
                                <input type="text" class="form-control" name="end" />
                            </div>
                        </div>
                    </div>                    
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">培训地点：</label>
                        <div class="col-md-3">
                            <input type="text" id="text-input" name="text-input" class="form-control" placeholder="培训地点">
                        </div>
                    </div>  
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">企业数：</label>
                        <div class="col-md-2">                            
                            <input type="number" class="form-control" id="maxComp" min="1" max="10">
                        </div>
                    </div> 
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="text-input">学员数：</label>
                        <div class="col-md-2">
                            <input type="number" class="form-control" id="maxComp" min="1" max="10">
                        </div>
                    </div>                     
                </form>
            </div>
        </div>						
    </div>				
</div>