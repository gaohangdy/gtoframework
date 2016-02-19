/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hy.mgm.web.service;

import com.hy.mgm.domain.MUser;
import com.hy.mgm.domain.User;
import com.hy.mgm.jpa.repository.UserRepository;
import com.hy.mgm.service.impl.UserServiceImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author hang
 */
@RestController
public class UserManagementService {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/rest/user/search")
    public List<User> getUsers(User user) {
        List<User> users = userService.getUsers(0);
        return users;
    }

    @RequestMapping(value = "/rest/getuser", produces = "application/json")
    public MUser getUser(@RequestParam(value = "userid", defaultValue = "") String userId) {
        return userRepository.findOne(userId);
    }

    @RequestMapping(value = "rest/createuser", method = RequestMethod.POST, produces = "application/json")
    public MUser saveUser(@RequestBody MUser user) {
        return userRepository.save(user);
    }
}
