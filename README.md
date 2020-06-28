Documentation


This project is deployed using firebase and here is the link  - https://auth-test-945af.firebaseapp.com/


I have made this project by HTML CSS and JavaScript


How to Run


Step 1:


1.	Install the VS code on your Laptop


2.	Install the live server on your laptop


Step 2:


1.	Now to need to run project using live server and here is the link for download live server : https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
Features-



1.	Here in signup page I have applied all the validations like you need to fill all the fields like user name, email, password and mobile no. If the user enter email in incorrect format user will get an alert please enter correct email id and if user enter nothing in the register form user will get an alert please enter all valid information.




2.	And in login page you will get two mode of login i.e. login with phone no and login with OTP.




3.	If you login with mobile no here also I applied validations like if user enter a mobile number that is not registered you will get an alert mobile number not registered and after filling correct mobile number you will get a OTP so here I have used firebase which send you a message and you will move to next page where you have to fill that code if you fill wrong code you will get an alert message wrong code and if you enter correct OTP you will move to home screen.




4.	After entering correct code you will see a home screen with your user name, name, phone no and email. If you click on logout button if you will be logged out.




Testing


          For testing you need Pycharm Application and some plugins Like 
 
1.	Pytest


2.	Allure


3.	Selenium


4.	Pytest-selenium


5.	Pip


And You have to install selenium through command line also For Login Page testing you have to write python code During testing I am faced some problems 
1.	Compiler problem

When I run my program I got some file related error because I have not 
Set environmental variable path because if you are run any program in command line you have set environmental path for that.

2.	Dependency related issue

I didn’t able to install some Dependency package due to application problem but I fixed that.




My code is 

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
    
    
    

And for Register Page




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
    
    
@allure.description("Validates the register deatail")


@allure.severity(severity_level="CRITICAL")



def test_validregister(test_setup):


    driver.get("https://auth-test-945af.firebaseapp.com/register.html")
    
    
    enter_name("karan")
    
    
    enter_email("kt62495@gmail.com")
    
    
    enter_number("7895988703")
    
    
    enter_password("123")
    
    
    enter_confirmpassword("123")
    
    
    driver.find_element_by_id("t7").click()
    
    

@allure.description("Validates the register deatail")


@allure.severity(severity_level="NORMAL")



def test_invalidregister(test_setup):


    driver.get("https://auth-test-945af.firebaseapp.com/register.html") 
    
    
    enter_name("karan")
    
    
    enter_email("kt62495")
    
    
    enter_number("7895988703")
    
    
    enter_password("123")
    
    
    enter_confirmpassword("123")
    
    
    driver.find_element_by_id("t7").click()
    
    
    try:
    
    
        assert "register.html" in driver.current_url
        
        
    finally:
    
    
        if(AssertionError):
        
        
            allure.attach(driver.get_screenshot_as_png(),
            
            
                          name="Invalid Credentials", attachment_type=allure.attachment_type.PNG)
                          
                          

@allure.step("Entering name as (0)")


def enter_name(t1):


    driver.find_element_by_id("t1").send_keys(t1)
    
    

@allure.step("Entering number as (0)")


def enter_email(t2):


    driver.find_element_by_id("t2").send_keys(t2)
    
    

@allure.step("Entering number as (0)")


def enter_number(t3):


    driver.find_element_by_id("t3").send_keys(t3)
    
    

@allure.step("Entering number as (0)")


def enter_password(t4):


    driver.find_element_by_id("t4").send_keys(t4)
    
    

@allure.step("Entering number as (0)")


def enter_confirmpassword(t5):


    driver.find_element_by_id("t5").send_keys(t5)
    
    




 
