package org.rewear.models;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserDTO {
    public String userId;
    public String username;
    public String email;
    public String password;
    public String role;
    public Long points;
}
