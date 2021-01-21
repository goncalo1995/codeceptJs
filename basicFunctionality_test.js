Feature('UI Test');
/*
Scenario('website looks nice on iPhone', () => {
    session('mobile user', devices['iPhone 6'], () => {
      I.amOnPage('https://storage.googleapis.com/bk-oscarcore-dev/PR_SomosCaixa_CartaoCaixaIN.mht_Files/Caixa-in.aspx.htm');
      I.click("#chat");
      I.waitForVisible('" Ai sim? Então vamos conversar... "');
      I.see('Hello, iPhone user!')
    })
  });
*/

Scenario('Default chromium', ({ I }) => {
    I.amOnPage('https://storage.googleapis.com/bk-oscarcore-dev/PR_SomosCaixa_CartaoCaixaIN.mht_Files/Caixa-in.aspx.htm');
    I.waitForVisible("#chat");
    I.click("#chat");
    //I.waitForVisible('" Ai sim? Então vamos conversar... "');
    I.waitForVisible('.welcome-screen--button');
    I.click('.welcome-screen--button')
    //I.click('" Ai sim? Então vamos conversar... "');
    I.waitForVisible("#scrollContainer",3);
    within('#scrollContainer', () => {
        I.seeNumberOfElements('.row', 2);
      });
    //I.click('Ajuda');
    
    I.fillField('[placeholder="Escreva aqui a sua mensagem..."]','Olá');
    I.pressKey('Enter');

    //import tests from file or firebase
    //var input = []
    //testMessages([])
    
    /*within('#scrollContainer', () => {
        I.seeNumberOfElements('.row', 5);
      });*/
    
    
    //  pause();
});


//scenario responsive
//varias janelas 