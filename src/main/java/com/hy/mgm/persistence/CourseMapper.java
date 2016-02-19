/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hy.mgm.persistence;

import com.hy.mgm.domain.User;
import com.hy.mgm.page.CoursePage;
import java.util.List;
import org.apache.ibatis.annotations.Select;

/**
 *
 * @author hang
 */
public interface CourseMapper {
    public List<CoursePage> selectCourses();    
}
