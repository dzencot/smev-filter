[![Node CI](https://github.com/dzencot/smev-filter/workflows/Node.js%20CI/badge.svg)](https://github.com/dzencot/smev-filter/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/cff2886d11492212ed50/maintainability)](https://codeclimate.com/github/dzencot/smev-filter/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/cff2886d11492212ed50/test_coverage)](https://codeclimate.com/github/dzencot/smev-filter/test_coverage)

*Утилита для парсинга и фильтрации ответов из очереди smev.
Отфильтровать можно по времени, по идентификатору taskId, а также неокончательные ответы (StatusIsFinal: false)*

## Требования

* Node.js >= 14
* npm >= 6
* make >= 4

## Установка и запуск

* `git clone https://github.com/dzencot/smev-filter.git` - склонировать репо
* `cd smev-filter` - перейти в папку репо
* `make install` установка зависимостей
* `make setup` установка утилиты в систему (первый раз). Возможно понадобится `sudo`
* `smev-filter -h` запуск утилиты (вызов справки)

Можно не устанавливать утилиту в системе(`make setup`), тогда запуск утилиты возможен через исполняемый файл в корне репозитория: `./bin/smev-filter -h`

## Дополнительно

* `make lint` проверка линтером
* `make test` проверка тестами
