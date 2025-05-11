type Currency = "USD" | "EUR" | "UAH";

interface ConvertCurrency {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertCurrency): void {
  console.log(`Converting ${amount} to ${currency}`);
}

// Завдання:

// Типізуйте параметри функції дозволивши властивості currency
// лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.
