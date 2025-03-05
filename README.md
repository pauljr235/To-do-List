# To-Do List

## Descrição
Este é um projeto de To-Do List desenvolvido com **React** e **TypeScript**, utilizando **styled-components** para estilização, **Redux** para gerenciamento de estado e **React Router DOM** para navegação entre rotas.

## Demonstração
Veja o projeto em funcionamento: https://to-do-list-eight-olive-95.vercel.app/

## Tecnologias Utilizadas
- **React** com **TypeScript**
- **Styled-components**
- **Redux** (para gerenciamento de estado)
- **React Router DOM** (para navegação entre páginas)

## Funcionalidades
- Adicionar novas tarefas
- Remover tarefas
- Editar tarefas existentes
- Pesquisar tarefas
- Filtrar tarefas por status
- Marcar tarefas como concluídas
- Navegação entre páginas com React Router

## Estrutura do Projeto
O desenvolvimento seguiu a seguinte ordem:
1. Configuração inicial do projeto e instalação de pacotes
2. Criação do componente de filtro
3. Parametrização dos filtros
4. Criação do card de tarefa
5. Implementação do estado de troca de botões
6. Parametrização dos cards de tarefa
7. Configuração do Redux para gerenciamento de estado
8. Desenvolvimento dos reducers para:
   - Remover tarefas
   - Editar tarefas
   - Pesquisar tarefas
   - Filtrar e exibir tarefas
9. Configuração do React Router DOM para roteamento
10. Implementação da funcionalidade de criação de tarefas
11. Marcar tarefas como concluídas

## Diferenciais Técnicos
- Arquitetura organizada com Redux para melhor gerenciamento de estado
- Componentes reutilizáveis e bem estruturados
- Uso de Styled-components para melhor modularização de estilos
- Navegação fluida entre páginas com React Router DOM
- Boas práticas de performance e otimização do React

## Desafios e Soluções
Durante o desenvolvimento, alguns desafios foram encontrados:
- **Gerenciamento de Estado**: Inicialmente, utilizar apenas `useState` para controlar as tarefas tornou-se complexo. A solução foi implementar o Redux para centralizar e organizar melhor o estado.
- **Filtragem Dinâmica**: O desafio era manter a filtragem eficiente e reativa ao estado global. A solução foi usar **selectors do Redux** para otimizar os filtros.
- **Estilização Modular**: Para evitar estilos globais conflitantes, foi adotado **Styled-components**, permitindo estilização encapsulada em cada componente.

## Próximos Passos
- Implementar **autenticação de usuários**
- Criar **tema dark/light**
- Melhorar **testes automatizados**
- Adicionar **animações para melhor experiência do usuário**

## Como Executar o Projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd nome-do-repositorio
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

## Contribuição
Se desejar contribuir, fique à vontade para abrir issues e pull requests!

## Licença
Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

