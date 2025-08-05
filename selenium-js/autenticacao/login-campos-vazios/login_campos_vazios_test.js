// selenium-js/autenticacao/login-campos-vazios/login_campos_vazios_test.js

const { Builder, By, Key, until } = require('selenium-webdriver');

async function loginCamposVazios() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // 1. Navegar para a página de login
        await driver.get('https://www.exemplo.com.br/login'); // Substitua pela URL real

        // 2. Clicar no botão de login sem preencher nada
        await driver.findElement(By.id('botaoLogin')).click(); // Clicar no botão de login

        // 3. Aguardar e verificar as mensagens de erro para campos vazios
        await driver.wait(until.elementLocated(By.css('.erro-email')), 5000); // Seletor da mensagem de erro do e-mail
        let emailErrorMessage = await driver.findElement(By.css('.erro-email')).getText();
        if (emailErrorMessage.includes('Campo e-mail é obrigatório.')) { // Substitua pela mensagem real
            console.log('Mensagem de erro de e-mail vazio correta:', emailErrorMessage);
        } else {
            console.error('Mensagem de erro de e-mail vazio inesperada:', emailErrorMessage);
        }

        await driver.wait(until.elementLocated(By.css('.erro-senha')), 5000); // Seletor da mensagem de erro da senha
        let passwordErrorMessage = await driver.findElement(By.css('.erro-senha')).getText();
        if (passwordErrorMessage.includes('Campo senha é obrigatório.')) { // Substitua pela mensagem real
            console.log('Mensagem de erro de senha vazia correta:', passwordErrorMessage);
        } else {
            console.error('Mensagem de erro de senha vazia inesperada:', passwordErrorMessage);
        }

        // 4. Verificar se a URL não mudou (permanece na página de login)
        let currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('/login')) { // Substitua pela URL real
            console.log('Permaneceu na página de login.');
        } else {
            console.error('Redirecionado para outra página inesperadamente.');
        }

    } catch (error) {
        console.error('Erro durante o teste de login com campos vazios:', error);
    } finally {
        await driver.quit();
    }
}

loginCamposVazios();
