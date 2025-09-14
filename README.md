# 🌤️ NimbuS - Weather Application

[![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-purple?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-teal?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-green?logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![OpenWeather API](https://img.shields.io/badge/OpenWeather_API-2.5-orange?logo=openweathermap&logoColor=white)](https://openweathermap.org/api)

A modern, responsive weather application built with React and Express.js that provides real-time weather information for cities worldwide. Features a beautiful animated Earth background and comprehensive weather data display.

## ✨ Features

- 🌍 **Real-time Weather Data** - Get current weather conditions for any city worldwide
- 🎨 **Modern UI/UX** - Beautiful animated Earth background with glassmorphism design
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🔍 **City Search** - Search for weather information by city name
- 📊 **Comprehensive Data** - Temperature, humidity, wind speed, visibility, pressure, and cloud cover
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **Live Status** - Real-time updates with live status indicator

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library
- **Vite 7.1.2** - Fast build tool and dev server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **ReactJS Popup** - Modal and popup components

### Backend
- **Express.js 5.1.0** - Web application framework
- **Axios** - HTTP client for API requests
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### APIs
- **OpenWeather API** - Weather data provider

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OpenWeather API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-application.git
   cd weather-application
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the backend directory:
   ```env
   OPENWEATHER_API_KEY=your_openweather_api_key_here
   PORT=5000
   ```

   Get your free API key from [OpenWeather](https://openweathermap.org/api)

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The server will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
weather-application/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx/
│   │   │   └── Footer/
│   │   ├── pages/
│   │   │   └── HeroPage/
│   │   ├── apis/
│   │   │   └── weather.js
│   │   ├── assets/
│   │   │   └── earth-rotating.mp4
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── globals.css
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── index.js
│   ├── package.json
│   └── .env
└── README.md
```

## 🎯 Usage

1. **Search for Weather**: Type any city name in the search bar and press Enter
2. **View Weather Data**: The application displays:
   - Current temperature and "feels like" temperature
   - Weather description and location
   - Humidity percentage
   - Wind speed in m/s
   - Visibility in kilometers
   - Atmospheric pressure in hPa
   - Cloud cover percentage
3. **Real-time Updates**: The status indicator shows when the data was last updated

## 🌐 API Endpoints

### Backend API

- `GET /weather?city={cityName}` - Fetch weather data for a specific city

**Example:**
```bash
curl "http://localhost:5000/weather?city=London"
```

## 🎨 Design Features

- **Animated Background**: Rotating Earth video background
- **Glassmorphism UI**: Transparent cards with blur effects
- **Color-coded Metrics**: Different colors for different weather parameters
- **Responsive Grid**: Adaptive layout for various screen sizes
- **Live Status Indicator**: Real-time update timestamp

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🌍 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to your hosting platform

### Backend Deployment (Render/Heroku)
1. Ensure your `.env` file is configured with production variables
2. Deploy the backend directory to your hosting platform

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**J R Kokatam**
- Email: [jrkokatam.09@gmail.com](mailto:jrkokatam.09@gmail.com)





---

⭐ **Star this repository if you found it helpful!**