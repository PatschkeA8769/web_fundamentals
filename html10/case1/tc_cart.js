"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Amanda Patschke
   Date: 11/1/2024 
   
   Filename: tc_cart.js
	
*/


// Initialize total.
let orderTotal = 0;
// Initialize variable for cart table.
let cartHTML = `<table>
                  <tr>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>`;

// Loop through order items.
for (var i = 0; i < item.length; i++) {
  // Calculate item cost.
  let itemCost = itemPrice[i] * itemQty[i];
  // Calculate order total.
  orderTotal += itemCost;
  // Add orders to cart.
  cartHTML += `  <tr>
                   <td><img src='tc_` + item[i] + `.png' alt=` + item[i] + `/></td>
                   <td>` + itemDescription[i] + `</td> 
                   <td>$` + itemPrice[i] + `</td>
                   <td>` + itemQty[i] + `</td>
                   <td>$` + itemCost + `</td></tr>
                 <tr>`;
}
// Add order total to table.
cartHTML += `   <td colspan='4'>Subtotal</td>
                <td>$` + orderTotal + `</td>
              </tr>
            </table>`;
// Insert cartHTML into id "cart".
document.getElementById("cart").innerHTML = cartHTML;
