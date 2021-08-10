//package app.auth;
//
//
//import java.util.ArrayList;
//import java.util.List;
//
//import app.model.SuperUser;
//import app.repository.SuperUserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.stereotype.Component;
//
////@Component
//public class CustomAuthenticationProvider implements AuthenticationProvider {
//
//
//    @Autowired
//    private SuperUserRepository userRepository;
//
//    @Override
//    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
//
//        String email = authentication.getName();
//        String password = authentication.getCredentials().toString();
//
//        SuperUser user = userRepository.getSuperUserByEmailAndPassword(email, password);
//
//        if (user == null) {
//            throw new AuthenticationCredentialsNotFoundException("Date de conectare gresite!");
//        }
//        List<GrantedAuthority> authorities = new ArrayList<>();
//
//        authorities.add(new SimpleGrantedAuthority("ADMIN")); // description is a string
//
//        return new UsernamePasswordAuthenticationToken(email, password, authorities);
//    }
//
//    @Override
//    public boolean supports(Class<?> authentication) {
//        return authentication.equals(UsernamePasswordAuthenticationToken.class);
//    }
//}