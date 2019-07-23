# burgerApp

This is a store front using mysql and node.

# Node.js & MySQL

## Overview

In this app an Amazon-like storefront with the MySQL. The app will take in orders from customers and deplete stock from the store's inventory.

## Instructions

#1: Customer View

1. I created a MySQL Database called `bamazon`.

2. Then created a Table inside of that database called `products`.

3. The products table should has each of the following columns:

   - item_id (unique id for each product)

   - product_name (Name of product)

   - department_name

   - price (cost to customer)

   - stock_quantity (how much of the product is available in stores)

4. I create a Node application called `bamazonCustomer.js`.

5. The app will prompt users with two messages.

   - The first ask's the user, for the ID of the product they would like to buy.
   - The second message ask's how many units of the product they would like to buy.

6. Once the customer has placed the order, the application will check if the store has enough of the product to meet the customer's request.

   - If not, the app should log a phrase `Insufficient quantity!`, and then prevent the order from going through.

7. However, if the store has enough of the product; the app will fulfill the customer's order.
   - This means updating the SQL database to reflect the remaining quantity.
   - Once the update goes through, it will show the customer the total cost of their purchase.

#2: Manager View

- Running this application will:

  - List a set of menu options:

  - View Products for Sale

  - View Low Inventory

  - Add to Inventory

  - Add New Product

  - If a manager selects `View Products for Sale`, the app will list every available item: the item IDs, names, prices, and quantities.

  - If a manager selects `View Low Inventory`, then it will list all items with an inventory count lower than five.

  - If a manager selects `Add to Inventory`, the app will display a prompt that will let the manager "add more" of any item currently in the store.

  - If a manager selects `Add New Product`, it will allow the manager to add a completely new product to the store.

(Pending)
#3: Supervisor View
