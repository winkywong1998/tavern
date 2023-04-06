package com.tavern.ling.config;

import com.tavern.ling.interceptor.PostClickInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Created by tuzhenyu on 17-7-20.
 * @author tuzhenyu
 */
@Component
public class WebConfig implements WebMvcConfigurer {
    @Autowired
    private PostClickInterceptor postClickInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(postClickInterceptor).addPathPatterns("/board/post/*");
    }
}
