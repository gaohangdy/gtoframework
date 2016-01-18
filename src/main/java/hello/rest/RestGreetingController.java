package hello.rest;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sample.mybatis.domain.User;
import sample.mybatis.service.UserService;

@RestController
public class RestGreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    
//    @Autowired
//    private UserService userService;

    @RequestMapping("/rest")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
//        System.out.println("Adding User");
//        int userId = userService.addUser(new User("dude@dude.com", "thedude"));
//        System.out.println("Getting User");
//        User user = userService.getUser(userId);
//        System.out.println("Got User: " + user.getUserName());
        
        return new Greeting(counter.incrementAndGet(),
                String.format(template, name));
    }
}
