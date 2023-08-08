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
