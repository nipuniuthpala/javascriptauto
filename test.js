// Import requirement packages
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Check calculator', function () {
    let driver;
    this.beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://ahfarmer.github.io/calculator/');
    });
  
    //test cases
    it('multiplication', async function() {
     
        // Find the search no 8 by xpath
        await driver.findElement(By.xpath("//button[contains(.,'8')]")).click();
        //  click on addition
        await driver.findElement(By.xpath("//button[contains(.,'x')]")).click();

        // Find the search no 7 by xpath
        await driver.findElement(By.xpath("//button[contains(.,'7')]")).click();
   
        //click on equal
        await driver.findElement(By.xpath("//button[contains(.,'=')]")).click();

        // assert the value
     
        assert.equal('56',await driver.findElement(By.xpath("//div[@class='component-display']")).getText(),'error in ouput');

    });

    it('division', async function() {
    
        

        await driver.findElement(By.xpath("//button[contains(.,'AC')]")).click();
        // Find the search no 9 by xpath
        await driver.findElement(By.xpath("//button[contains(.,'4')]")).click();
        //  click on division
        await driver.findElement(By.xpath("//button[contains(.,'÷')]")).click();

        // Find the search no 3 by xpath
        await driver.findElement(By.xpath("//button[contains(.,'2')]")).click();
   
        //click on equal
        await driver.findElement(By.xpath("//button[contains(.,'=')]")).click();

        // assert the value
    
        assert.equal('2',await driver.findElement(By.xpath("//div[@class='component-display']")).getText(),'error in ouput');

    });


    it('addition', async function() {
    
        

        await driver.findElement(By.xpath("//button[contains(.,'AC')]")).click();
        // Find the search no 9 by xpath
        await driver.findElement(By.xpath("//button[contains(.,'1')]")).click();
        //  click on division
        await driver.findElement(By.xpath("//div[@class='component-button orange' and button='+']")).click();

        // Find the search no 3 by xpath
        await driver.findElement(By.xpath("//button[contains(.,'3')]")).click();
   
        //click on equal
        await driver.findElement(By.xpath("//button[contains(.,'=')]")).click();

        // assert the value
    
        assert.equal('4',await driver.findElement(By.xpath("//div[@class='component-display']")).getText(),'error in ouput');

    });


    it('reduction', async function() {
    
        

        await driver.findElement(By.xpath("//button[contains(.,'AC')]")).click();
        // Find the search no 9 by xpath
        await driver.findElement(By.xpath("//button[contains(.,'9')]")).click();
        //  click on reduction
        await driver.findElement(By.xpath("//div[@class='component-button orange' and button='-']")).click();

        // Find the search no 3 by xpath
        await driver.findElement(By.xpath("//button[contains(.,'6')]")).click();
   
        //click on equal
        await driver.findElement(By.xpath("//button[contains(.,'=')]")).click();

        // assert the value
    
        assert.equal('3',await driver.findElement(By.xpath("//div[@class='component-display']")).getText(),'error in ouput');

    });


    it('percentage', async function() {
    
        

        await driver.findElement(By.xpath("//button[contains(.,'AC')]")).click();
        // Find the search no 5 by xpath
        await driver.findElement(By.xpath("//button[contains(.,'5')]")).click();
        // Find the search no 0 by xpath
        await driver.findElement(By.xpath("//button[contains(.,'0')]")).click();
        //  click on reduction
        await driver.findElement(By.xpath("//button[contains(.,'%')]")).click();

      
        // assert the value
    
        assert.equal('0.5',await driver.findElement(By.xpath("//div[@class='component-display']")).getText(),'error in ouput');

    });

    it('negative signs and decimals', async function() {
    
        

        await driver.findElement(By.xpath("//button[contains(.,'AC')]")).click();
       
        // Find the search no 0 by xpath
        await driver.findElement(By.xpath("//button[contains(.,'0')]")).click();
        //  click on reduction
        await driver.findElement(By.xpath("//button[contains(.,'.')]")).click();
        // Find the search no 2 by xpath
        await driver.findElement(By.xpath("//button[contains(.,'2')]")).click();
         // Find the search no +/- by xpath
         await driver.findElement(By.xpath("//button[contains(.,'+/-')]")).click();
      
        // assert the value
    
        assert.equal('-0.2',await driver.findElement(By.xpath("//div[@class='component-display']")).getText(),'error in ouput');

    });


    // close the browser after running tests
    this.afterEach(() => driver && driver.quit());
})

