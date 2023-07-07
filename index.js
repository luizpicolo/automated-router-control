require('dotenv').config();
const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Rota para desligar
app.get('/turnoff', async (req, res) => {
  try {
    const email = 'luiz-picolo-20@assim.net.turnoff';

    await executePuppeteer(email);

    res.send('Código executado com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao executar o código.');
  }
});

// Rota para ligar
app.get('/turnon', async (req, res) => {
  try {
    const email = 'luiz-picolo-20@assim.net';

    await executePuppeteer(email);

    res.send('Código executado com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao executar o código.');
  }
});

// Função auxiliar para executar o código Puppeteer
async function executePuppeteer(email) {
  const url = process.env.URL;
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://192.168.0.1/mobile/login.asp');

  await page.type('#username', username);
  await page.type('#password', password);
  await page.click('#cs_login_btn');

  await page.goto(url);

  await page.$eval('input[name="pppUserName"]', (input) => input.value = '');
  await page.type('input[name="pppUserName"]', email);
  await page.click('input[name="save_apply"]');

  await browser.close();
}

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
