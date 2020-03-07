package com.gmail.mbotyuk.springbootmvcdata.controller;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    public LoginController(){}

    @GetMapping("/login")
    public String getLoginPage(Model model, Authentication authentication) {

        String url = "login";
        if (authentication != null){
            if ( authentication.getAuthorities().iterator().next().getAuthority().contains("ADMIN")){
                url = "redirect:/admin";
            } else {
                url = "redirect:/user";
            }
        }

        return url;
    }
}
