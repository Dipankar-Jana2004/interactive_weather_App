export function showAlert(msg, alertBox) {
  alertBox.textContent = msg;
  alertBox.classList.remove('hidden');
  setTimeout(() => alertBox.classList.add('hidden'), 2000);
}
