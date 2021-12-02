const express = require('express');
const bodyParser = require('body-parser');
const { userController, loginController, categoryController } = require('./controllers');

const app = express();

app.use(bodyParser.json());

app.use('/user', userController);
app.use('/login', loginController);
app.use('/categories', categoryController);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
