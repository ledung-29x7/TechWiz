package com.rapidrescue.rapid_rescue.service.imp;

import java.util.List;

import org.springframework.stereotype.Service;
import com.rapidrescue.rapid_rescue.model.Users;
import com.rapidrescue.rapid_rescue.repository.UserRepository;
import com.rapidrescue.rapid_rescue.service.UserService;

@Service
public class UserServiceImp implements UserService {
    private UserRepository userRepository;

    public UserServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Users AddUsers(Users users) {
        return userRepository.save(users);
    }

    @Override
    public Users findUserbyID(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

    }

    @Override
    public Users EditUsers(Users users) {
        if (!userRepository.existsById(users.getUser_id())) {
            throw new RuntimeException("User not found with id: " + users.getUser_id());
        }
        return userRepository.save(users);
    }

    @Override
    public void DeleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found with id: " + id);
        }
        userRepository.deleteById(id);
    }

}
