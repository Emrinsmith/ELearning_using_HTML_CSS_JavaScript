
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}




document.getElementById('submitBtn').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const LastName = document.getElementById('LastName').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const education = document.getElementById('education').value;
  const phonenumber = document.getElementById('phonenumber').value;
  const course = document.getElementById('course').value;
  const address = document.getElementById('address').value;
  const district = document.getElementById('district').value;
  const state = document.getElementById('state').value;
  

  if (name && LastName && email && date && education && phonenumber && course && address && district && state) {        
    const forming = JSON.parse(localStorage.getItem('forming')) || [];
    forming.push({ name, LastName, email, date, education, phonenumber, course, address, district,state });
    localStorage.setItem('forming', JSON.stringify(forming));
    alert('form added successfully!');
    document.getElementById('name').value = '';
    document.getElementById('LastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('date').value = '';
    document.getElementById('education').value = '';
    document.getElementById('phonenumber').value = '';
    document.getElementById('course').value = '';
    document.getElementById('address').value = '';
    document.getElementById('district').value = '';
    document.getElementById('state').value = '';
  } else {
    alert('Please fill in all fields!');
  }
});