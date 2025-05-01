# Infra-Optimize-Dashboard
Optimize, track, and manage infrastructure documents from Cloud.

Cloud Platform
We are using Cloudinary — a cloud platform for media asset storage and delivery.
In this project:
  All tender and infrastructure documents (ZIPs, DWGs, PDFs, etc.) are stored in Cloudinary’s raw resource storage.
  The backend uses the Cloudinary Admin API to dynamically list all files.
  The frontend dashboard fetches and displays this list, allowing teams to interact with the live document set.
  You only need a valid Cloudinary account, cloud name, and API key/secret configured in the backend.


STEPS TO EXECUTE ON LINUX AND WINDOWS:

## ⚙ Prerequisites to be installed 

- Node.js 18+ installed  
- NPM installed

## ✅ Windows Steps
Install prerequisites software packages before execution
1️⃣ Download Node.js .msi installer from https://nodejs.org/en
2️⃣ Run the installer → it automatically installs both Node.js + NPM

1. **Open Command Prompt**  
   → Press `Win + R`, type `cmd`, press Enter

2. **Go to project folder**  
   cd path\to\cloudinary_dashboard_infra_optimize_1


3. **Install dependencies**  
   npm install express axios

4. **Start the server**  
   start_server.bat


5. **Open the dashboard**  
   → Double-click `index.html` or open it in a browser

---

## ✅ Linux Steps

1. **Open Terminal**  
   → Press `Ctrl + Alt + T`

2. **Go to project folder**  
   cd /path/to/cloudinary_dashboard_infra_optimize_1

3. **Make start script executable**  
   chmod +x start_server.sh

4. **Install dependencies**  
   npm install express axios

5. **Start the server**  
   ./start_server.sh

6. **Open the dashboard**  
   → In a browser, go to:  
   http://localhost:3000/infra


