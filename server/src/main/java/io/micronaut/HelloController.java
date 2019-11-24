package io.micronaut;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;

@Controller("/name")
public class HelloController {

    /**
        GET http://laptop-pravme2s:8080/name/Tan
     */
    @Get("/{name}")
    HttpResponse<String> hello(String name) {
        return HttpResponse.ok("Hello, " + name + "!");
    }
}
