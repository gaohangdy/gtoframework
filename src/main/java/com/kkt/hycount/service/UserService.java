package com.kkt.hycount.service;

import java.util.List;
import com.kkt.hycount.domain.User;


/**
 * @author lanyonm
 */
public interface UserService {

	/**
	 * @return a list of all {@link User}s
	 */
	public int addUser(User userToAdd);
	/**
	 * @param user
	 * @return success
	 */
	public User getUser(int userId);

}
