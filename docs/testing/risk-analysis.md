# Risk Analysis

## Purpose

Prioritize test coverage according to the probability and impact of application failures.

## Risk Model

Probability:

- 1 — Low
- 2 — Medium
- 3 — High

Impact:

- 1 — Low
- 2 — Medium
- 3 — High

Risk Score:

Risk Score = Probability × Impact

Priority:

- 1–2 — Low
- 3–4 — Medium
- 6 — High
- 9 — Critical

---

| ID | Area | Risk / Behavior | Probability | Impact | Score | Priority |
|---|---|---|---:|---:|---:|---|
| AUTH-001 | Authentication | Valid user cannot log in | 3 | 3 | 9 | Critical |
| AUTH-002 | Authentication | Invalid credentials are accepted | 2 | 3 | 6 | High |
| AUTH-003 | Authentication | Logout does not terminate session | 2 | 3 | 6 | High |
| REG-001 | Registration | Valid user cannot register | 2 | 3 | 6 | High |
| REG-002 | Registration | Duplicate username/email is accepted | 2 | 2 | 4 | Medium |
| ACC-001 | Account | Account information changes do not persist | 2 | 2 | 4 | Medium |
| ADDR-001 | Address | Billing address cannot be saved | 2 | 3 | 6 | High |
| ADDR-002 | Address | Shipping address cannot be saved | 2 | 3 | 6 | High |
| SHOP-001 | Shop | Products fail to load | 2 | 3 | 6 | High |
| SHOP-002 | Shop | Sorting returns incorrect product ordering | 2 | 2 | 4 | Medium |
| CART-001 | Cart | Incorrect product is added | 3 | 3 | 9 | Critical |
| CART-002 | Cart | Quantity update fails | 3 | 3 | 9 | Critical |
| CART-003 | Cart | Quantity zero fails to remove product | 2 | 3 | 6 | High |
| CART-004 | Cart | Subtotal or total is calculated incorrectly | 3 | 3 | 9 | Critical |
| CART-005 | Cart | Invalid coupon incorrectly changes the total | 2 | 2 | 4 | Medium |
| CHECK-001 | Checkout | Required fields are not validated | 3 | 3 | 9 | Critical |
| CHECK-002 | Checkout | Invalid postal code is accepted | 2 | 2 | 4 | Medium |
| CHECK-003 | Checkout | Valid order cannot be placed | 3 | 3 | 9 | Critical |
| CHECK-004 | Checkout | Checkout total differs from cart total | 3 | 3 | 9 | Critical |
| ORD-001 | Orders | Successful order is missing from order history | 3 | 3 | 9 | Critical |
| ORD-002 | Orders | Order details differ from submitted order | 3 | 3 | 9 | Critical |
| ORD-003 | Orders | Incorrect order status is displayed | 2 | 2 | 4 | Medium |
| NAV-001 | Navigation | Major navigation links redirect incorrectly | 2 | 2 | 4 | Medium |

---

## Highest-Risk Business Flow

The highest-risk user journey identified is:

Login → Shop → Add Product → Cart → Checkout → Order Creation → Order History

Failures within this journey directly affect the primary e-commerce workflow and therefore receive the highest automation priority.

---

## Initial Smoke Candidates

- Application homepage loads.
- Registered user can log in.
- Shop displays products.
- User can add a product to the cart.
- Cart displays the selected product.
- User can reach Checkout.
- Valid checkout creates an order.

---

## Regression Focus

Regression testing will additionally cover:

- Registration validation
- Invalid login
- Remember Me
- Password visibility controls
- Account details
- Billing and shipping addresses
- Product sorting
- Cart quantity boundaries
- Product removal
- Invalid coupons
- Checkout field validation
- Postal-code validation
- Order history
- Order details