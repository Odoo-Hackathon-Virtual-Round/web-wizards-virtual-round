package org.rewear;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "*")
public class ReWearBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReWearBackendApplication.class, args);
    }

}
