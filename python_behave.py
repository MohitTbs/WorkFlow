# Install behave:----------------------------------------
# pip install behave

# Create a folder "features":------------------
# create 2 sub folder --> steps and pages
# all the .feature files should be under features folder

# To run a feature file --> go to features folder and write:---------------
# behave register.feature  --> the name of the file can be anything
# If there are no steps definitions, it will provide the code snippet for you

# To run feature with print in console:----------------------
# behave register.py --no-capture

# Use datatable:-----------------------------
# Suppose the Scenario is:

#
#   Scenario: Test Login 1
#     Given user is on login page
#     When user enters the below detail
#       | name | telephone  |
#       | Ajay | 7485963254 |
#     Then user sees the success message "Successful" and also "Heart" in the button
#
#           Now if you want to use this data:

# @when(u'user enters the below detail')
# def step_impl(context):
#     print("user enters the below detail --2")
#     for row in context.table:
#         print(row["name"])
#         print(row["telephone"])
#
#
# @then(u'user sees the success message "{msg}" and also "{p1}" in the button')
# def step_impl(context,msg,p1):
#     print("user sees the success message --3")
#     print(msg,p1)


# Use of data driven approach -- Scenario Outline:------------------------------
#   Scenario Outline: Login with valid credentials
#     Given I navigated to Login page
#     When I enter valid email address as "<email>" and valid password as "<password>" into the fields
#     And I click on Login button
#     Then I should get logged in
#     Examples:
#       |email                          |password     |
#       |amotoorisampleone@gmail.com    |secondone    |
#       |amotoorisampletwo@gmail.com    |secondtwo    |
#       |amotoorisamplethree@gmail.com  |secondthree  |

#  Step definition for that:
# @when(u'I enter valid email address as "{email}" and valid password as "{password}" into the fields')
# def step_impl(context,email,password):
#     context.login_page.enter_email_address(email)
#     context.login_page.enter_password(password)


# Before and After Scenario Code in environment.py:------------------
# def before_scenario(context,driver):
#   #your code

# def after_scenario(context,driver):
#     context.driver.quit()

# def after_step(context,step):
#  #your code

# For more environment conditions: https://behave.readthedocs.io/en/stable/tutorial.html#
# https://www.tutorialspoint.com/behave/behave_hooks.htm


