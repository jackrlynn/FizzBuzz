package net.codejava.implementation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

// Controllers for navigation between pages
// Follows RESTful architecture, though only GET methods are used given the lack of models used
@Controller
public class NavigationController {

    // All correspond to HTML pages in resources/static

    // Homepage mapping >>> index.html
    //   GET redirect to homepage
    @RequestMapping("/")
    public ModelAndView home() {
        return new ModelAndView("index.html");
    }

    // Generator mapping >>> generator.html
    //   GET redirect to generator page
    @RequestMapping(value = "/generator", method = RequestMethod.GET)
    public ModelAndView generator() {
        return new ModelAndView("generator.html");
    }

    // Game mapping >>> game.html
    //   GET redirect to game page
    @RequestMapping(value = "/game", method = RequestMethod.GET)
    public ModelAndView game() {
        return new ModelAndView("game.html");
    }
}
