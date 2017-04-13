---
title: "#11 - this.state или this.effectiveValue?"
date: "2017-04-13"
layout: post
path: "/11-setstate-vs-this/"
---

<iframe width="450" height="65" src="https://5minreact.podster.fm/11/embed/15?link=0&ap=0" frameborder="0" allowtransparency="true"></iframe>

Если мы решили хранить локальное состояние компонента где-то внутри компонента (а не в Redux), стоит ли это делать в this.state или завести отдельную переменную this.effectiveValue? Отвечаю на комментарий к предыдущему эпизоду подкаста.

- http://5minreact.ru/10-redux-and-local-state/ - предыдущий выпуск подкаста, см. комментарии на странице
- https://codesandbox.io/s/nrkvngno5 - пример описанный в подкасте, можно поиграться online