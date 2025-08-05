// selenium-js/autenticacao/deslogar-conta/deslogar_conta_test.js

const { Builder, By, Key, until } = require('selenium-webdriver');

async function deslogarConta() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Pré-requisito: Realizar login para estar em uma sessão autenticada
        await driver.get('https://www.exemplo.com.br/login'); // Substitua pela URL real
        await driver.findElement(By.id('email')).sendKeys('usuario@exemplo.com');
        await driver.findElement(By.id('senha')).sendKeys('SenhaSegura123');
        await driver.findElement(By.id('botaoLogin')).click();
        await driver.wait(until.urlContains('/dashboard'), 5000);
        console.log('Pré-requisito: Login realizado com sucesso.');

        // 1. Clicar no botão/link de logout
        await driver.findElement(By.id('botaoSair')).click(); // Substitua pelo ID/Seletor real do botão de sair

        // 2. Aguardar o redirecionamento para a página de login
        await driver.wait(until.urlContains('/login'), 5000); // Substitua pela URL real da página de login
        console.log('Redirecionado para a página de login após o logout.');

        // 3. Tentar acessar uma página restrita (ex: dashboard) e verificar se é negado
        await driver.get('https://www.exemplo.com.br/dashboard'); // Substitua pela URL real de uma página restrita
        await driver.wait(until.urlContains('/login'), 5000); // Espera ser redirecionado de volta para o login
        console.log('Acesso negado à página restrita após o logout. Redirecionado para login.');

    } catch (error) {
        console.error('Erro durante o teste de deslogar da conta:', error);
    } finally {
        await driver.quit();
    }
}

deslogarConta();
