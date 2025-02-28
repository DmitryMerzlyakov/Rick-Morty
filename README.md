


## Import rules

#### Neutral import

```
  Layouts / Wrappers            # Нет ограничений на импорты. No restrictions on imports.
``` 

```
  ├── Pages                     # Здесь каждый компонент может быть импортирован только в любой вышестоящий.
      ├── Widgets               # Также допускаются импорты в рамках одного уровня.
          ├── Dummies           # Here, each component can only be imported into any parent one.
              ├── UI            # Imports within the same level are also allowed.
```
