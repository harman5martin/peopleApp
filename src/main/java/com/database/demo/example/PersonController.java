package com.database.demo.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PersonController {
    @Autowired
    private PersonRepository personRepository;

    @GetMapping("/getPeople")
    public Iterable<Person> getPeople() {
        return personRepository.findAll();
    }

    @PostMapping("/addPerson")
    private void addPerson(@RequestParam("name") String name) {
        Person person = new Person();
        person.setName(name);
        personRepository.save(person);
    }

    @DeleteMapping("/deletePerson")
    private void deletePerson(@RequestParam("id")int id) {
        personRepository.delete(personRepository.findById(id));
    }

}
