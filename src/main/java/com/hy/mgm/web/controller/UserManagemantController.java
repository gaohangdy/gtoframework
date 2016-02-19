/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hy.mgm.web.controller;

import com.hy.mgm.domain.User;
import com.hy.mgm.service.UserService;
import com.hy.mgm.utils.FileUtil;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author hang
 */
@Controller
public class UserManagemantController {

    @Autowired
    private UserService userService;

    private static List<User> users = new ArrayList<User>();

    {
        //-----------------------------------------------
        // 设置Entity
        // -----------------------------------------------
        users.add(new User());
        User user = users.get(0);
        user.setUserId("admin");
        user.setUserName("Robin");
        user.setEmail("abcd@abc.com");
    }

    @RequestMapping(value = "/user/add", method = RequestMethod.POST)
    public ModelAndView addUser(MultipartHttpServletRequest request, @ModelAttribute @Valid User user, BindingResult result) {
        ModelAndView view = new ModelAndView("redirect:/page");
//        ModelAndView view = new ModelAndView();

        Iterator<String> itr = request.getFileNames();
        MultipartFile mpf = null;
        //2. get each file
        while (itr.hasNext()) {
            //2.1 get next MultipartFile
            mpf = request.getFile(itr.next());
            if ("".equals(mpf.getOriginalFilename())) {
                continue;
            }
            String iconPath = FileUtil.saveFile(mpf, "User", user.getUserId());
            user.setIcon(iconPath);
            System.out.println(mpf.getOriginalFilename());

        }

        if (result.hasErrors()) {
            List<FieldError> errors = result.getFieldErrors();
            for (FieldError err : errors) {
                System.out.println("ObjectName:" + err.getObjectName() + "\tFieldName:" + err.getField()
                        + "\tFieldValue:" + err.getRejectedValue() + "\tMessage:" + err.getDefaultMessage());
            }
            view.addObject("users", user);
            return view;
        }

        users.add(user);
        view.addObject("users", users);
        if (userService.getUser(user.getUserId()) != null) {
            userService.updateUser(user);
        } else {
            userService.addUser(user);
        }
        return view;
    }
}
