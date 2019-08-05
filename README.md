This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### To Run:

```
git clone https://github.com/alexthedar/stocks-react.git
cd stocks-react
npm i
npm run start
```

### To Test

```
npm run test
```

### Other npm commands

```
npm run start:logger
```

Starts app with redux logging in the console.

```
npm run test:coverage
```

Runs tests with coverage report at finish.

### Capabilities

- App loads latest trades from IEX
- User can go back to front page / market page by clicking on Market in navbar
- User can go to detail page of stock by clicking on row in market table
- User can got to detail page by typing in stock symbol in search input in navbar
- Search navbar will suggest stock symbols based on user input
- Search navbar will fill input with suggestion upon enter (a second press is needed to submit stock symbol)
- User may click on stock symbol in stock detail page to go to stock website
- User may click on card of news item to co to news article website
- User/developer may see redux logger in console
- User can sort each column acs/desc by clicking on column.
- Data is paginated
- User can determine how many entries to show on page

#### Tech:

- App utilizes iex data
- Redux is used to store stock symbols, market data, stock detail data
- React-bootstrap was used for styling
- React-bootstrap-table2 was used for table
- Typeahead was used for typeahead input
- Testing uses Jest, Enzyme, chai

#### Note:

.env.development.local has been removed from the .gitignore only for the purposes of this challenge.
Current coverage examples for some files are unacceptable for a production app
