package com.hy.mgm.jpa.repository;

import com.hy.mgm.domain.MUser;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * MUser的JPA Repository
 *
 * @author gaohang
 * @version 1.0.0
 */
public interface UserRepository extends JpaRepository<MUser,String>{
	
}