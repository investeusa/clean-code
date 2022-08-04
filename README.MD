# CONFIG PROJETO
npm init -y
npm install typescript jest @types/jest --save
npx tsc --init //cria o TS config, configurar conforme abaixo
    "incremental": true,
    "outDir": "./dist",
    "include": [
        "src",
        "test"
    ]
package.json
    "scripts": {
        "test": "tsc && jest ./dist"
    },

# TESTES
1 - Deve criar um pedido com um cpf valido
2 - Deve criar um pedido com 3 itens