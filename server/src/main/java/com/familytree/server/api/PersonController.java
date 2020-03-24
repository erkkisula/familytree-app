package com.familytree.server.api;

import com.familytree.server.model.Person;
import com.familytree.server.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RequestMapping("/api/v1/person")
@RestController
public class PersonController {
    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    // Adds a person to the database
    @PostMapping
    public void addPerson(@Valid @NonNull @RequestBody Person person) {
        personService.addPerson(person);
    }

    // Returns the database contents
    @GetMapping(path= "/all")
    public List<Person> getAllPeople() {
        return personService.getAllPeople();
    }

    // Returns a person from the database base with the given id
    @GetMapping(path = "{id}")
    public Person getPersonById(@PathVariable("id") UUID id) {
        return personService.getPersonById(id).orElse(null);
    }

    // Deletes a person from the database with the given id
    @DeleteMapping(path = "{id}")
    public void deletePersonById(@PathVariable("id") UUID id) {
        personService.deletePerson(id);
    }

    // Updates a person from the database with the given id
    @PutMapping(path = "{id}")
    public void updatePersonById(@PathVariable("id") UUID id, @RequestBody Person updatedPerson) {
        personService.updatePerson(id, updatedPerson);
    }

    // Returns a list of people who belong in a given family
    @GetMapping(path = "/family/{id}")
    public List<Person> getPeopleInFamily(@PathVariable("id") UUID id) {
        return personService.getPeopleByFamily(id);
    }

    // Returns the children of a person
    @GetMapping(path ="/child/{id}")
    public List<Person> getChildren(@PathVariable("id") UUID id) {
        return personService.getChildren(id);
    }
}
