module.exports = {
    
  'test_add_items_to_the_cart' : function (browser) {
    
    wait = 5000; 

    // Step 1 : access www.shipt.com in the browser

    browser
    .useXpath()
    .url('https://www.shipt.com')
    .verify.title('Grocery Delivery - Shipt');

    // Step 2 : login using the following credentials : qatest@shipt.com/Sh1pt123!
  
    browser
    .waitForElementVisible("//*[text()[contains(.,'Log In')]]", wait)
    .click("//*[text()[contains(.,'Log In')]]")
    .waitForElementVisible('//*[@id="myid"]/div/ion-content/div/div/div/div[2]/form/div/label[1]/input', wait)
    .setValue('//*[@id="myid"]/div/ion-content/div/div/div/div[2]/form/div/label[1]/input', 'qatest@shipt.com')
    .setValue('//*[@id="myid"]/div/ion-content/div/div/div/div[2]/form/div/label[2]/input', 'Sh1pt123!')
    .click("//*[text()[contains(.,'Log in')]]");

    // Step 3 : Use the search feature to find a product ("Tide + Downy April Fresh Liquid Laundry Detergent") and add it to the cart

    // wait until the page elements are rendered and use "Search" field to find "Tide Liquid Detergent" product
    browser
    .waitForElementVisible('//*[@id="homeIonContent"]/div/div/div[2]/div[2]/div/div', wait)
    .waitForElementVisible('//*[@id="search"]', wait)
    .setValue('//*[@id="search"]','Tide Liquid Detergent');
    browser.keys([browser.Keys.ENTER]);
    browser
    .pause(3000)

    // select "Tide + Downy April Fresh Liquid Laundry Detergent" product and add it to the cart
    .waitForElementVisible("//*[text()[contains(.,'Tide + Downy April Fresh Liquid Laundry Detergent')]]", wait)
    .click("//*[text()[contains(.,'Tide + Downy April Fresh Liquid Laundry Detergent')]]")
    .pause(3000)
    .click("//*[text()[contains(.,'Add To Cart')]]")
    browser.useCss();
    // locate the "close" element
    browser.waitForElementVisible('div.modal-wrapper-5', function () {
      // point the mouse to the center of the "close" element and click on it
      browser.moveToElement('div.modal-wrapper-5', undefined, undefined, function () {
          browser.click('div.modal-wrapper-5');
      })
    });

   
    // Step 4 : Use the category menu to find a product ("Plum Organics Stage 2 Pear, Purple Carrot & Blueberry Organic Baby Food") and add it to the cart    

    browser.useXpath();
    browser
    // select and click on "Shop by category" button
    .waitForElementVisible('//*[@id="homeIonContent"]/div/div/shipt-web-subheader/div/div/button[1]', wait)
    .click('//*[@id="homeIonContent"]/div/div/shipt-web-subheader/div/div/button[1]')
    .pause(2000)
    // select "Baby" category   
    .waitForElementVisible("//*[text()[contains(.,'Baby')]]", wait)
    .click("//*[text()[contains(.,'Baby')]]")
    // select the item "Plum Organics Stage 2 Pear, Purple Carrot & Blueberry Organic Baby Food" from results and add it to the cart
    .pause(2000)
    .click("//*[text()[contains(.,'Plum Organics Stage 2 Pear, Purple Carrot & Blueberry Organic Baby Food')]]")
    .pause(2000)
    .click("//*[text()[contains(.,'Add To Cart')]]")
    browser.useCss();
    // locate the "close" element
    browser.waitForElementVisible('div.modal-wrapper-5', function () {
      // point the mouse to the center of the "close" element and click on it
      browser.moveToElement('div.modal-wrapper-5', undefined, undefined, function () {
          browser.click('div.modal-wrapper-5');
      })
    });

    // Step 5 : Validate that correct products exist in the cart
    
    browser.useXpath();
    browser.pause(3000);

    // open the cart
    browser.waitForElementVisible('//*[@id="homeIonContent"]/div/div/shipt-web-header/div/div/web-cart-button/button', function () {
      // point the mouse to the center of the "close" element and click on it
      browser.moveToElement('//*[@id="homeIonContent"]/div/div/shipt-web-header/div/div/web-cart-button/button', undefined, undefined, function () {
          browser.click('//*[@id="homeIonContent"]/div/div/shipt-web-header/div/div/web-cart-button/button');
      })
    });
    browser
    // check that products are in the cart
    .waitForElementVisible("//*[text()[contains(.,'Plum Organics Stage 2 Pear, Purple Carrot & Blueberry Organic Baby Food')]]", wait)
    .waitForElementVisible("//*[text()[contains(.,'Tide + Downy April Fresh Liquid Laundry Detergent')]]", wait)
    .closeWindow()
    .end();
    
  },

};
