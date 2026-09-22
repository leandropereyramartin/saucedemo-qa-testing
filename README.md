# SauceDemo E2E Test Automation Suite (Cypress)

This repository contains an end-to-end (E2E) automated testing suite built with **Cypress** for the [SauceDemo](https://www.saucedemo.com/) e-commerce platform. It integrates both manual QA documentation and automation engineering practices to demonstrate a complete Quality Assurance lifecycle.

---

## 📋 Project Structure & QA Artifacts

- **`cypress/e2e/`**: Contains automated E2E test specs written in JavaScript using Cypress.
  - `saucedemo_login.cy.js`: Authentication tests (valid user login, locked-out user validations).
  - `saucedemo_cart.cy.js`: End-to-end shopping workflow (adding items to cart, proceeding to checkout, completing the purchase).
- **`Test_Plan.docx`**: High-level test strategy and scope definition.
- **`Test_Execution_Matrix.xlsx`**: Detailed manual test cases, execution status, and automation traceability.
- **`cypress.config.js`**: Core Cypress configuration including `baseUrl` set to `https://www.saucedemo.com`.

---

## 🛠️ Tech Stack & Tools

- **Automation Framework**: Cypress 16.x
- **Runtime Environment**: Node.js (v24.x)
- **Programming Language**: JavaScript (ES6+)
- **Version Control**: Git & GitHub
- **IDE**: Visual Studio Code

---

## 🧪 Key Automated Scenarios

### Authentication (`saucedemo_login.cy.js`)
- [x] Verify successful login with `standard_user` credentials.
- [x] Verify error handling and UI message for `locked_out_user`.

### E2E Checkout Flow (`saucedemo_cart.cy.js`)
- [x] Authenticate as a valid user.
- [x] Add product (*Sauce Labs Backpack*) to the shopping cart and verify badge count.
- [x] Navigate through the cart and complete buyer information details.
- [x] Finish the purchase and validate order confirmation message (`Thank you for your order!`).

---

## 🚀 How to Run the Tests Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone this repository:
   ```bash
   git clone [https://github.com/leandropereyramartin/saucedemo-qa-testing.git](https://github.com/leandropereyramartin/saucedemo-qa-testing.git)
   ```
2. Navigate to the project folder:
   ```bash
   cd saucedemo-qa-testing
  ```
3. Install project dependencies:
   ```bash
   npm install
 ```
 ### Execution Commands

1. Run Interactive Test Runner (GUI):
   ```bash
   npx cypress open
 ```
2-Run Headless Execution (CLI / CI-ready):
  ```bash
  npx cypress run
 ```

## ✉️Contact & Portfolio
**Leandro Pereyra**

QA Automation & Quality Assurance Specialist

GitHub: @leandropereyramartin