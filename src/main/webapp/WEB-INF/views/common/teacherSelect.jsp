<%-- 
    Document   : teacherSelect
    Created on : 2016-2-18, 0:26:35
    Author     : hang
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<script id="selectTeacher_template" type="text/x-handlebars-template">
    <label class="col-md-2 control-label" for="select">授课老师：</label>
    <div class="col-md-9">    
        <select name="teacher" class="form-control" size="1">
        {{#each []}}
            <option value="{{userid}}">{{username}}</option>
        {{/each}}
        </select>
    </div>
</script>

<script src="resources/common/js/teacherSelect.js"></script>