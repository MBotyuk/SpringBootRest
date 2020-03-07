package com.gmail.mbotyuk.springbootmvcdata.service;

import com.gmail.mbotyuk.springbootmvcdata.models.User;
import com.gmail.mbotyuk.springbootmvcdata.repositories.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/rest/user", produces = MediaType.APPLICATION_JSON_VALUE)
@Transactional
public class UserServiceImpl {

    private final UserDAO userDAO;

    @Autowired
    public UserServiceImpl(UserDAO userDAO) { //@Qualifier("encoder")
        this.userDAO = userDAO;
    }

    @GetMapping()
    public User isByName(Authentication authentication) {
        return userDAO.findByName(((UserDetails) authentication.getPrincipal()).getUsername());
    }


}