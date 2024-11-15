# Invoice PDF Generator - NestJS Application

This is a NestJS application that generates PDF invoices by rendering data into an `.odt` template and converting it into a PDF format. The app uses the **Carbone** library for template rendering and **LibreOffice** for converting `.odt` files to `.pdf`.

## Features

- Render dynamic content in an `.odt` template using the **Carbone** library.
- Convert `.odt` templates into `.pdf` format using **LibreOffice**.
- Generate invoices with data like invoice number, date, customer name, items, and totals.
- Easy to customize templates and data.

## Prerequisites

Before running this project, ensure you have the following installed on your system:

- **Node.js** (preferably v18+)
- **LibreOffice** (for `.odt` to `.pdf` conversion)
- **NestJS** (for the backend framework)

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/shams-qtrams/InvoiceGen.git
    ```

2. Navigate to the project directory:

    ```bash
    cd InvoiceGen
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Install **LibreOffice** for file conversion:
    - On **Windows**: Download and install from the [LibreOffice website](https://www.libreoffice.org/download/download/).
    - On **Linux** (Ubuntu/Debian):

      ```bash
      sudo apt install libreoffice
      ```

    - On **Mac**: You can install using Homebrew:

      ```bash
      brew install --cask libreoffice
      ```

## Configuration

### Template File

The app uses an .odt file as a template. This file can contain placeholders like `{d.invoiceNumber}`, `{d.date}`, `{d.customerName}`, etc., which will be dynamically replaced with the data provided to the application.


## Example Data
The backend expects a data object with the structure like this:
```bash
{
  "invoiceNumber": "INV-1001",
  "date": "2024-11-14",
  "customerName": "John Doe",
  "items": [
    {
      "description": "Item 1",
      "quantity": 2,
      "unitPrice": 50,
      "total": 100
    },
    {
      "description": "Item 2",
      "quantity": 3,
      "unitPrice": 30,
      "total": 90
    }
  ],
  "subtotal": 190,
  "tax": 19,
  "total": 209
}
```

## Usage
### 1. Start the NestJS application:
```bash
npm run start
```

### Send a POST request
to generate an invoice (or other document). Example using Postman:

URL: http://localhost:3000/documents/generate-invoice

```bash
{
  "invoiceNumber": "INV-1001",
  "date": "2024-11-14",
  "customerName": "John Doe",
  "items": [
    {
      "description": "Item 1",
      "quantity": 2,
      "unitPrice": 50,
      "total": 100
    },
    {
      "description": "Item 2",
      "quantity": 3,
      "unitPrice": 30,
      "total": 90
    }
  ],
  "subtotal": 190,
  "tax": 19,
  "total": 209
}
```
The server will generate a `.pdf` file from the .odt template and return it as a response. The `.pdf` file will be saved in the output directory.

## Error Handling
If any errors occur during the template rendering or conversion process, appropriate error messages will be logged and returned to the user.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

