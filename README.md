# Chagenlle Cantele | Lucas Pedro

## Teste para React Native

Objetivo deste teste é avaliar seus conhecimentos em organização, estilo, boas práticas e habilidades em desenvolvimento de app.


### Dependências

* Node: 12x ou superior
* Yarn: 1x ou superior || npm: 7x ou superior
* Expo: ~41.0.1 => 41.0.1
* react: 16.13.1 => 16.13.1
* react-native: ~0.63.4 => 0.63.4

### Configurando

Utilize o <code>git clone</code> para fazer o download do projeto chanllecantele disponível em [Lucas Pedro](https://github.com/lucaspedronet/chagenllecantele)

Dentro da raíz do projeto execute o seguinte comando
```
$ yarn install ou yarn
```

Após instalar todas as dependências, execute o comando abaixo para habilitar a porta no device ou emulador, corresponde a API.
```
$ adb devices

$ adb -s ID_DEVICE reverse tcp:PORTA_DA_API tcp:PORTA_DA_API
```
O comando <code>adb devices</code> irá apresentar o uma list de IDs dos dispositvos conectados em sua máquina (emulador ou smartphone). Na sequência o comando <code>adb -s ID_DEVICE reverse tcp:PORTA_DA_API tcp:PORTA_DA_API</code> após execução deste comando teremos como retorno a porta da API habilitada no dispositivo.

* <code>ID_DEVICE</code>: é obtido no comando **adb devices**;
* <code>PORTA_DA_API</code>: porta correspondente a API

### Atenção

Aporta que está configurada por defautl na API (8080) poderá gerá algum conflito com dispositivo, porque React Native executa metro blund nesta mesma porta. Sugira que altere a porta default da API para **3333** ou outra semelhante.

### Executando no Android

```
$ yarn android ou react-native run-android
```

### Executando no iOS

```
$ yarn ios ou react-native run-ios
```

### Proposta

Link: [Test React Native](https://github.com/lucaspedronet/chagenllecantele.git)
