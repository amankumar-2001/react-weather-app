
# Weather-App

Weather application that gives current Weather report of any city.
App should be responsive with the portrait mode and placed horizontally when in landscape mode.


### High Level Design:

- Components used in the app are Title, Form, Cities.
- API for the weather information was provided by Open Weather Map this provides current Weather report of the City.

### Detailed Design:

- Built the app using react functional components with hooks to handle state and other life cycle methods
- App component acts as the core parent component of application, it takes care of loading the initial state, data communication and also handles how the data gets propagated to various underlying components
- Initial state of the application is set by looking up the browser storage for any pre-selected city for which the report can be fetched
- Kept the layout of the application simple to have any modification or enhancement in future to evolve the layout as required

### Front End Implementation:

- HTML
- CSS
- React



## How to Run the Application:

Clone the repo and setup the application

- git clone https://github.com/amankumar-2001/react-weather-app
- cd react-weather-app/
- npm install
- npm start

## API Details

```http
  https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid={API key}
```

| Parameter        | Type     | Description                       |
| :--------------  | :------- | :-------------------------------- |
| `location`       | `string` | **Required**. name of the city    |
| `Weather API Key`| `string` | **Required**. API fetch from openweathermap.org   |

API key used in the application : `e5eccfea6c9d8df3c773ee0118dbb7d6`



## Application Link:

Link to the Application hosted on Netlify [https://apcode15-weather-app.netlify.app/](https://apcode15-weather-app.netlify.app/)
## Author

- [@amankumar-2001](https://www.github.com/amankumar-2001)

