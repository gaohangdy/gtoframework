/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hy.mgm.web.service;

import com.hy.mgm.domain.TCourse;
import com.hy.mgm.jpa.repository.CourseRepository;
import com.hy.mgm.page.CoursePage;
import com.hy.mgm.service.CourseService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author hang
 */
@RestController
public class CourseManagementService {

    @Autowired
    private CourseService courseService;
    @Autowired
    private CourseRepository courseReposityory;

    @RequestMapping(value = "/rest/course/search", produces = "application/json")
    public @ResponseBody List<CoursePage> search() {
        return courseService.selectCourses();
    }

    @RequestMapping(value = "/rest/course/get", produces = "application/json")
    public @ResponseBody TCourse get(@RequestParam(value = "courseid", defaultValue = "") String courseId) {
        return courseReposityory.findOne(courseId);
    }

    @RequestMapping(value = "rest/course/create", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody TCourse save(@RequestBody TCourse course) {
        return courseReposityory.save(course);
    }
}
