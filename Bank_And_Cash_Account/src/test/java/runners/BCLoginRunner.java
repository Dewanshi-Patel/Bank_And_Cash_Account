package runners;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\test\\java\\features\\Bank&CashLogin.feature",
		glue = "steps",
		tags ="@BCScenario1 ",
		monochrome = true,
		dryRun = false,
		plugin = {
				"pretty",
				"html:target/cucumber",
				"json:target/cucumber.json"
		}
		
		)
public class BCLoginRunner {

}
