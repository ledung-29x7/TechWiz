package com.rapidrescue.rapid_rescue.controllers;

import com.rapidrescue.rapid_rescue.model.Users;
import com.rapidrescue.rapid_rescue.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<Users>> getAllUsers() {
        List<Users> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> getUserById(@PathVariable("id") Long id) {
        Users user = userService.findUserbyID(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Users> addUser(@RequestBody Users user) {
        Users newUser = userService.AddUsers(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable("id") Long id, @RequestBody Users user) {
        user.setUser_id(id);
        Users updatedUser = userService.EditUsers(user);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
        userService.DeleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
