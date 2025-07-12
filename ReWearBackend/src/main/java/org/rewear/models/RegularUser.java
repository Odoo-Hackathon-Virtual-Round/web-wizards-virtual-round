package org.rewear.models;

import lombok.*;
import org.springframework.data.annotation.TypeAlias;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@TypeAlias("regularUser")
public class RegularUser extends User{
    Long points;
}
