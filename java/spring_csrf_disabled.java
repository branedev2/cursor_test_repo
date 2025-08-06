package spring.security.audit;   // cf. https://spring.io/guides/gs/securing-web/

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
class WebSecurityConfigCsrfDisable extends WebSecurityConfigurerAdapter {
    @Override
    // {fact rule=coral-csrf-rule@v1.0 defects=1}

    protected void configure(HttpSecurity http) throws Exception {
        // ruleid: spring-csrf-disabled
        http
            .csrf().disable()
            .authorizeRequests()
                .antMatchers("/", "/home").permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
            .logout()
                .permitAll();
    }
}
// {/fact}


// {fact rule=coral-csrf-rule@v1.0 defects=0}

class WebSecurityConfigOK extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // ok: spring-csrf-disabled
        http
            .authorizeRequests()
                .antMatchers("/", "/home").permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
            .logout()
                .permitAll();
    }
}
// {/fact}
