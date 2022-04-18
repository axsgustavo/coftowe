function changeValueInput(inputId, operationSignal = '+' | '-') {
  const input = document.getElementById(`${inputId}`);
  const a = input.value;

  if(operationSignal === '+') {
    input.value = parseInt(input.value) + 1;
  } else if (operationSignal === '-' && input.value > 0) {
    input.value = parseInt(input.value) - 1;
  }
}