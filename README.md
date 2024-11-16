# **WatchWise - AI-Powered Movie Discovery Platform**

WatchWise is a cutting-edge web application designed to revolutionize the way users discover and explore movies. Leveraging the power of TMDB and OpenAI APIs, it provides personalized movie recommendations, dynamic search functionality, and a visually appealing browsing experience.

---

## **Features**

### **Authentication**
- User **Sign Up** and **Sign In** with form validation.
- Redirects users to the Browse page post-authentication.
- Sign Out functionality with state management.

### **Movie Browsing**
- A comprehensive **Browse Page** featuring:
  - Movie trailers in the background (autoplay and mute).
  - Dynamic **Title and Description** for the main movie.
  - Categorized **Movie Lists**.
- **AI-Powered Recommendations**:
  - NetflixGPT Search Bar for personalized movie suggestions.
  - OpenAI integration for intelligent query handling.
- Embedded YouTube video player for trailers.

### **Dynamic Data Integration**
- Fetches real-time data from TMDB APIs:
  - Now playing movies.
  - Popular movies.
  - Movie trailers.
- Custom hooks for optimized API data fetching.

### **Responsive Design**
- Tailored user experience across devices using **TailwindCSS**.

### **Performance Enhancements**
- State management via Redux with **userSlice** and **movieSlice**.
- Memoization for optimized rendering.
- Centralized constants for hardcoded values.
- `.env` integration for secure API key management.

---

## **Tech Stack**
- **Frontend:** React, TailwindCSS
- **State Management:** Redux
- **Backend Integration:** Firebase
- **APIs:** TMDB, OpenAI
- **Deployment:** Firebase Hosting

---

## **Usage**
1. **Sign Up** or **Log In** to explore the platform.
2. Browse popular movies, view trailers, and get detailed movie information.
3. Use the **NetflixGPT Search Bar** to get AI-generated movie suggestions tailored to your preferences.
4. Enjoy a seamless movie discovery experience on any device.

---

## **Future Enhancements**
- Multi-language support for a global user base.
- Advanced filtering options (e.g., genre, rating, release year).
- User watchlist and favorites feature.
- Improved AI recommendations with user feedback loops.

---

## **Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.