package net.codejava.implementation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class NavigationController {

    @RequestMapping("/")
    public ModelAndView home() {
        return new ModelAndView("index.html");
    }

    @RequestMapping("/welcome")
    public ModelAndView welcome() {
        return new ModelAndView("welcome.html");
    }

    @RequestMapping(value = "/generator", method = RequestMethod.GET)
    public ModelAndView generator() {
        return new ModelAndView("generator.html");
    }

    @RequestMapping(value = "/game", method = RequestMethod.GET)
    public ModelAndView game() {
        return new ModelAndView("game.html");
    }
}
