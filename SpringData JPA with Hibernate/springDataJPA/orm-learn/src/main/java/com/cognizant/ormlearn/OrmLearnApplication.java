package com.cognizant.ormlearn;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;

import com.cognizant.ormlearn.repository.CountryRepository;
import com.cognizant.ormlearn.model.Country;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

	@Autowired
	private CountryRepository countryRepository;

	public static void main(String[] args) {
		SpringApplication.run(OrmLearnApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		System.out.println("===== COUNTRIES FROM DATABASE =====");

		for (Country country : countryRepository.findAll()) {
			System.out.println(country.getCode() + " - " + country.getName());
		}
	}
}