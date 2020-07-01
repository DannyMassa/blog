Task scheduling is an important underlying element to many essential elements of a web application
such as email notifications, system maintenance, etc. There are many ways to implement Quartz, 
but for this tutorial, we are going to implement within a free-standing Spring Boot application.

### Prerequisites
- Java 1.8
- Maven (I'm using 3.6.2 at the time of writing this tutorial) 

### Generating a Spring Boot Project to use

To start, We are going to need a Spring Boot application, using the 
    [Spring Initializr](https://start.spring.io/)
set up a project with
    [Lombok](https://projectlombok.org/), 
    [Quartz](http://www.quartz-scheduler.org/overview/), 
    and [Spring Web](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html)
as dependencies shown here:

[<img src="assets/articles/article-assets/getting-started-with-quartz-scheduling/spring-initailizer.png"/>]

After clicking on generate, you'll download a .zip file. Extract the contents and you'll be able to 
verify this works by going into the root directory and building and launching the application by executing
the following commands in the root directory:
 
`mvn clean install`

followed by:

`mvn spring-boot run`
    
Your app is up and running is your console logs like like this:

[<img src="assets/articles/article-assets/getting-started-with-quartz-scheduling/first-successful-log.png"/>]

My code at this point is available at 
[this](https://github.com/DannyMassa/quartz-tutorials/tree/94cc3dae80c5e19b06f4248ede7f0909b1763e6c)
commit. In the 'getting-started' directory.
