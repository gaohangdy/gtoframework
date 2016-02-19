package com.hy.mgm.web.service;

import com.hy.mgm.domain.User;
import com.hy.mgm.service.impl.UserServiceImpl;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestGreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @Autowired
    private UserServiceImpl userService;

    @RequestMapping("/rest")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        System.out.println("Getting User");
//        User user = userService.getUser(name);
//        System.out.println("Got User: " + user.getUserName());

        return new Greeting(counter.incrementAndGet(),
                String.format(template, name));
    }
}
