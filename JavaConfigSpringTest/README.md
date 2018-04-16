# Spring Java Config Test Sample #

Since Spring 3.0, the JavaConfig features are included in the Core Spring module. Thus Java Developer could move Spring beans definition from configuration XML files to Java classes.

Based on Spring Framework 4.3, this sample shows how to use the Spring's new Java-configuration support and its @Configuration-annotated class.

The following classes, interfaces and annotations are used in the sample:


Classes:

* AbstractAnnotationConfigDispatcherServletInitializer
* WebMvcConfigurerAdapter

Annotations:

* @Configuration
* @ComponentScan
* @EnableWebMvc
* @Controller

## Quick start ##

Download the code with git:
git clone git://github.com/jay4tech/JavaConfigSpringTest.git

Compile the code with maven:
mvn clean install

If you're using an IDE that supports Maven-based projects (InteliJ Idea,Eclipse or Netbeans), you can import the project directly from its POM. 

## Credits ##

* Uses [Maven](http://maven.apache.org/) as a build tool
