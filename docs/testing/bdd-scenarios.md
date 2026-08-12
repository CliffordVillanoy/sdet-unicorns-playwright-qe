# BDD Scenarios

## Feature: Authentication

### Scenario: Registered user logs in successfully

Given a registered customer exists  
When the customer logs in using valid credentials  
Then the customer should be authenticated  
And the My Account dashboard should be displayed

### Scenario: User enters invalid login credentials

Given the customer is on the login page  
When the customer submits invalid credentials  
Then authentication should fail  
And an appropriate error message should be displayed

---

## Feature: User Registration

### Scenario: New customer registers successfully

Given the customer is on the registration page  
And the username and email address are not already registered  
When the customer submits valid registration information  
Then a customer account should be created  
And the customer should be able to access My Account

---

## Feature: Shopping

### Scenario: Customer views available products

Given the customer navigates to the Shop  
When the Shop page loads  
Then available products should be displayed

### Scenario: Customer adds an available product to the cart

Given an available product is displayed in the Shop  
When the customer adds the product to the cart  
Then the cart should contain the selected product

---

## Feature: Cart Management

### Scenario: Customer increases product quantity

Given the cart contains a product with quantity 1  
When the customer increases the quantity to 2  
And updates the cart  
Then the cart should display quantity 2  
And the cart totals should be recalculated

### Scenario: Customer removes a product by reducing its quantity to zero

Given the cart contains a product with quantity 1  
When the customer decreases the quantity to 0  
And updates the cart  
Then the product should be removed from the cart

### Scenario: Customer applies an invalid coupon

Given the cart contains a product  
When the customer applies a coupon that does not exist  
Then the coupon should be rejected  
And an appropriate error message should be displayed  
And the cart total should remain unchanged

---

## Feature: Checkout Validation

### Scenario Outline: Required billing information is missing

Given the customer has a product in the cart  
And the customer proceeds to checkout  
When the customer submits checkout without <field>  
Then the checkout should not be completed  
And the "<error>" validation message should be displayed

Examples:

| field | error |
|---|---|
| First name | Billing First name is a required field. |
| Last name | Billing Last name is a required field. |
| Street address | Billing Street address is a required field. |
| Town / City | Billing Town / City is a required field. |
| Postal code | Billing Postal code is a required field. |
| Phone | Billing Phone is a required field. |

### Scenario: Customer enters an invalid postal code

Given the customer has reached checkout  
When the customer submits billing information containing an invalid postal code  
Then checkout should not be completed  
And a postal-code validation message should be displayed

---

## Feature: Order Placement

### Scenario: Customer successfully places an order

Given the customer is authenticated  
And an available product has been added to the cart  
And the customer has proceeded to checkout  
When the customer submits valid billing information  
And places the order  
Then the order should be created successfully  
And an order confirmation should be displayed

---

## Feature: Order History

### Scenario: Newly created order appears in order history

Given the customer has successfully placed an order  
When the customer opens the Orders section of My Account  
Then the newly created order should be displayed  
And the order number should match the checkout confirmation  
And the order total should match the checkout confirmation

### Scenario: Customer views the details of a created order

Given a completed order exists in the customer's order history  
When the customer views that order  
Then the product should match the ordered product  
And the quantity should match the ordered quantity  
And the total should match the order confirmation  
And the billing information should match the submitted billing information

---

## Feature: Complete Purchase Journey

### Scenario: Registered customer completes an end-to-end purchase

Given a registered customer exists  
And the customer is authenticated  
When the customer browses the Shop  
And adds an available product to the cart  
And proceeds to checkout  
And submits valid billing information  
And places the order  
Then the order should be created successfully  
And the order should appear in the customer's order history  
And the stored order details should match the submitted purchase