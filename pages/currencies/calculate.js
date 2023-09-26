function toDollar(inputElement, resultElement, usdRate) {
  const inputValue = parseFloat(inputElement.value);
  if (!isNaN(inputValue)) {
    const result = inputValue * usdRate;
    resultElement.innerHTML = `\$${result}`;
  } else {
    // Handle the case when the input is not a valid number.
    resultElement.innerHTML = "Invalid input. Please enter a valid number.";
  }
}
