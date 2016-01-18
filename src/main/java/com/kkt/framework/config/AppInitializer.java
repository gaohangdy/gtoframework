package com.kkt.framework.config;

import javax.servlet.Filter;

// import org.slf4j.MDC;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import com.opensymphony.sitemesh.webapp.SiteMeshFilter;
import com.kkt.hycount.service.UserServiceImpl;

/**
 * Java Config for this application.  Life begins here.
 *
 * @author lanyonm
 */
public class AppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	@Override
	protected Class<?>[] getRootConfigClasses() {
		// MDC.put("environment", System.getenv("APP_ENV") != null ? System.getenv("APP_ENV") : "dev");
		return new Class<?>[]{DatabaseConfig.class};
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		return new Class<?>[]{MvcWebConfig.class};
	}

	@Override
	protected Filter[] getServletFilters() {
		CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
		characterEncodingFilter.setEncoding("UTF-8");
		return new Filter[]{ characterEncodingFilter, new SiteMeshFilter() };
	}

	@Override
	protected String[] getServletMappings() {
		return new String[]{"/"};
	}

}
