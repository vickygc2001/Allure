describe('Second Suite', ()=> {
    
    beforeEach( async() => {
        await browser.maximizeWindow();
    });
    
    it('Test 4', async()=> {
       // await browser.url("/");
       await browser.pause(1000);
       console.log("Test 4 "); 
       await expect(true).toEqual(true);
    })

    it('Test 5', async() =>  {
        //await browser.url('https://www.bbc.co.uk');
        await browser.pause(1000);
        console.log("Test 5");
        await expect(true).toEqual(true);

    });

    it('Test 6', async() => {
        await browser.pause(1000);
        console.log("Test 6");
        await expect(true).toEqual(true);
    });
})