// cypress-js/api-testing/criar-recurso-dados-invalidos/criar_recurso_dados_invalidos_test.js

describe('API Testing - Criar Recurso com Dados Inválidos (400)', () => {
    it('Deve retornar status 400 e erros de validação ao enviar dados inválidos', () => {
        const dadosInvalidos = {
            email: 'email-invalido', // Formato de e-mail inválido
            senha: '123' // Senha muito curta
        };
        cy.request({
            method: 'POST',
            url: 'https://api.exemplo.com.br/recursos', // Substitua pela URL real
            body: dadosInvalidos,
            failOnStatusCode: false // Impede o Cypress de falhar
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('erros'); // Substitua pela chave que contém os erros na sua API
            expect(response.body.erros).to.be.an('array').and.not.be.empty;
        });
    });
});
