<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<div class="col-md-2">
    <!--<input type="file" id="up" name="userImg"/>-->
    <input id="fileupload" type="file" name="files[]" data-url="upload" multiple>
</div> 
<div class="col-md-4">
    <img id="ImgPr" width="100" height="100" src="resources/images/default_user.png"/>
</div>
<script>
    $(function () {
        $("#up").uploadPreview({Img: "ImgPr", Width: 120, Height: 120});
    });
</script>