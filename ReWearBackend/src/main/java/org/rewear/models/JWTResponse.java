package org.rewear.models;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class JWTResponse {

    private String jwtToken;
    private User user;

}
