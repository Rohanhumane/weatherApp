# 🌦 Weather WebApp

A simple and elegant weather application built using **React.js** and **OpenWeatherMap API**. This app provides real-time weather updates for any city worldwide, displaying temperature, humidity, and sunrise/sunset times.

## 🚀 Features
- 🌍 Search weather data for any city
- 🌡️ Displays temperature in Celsius
- 💧 Shows humidity percentage
- 🌅 Sunrise and 🌇 sunset timings
- 🎨 Beautiful and responsive UI
- 🏎️ Fast and lightweight, using React's latest features

## 🛠️ Technologies Used
- React.js
- OpenWeatherMap API
- CSS (for styling)

## 📸 Screenshot
![Weather App UI](https://via.placeholder.com/800x400?text=Weather+App+Screenshot)

## 📦 Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Rohanhumane/weatherApp.git
   ```
2. Navigate to the project folder:
   ```sh
   cd weather-webapp
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173/` (or the port Vite runs on).

## 🔑 API Key Setup
This project uses OpenWeatherMap API. Replace `API_KEY` in `useWeather.js` with your own API key:
```javascript
const API_KEY = `your_api_key_here`;
```

## 🔄 How It Works
- The app fetches weather data from OpenWeatherMap API based on the city name entered by the user.
- React's **useState** and **useEffect** are used to manage state and fetch data.
- The `useWeather` custom hook handles API requests and provides loading, error, and result states.
- A simple UI displays weather information beautifully.

## 📝 Future Enhancements
- ⏳ Add loading animation
- 🎨 Improve UI with more weather icons
- 🌍 Allow users to search by GPS location
- 📈 Show a 5-day weather forecast

## 🏆 Contributing
Contributions are welcome! Feel free to fork this repo and submit a pull request.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

