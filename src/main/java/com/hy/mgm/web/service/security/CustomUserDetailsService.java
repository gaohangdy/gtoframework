package com.hy.mgm.web.service.security;

import com.hy.mgm.domain.User;
import com.hy.mgm.service.UserService;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("customUserDetailsService")
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String loginId)
            throws UsernameNotFoundException {
        User user = userService.getUser(loginId);
        System.out.println("User : " + user);
        if (user == null) {
            System.out.println("User not found");
            throw new UsernameNotFoundException("Username not found");
        }
        return new org.springframework.security.core.userdetails.User(user.getUserId(), user.getPassword(),
                user.getState().equals("t"), true, true, true, getGrantedAuthorities(user));
    }

    private List<GrantedAuthority> getGrantedAuthorities(User user) {
        List<GrantedAuthority> authorities = new ArrayList<>();

//		for(UserProfile userProfile : user.getUserProfiles()){
//			System.out.println("UserProfile : "+userProfile);
//			authorities.add(new SimpleGrantedAuthority("ROLE_"+userProfile.getType()));
//		}
        authorities.add(new SimpleGrantedAuthority("ROLE_" + "ADMIN"));
        System.out.print("authorities :" + authorities);
        return authorities;
    }

}
