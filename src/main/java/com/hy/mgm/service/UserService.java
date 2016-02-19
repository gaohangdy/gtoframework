package com.hy.mgm.service;

import com.hy.mgm.domain.User;
import java.util.List;

/**
 * @author lanyonm
 */
public interface UserService {

    /**
     * @param userToAdd
     * @return a list of all {@link User}s
     */
    public int addUser(User userToAdd);
    
    public int updateUser(User user);

    /**
     * @param loginId
     * @return success
     */
    public User getUser(String loginId);
    
    public List<User> getUsers(int userType);
    
    public User getCurrentUser();

}
