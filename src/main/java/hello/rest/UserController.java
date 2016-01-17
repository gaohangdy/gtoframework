package hello.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import sample.mybatis.domain.User;
import sample.mybatis.jpa.repository.UserRepository;
import sample.mybatis.service.UserService;

/**
 * User的控制器，用于显示同时查询2个数据库的结果
 *
 * @author 小翼
 * @version 1.0.0
 */
@RestController
public class UserController {

	@Autowired
	UserService userService;
	@Autowired
	UserRepository userRepository;
	
	@RequestMapping(value="/user",method=RequestMethod.GET)
	public List<User> readUserInfo(){
		List<User> list = new ArrayList<User>();
		list.add(userService.readUserByUsername("lxy"));
		list.addAll(userRepository.findAll());
		return list;
	}
}
