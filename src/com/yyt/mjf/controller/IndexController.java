package com.yyt.mjf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @ProjectName: house
 * @Package: com.yyt.mjf.controller
 * @ClassName: IndexController
 * @Author: majiafei
 * @Description:
 * @Date: 2019/4/6 11:29
 */
@Controller
public class IndexController {

    @RequestMapping("/index")
    @ResponseBody
    public String index() {
        return "contexxt";
    }

    @RequestMapping("/hello")
    public String hello() {
        return "hello";
    }

}
