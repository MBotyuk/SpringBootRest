package com.gmail.mbotyuk.springbootmvcdata.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@Controller
public class AdminController {

    @GetMapping("/admin")
    public String userList(Model model) {

        return "admin";
    }
}