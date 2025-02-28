## Models folder


### What's here?

- Здесь мы храним описание типов, общих для нашего приложения. Это все описания серверных запросов и ответов, а также клиентские модели, которые не замкнуты на одном конкретном интерфейсе.

- Here we store a description of the types common to our application. These are all descriptions of server requests and responses, as well as client models that are not limited to one specific interface.

#### Rules

```

Cоздаем папку под каждую категорию моделей. Create a folder for each category of models.

Common

Auth

Users

...

```
```

Каждая папка содержит. Each folder contains.

api.ts : Содержит в себе представления запросов и ответов сервера. В названиях моделей все запросы и ответы сервера помечаются суффиксами Request и Response соответственно. Contains representations of server requests and responses. In model names, all server requests and responses are marked with the suffixes Request and Response, respectively.

client.ts : Содержит общие модели, которые относятся только к фронтенду. Contains general models that apply only to the frontend.

Модели из обеих этих категорий могут быть использованы в приложении там, где они необходимы. Models from both of these categories can be used in an application where they are needed.

```