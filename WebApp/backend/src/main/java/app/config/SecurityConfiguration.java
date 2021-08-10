//package app.config;
//import app.auth.CustomAuthenticationProvider;
//
//import java.util.Arrays;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
////import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
//
//
////@Configuration
////@EnableWebSecurity
//public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//
//
////	 @Override
////	    protected void configure(HttpSecurity http) throws Exception {
////	        http.authorizeRequests()
////	            .antMatchers("/").hasAnyAuthority("USER", "CREATOR", "EDITOR", "ADMIN")
////	            .antMatchers("/new").hasAnyAuthority("ADMIN", "CREATOR")
////	            .antMatchers("/edit/**").hasAnyAuthority("ADMIN", "EDITOR")
////	            .antMatchers("/delete/**").hasAuthority("ADMIN")
////	            .anyRequest().authenticated()
////	            .and()
////	            .formLogin().permitAll()
////	            .and()
////	            .logout().permitAll()
////	            .and()
////	            .exceptionHandling().accessDeniedPage("/403")
////	            ;
////	    }
//
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//    	 http.cors().and().authorizeRequests()
//                .antMatchers("/login").hasAnyAuthority("ADMIN")
//                .antMatchers("/notFound/").hasAnyAuthority()
//                .anyRequest().authenticated()
//                .and()
//                .formLogin().loginPage("/login")
//                .permitAll()
////                .successForwardUrl("/index")
//                .and()
////            .logout().deleteCookies("JSESSIONID", "JWT").logoutSuccessUrl("/login") .clearAuthentication(true).invalidateHttpSession(true);
//                .logout().permitAll()
////                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//                .logoutSuccessUrl("/login");
////            .deleteCookies("auth_code", "JSESSIONID").invalidateHttpSession(true);
//
//        //        .logout().deleteCookies("JSESSIONID", "JWT").logoutSuccessUrl("/index.html") .clearAuthentication(true).invalidateHttpSession(true
//    }
//
//
//    @Autowired
//    private CustomAuthenticationProvider authProvider;
//
//    @Autowired
//    public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
//        auth.authenticationProvider(authProvider);
//    }
//    @Bean
//    CorsConfigurationSource corsConfigurationSource() {
//        org.springframework.web.cors.UrlBasedCorsConfigurationSource source = new org.springframework.web.cors.UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
//        return source;
//    }
//   
//  
//}