// selenium-js/autenticacao/cadastro-senha-fraca/cadastro_senha_fraca_test.js

const { Builder, By, Key, until } = require('selenium-webdriver');

async function cadastroSenhaFraca() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // 1. Navegar para a página de cadastro
        await driver.get('https://www.exemplo.com.br/cadastro'); // Substitua pela URL real

        // 2. Preencher formulário com senha fraca
        await driver.findElement(By.id('nome')).sendKeys('Usuário Fraco'); // Substitua pelo ID/Seletor real
        await driver.findElement(By.id('email')).sendKeys('usuario.fraco@exemplo.com'); // E-mail válido, mas não existente
        await driver.findElement(By.id('senha')).sendKeys('123456'); // Senha fraca
        await driver.findElement(By.id('botaoCadastrar')).click(); // Clicar no botão de cadastro

        // 3. Aguardar e verificar a mensagem de erro da senha
        await driver.wait(until.elementLocated(By.css('.mensagem-erro-senha')), 5000); // Substitua pelo seletor da mensagem de erro da senha
        let errorMessage = await driver.findElement(By.css('.mensagem-erro-senha')).getText();

        if (errorMessage.includes('A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas e números.')) { // Substitua pela mensagem real
            console.log('Mensagem de erro de senha fraca correta exibida:', errorMessage);
        } else {
            console.error('Mensagem de erro de senha fraca inesperada:', errorMessage);
        }

        // 4. Verificar se a URL não mudou (permanece na página de cadastro)
        let currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('/cadastro')) { // Substitua pela URL real
            console.log('Permaneceu na página de cadastro.');
        } else {
            console.error('Redirecionado para outra página inesperadamente.');
        }

    } catch (error) {
        console.error('Erro durante o teste de cadastro com senha fraca:', error);
    } finally {
        await driver.quit();
    }
}

cadastroSenhaFraca();
