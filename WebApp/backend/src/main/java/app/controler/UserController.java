package app.controler;

import app.model.SuperUser;
import app.repository.SuperUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    SuperUserRepository userRepository;

    @GetMapping( value = "getUser/{id}")
    public Optional<SuperUser> getUser(@PathVariable("id") int id)
    {
        return  userRepository.findById(Long.valueOf(id));
    }
}
