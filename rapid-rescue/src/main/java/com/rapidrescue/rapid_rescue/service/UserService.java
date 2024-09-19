package com.rapidrescue.rapid_rescue.service;

import java.util.List;

import com.rapidrescue.rapid_rescue.model.Users;

public interface UserService {
    List<Users> getAllUsers();

    Users AddUsers(Users users);

    Users findUserbyID(Long id);

    Users EditUsers(Users users);

    void DeleteUser(Long id);
}
