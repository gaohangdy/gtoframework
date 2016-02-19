package com.hy.mgm.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.ResourceUrlEncodingFilter;
import org.springframework.web.servlet.resource.VersionResourceResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
public class WebMvcConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/login").setViewName("login");
//        registry.addViewController("/home").setViewName("home");
//        registry.addViewController("/").setViewName("login");
//        registry.addViewController("/hello").setViewName("hello");
        
        registry.addViewController("/mainlogin").setViewName("mainlogin");
        registry.addViewController("/login_1").setViewName("login1");
        registry.addViewController("/hello_1").setViewName("hello_1");
        //formal development
        registry.addViewController("/course/publish").setViewName("course/publish");
        registry.addViewController("/main").setViewName("main/main");
        registry.addViewController("/model").setViewName("user/model");
        
        registry.addViewController("/page").setViewName("frame/page");
        registry.addViewController("/user").setViewName("page/user");
        registry.addViewController("/course").setViewName("page/course");
        registry.addViewController("/").setViewName("page/user");
        
    }

    @Bean
    public ResourceUrlEncodingFilter resourceUrlEncodingFilter() {
        return new ResourceUrlEncodingFilter();
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        VersionResourceResolver versionResolver = new VersionResourceResolver()
                .addContentVersionStrategy("/css/**", "/js/**");
        registry.addResourceHandler("/resources/**")
                .addResourceLocations("/resources/")
                .setCachePeriod(null)
                .resourceChain(true)
                .addResolver(versionResolver);
    }

    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }

    @Bean
    public InternalResourceViewResolver viewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/WEB-INF/views/");
        resolver.setSuffix(".jsp");
        return resolver;
    }
}
