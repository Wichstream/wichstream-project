package br.com.wichstream.api.services;

import br.com.wichstream.api.models.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
}
