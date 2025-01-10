<html>
<body>
<section id="Contact Us">
<div class="container">
<center><h1>Contact Us</h1></center>
<div class="row">

<div class="col-md-6">
<div class="form-group">
<form action="image.html" onsubmit="return check()" autocomplete="off">
<input type="text" class="form-control" id="usr" placeholder="Name">
</div>

<div class="form-group">
<input type="text" class="form-control" id="eml" placeholder="Email">
</div>

<div class="form-group">
<input type="text" class="form-control" id="phn" placeholder="Phone">
</div>

<div id="btn1"><button>Send Message</button></div>
</div>
<div class="col-md-6">
<textarea id="comment" rows="5" class="form-control"></textarea>

</div>
</div>
</div>
</div>

<script>
// Validate form input
        function validateForm() {
            // Clear previous errors
            document.getElementById('nameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('phoneError').textContent = '';

            // Get form field values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();

            let isValid = true;

            // Validate name
            if (name === '') {
                document.getElementById('nameError').textContent = 'Name is required';
                isValid = false;
            }

            // Validate email
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (email === '') {
                document.getElementById('emailError').textContent = 'Email is required';
                isValid = false;
            } else if (!emailPattern.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email';
                isValid = false;
            }

            // Validate phone number
            const phonePattern = /^[0-9]{10}$/; // Matches a 10-digit phone number
            if (phone === '') {
                document.getElementById('phoneError').textContent = 'Phone number is required';
                isValid = false;
            } else if (!phonePattern.test(phone)) {
                document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number';
                isValid = false;
            }

            // If form is valid, allow submission
            return isValid;
        }
</script>
</body>
</html>