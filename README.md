[![Node CI](https://github.com/dzencot/smev-filter/workflows/Node.js%20CI/badge.svg)](https://github.com/dzencot/smev-filter/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/dfc50c2d88cd46d069c1/maintainability)](https://codeclimate.com/github/dzencot/smev-filter/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dfc50c2d88cd46d069c1/test_coverage)](https://codeclimate.com/github/dzencot/smev-filter/test_coverage)

*Утилита для парсинга и фильтрации ответов из очереди smev.
Отфильтровать можно по времени, по идентификатору taskId, а также неокончательные ответы (StatusIsFinal: false)*

## Требования

* Node.js >= 14
* npm >= 6
* make >= 4

## Установка и запуск

* `make install` установка зависимостей
* `make setup` установка (первый раз)
* `smev-filter -h` запуск утилиты (вызов справки)

## Дополнительно

* `make lint` проверка линтером
* `make test` проверка тестами
