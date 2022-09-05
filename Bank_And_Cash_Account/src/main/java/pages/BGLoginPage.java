package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BGLoginPage {
	WebDriver driver;

	public BGLoginPage(WebDriver driver) {
		this.driver = driver;

	}

	@FindBy(how = How.XPATH, using = "//button[@onclick='myFunctionSky()']")
	WebElement SET_SKYBLUE_BACKGROUND;
	@FindBy(how = How.XPATH, using = "//body[@style='background-color: skyblue;']")
	WebElement VERIFIED_SKYBLUE_BACKGROUND;
	@FindBy(how = How.XPATH, using = "//button[@onclick='myFunctionWhite()']")
	WebElement SET_WHITE_BACKGROUND;
	@FindBy(how = How.XPATH, using = "//body[@style='background-color: white;']")
	WebElement VERIFIED_WHITE_BACKGROUND;

	public void clickOnSetSkyblueBackgroundButton() {
		SET_SKYBLUE_BACKGROUND.click();
	}

	public String getPageTitle() {
		return driver.getTitle();

	}

	public void clickOnSetWhiteBackgroundButton() {
		SET_WHITE_BACKGROUND.click();
	}

}
