package com.sook4.beanYard;

import com.sook4.beanYard.auth.User;
import com.sook4.beanYard.auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BeanYardApplication {
	public static void main(String[] args) {
		SpringApplication.run(BeanYardApplication.class, args);
	}
}
