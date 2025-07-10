package com.exp.testFront.runners;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        glue = "com.exp.testFront.steps",
        plugin = {"pretty", "html:target/cucumber-report.html"}
)
public class TestRunner {
}
