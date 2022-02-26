---
title: A EnCIROpédia precisa de vídeos
date: 2021-12-13 18:27
category: noticias
author: josenaldo
tags: [convocação, vídeos, enciropedia]
summary: Precisamos de voluntários para por vídeos no site
image:
    path: assets/images/posts/2021-12-13-a-enciropedia-precisa-de-videos.jpg
    width: "1200"
    height: "630"
---

Atenção Turma Boa, sua ajuda é necessária!

Precisamos de pessoas pra ajudar no preenchimento inicial da seção de vídeos da Enciropedia!

<!-- more -->

Já temos uma lista de vídeos prontos pra adicionar. Também aceitamos sugestões.

É um bom trabalho simples, e bom pra começarem a se familiarizar com o projeto.Vamos lá?

### O Alvo

Nosso alvo é essa [lista de entrevistas do Ciro](https://www.youtube.com/playlist?list=PLUZtVUpn6Q5M5EmW7xwSHen__W_Vu0HyQ).

O objetivo é descrever cada um desses vídeos, de forma que o site possa gerar a lista de vídeos e uma página pra cada vídeo.

### Como fazer isso?

No projeto, existe uma [pasta](https://github.com/josenaldo/enciropedia/tree/main/conteudo/_videos) com arquivos de texto. Pra cada vídeo exibido na página de [vídeos](https://www.enciropedia.com.br/videos/), existe um arquivo de texto, com extensão '.md', na pasta [conteudo/_videos](https://github.com/josenaldo/enciropedia/tree/main/conteudo/_videos).

O formato do arquivo é bem simples:

```md
---
title: "CIRO GOMES - Inteligência Ltda. Podcast #244"
date: 2021-08-20 20:00
author: josenaldo
tags: [ciro gomes, parlatorio, debate]
summary: Ciro conversa no Inteligência Ltda.
video_id: HGBWeGCnwpU
---

CIRO GOMES é advogado, professor universitário, escritor e político. Ciro já
foi prefeito de Fortaleza, governador do Ceará e deputado federal. Ele já
tentou ser presidente 3 vezes, e em 2022 será tetra-candidato. O Vilela pensou
em concorrer a presidente também, mas o fato de ter que sair do porão
inviabilizou sua candidatura.

<!-- more -->

Mais texto aqui. O texto de cima aparece na página de vídeos. O texto de baixo só aparece na página do vídeo.

```

No topo dos arquivos, entre a marcação `---`, temos os seguintes campos:

- **title**: Título do vídeo
- **date**: Data de publicação do vídeo no youtube no formato ano-mes-dia hora:minuto
- **author**: Seu nome apelido, que usaremos no site, na lista de colaboradores. Mais abaixo falamos disso.
- **tags**: Entre colchetes, colocamos algumsa palavras chaves sobre o video. Ex: [ciro gomes, parlatorio, debate]
- **summary**: Uma pequena frase sobre o vídeo.
- **video_id**: O ID do vídeo no youtube. O ID pode ser extraído direto da URL ou pode ser extraído usando a ferramneta [Youtube Video ID Extractor Online](https://freemediatools.com/youtubevideoid). Basta informar, nessa ferramenta, o link do vídeo, no youtube, que ela te diz qual o ID do vídeo.

{% include image.html
    src="assets/images/posts/2021-12-13-a-enciropedia-precisa-de-videos-a.png"
    alt="Extrator de ID de vídeo" %}

O trabalho é pegar cada vídeo da [lista de entrevistas do Ciro](https://www.youtube.com/playlist?list=PLUZtVUpn6Q5M5EmW7xwSHen__W_Vu0HyQ) e criar um arquivo. O mais difícil aí é caprichar na descrição do vídeo.

Abaixo do segundo marcador de 3 traços (`---`), colocamos o texto.

O texto é dividido em duas partes: o excerto e o principal. A divisão é colocada após o primeiro parágrafo. Para isso, usamos o marcador `<!-- more -->`, para indicar o corte do excerto. O texto que vem antes do excerto aparece na página da lista de vídeos, mas o texto que vem depois só aparece na página do vídeo.

### Onde nós colocamos isso?

Pra enviar o arquivo, basta criar uma nova tarefa (*Issue*) no repositório do projeto: [https://github.com/josenaldo/enciropedia/issues](https://github.com/josenaldo/enciropedia/issues).

{% include image.html
    src="assets/images/posts/2021-12-13-a-enciropedia-precisa-de-videos-b.jpg"
    alt="Extrator de ID de vídeo" %}

Na página, clica no botão `New`. Na página seguinte, no título, basta informar algo como "Adicionar vídeo NOME DO VIDEO"

E no campo de comentário, você informa o link do vídeo e, logo abaixo, o conteúdo do arquivo de exemplo, preenchido.

{% include image.html
    src="assets/images/posts/2021-12-13-a-enciropedia-precisa-de-videos-d.png"
    alt="Extrator de ID de vídeo" %}

Se quiserem um arquivo de exemplo, pra usar como template, basta pegar um na pasta [conteudo/_videos](https://raw.githubusercontent.com/josenaldo/enciropedia/main/conteudo/_videos/ciro-no-inteligencia-limitada.md).

Depois de preenchido, basta enviar a issue. Eu irei pegar esse texto e colocar no site.

Pra quem já conhece o Github, posso passar o acesso pra colocar o arquivo diretamente na pasta do projeto.
