# Kawashimo

A simple vanilla JavaScript project hosted on Azure Static Web Apps.

## 📁 Folder Structure

This project follows the standard Azure Static Web Apps folder structure:

```
kawashimo/
├── index.html              # Main HTML file
├── styles.css              # Stylesheet
├── script.js               # JavaScript functionality
├── images/                 # Image assets
│   └── placeholder.svg
├── staticwebapp.config.json # Azure Static Web Apps configuration
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml # Deployment workflow
└── README.md
```

## 🚀 Deployment to Azure Static Web Apps

### Prerequisites

1. An Azure account (create one at https://azure.microsoft.com/free/)
2. A GitHub account

### Setup Steps

1. **Create an Azure Static Web App**
   - Go to the Azure Portal (https://portal.azure.com)
   - Click "Create a resource"
   - Search for "Static Web App" and select it
   - Click "Create"
   - Fill in the details:
     - Subscription: Select your subscription
     - Resource Group: Create new or use existing
     - Name: Choose a unique name for your app
     - Region: Select a region close to you
     - Deployment source: GitHub
   - Sign in to GitHub when prompted
   - Select this repository and branch (main)
   - Build Presets: Custom
   - App location: `/`
   - Api location: (leave empty)
   - Output location: (leave empty)
   - Click "Review + create" then "Create"

2. **Configure GitHub Secrets**
   - Azure will automatically create a GitHub Actions workflow
   - It will also add a secret `AZURE_STATIC_WEB_APPS_API_TOKEN` to your repository
   - You can verify this in your repository Settings > Secrets and variables > Actions

3. **Automatic Deployment**
   - Every push to the `main` branch will trigger an automatic deployment
   - Pull requests will create staging environments
   - Check the Actions tab in your GitHub repository to monitor deployments

### Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open http://localhost:8000 in your browser.

## 📝 Features

- ✅ Pure vanilla JavaScript (no frameworks)
- ✅ Responsive design
- ✅ Azure Static Web Apps ready
- ✅ GitHub Actions CI/CD
- ✅ Security headers configured
- ✅ Clean folder structure

## 🛠️ Configuration

The `staticwebapp.config.json` file includes:
- Route configuration
- Navigation fallback for single-page apps
- Security headers
- MIME type mappings

## 📚 Learn More

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps/)
- [GitHub Actions Documentation](https://docs.github.com/actions)

## 📄 License

This project is open source and available under the MIT License.