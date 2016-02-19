/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hy.mgm.web.controller;

import com.hy.mgm.domain.TCourse;
import com.hy.mgm.domain.User;
import com.hy.mgm.jpa.repository.CourseRepository;
import com.hy.mgm.jpa.repository.UserRepository;
import com.hy.mgm.utils.StringUtil;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author hang
 */
@Controller
public class CourseManagemantController {

    @Autowired
    CourseRepository courseRepository;
    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "/course/add", method = RequestMethod.POST)
    public ModelAndView addUser(MultipartHttpServletRequest request, @ModelAttribute @Valid TCourse course, BindingResult result) {
        ModelAndView view = new ModelAndView("redirect:/page");
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String userId = auth.getName(); //get logged in username
        course.setUserid(userRepository.findOne(userId));
        course.setSdate(StringUtil.convStringToDate(request.getParameter("sdate")));
        course.setEdate(StringUtil.convStringToDate(request.getParameter("edate")));
        courseRepository.save(course);
        
        return view;
    }
}
