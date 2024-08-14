// scripts.js
document.getElementById('copy-button').addEventListener('click', function() {
    const textToCopy = document.getElementById('copy-text').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });
  