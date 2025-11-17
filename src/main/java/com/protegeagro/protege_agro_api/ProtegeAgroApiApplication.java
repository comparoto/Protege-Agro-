package com.protegeagro.protege_agro_api;

import com.protegeagro.protege_agro_api.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class ProtegeAgroApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProtegeAgroApiApplication.class, args);
    }

    @Bean
    CommandLineRunner run(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        return args -> {

        };
    }
}
