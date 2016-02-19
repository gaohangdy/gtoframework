<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<div class="img-thumbnail">
    <img id="ImgPr" width="75" src="resources/images/default_user.png">
    <span class="zoom fileinput-button">
        <i class="glyphicon glyphicon-upload"></i>
        <!-- The file input field used as target for the file upload widget -->
        <input id="fileupload" type="file" name="files[]" multiple>
    </span>
</div>
<script>
    $(function () {
        $(".img-thumbnail").uploadPreview({Img: "ImgPr", Width: 120, Height: 120});
    });
</script>