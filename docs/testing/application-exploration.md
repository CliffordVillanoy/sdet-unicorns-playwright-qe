# Application Exploration

## System Under Test

SDET Unicorns Practice Site

https://practice.sdetunicorns.com/

## Objective

Explore the application as an end user to identify major features, user behaviors, possible risks, validation rules, and candidate areas for automation.

The primary business journey identified during exploration is:

Registration → Login → Shop → Cart → Checkout → Order Confirmation → Order History → Order Details

---

## 1. Login Module

### Behaviors Observed

- User can enter a username or email address.
- User can enter a password.
- User can show or hide the password value.
- User can select the Remember Me checkbox.
- User can submit credentials using the Login button.

### Possible Risks

- Valid credentials fail authentication.
- Invalid credentials are incorrectly accepted.
- Password visibility control does not work correctly.
- Remember Me does not persist the expected authenticated state.
- Required-field validation may not behave correctly.
- Authentication errors may expose sensitive information.

### Questions

- What message is shown for an invalid username?
- What message is shown for an invalid password?
- What happens when both fields are empty?
- Does Remember Me persist after closing and reopening the browser?
- Does authentication expire after a defined period?

---

## 2. Registration Module

### Behaviors Observed

- User can enter a username.
- User can enter an email address.
- User can enter a password.
- User can show or hide the password.
- User can submit registration using the Register button.

### Possible Risks

- Duplicate usernames may be accepted.
- Duplicate email addresses may be accepted.
- Invalid email addresses may be accepted.
- Weak or invalid passwords may be accepted unexpectedly.
- Registration may succeed without required information.
- Registration may fail without clear error feedback.

### Questions

- What validations exist for usernames?
- What validations exist for email addresses?
- What password rules are enforced?
- What happens when a username already exists?
- What happens when an email address already exists?

---

## 3. My Account Module

### Behaviors Observed

The My Account area contains the following sections:

- Dashboard
- Orders
- Downloads
- Addresses
- Account Details
- Logout

The My Account header also provides a Home hyperlink that redirects the user to the homepage.

---

## 3.1 Dashboard

### Behaviors Observed

- User can log out.
- Recent Orders link redirects to the Orders tab.
- Shipping and Billing Addresses link redirects to the Addresses tab.
- Edit Password and Account Details link redirects to the Account Details tab.

### Possible Risks

- Dashboard shortcuts may redirect to incorrect destinations.
- Account information may not correspond to the authenticated user.
- Logout may not fully terminate the session.

---

## 3.2 Orders

### Behaviors Observed

- User can request an email confirmation.
- After clicking the confirmation button once, the following message is displayed:

  `A confirmation link has been sent to your email address. Please check your inbox.`

- Browse Products redirects to the Shop page.
- Previously created orders are displayed.
- Each order includes:
  - Order number
  - Date
  - Status
  - Total
  - Actions
- View opens the detailed order information.

### Possible Risks

- Newly created orders may not appear in order history.
- Order values may differ from checkout confirmation.
- Order belonging to another user could potentially be exposed.
- Confirmation action may be triggered repeatedly.
- Incorrect order status may be displayed.

---

## 3.3 Downloads

### Behaviors Observed

- Browse Products redirects to the Shop page.

### Possible Risks

- Navigation may redirect incorrectly.
- Download-related states may not display correctly if downloadable products exist.

---

## 3.4 Addresses

### Behaviors Observed

- User can add a billing address.
- User can add a shipping address.

---

## 3.5 Billing Address

### Fields Observed

- First name
- Last name
- Company name — optional
- Country / Region
- Street address
- House number and street name
- Apartment, suite, unit, etc. — optional
- Town / City
- Province
- Postal code
- Phone
- Email address
- Save Address button

### Possible Risks

- Required fields may accept empty values.
- Saved information may not persist.
- Incorrect country/province combinations may be accepted.
- Invalid postal codes may be accepted.
- Invalid phone numbers may be accepted.
- Invalid email addresses may be accepted.
- Saved address may not appear during checkout.

---

## 3.6 Shipping Address

### Fields Observed

- First name
- Last name
- Company name — optional
- Country / Region
- Street address
- House number and street name
- Apartment, suite, unit, etc. — optional
- Town / City
- Province
- Postal code
- Phone
- Email address
- Save Address button

### Possible Risks

- Same risks identified for billing-address behavior.
- Billing and shipping addresses may be incorrectly mixed.
- Updated shipping address may not persist.

---

## 3.7 Account Details

### Fields and Controls Observed

- First name
- Last name
- Display name
- Email address
- Current password
- New password
- Confirm new password
- Password visibility controls
- Save Changes button

### Possible Risks

- Account changes may not persist.
- Invalid email values may be accepted.
- Password may change without the correct current password.
- New-password and confirmation values may not be validated correctly.
- Password visibility controls may expose values unexpectedly.

---

## 3.8 Logout

### Behaviors Observed

- Clicking Logout ends the authenticated session.

### Possible Risks

- Session may remain active after logout.
- Protected My Account pages may remain accessible using direct URLs.

---

## 4. About

### Behaviors Observed

- About navigation redirects the user to the About page.

### Possible Risks

- Navigation may point to an incorrect URL.
- Page may fail to load.

---

## 5. Shop

### Behaviors Observed

Products are displayed with Add to Cart controls.

The sorting dropdown contains:

- Sort by popularity
- Sort by average rating
- Sort by latest
- Sort by price: low to high
- Sort by price: high to low

After adding a product:

- View Cart becomes available.
- View Cart redirects the user to the Cart page.

### Possible Risks

- Product list may fail to load.
- Sorting may select a value without actually changing product order.
- Incorrect product may be added.
- Cart count may not update.
- View Cart may redirect incorrectly.
- Product price displayed in Shop may differ from Cart.

### Questions

- What happens when the same product is added multiple times?
- Does sorting produce the correct ordering?
- Does cart state remain after navigating to another page?
- Does cart state remain after logout and login?

---

## 6. Cart

### Behaviors Observed

The user can access the Cart page through:

- View Cart after adding a product.
- Cart icon.

The Cart displays selected products.

### Quantity

- Quantity can be increased using the `+` control.
- Quantity can be decreased using the `-` control.
- Changing quantity enables the Update Cart button.
- Clicking Update Cart applies the new quantity.
- Reducing quantity from 1 to 0 and updating the cart removes the product.

### Coupon

- Coupon Code input is available.
- Apply Coupon button is available.
- Invalid coupon input produces an error similar to:

  `Coupon "test" cannot be applied because it does not exist.`

### Cart Totals

- Subtotal is displayed.
- Total is displayed.
- Totals update after quantity changes are applied.
- Proceed to Checkout redirects to Checkout.

### Possible Risks

- Quantity controls may allow invalid values.
- Update Cart may not update product quantity.
- Quantity zero may fail to remove an item.
- Totals may be calculated incorrectly.
- Invalid coupons may incorrectly alter totals.
- Cart may contain the wrong product.
- Cart state may be lost unexpectedly.

---

## 7. Checkout

### Behaviors Observed

Coupon input can be revealed through:

`Click here to enter your code`

### Billing Details

Fields observed:

- First name
- Last name
- Company name — optional
- Country / Region
- Street address
- House number and street name
- Apartment, suite, unit, etc. — optional
- Town / City
- Province
- Postal code
- Phone
- Email address

### Additional Information

- Order Notes — optional
- Newsletter/email-content checkbox — optional

### Order Summary

- Product information is displayed.
- Subtotal is displayed.
- Place Order button is available.

### Required-Field Validation Observed

Submitting with required billing fields empty displays errors including:

- Billing First name is a required field.
- Billing Last name is a required field.
- Billing Street address is a required field.
- Billing Town / City is a required field.
- Billing Postal code is a required field.
- Billing Phone is a required field.

Validation messages are also shown near the corresponding required fields.

### Postal-Code Validation

Invalid postal-code input can display:

`Billing Postal code is not a valid postcode / ZIP.`

### Possible Risks

- Required fields may not be validated correctly.
- Validation messages may be missing or incorrect.
- Invalid email, phone, or postcode may be accepted.
- Checkout total may differ from Cart total.
- Wrong product may be submitted.
- Order may be created more than once.
- Place Order may fail after valid data is entered.

---

## 8. Successful Order

### Behavior Observed

Successful checkout displays:

`Thank you. Your order has been received.`

Order confirmation includes:

- Order number
- Date
- Email
- Total
- Payment method

Order Details include:

- Product
- Quantity
- Subtotal
- Total
- Payment method
- Order note
- Billing address

### Possible Risks

- Confirmation may appear without an actual order being created.
- Product information may differ from the cart.
- Total may differ from checkout.
- Customer information may be incorrect.
- Order number may not be created correctly.

---

## 9. Order History and Order Details

### Behaviors Observed

After successful checkout, the order appears under My Account → Orders.

Information includes:

- Order number
- Date
- Status
- Total
- Number of items
- View action

Opening View displays:

- Order number
- Date
- Status
- Products
- Product quantities
- Subtotal
- Total
- Payment method
- Order note
- Billing address

### Possible Risks

- Newly created order may not appear.
- Order values may not match checkout confirmation.
- Product quantities may be incorrect.
- Billing information may be incorrect.
- Order status may be incorrect.

---

## Primary E2E Flow Identified

Registration → Login → Shop → Add Product → Cart → Checkout → Place Order → Order Confirmation → Order History → Order Details