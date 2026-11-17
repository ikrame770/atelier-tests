const { envoyer } = require('../../src/mailer');

test('rejette avec une erreur si SMTP n’est pas configuré', async () => {
    await expect(
        envoyer()
    ).rejects.toThrow('SMTP non configuré');
});