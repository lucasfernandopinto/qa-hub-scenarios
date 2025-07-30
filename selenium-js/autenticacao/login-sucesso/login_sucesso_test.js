// selenium-js/autenticacao/login-sucesso/login_sucesso_test.js

const { Builder, By, Key, until } = require('selenium-webdriver');

async function loginComSucesso() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navegar para a URL de login
        await driver.get('https://www.exemplo.com.br/login'); // Substitua pela URL real

        // Encontrar elementos e interagir
        await driver.findElement(By.id('email')).sendKeys('usuario@exemplo.com'); // Substitua pelo ID/Seletor real
        await driver.findElement(By.id('senha')).sendKeys('SenhaSegura123'); // Substitua pelo ID/Seletor real
        await driver.findElement(By.id('botaoLogin')).click(); // Substitua pelo ID/Seletor real

        // Aguardar o redirecionamento ou um elemento da página inicial
        await driver.wait(until.urlContains('/dashboard'), 5000); // Substitua pela URL/Elemento real
        console.log('Login com sucesso! Redirecionado para o dashboard.');

        // Verificar um elemento na página pós-login para confirmar o sucesso
        let elementoDashboard = await driver.findElement(By.css('.boas-vindas')); // Substitua pelo seletor real
        if (elementoDashboard) {
            console.log('Elemento de boas-vindas encontrado na página pós-login.');
        } else {
            console.error('Elemento de boas-vindas NÃO encontrado.');
        }

    } catch (error) {
        console.error('Erro durante o teste de login com sucesso:', error);
    } finally {
        await driver.quit();
    }
}

loginComSucesso();
