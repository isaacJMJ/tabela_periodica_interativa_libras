# Tabela Periódica Interativa e Acessível

Esta aplicação web estática consiste em uma plataforma educacional dedicada à visualização interativa e inclusiva dos elementos químicos. O projeto foi desenvolvido com foco em arquitetura limpa, design responsivo e acessibilidade digital.

---

## Contexto e Objetivos

O projeto visa facilitar o aprendizado da química por meio de uma interface intuitiva, combinando a precisão técnica dos dados científicos com descrições contextualizadas e acessíveis. Adicionalmente, a aplicação prioriza a inclusão social ao integrar ferramentas nativas de acessibilidade para a comunidade surda, assegurando a democratização do acesso ao conhecimento científico.

---

## Funcionalidades

* **Grid Estrutural Preciso:** Renderização da tabela periódica configurada rigidamente por meio de um sistema CSS Grid composto por 18 colunas e 10 linhas, assegurando o alinhamento correto de todas as famílias químicas.
* **Interatividade Avançada:** Manipulação dinâmica de eventos no DOM para efeitos visuais de realce (*hover*) e abertura de modais com transições suaves de escala e opacidade.
* **Exibição de Dados Detalhados:** Apresentação estruturada das propriedades atômicas de cada elemento, incluindo símbolo, nome, número atômico, massa, estado físico, ponto de fusão, ponto de ebulição, eletronegatividade e descrição textual.
* **Acessibilidade em Libras:** Integração com o ecossistema do widget VLibras, permitindo a tradução instantânea dos conteúdos textuais para a Língua Brasileira de Sinais.
* **Responsividade Controlada:** Implementação de travas de segurança e largura mínima de rolagem no contêiner do Grid para evitar a quebra ou sobreposição dos elementos em telas de dispositivos móveis.

---

## Tecnologias Utilizadas

A arquitetura do software adota uma abordagem baseada em tecnologias web nativas (*Vanilla Architecture*), eliminando a necessidade de frameworks complexos ou etapas densas de compilação:

* **HTML5:** Estruturação semântica e inclusão de bibliotecas externas via CDN.
* **Tailwind CSS:** Injeção dinâmica de configurações e padronização do *design system*, estabelecendo paletas de cores estendidas (tons de superfície e variantes semânticas), espaçamentos de células e tipografia baseada nas fontes Lexend e Work Sans.
* **CSS3 Customizado:** Definição das regras de dimensionamento do Grid e atribuição das paletas de cores específicas para a categorização das famílias químicas (como Metais Alcalinos, Gases Nobres e Halogênios).
* **JavaScript (ES6+):** Lógica de controle para escuta de eventos, filtragem interna de dados por meio do método `.find()` e gerenciamento assíncrono das classes de exibição do modal informador.
* **Plugin VLibras:** Componente governamental responsável pela tradução e acessibilidade em Libras.

---

Camada de Dados (data.js): Atua como o modelo de persistência estática, isolando os dados científicos das regras de renderização.

    Camada de Controle (script.js): Intermedeia as ações do usuário (cliques nas células) com a busca no modelo de dados para a devida atualização da interface gráfica.

Instruções para Execução

Por se tratar de uma aplicação client-side estática, não há dependências de servidores de aplicação complexos.

Realize o clone deste repositório:
    Bash

    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

    Acesse o diretório do projeto.

    Execute o arquivo index.html diretamente em um navegador web de sua preferência ou utilize uma extensão de servidor local (como o Live Server do VS Code) para desenvolvimento em tempo real.

Roadmap de Desenvolvimento

As seguintes melhorias estão planejadas para as próximas iterações do sistema:

    Implementação do Modo Escuro (Dark Mode) utilizando a infraestrutura já configurada no Tailwind CSS.

    Criação de um módulo de filtragem dinâmica por categorias químicas diretamente na interface.

    Desenvolvimento de um sistema de avaliação e fixação (Quiz) para fins didáticos.
