package pages;

import java.util.Random;
import java.util.concurrent.ForkJoinPool.ManagedBlocker;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import junit.framework.Assert;

public class NewAccPage extends TestBase{

	WebDriver driver;
	
	public NewAccPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.XPATH, using="//*[@id=\"side-menu\"]/li[10]/a")WebElement BankAndCashButton;
	@FindBy(how = How.XPATH, using="//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")WebElement NewAccButton;
	@FindBy(how = How.XPATH, using="//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[1]/h5")WebElement AddNewAccount;	
	@FindBy(how = How.XPATH, using="//*[@id=\"account\"]")WebElement AccountTitle;
	@FindBy(how = How.XPATH, using="//*[@id=\"description\"]")WebElement Description;
	@FindBy(how = How.XPATH, using="//*[@id=\"balance\"]")WebElement InitialBalance;
	@FindBy(how = How.XPATH, using="//*[@id=\"account_number\"]")WebElement AccountNumber;
	@FindBy(how = How.XPATH, using="//*[@id=\"contact_person\"]")WebElement ContactPerson;
	@FindBy(how = How.XPATH, using="//*[@id=\"contact_phone\"]")WebElement ContactPhone;
	@FindBy(how = How.XPATH, using="//*[@id=\"ib_url\"]")WebElement InternetBankingUrl;
	@FindBy(how = How.XPATH, using="//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")WebElement SubmitButton;	
//	@FindBy(how = How.XPATH, using="//*[@id=\"page-wrapper\"]/div[3]/div[1]")WebElement AccountValidation;
	@FindBy(how = How.XPATH, using="//*[@id=\"page-wrapper\"]/div[3]/div[2]/div/div/div[1]/h5")WebElement ManageAccount;

	
	
	public void clickonBankAndCash() {
		BankAndCashButton.click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		}
	public void clickonNewAccButton() {
		NewAccButton.click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
	}
	public void enterAccountTitle(String accountTitle) {
		  WebDriverWait wait = new WebDriverWait(driver, 10);
	        wait.until(ExpectedConditions.visibilityOf(AddNewAccount));
		AccountTitle.sendKeys(accountTitle + generateRandomNum(9999));
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterDescription(String description) {
		Description.sendKeys(description);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void enterInitialBalance(String initialBalance) {
		InitialBalance.sendKeys(initialBalance);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void enterAccountNumber(String accountNumber) {
		AccountNumber.sendKeys(accountNumber + generateRandomNum(9999));
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void enterContactPerson(String contactPerson) {
		ContactPerson.sendKeys(contactPerson);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void enterContactPhone(String contactPhone) {
		ContactPhone.sendKeys(contactPhone + generateRandomNum(9999));
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void enterInternetBankingUrl(String internetBankingUrl) {
		InternetBankingUrl.sendKeys(internetBankingUrl);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void clickSubmitButton() {
		SubmitButton.click();
	}
	
	public String varifyAccount() {
		return ManageAccount.getText();
    }

	
	
	
}
