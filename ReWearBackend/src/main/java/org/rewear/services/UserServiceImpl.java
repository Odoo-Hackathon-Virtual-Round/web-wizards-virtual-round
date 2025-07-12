package org.rewear.services;

import org.rewear.DataRepository.UserRepository;
import org.rewear.models.AdminUser;
import org.rewear.models.RegularUser;
import org.rewear.models.User;
import org.rewear.models.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public String setUser(UserDTO dto) {
        if(userRepository.findByUsername(dto.getUsername()).isPresent())
            return "Username already exist";

        User user;

        if ("USER".equalsIgnoreCase(dto.getRole())) {
            RegularUser ru = new RegularUser();
            ru.setUsername(dto.getUsername());
            ru.setEmail(dto.getEmail());
            ru.setPassword(passwordEncoder.encode(dto.getPassword()));
            ru.setRole("USER");
            ru.setPoints(dto.getPoints() != null ? dto.getPoints() : 0);
            user = ru;
        } else if ("ADMIN".equalsIgnoreCase(dto.getRole())) {
            AdminUser admin = new AdminUser();
            admin.setUsername(dto.getUsername());
            admin.setEmail(dto.getEmail());
            admin.setPassword(passwordEncoder.encode(dto.getPassword()));
            admin.setRole("ADMIN");
            user = admin;
        } else {
            return "Invalid role";
        }

        userRepository.save(user);
        return "User Created Successfully";
    }

    @Override
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User deleteUser(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User Not Found"));
        userRepository.delete(user);
        return user;
    }

    @Override
    public List<User> allUserRequests(boolean all)
    {
        if(all)
            return userRepository.findAll();
        return userRepository.findByRole("GUEST");
    }

}