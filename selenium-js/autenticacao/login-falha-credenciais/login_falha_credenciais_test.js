// selenium-js/autenticacao/login-falha-credenciais-invalidas/login_falha_credenciais_invalidas_test.js

const { Builder, By, Key, until } = require('selenium-webdriver');

async function loginComCredenciaisInvalidas() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navegar para a URL de login
        await driver.get('https://www.exemplo.com.br/login'); // Substitua pela URL real

        // Encontrar elementos e interagir com credenciais inválidas
        await driver.findElement(By.id('email')).sendKeys('naoexiste@exemplo.com'); // E-mail inválido
        await driver.findElement(By.id('senha')).sendKeys('senhaErrada123'); // Senha incorreta
        await driver.findElement(By.id('botaoLogin')).click(); // Clicar no botão de login

        // Aguardar a mensagem de erro ou a permanência na página de login
        await driver.wait(until.elementLocated(By.css('.mensagem-erro')), 5000); // Substitua pelo seletor da mensagem de erro
        let errorMessage = await driver.findElement(By.css('.mensagem-erro')).getText();
        
        if (errorMessage.includes('Email ou senha inválidos.')) { // Substitua pela mensagem real
            console.log('Mensagem de erro correta exibida:', errorMessage);
        } else {
            console.error('Mensagem de erro inesperada:', errorMessage);
        }

        // Verificar se a URL não mudou (permanece na página de login)
        let currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('/login')) { // Substitua pela URL real
            console.log('Permaneceu na página de login.');
        } else {
            console.error('Redirecionado para outra página inesperadamente.');
        }

    } catch (error) {
        console.error('Erro durante o teste de login com credenciais inválidas:', error);
    } finally {
        await driver.quit();
    }
}

loginComCredenciaisInvalidas();
