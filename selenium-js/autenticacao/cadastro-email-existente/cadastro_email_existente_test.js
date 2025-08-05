// selenium-js/autenticacao/cadastro-email-existente/cadastro_email_existente_test.js

const { Builder, By, Key, until } = require('selenium-webdriver');

async function cadastroEmailExistente() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // 1. Navegar para a página de cadastro
        await driver.get('https://www.exemplo.com.br/cadastro'); // Substitua pela URL real

        // 2. Preencher formulário com e-mail já existente
        await driver.findElement(By.id('nome')).sendKeys('Novo Usuário'); // Substitua pelo ID/Seletor real
        await driver.findElement(By.id('email')).sendKeys('email_existente@exemplo.com'); // E-mail que já existe
        await driver.findElement(By.id('senha')).sendKeys('SenhaNova123'); // Substitua pelo ID/Seletor real
        await driver.findElement(By.id('botaoCadastrar')).click(); // Clicar no botão de cadastro

        // 3. Aguardar e verificar a mensagem de erro
        await driver.wait(until.elementLocated(By.css('.mensagem-erro')), 5000); // Substitua pelo seletor da mensagem de erro
        let errorMessage = await driver.findElement(By.css('.mensagem-erro')).getText();

        if (errorMessage.includes('Este email já está em uso.')) { // Substitua pela mensagem real
            console.log('Mensagem de erro correta exibida:', errorMessage);
        } else {
            console.error('Mensagem de erro inesperada:', errorMessage);
        }

        // 4. Verificar se a URL não mudou (permanece na página de cadastro)
        let currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('/cadastro')) { // Substitua pela URL real
            console.log('Permaneceu na página de cadastro.');
        } else {
            console.error('Redirecionado para outra página inesperadamente.');
        }

    } catch (error) {
        console.error('Erro durante o teste de cadastro com e-mail existente:', error);
    } finally {
        await driver.quit();
    }
}

cadastroEmailExistente();
