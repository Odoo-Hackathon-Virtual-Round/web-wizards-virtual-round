package org.rewear.models;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class JWTRequest {

    private String username;
    private String password;

}