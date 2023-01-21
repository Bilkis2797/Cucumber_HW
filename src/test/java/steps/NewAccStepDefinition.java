package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.NewAccPage;
import pages.TestBase;

public class NewAccStepDefinition extends TestBase{

	LoginPage loginPage;
	NewAccPage newAccPage;
	
	@Before
	public void beforeRun() {
		initDriver();
		loginPage=PageFactory.initElements(driver, LoginPage.class);
		newAccPage=PageFactory.initElements(driver, NewAccPage.class);
	}
	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page(){
		driver.get("http://www.techfios.com/billing/?ng=admin/");
	}
	
	@When("^User enters the \"([^\"]*)\" in the username field$")
	public void user_enters_the_in_the_username_field(String username){
		loginPage.enterUserName(username);
	}

	@When("^User enters the \"([^\"]*)\" in the password field$")
	public void user_enters_the_in_the_password_field(String password){
		loginPage.enterPassword(password);
	}

	@When("^User clicks on login$")
	public void user_clicks_on_login() {
		loginPage.clickSignInButton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page(){
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
	}

	@Then("^User clicks on bankCash$")
	public void user_clicks_on_bankCash(){
		newAccPage.clickonBankAndCash();
	}

	@Then("^User clicks on newAccount$")
	public void user_clicks_on_newAccount(){
		newAccPage.clickonNewAccButton();
	}

	@Then("^User enters \"([^\"]*)\" in the accountTitle field in accounts page$")
	public void user_enters_in_the_accountTitle_field_in_accounts_page(String accountTitle){
		newAccPage.enterAccountTitle(accountTitle);
	}

	@Then("^User enters \"([^\"]*)\" in the description field in accounts page$")
	public void user_enters_in_the_description_field_in_accounts_page(String description) {
		newAccPage.enterDescription(description);
	}

	@Then("^User enters \"([^\"]*)\" in the initialBalance field in accounts page$")
	public void user_enters_in_the_initialBalance_field_in_accounts_page(String initialBalance) {
		newAccPage.enterInitialBalance(initialBalance);
	}

	@Then("^User enters \"([^\"]*)\" in the accountNumber field in accounts page$")
	public void user_enters_in_the_accountNumber_field_in_accounts_page(String accountNumber){
		newAccPage.enterAccountNumber(accountNumber);
	}

	@Then("^User enters \"([^\"]*)\" in the contactPerson field in accounts page$")
	public void user_enters_in_the_contactPerson_field_in_accounts_page(String contactPerson){
		newAccPage.enterContactPerson(contactPerson);
	}

	@Then("^User enters \"([^\"]*)\" in the Phone field in accounts page$")
	public void user_enters_in_the_Phone_field_in_accounts_page(String contactPhone){
		newAccPage.enterContactPhone(contactPhone);
	}

	@Then("^User enters \"([^\"]*)\" in the internetBankingURL field in accounts page$")
	public void user_enters_in_the_internetBankingURL_field_in_accounts_page(String internetBankingUrl){
		newAccPage.enterInternetBankingUrl(internetBankingUrl);
	}

	@Then("^User clicks on submit$")
	public void user_clicks_on_submit(){
		newAccPage.clickSubmitButton();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		String expectedTitle = "Manage Accounts";
		String actualTitle = newAccPage.varifyAccount();
		Assert.assertEquals(expectedTitle, actualTitle);
		
	}

	@After
    public void teardown() {
		driver.close();
		driver.quit();
	}


	}


