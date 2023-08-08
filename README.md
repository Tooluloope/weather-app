# Weather App

## Objective

Build a weather application that allows users to search for the current weather conditions of a city, utilizing WeatherAPI service. The project was developed using Next.js, TypeScript, Zustand for state management, Tailwind for styling, and tested with Jest and React Testing Library.

### Environment Variables

- `GOOGLE_API_KEY`: For getting the autocomplete locations.
- `WEATHER_API_KEY`: For fetching weather data.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Tooluloope/weather-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd weather-app
   ```

3. **Install dependencies**:

   ```bash
   yarn
   ```

4. **Add environment variables**: Create a `.env` file at the root of the project and add your API keys:

   ```env
   GOOGLE_API_KEY=your_google_api_key
   WEATHER_API_KEY=your_weather_api_key
   ```

5. **Start the development server**:

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

Run the tests using the following command:

```bash
yarn test
```

## Technologies Used

- **Next.js & TypeScript**: For development.
- **Zustand**: State management.
- **Tailwind**: Styling.
- **Jest & React Testing Library**: Testing.

## Deployment

The app is deployed on [Vercel](https://weather-app-phi-dusky.vercel.app/).

## Potential Improvements

Here are some potential improvements:

1. **Unit Control**:

   - Allow users to select their preferred units for temperature (e.g., Celsius, Fahrenheit), wind speed, and time format (e.g., AM/PM or 24-hour clock).
   - This customization would make the application more user-friendly across different regions and personal preferences.

2. **Customizable Data Display**:

   - Provide an option for users to choose the specific weather data they want to view from the available API response.
   - This feature would enable a more personalized and relevant user experience, as they can focus on the information that matters most to them.

3. **Weather Forecast**:

   - Extend the application to include well detailed future weather forecasts, providing more comprehensive information for the user.
   - Different views could be implemented, such as hourly or weekly forecasts.

4. **Localization and Internationalization**:

   - Implementing localization to support different languages and regions could broaden the application's reach and accessibility.

5. **Enhanced Error Handling and User Feedback**:
   - While basic error handling is in place, there could be more robust solutions, providing clear and helpful feedback to the user in various scenarios.
