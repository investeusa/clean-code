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
3 - Deve criar um pedido com 3 itens com cupom de descconto
4 - Não deve aplicar cupom de desconto expirado
5 - Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)
6 - Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado


## Considere
O valor do frete será calculado de acordo com a fórmula
O valor mínimo é de R$10,00
Não existem diferentes modalidades de frete (normal, expresso, …) e a origem dos produtos é sempre a mesma, além disso não existe diferença no destino, se é capital ou interior, o cálculo é feito basicamente considerando a distância, o volume e a densidade transportados

Fórmula de Cálculo do Frete

Preço do Frete = distância (km) * volume (m3) * (densidade/100)

Exemplos de volume ocupado (cubagem)

Camera: 20cm x 15 cm x 10 cm = 0,003 m3
Guitarra: 100cm x 30cm x 10cm = 0,03 m3
Geladeira: 200cm x 100cm x 50cm = 1 m3

Exemplos de densidade

Camera: 1kg / 0,003 m3 = 333kg/m3
Guitarra: 3kg / 0,03 m3 = 100kg/m3
Geladeira: 40kg / 1 m3 = 40kg/m3

Exemplos

distância: 1000 (fixo)
volume: 0,003
densidade: 333
preço: R$9,90 (1000 * 0,003 * (333/100))

distância: 1000 (fixo)
volume: 0,03
densidade: 100
preço: R$30,00 (1000 * 0,03 * (100/100))

distância: 1000 (fixo)
volume: 1
densidade: 40
preço: R$400,00 (1000 * 1 * (40/100))

# 3 LEIS DO TDD
## Voce nao deve escrever uma linha de codigo sem que antes exista um teste que falha
## Voce nao deve escrever mais do o necessario para evidenciar uma falha
## Voce nao deve escrever mais codigo doque o suficiente para fazer o teste passar

Verificar quando criar algum codigo

## FIRST Testes
Fast
Independent
Repeatable
Self-validation
Timely

##  SOLID
Single responsability - Separe partes do codigo que mudam por motivos diferentes
Open/Close - Aberto para  extensao e fechado pra modificacao

Liskov Substituition
Interface Segregation
Dependency  Inversion

##  Tests
Given/When/Then
Arrange/Act/Assert

##  Design Patterns
FACADE: abstrai um subsistema mais complexo oferecenno uma interface mais simples de interação

Refactoring

Introducao  de objeto parametro (Dimension)

Invariance

Estado  interno do objeto  que deve  ser  consistente sempre


Strategy - chavear o comportamento em  tempo de execucao

# PARTE 3

1 - Deve gerar o código do pedido
2 - Deve fazer um pedido (caso de uso)
3 - Deve simular o frete (caso de uso)
4 - Deve validar o cupom de desconto (caso de uso)


Considere
O código do pedido é formado por AAAAPPPPPPPP onde AAAA representa o ano e o PPPPPPPP representa um sequencial do pedido
Implementar um mecanismo de persistência desacoplado utilizando banco de dados

Importante


Implemente os testes de unidade que faltam para cada uma das entities
Implemente os DTOs para cada um dos use cases