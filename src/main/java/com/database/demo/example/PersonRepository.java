package com.database.demo.example;

import com.database.demo.example.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends CrudRepository<Person,Integer> {
    public Person findById(int id);
}
