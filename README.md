# ToneAjuster

A modern React-based text tool that lets users adjust the tone of their writing (e.g., from formal to casual) using a 3x3 matrix picker. The tool integrates with the Mistral AI API for tone transformation and features undo/redo, a responsive UI, and a secure backend proxy.

---

## Features

- **Text Editor:** Write and edit your text in a clean, distraction-free editor.
- **Tone Picker:** Adjust the tone of your text using a 3x3 matrix (e.g., Professional, Casual, Concise, Expanded, etc.).
- **Mistral AI Integration:** Uses the [Mistral AI API](https://console.mistral.ai/) for high-quality tone rewriting.
- **Undo/Redo:** Easily revert or reapply tone changes.
- **Reset:** Restore your original text at any time.
- **Responsive UI:** Modern, visually appealing layout with smooth loading and error feedback.
- **Secure Backend:** API key is never exposed to the frontend; all requests are proxied through a lightweight Express backend.
- **Toast Notifications:** Get instant feedback when a tone is applied.

---

## Quick Start

### 1. **Clone the Repository**

```
git clone https://github.com/GnautSpace/TonePicker

cd TonePicker
```

### 2. **Set Up the Backend**

1. Go to the backend directory:
    ```sh
    cd backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in `/backend`:
    ```
    MISTRAL_API_KEY=your-mistral-api-key-here
    ```
    > **Note:** Get your free API key from [Mistral Console](https://console.mistral.ai/). You may need to verify your account with a phone number.
4. Start the backend server:
    ```sh
    npm run start
    ```
    The backend will run on port `3001` by default.

### 3. **Set Up the Frontend**

1. Open a new terminal and go to the frontend directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the frontend dev server:
    ```sh
    npm run dev
    ```
    The app will be available at the URL shown in your terminal (usually `http://localhost:5173`).

---

## Usage

- **Write or paste text** in the left editor panel.
- **Click "Adjust Tone"** in the right panel to open the tone picker.
- **Select a tone** from the 3x3 matrix. The text will be rewritten using Mistral AI.
- **Undo/Redo/Reset** using the buttons at the bottom.
- **Toast notifications** will confirm when a tone is applied.

---

## Project Structure

```
TonePicker/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── Editor.jsx
│   │   │   └── ToneMatrix.jsx
│   │   └── styles/
│   │       ├── App.css
│   │       └── ToneMatrix.css
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## Security

- **Never expose your Mistral API key in frontend code.**
- The backend proxies all requests to the Mistral API and injects the API key securely.

---

## Troubleshooting

- **API Unauthorized:** Double-check your `.env` in `/backend` and restart the backend server.
- **CORS/Proxy Issues:** The frontend uses Vite's proxy to forward `/api` requests to the backend. Make sure both servers are running.
- **Codespaces/Cloud IDE:** Use the provided Vite proxy config. 

---

## Customization

- **Styling:** Edit `App.css` and `ToneMatrix.css` for colors, gradients, and layout.
- **Tone Matrix:** You can adjust the tone options in `ToneMatrix.jsx` as needed.

---

## License

MIT

---

## Credits

- [Mistral AI](https://mistral.ai/) for the API.
- Inspired by Figma's "Adjust Tone" feature.

---

## Demo
[LIVE](https://tone-adjuster.vercel.app/)

---

## Contributing

Pull requests welcome! Please open an issue first to discuss major changes.
