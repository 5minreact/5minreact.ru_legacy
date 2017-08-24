---
title: "#11 - this.state или this.effectiveValue?"
date: "2017-04-13"
layout: post
path: "/11-setstate-vs-this/"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317495296&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

<a href="https://5minreact.podster.fm/11/download/audio.mp3?download=yes&media=file"><i class="fa fa-download"></i> Скачать</a>

Если мы решили хранить локальное состояние компонента где-то внутри компонента (а не в Redux), стоит ли это делать в this.state или завести отдельную переменную this.effectiveValue? Отвечаю на комментарий к предыдущему эпизоду подкаста.

- http://5minreact.ru/10-redux-and-local-state/ - предыдущий выпуск подкаста, см. комментарии на странице
- https://codesandbox.io/s/nrkvngno5 - пример описанный в подкасте, можно поиграться online