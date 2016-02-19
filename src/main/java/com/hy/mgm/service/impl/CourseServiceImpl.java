package com.hy.mgm.service.impl;

import com.hy.mgm.page.CoursePage;
import com.hy.mgm.persistence.CourseMapper;
import com.hy.mgm.service.CourseService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("courseService")
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseMapper courseMapper;

    @Override
    public List<CoursePage> selectCourses() {
        List<CoursePage> courses = courseMapper.selectCourses();
        return courses;
    }

}
