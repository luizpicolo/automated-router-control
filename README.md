# Automated Router Control

This is a project to automate the control of MY ROUTER using Puppeteer and Express. This code should be adapted if you want to use it with other devices.

## Features

- Power on the router: The "Turn On" button sends a request to the `/turnon` route, executing the code to power on the router.
- Power off the router: The "Turn Off" button sends a request to the `/turnoff` route, executing the code to power off the router.

## Prerequisites

- Node.js (v12 or higher)

## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/automated-router-control.git
```

2. Install the dependencies:

```
cd automated-router-control
npm install
```

## Configuration

1. Create a `.env` file in the project root with the following environment variables:

```
URL=http://192.168.0.1/tcpipwan.htm
USERNAME=
PASSWORD=
```

2. Make sure to adjust the information in the `.env` file according to your router.

## Usage

1. Start the server:

```
npm start
```

2. Access the application in your browser at `http://localhost:3000`.

3. Click on the "Turn On" or "Turn Off" button to control the router.

## Contributing

Contributions are welcome! If you find any issues, have suggestions, or want to add a new feature, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).