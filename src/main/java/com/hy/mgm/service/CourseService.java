package com.hy.mgm.service;

import com.hy.mgm.domain.User;
import com.hy.mgm.page.CoursePage;
import java.util.List;

/**
 * @author lanyonm
 */
public interface CourseService {

    public List<CoursePage> selectCourses();

}
