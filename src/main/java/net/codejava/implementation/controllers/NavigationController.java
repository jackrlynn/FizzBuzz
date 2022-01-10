package net.codejava.implementation.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class NavigationController {

    @RequestMapping("/")
    public ModelAndView welcome() {
        return new ModelAndView("index.html");
    }

    @RequestMapping("/generator")
    public ModelAndView welcome() {
        return new ModelAndView("index.html");
    }

    @RequestMapping("/game")
    public ModelAndView welcome() {
        return new ModelAndView("index.html");
    }
}
