<h1>Find yourself and check-in</h1>

<p>
	<label for "individual-finder-first-name-txtbox">First Name:</label><br>
	<input id="individual-finder-first-name-txtbox"><br>
	<label for "individual-finder-last-name-txtbox">Last Name:</label><br>
	<input id="individual-finder-last-name-txtbox"><br>
	<label for "individual-finder-dob-datepicker">Date of Birth:</label><br>
	<input id="individual-finder-dob-datepicker">
</p>

<div id="individual-finder-court-ordered-section" class="hidden">
	<p>
	  <label for "individual-finder-court-order-code-txtbox">Court Order Verification Code:</label><br>
	  <input id="individual-finder-court-order-code-txtbox" type=password><br>
	</p>
</div>

<div id="individual-finder-record-found" class="hidden">
	<p>
	  Record found.
	</p>
</div>

<div id="individual-finder-cannot-find-user" class="hidden">
	<div>
	  We were unable to find you, please make sure your information is correct.
	</div>
	<div>
	  Or click the button below to create NC Food Bank account.
	</div>
	<button id="individual-finder-create-account-btn" class="btn btn-large btn-info">Create Account</button>
	<br>
	<br>
</div>
<button id="individual-finder-find-btn" class="btn btn-large btn-warning">Find</button>
<button id="individual-finder-check-in-btn" class="btn btn-large btn-success" disabled>Check-In</button>
<button id="individual-finder-start-over-btn" class="btn btn-large btn-danger">Start Over</button>