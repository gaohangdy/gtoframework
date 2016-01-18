package com.kkt.hycount.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.kkt.hycount.domain.User;
import com.kkt.hycount.persistence.UserMapper;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    public int addUser(User userToAdd) {
        return userMapper.addUser(userToAdd);
    }

    public User getUser(int userId) {
        return userMapper.getUser(userId);
    }
}
