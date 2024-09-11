describe('Third Suite', ()=> {
    
    beforeEach( async() => {
        await browser.maximizeWindow();
    });
    
    it('Test 7', async()=> {
       // await browser.url("/");
       await browser.pause(1000);
       console.log("Test 7 "); 
       await expect(true).toEqual(true);
    });

    it('Test 8', async() =>  {
        //await browser.url('https://www.bbc.co.uk');
        await browser.pause(1000);
        console.log("Test 8");
        await expect(true).toEqual(true);

    });

    it('Test 9', () => {
        console.log("Test 9");
    });
})