const form = document.getElementById('registrationForm');
form.addEventListener('submit', function(event){
  event.preventDefault();
  if(!form.reportValidity()) return;
  const data = new FormData(form);
  const details = [
    '🐍 PYTHON CODING COURSE – REGISTRATION',
    '',
    'Name: ' + data.get('name'),
    'Age: ' + (data.get('age') || 'Not provided'),
    'District: ' + data.get('district'),
    'Place: ' + data.get('place'),
    'Contact No.: ' + data.get('phone'),
    'Email: ' + (data.get('email') || 'Not provided'),
    '',
    'I would like to register for the Python coding tutorial.'
  ].join('\n');
  const whatsappNumber = '918589900277';
  const url = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(details);
  window.open(url, '_blank', 'noopener,noreferrer');
});
