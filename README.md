# 📚 Libre Turing - Sistema de Gerenciamento de Bibliotecas

> Projeto desenvolvido para a disciplina de Interação Humano-Computador (IHC) do curso de Sistemas de Informação do IFSULDEMINAS.

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Tecnologia](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blue)
![Foco](https://img.shields.io/badge/Foco-Usabilidade%20%26%20IHC-orange)

## 📖 Sobre o Projeto

[cite_start]O **Libre Turing** é um Sistema de Gerenciamento de Bibliotecas (TPS) desenvolvido para Web. [cite_start]O objetivo principal foi criar uma interface intuitiva e acessível, focada na experiência do usuário (UX) e na aplicabilidade das heurísticas de usabilidade.

[cite_start]Diferente de sistemas complexos, o Libre Turing foi projetado para reduzir a carga cognitiva, permitindo que tanto bibliotecários experientes quanto usuários leigos operem o sistema com facilidade.

### 🛠️ Arquitetura e Persistência de Dados
Para fins acadêmicos e de prototipagem de interface, o sistema não utiliza um banco de dados relacional tradicional (como MySQL). [cite_start]Em vez disso, utilizamos **JavaScript** e **JSON** para simular a persistência de dados diretamente no **Local Storage** do navegador. Isso torna o projeto leve e executável em qualquer máquina sem necessidade de configuração de backend.

---

## 🎨 Princípios de IHC Aplicados

O diferencial deste projeto é a aplicação consciente de conceitos de Interação Humano-Computador:

* [cite_start]**Affordances:** Botões e elementos interativos possuem design que sugere sua funcionalidade (clicável, editável)[cite: 53].
* [cite_start]**Metáforas Visuais:** Uso de ícones universalmente reconhecidos (ex: Lupa para pesquisa, Lixeira para exclusão) para facilitar o entendimento sem necessidade de muita leitura.
* **Prevenção de Erros:** Formulários com máscaras, seletores de data (calendários) e *dropdowns* para evitar erros de digitação por parte do usuário.
* **Visibilidade do Status:** O sistema fornece feedback visual claro (cores Verde/Vermelho) para indicar status de empréstimos ("Ativo" ou "Devolvido") e validação de ações.
* [cite_start]**Saídas de Emergência:** Possibilidade de desfazer navegações e voltar ao menu principal a qualquer momento.

---

## 🖥️ Telas e Funcionalidades

O sistema conta com as seguintes funcionalidades principais:

1.  **Dashboard/Menu:** Acesso rápido via ícones grandes.
2.  **Empréstimo de Livros:** Fluxo híbrido que aceita leitura de código de barras ou seleção manual.
3.  **Consulta de Acervo:** Pesquisa e visualização de status dos livros.
4.  **Consulta de Usuários:** Listagem de alunos para visualização de informações.
5.  **Gerenciamento de Usuários:** Listagem de empréstimos para consultas e devoluções.

![alt text](imagens/menu.png)
---

## 🚀 Como Executar o Projeto

Como o projeto é puramente Front-end com Local Storage, não é necessário instalar dependências.

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/gustavo-gml/Libre-Turing-JavaScript.git
    ```
2.  **Acesse a pasta do projeto.**
3.  **Abra o arquivo `index.html`** (ou o arquivo da tela de login/menu) em seu navegador de preferência.

---

## 👨‍💻 Equipe de Desenvolvimento

[cite_start]Projeto desenvolvido pelos alunos de Sistemas de Informação:

* **Agabo**
* **Gustavo Martins**
* **José Gabriel**
* **Tiago Lemes**
* **Saulo**

[cite_start]**Professor Orientador:** Vinicius Ferreira de Souza

---

## 🏫 Instituição

[cite_start]**IFSULDEMINAS - Campus Machado** 
[cite_start]Bacharelado em Sistemas de Informação - 2025

---
*Este projeto é Open Source e foi desenvolvido para fins educacionais.*