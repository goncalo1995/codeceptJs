Feature('Responsiveness Test');

Scenario('test mobile', ({ I }) => {
    I.amOnPage('https://storage.googleapis.com/bk-oscarcore-dev/PR_SomosCaixa_CartaoCaixaIN.mht_Files/Caixa-in.aspx.htm');
    I.waitForVisible("#chat");
    I.click("#chat");
});