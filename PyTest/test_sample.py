import pytest
from selenium import webdriver
import allure

@pytest.fixture()



def test_setup():
    global driver
    driver = webdriver.Chrome(executable_path="C:\\webdrivers\\chromedriver.exe")
    driver.implicitly_wait(10)
    driver.maximize_window()
    yield
    driver.quit()
@allure.description("Validates the login deatail")
@allure.severity(severity_level="CRITICAL")

def test_validlogin(test_setup):
    driver.get("https://auth-test-945af.firebaseapp.com/lgin.html")
    enter_number("7895988703")
    enter_otp("819383")
    driver.find_element_by_id("verify-user").click()

@allure.description("Validates the login deatail")
@allure.severity(severity_level="NORMAL")

def test_invalidlogin(test_setup):
    driver.get("https://auth-test-945af.firebaseapp.com/lgin.html")
    enter_number("")
    enter_otp("")
    driver.find_element_by_id("verify-user").click()
    try:
        assert "userinformation.html" in driver.current_url
    finally:
        if(AssertionError):
            allure.attach(driver.get_screenshot_as_png(),
                          name="Invalid Credentials", attachment_type=allure.attachment_type.PNG)

@allure.step("Entering number as (0)")
def enter_number(number):
    driver.find_element_by_id("number").send_keys(number)

@allure.step("Entering otp as (0)")
def enter_otp(otp):
    driver.find_element_by_id("otp").send_keys(otp)

