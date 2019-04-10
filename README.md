This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### To Run:

```
git clone https://github.com/alexthedar/stocks-react.git
cd stocks-react
yarn start
```

### To Test

```
yarn test
```

### Capabilities
- App loads to top 100 market from iex upon load.
- User can go back to front page / market page by clicking on Market in navbar
- User can go to detail page of stock by clicking on row in market table
- User can got to detail page by typing in stock symbol in search input in navbar
- Search navbar will suggest stock symbols based on user input
- Search navbar will fill input with suggestion upon enter (a second press is needed to submit stock symbol)
- User may click on stock symbol in stock detail page to go to stock website
- User may click on card of news item to co to news article website
- USer/developer may see redux logger in console

#### Tech: 
- App utilizes iex data
- Redux is used to store stock symbols, market data, stock detail data
- Bootstrap was used for styling
- Typeahead was used for typeahead input
- Testing uses Jest, Enzyme, chai


#### Todo:

- Break Error and Loading into separate components.
- Loading Component not styled or hooked up to actions
- Tests for routing, asyncComponent,
- add charts to detail and market
- add sorting/filtering to market table
- add pagination/lazy loading to market
- add more market options to market table
- add more unique/cool styling
- add integration tests
- scour for refactoring/optimization opportunities
- add data from other sources
