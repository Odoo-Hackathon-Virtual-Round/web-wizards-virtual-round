package org.rewear.services;


import org.rewear.models.User;
import org.rewear.dto.UserDTO;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();

    String setUser(UserDTO user);

    String updateUser(UserDTO user);

    User deleteUser(String username);

    List<User> allUserRequests(boolean all);
}
