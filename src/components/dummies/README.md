## Dummies folder


### What's here?

- Комплексный компонент отображения. Необходимые ему данные принимает через props. Не содержит в себе бизнес-логики, только логику отображения. 
Пример — карточка товара. Мы передаем через props все характеристики товара, а также callback для кнопки «добавить в корзину». Тем самым получаем переиспользуемый компонент, к которому мы можем привязать любую необходимую бизнес-логику, которая может быть разной для одного и того же отображения.

- Complex display component. It receives the data it needs through props. Does not contain business logic, only display logic. 
An example is a product card. We pass all product characteristics through props, as well as a callback for the “add to cart” button. Thus, we get a reusable component to which we can attach any necessary business logic, which may be different for the same display.