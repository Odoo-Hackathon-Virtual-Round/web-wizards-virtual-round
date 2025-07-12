package org.rewear.models;

import lombok.*;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Document("users")
@TypeAlias("user")
public class User {
    @Id
    private String userId;
    private String username;
    private String email;
    private String password;
    private String role;
}