package com.hy.mgm.jpa.repository;

import com.hy.mgm.domain.TCourse;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * TCourse的JPA Repository
 *
 * @author gaohang
 * @version 1.0.0
 */
public interface CourseRepository extends JpaRepository<TCourse,String>{
	
}