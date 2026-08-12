# Test Scenarios

## Authentication

### AUTH-001 — Valid Login

Verify that a registered user can log in using valid credentials.

Priority: Critical  
Type: Functional / Positive  
Automation Candidate: Yes  
Suite: Smoke / Regression

### AUTH-002 — Invalid Login

Verify that invalid credentials do not authenticate the user.

Priority: High  
Type: Functional / Negative  
Automation Candidate: Yes  
Suite: Regression

### AUTH-003 — Empty Login

Verify validation behavior when login fields are empty.

Priority: Medium  
Type: Negative  
Automation Candidate: Yes  
Suite: Regression

### AUTH-004 — Password Visibility

Verify that the password visibility control shows and hides the entered password.

Priority: Medium  
Type: Functional  
Automation Candidate: Yes  
Suite: Regression

### AUTH-005 — Logout

Verify that an authenticated user can log out successfully.

Priority: High  
Type: Functional  
Automation Candidate: Yes  
Suite: Regression

---

## Registration

### REG-001 — Valid Registration

Verify that a new user can register using valid information.

Priority: High  
Type: Functional / Positive  
Automation Candidate: Yes  
Suite: Regression

### REG-002 — Duplicate Username

Verify that an existing username cannot be registered again.

Priority: Medium  
Type: Negative  
Automation Candidate: Yes  
Suite: Regression

### REG-003 — Duplicate Email

Verify that an existing email address cannot be registered again.

Priority: Medium  
Type: Negative  
Automation Candidate: Yes  
Suite: Regression

### REG-004 — Invalid Email

Verify registration behavior for an invalid email address.

Priority: Medium  
Type: Negative  
Automation Candidate: Yes  
Suite: Regression

---

## Account Management

### ACC-001 — Dashboard Navigation

Verify that Dashboard shortcuts redirect to the correct account sections.

Priority: Medium  
Type: Functional  
Automation Candidate: Yes  
Suite: Regression

### ACC-002 — Save Billing Address

Verify that valid billing-address information can be saved.

Priority: High  
Type: Functional  
Automation Candidate: Yes  
Suite: Regression

### ACC-003 — Save Shipping Address

Verify that valid shipping-address information can be saved.

Priority: High  
Type: Functional  
Automation Candidate: Yes  
Suite: Regression

### ACC-004 — Update Account Details

Verify that account details can be updated and persisted.

Priority: Medium  
Type: Functional  
Automation Candidate: Yes  
Suite: Regression

### ACC-005 — Change Password

Verify that the user can change the password using valid current and new passwords.

Priority: High  
Type: Functional  
Automation Candidate: Later  
Suite: Regression

---

## Shop

### SHOP-001 — Display Products

Verify that products are displayed on the Shop page.

Priority: High  
Type: Functional  
Automation Candidate: Yes  
Suite: Smoke / Regression

### SHOP-002 — Open Product

Verify that the user can open an available product.

Priority: High  
Type: Functional  
Automation Candidate: Yes  
Suite: Regression

### SHOP-003 — Product Sorting

Verify that the selected sorting option changes the product order correctly.

Priority: Medium  
Type: Functional / Data-Driven  
Automation Candidate: Yes  
Suite: Regression

Datasets:

- Popularity
- Average rating
- Latest
- Price low to high
- Price high to low

### SHOP-004 — Add Product to Cart

Verify that an available product can be added to the cart.

Priority: Critical  
Type: Functional  
Automation Candidate: Yes  
Suite: Smoke / Regression

---

## Cart

### CART-001 — Display Selected Product

Verify that the Cart displays the product selected from Shop.

Priority: Critical  
Type: Functional  
Automation Candidate: Yes  
Suite: Smoke / Regression

### CART-002 — Increase Quantity

Verify that increasing quantity and updating the cart applies the new quantity.

Priority: Critical  
Type: Functional  
Automation Candidate: Yes  
Suite: Regression

### CART-003 — Decrease Quantity

Verify that decreasing quantity and updating the cart applies the new quantity.

Priority: High  
Type: Functional  
Automation Candidate: Yes  
Suite: Regression

### CART-004 — Remove Product at Zero Quantity

Verify that reducing quantity from 1 to 0 and updating the cart removes the product.

Priority: High  
Type: Boundary / Functional  
Automation Candidate: Yes  
Suite: Regression

Boundary candidates:

- 0
- 1
- 2

### CART-005 — Update Totals

Verify that subtotal and total values update correctly when quantity changes.

Priority: Critical  
Type: Functional / Business Rule  
Automation Candidate: Yes  
Suite: Regression

### CART-006 — Invalid Coupon

Verify that an invalid coupon is rejected and does not incorrectly change the cart total.

Priority: Medium  
Type: Negative  
Automation Candidate: Yes  
Suite: Regression

### CART-007 — Proceed to Checkout

Verify that the user can proceed from a valid Cart to Checkout.

Priority: Critical  
Type: Functional  
Automation Candidate: Yes  
Suite: Smoke / Regression

---

## Checkout

### CHECK-001 — Empty Required Fields

Verify that submitting Checkout with required billing fields empty displays validation errors.

Priority: Critical  
Type: Negative / Data-Driven  
Automation Candidate: Yes  
Suite: Regression

Required fields identified:

- First name
- Last name
- Street address
- Town / City
- Postal code
- Phone

### CHECK-002 — Invalid Postal Code

Verify that an invalid postal code displays the appropriate validation error.

Priority: Medium  
Type: Negative / Boundary  
Automation Candidate: Yes  
Suite: Regression

### CHECK-003 — Successful Checkout

Verify that valid billing details allow the user to successfully place an order.

Priority: Critical  
Type: Functional / Positive  
Automation Candidate: Yes  
Suite: Smoke / Regression

### CHECK-004 — Order Confirmation

Verify that successful checkout displays an order confirmation containing:

- Order number
- Date
- Email
- Total
- Payment method
- Product details

Priority: Critical  
Type: Functional  
Automation Candidate: Yes  
Suite: Regression

---

## Orders

### ORD-001 — Order Appears in History

Verify that a newly created order appears in My Account → Orders.

Priority: Critical  
Type: E2E / Functional  
Automation Candidate: Yes  
Suite: Regression

### ORD-002 — Order Summary Matches Checkout

Verify that the order number, date, total, and item count match the successfully created order.

Priority: Critical  
Type: E2E / Functional  
Automation Candidate: Yes  
Suite: Regression

### ORD-003 — Order Details

Verify that View displays the correct:

- Product
- Quantity
- Subtotal
- Total
- Payment method
- Note
- Billing address

Priority: Critical  
Type: E2E / Functional  
Automation Candidate: Yes  
Suite: Regression

---

# Primary E2E Scenario

### E2E-001 — Registered Customer Places an Order

Verify the complete business flow:

Registration → Login → Shop → Add Product → Cart → Checkout → Place Order → Order Confirmation → Order History → Order Details

Priority: Critical  
Type: End-to-End  
Automation Candidate: Yes  
Suite: Regression