describe('First Suite', ()=> {
    
    beforeEach( async() => {
        await browser.maximizeWindow();
    });
    
    it('Test 1', async()=> {
       // await browser.url("/");
       await browser.pause(1000);
       console.log("Test 1 "); 
       await expect(true).toEqual(false);
    })

    it('Test 2', async() =>  {
        //await browser.url('https://www.bbc.co.uk');
        await browser.pause(1000);
        console.log("Test 2");
        await expect(true).toEqual(true);

    });

    it('Test 3', async() => {
        await browser.pause(1000);
        console.log("Test 3");
        await expect(true).toEqual(true);
    });
})