package org.rewear.services;


import org.rewear.models.User;
import org.rewear.models.UserDTO;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();

    String setUser(UserDTO user);

    User updateUser(User user);

    User deleteUser(String username);

    List<User> allUserRequests(boolean all);
}
