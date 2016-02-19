package com.hy.mgm.service.impl;

import com.hy.mgm.domain.User;
import com.hy.mgm.persistence.UserMapper;
import com.hy.mgm.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;


@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public int addUser(User userToAdd) {
        return userMapper.addUser(userToAdd);
    }
    
    public int updateUser(User user) {
        return userMapper.updateUser(user);
    }

    @Override
    public User getUser(String loginId) {
        return userMapper.getUser(loginId);
    }
    
    @Override
    public List<User> getUsers(int userType) {
        return userMapper.getUsers(userType);
    }
    
    @Override
    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().
                getAuthentication();
        String userId = authentication.getName();
        return userMapper.getUser(userId);     
    }
}
