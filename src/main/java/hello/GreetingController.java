package hello;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@MapperScan("sample.mybatis.persistence")
public class GreetingController {

//	@Autowired
//	private CityMapper cityMapper;

    @RequestMapping("/greeting")
    public String greeting(@RequestParam(value = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
//        System.out.println(this.cityMapper.findByState("CA"));
        return "greeting";
    }

}
