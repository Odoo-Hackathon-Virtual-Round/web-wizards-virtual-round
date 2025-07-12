package org.rewear.models;

import lombok.*;
import org.springframework.data.annotation.TypeAlias;

@NoArgsConstructor
@Getter
@Setter
@ToString
@TypeAlias("adminUser")
public class AdminUser extends User {
}
