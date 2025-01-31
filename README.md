# Node.js Express API with TypeScript

This is a simple Express API built with TypeScript that provides email, GitHub URL, and the current datetime in ISO 8601 format.

## Installation and Setup

1. Clone the repository:

   git clone https://github.com/abdul-codes/hngstage0task
   cd your-repo
  

2. Install dependencies:
   npm install

3. Create a `.env` file and specify the port (optional):
   PORT=3000

4. Start the server:
   
   npm run dev


## API Documentation

### Endpoint: `/info`

- Method: GET
- url: `http://localhost:3000/info`
- Request Parameters: None
- Response Format: json

### Response Example:

json
{
  "email": "your-email@example.com",
  "github_url": "https://github.com/your-github",
  "datetime": "2024-07-02T12:34:56.789Z"
}

## Example Usage

Using **cURL**:
curl -X GET http://localhost:3000/info



