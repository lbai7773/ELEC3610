function showContent(page) {
  var content = document.getElementById("content");
  if (page === 'account') {
    content.innerHTML = `
      <div class="wrapper">
        <div class="main">
          <div class="container">
            <div class="card u-mb-48 u-mt-48">
              <h2 class="heading u-mb-24">Personal Details</h2>
              <form class="form" action="#">
                <!-- Personal Details Section -->
                <div class="row">
                  <div class="col-sm-6 u-pr-8--desktop">
                    <h3 class="h3">Personal Details</h3>
                    <div class="row u-mb-24">
                      <div class="col-sm-6 u-mb-24--mobile">
                        <label for="firstname">First Name</label>
                        <input type="text" id="firstname">
                      </div>
                      <div class="col-sm-6">
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname">
                      </div>
                    </div>
                    <div class="row u-mb-24">
                      <div class="col-sm-6 u-mb-24--mobile">
                        <label for="email">E-Mail</label>
                        <input type="email" id="email">
                      </div>
                      <div class="col-sm-6">
                        <label for="telephone">Telephone</label>
                        <input type="text" id="telephone">
                      </div>
                    </div>
                    <div class="row u-mb-24">
                      <div class="col-sm-6 u-mb-24--mobile">
                        <label for="fax">Fax</label>
                        <input type="text" id="fax">
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 u-pl-8--desktop">
                    <h3 class="h3">Change Password</h3>
                    <div class="row u-mb-24">
                      <div class="col-sm-12">
                        <label for="oldpwd">Old Password</label>
                        <input type="password" id="oldpwd">
                      </div>
                    </div>
                    <div class="row u-mb-24">
                      <div class="col-sm-12">
                        <label for="newpwd">New Password</label>
                        <input type="password" id="newpwd">
                      </div>
                    </div>
                    <div class="row u-mb-24">
                      <div class="col-sm-12">
                        <label for="cf-newpwd">New Password Confirm</label>
                        <input type="password" id="cf-newpwd">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Newsletter Subscription Section -->
                <h3 class="h3 u-mb-24">Newsletter Subscription</h3>
                <div class="row u-mb-24">
                  <div class="col-sm-6 u-mb-24--mobile">
                    <label for="newsletter">Subscribe</label>
                    <div>
                      <input type="radio" id="newsletter-yes" name="newsletter" value="Yes">
                      <label for="newsletter-yes">Yes</label>
                    </div>
                    <div>
                      <input type="radio" id="newsletter-no" name="newsletter" value="No">
                      <label for="newsletter-no">No</label>
                    </div>
                  </div>
                </div>
                <!-- Payment Address Section -->
                <h3 class="h3 u-mb-24">Payment Address</h3>
                <div class="row u-mb-24">
                  <div class="col-sm-6 u-pr-8--desktop">
                    <label for="payment-company">Company</label>
                    <input type="text" id="payment-company">
                    <label for="payment-address1">Address 1</label>
                    <input type="text" id="payment-address1">
                    <label for="payment-city">City</label>
                    <input type="text" id="payment-city">
                    <label for="payment-postcode">Post Code</label>
                    <input type="text" id="payment-postcode">
                  </div>
                  <div class="col-sm-6 u-pl-8--desktop">
                    <label for="payment-country">Country</label>
                    <select id="payment-country">
                      <option value="">--- Please Select ---</option>
                      <!-- Add country options here -->
                    </select>
                    <label for="payment-state">Region / State</label>
                    <select id="payment-state">
                      <option value="">--- Please Select ---</option>
                      <!-- Add state options here -->
                    </select>
                  </div>
                </div>
                <!-- Shipping Address Section -->
                <h3 class="h3 u-mb-24">Shipping Address</h3>
                <div class="row u-mb-24">
                  <div class="col-sm-6 u-pr-8--desktop">
                    <label for="shipping-company">Company</label>
                    <input type="text" id="shipping-company">
                    <label for="shipping-address1">Address 1</label>
                    <input type="text" id="shipping-address1">
                    <label for="shipping-city">City</label>
                    <input type="text" id="shipping-city">
                    <label for="shipping-postcode">Post Code</label>
                    <input type="text" id="shipping-postcode">
                  </div>
                  <div class="col-sm-6 u-pl-8--desktop">
                    <label for="shipping-country">Country</label>
                    <select id="shipping-country">
                      <option value="">--- Please Select ---</option>
                      <!-- Add country options here -->
                    </select>
                    <label for="shipping-state">Region / State</label>
                    <select id="shipping-state">
                      <option value="">--- Please Select ---</option>
                      <!-- Add state options here -->
                    </select>
                  </div>
                </div>
                <!-- Save Changes Button -->
                <div class="row">
                  <div class="col-sm-6 u-mb-24--mobile"></div>
                  <div class="col-sm-6 u-text-right">
                    <input class="btn btn--primary" type="submit" value="SAVE CHANGES">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>`;
  } else if (page === 'order') {
    content.innerHTML = `
      <div class="order-history">
        <h2>Order History</h2>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Order ID</th>
              <th>Qty</th>
              <th>Status</th>
              <th>Date Added</th>
              <th>Total</th>
              <th>Add Review</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="img/purelybyron.jpg" alt="Product Image" style="max-width: 100px; max-height: 100px;"></td>
              <td>Night Cream</td>
              <td>#214521</td>
              <td>20</td>
              <td>Delivered</td>
              <td>21/08/2016</td>
              <td>$22.00</td>
              <td><button onclick="addReview('#214521')">Edit Review</button></td>
            </tr>
            <tr>
              <td><img src="img/purelybyron.jpg" alt="Product Image" style="max-width: 100px; max-height: 100px;"></td>
              <td>Day Cream</td>
              <td>#121286</td>
              <td>25</td>
              <td>Delivered</td>
              <td>15/09/2016</td>
              <td>$35.50</td>
              <td><button onclick="addReview('#121286')">EditReview</button></td>
            </tr>
            <tr>
              <td><img src="img/purelybyron.jpg" alt="Product Image" style="max-width: 100px; max-height: 100px;"></td>
              <td>Serum</td>
              <td>#123456</td>
              <td>10</td>
              <td>Delivered</td>
              <td>15/010/2016</td>
              <td>$10.50</td>
              <td><button onclick="addReview('#123456')">Edit Review</button></td>
            </tr>
            <tr>
              <td><img src="img/purelybyron.jpg" alt="Product Image" style="max-width: 100px; max-height: 100px;"></td>
              <td>Night Cream</td>
              <td>#123621</td>
              <td>20</td>
              <td>Delivered</td>
              <td>21/11/2016</td>
              <td>$22.00</td>
              <td><button onclick="addReview('#123621')">Add Review</button></td>
            </tr>
            <tr>
              <td><img src="img/purelybyron.jpg" alt="Product Image" style="max-width: 100px; max-height: 100px;"></td>
              <td>Day Cream</td>
              <td>#124486</td>
              <td>25</td>
              <td>Shipped</td>
              <td>15/12/2016</td>
              <td>$35.50</td>
              <td><button onclick="addReview('#124486')">Add Review</button></td>
            </tr>
            <tr>
              <td><img src="img/purelybyron.jpg" alt="Product Image" style="max-width: 100px; max-height: 100px;"></td>
              <td>Serum</td>
              <td>#123543</td>
              <td>10</td>
              <td>Order Placed</td>
              <td>15/01/2017</td>
              <td>$10.50</td>
              <td><button onclick="addReview('#123543')">Add Review</button></td>
            </tr>
          </tbody>
        </table>
      </div>`;
  } else if (page === 'assessment') {
    content.innerHTML = `
      <div class="assessment-form">
        <h2>Skin Assessment Questionnaire</h2>
        <form id="assessmentForm">
		
          <!-- Camera Section -->
			<div class="camera-section">
				<h3>Take a picture of your skin:</h3>
			    <div class="camera-box" style="width: 400px; height: 300px; border: 1px solid black; margin: 0 auto;"></div>
			    <!-- Button for taking a picture -->
			    <button id="takePictureButton" type="button" style="display: block; margin: 20px auto;">Take Picture</button>
			</div>
	      
          <!-- Skin Type -->
          <h3>Skin Type</h3>
			<label for="skinFeel">How does your skin feel in the morning, before applying any products?</label><br>
			<select id="skinFeel" name="skinFeel">
			  <option value="dry">Dry</option>
			  <option value="oily">Oily</option>
			  <option value="combination">Combination</option>
			  <option value="normal">Normal</option>
			</select><br>
			<label for="tightness">Do you experience any tightness or discomfort after cleansing your face?</label><br>
			<select id="tightness" name="tightness">
			  <option value="yes">Yes</option>
			  <option value="no">No</option>
			</select><br>
			<label for="weatherReaction">How does your skin react to different weather conditions?</label><br>
			<select id="weatherReaction" name="weatherReaction">
			  <option value="dry">Dry</option>
			  <option value="oily">Oily</option>
			  <option value="normal">Normal</option>
			</select><br>
			<label for="tZone">Do you notice any shine or oiliness on your T-zone?</label><br>
			<select id="tZone" name="tZone">
			  <option value="yes">Yes</option>
			  <option value="no">No</option>
			</select><br>
			<label for="breakouts">Do you experience breakouts or acne regularly?</label><br>
			<select id="breakouts" name="breakouts">
			  <option value="yes">Yes</option>
			  <option value="no">No</option>
			</select><br>
          
          <!-- Skin Sensitivity -->
          <h3>Skin Sensitivity</h3>
          <label for="skinSensitive">Does your skin feel sensitive or irritated when using certain skincare products or cosmetics?</label><br>
          <select id="skinSensitive" name="skinSensitive">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br>
          <label for="redness">Do you experience redness, itching, or burning sensations after applying skincare products?</label><br>
          <select id="redness" name="redness">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br>

          <!-- Skin Concerns -->
          <h3>Skin Concerns</h3>
          <label for="primaryConcerns">What are your primary skin concerns?</label><br>
          <select id="primaryConcerns" name="primaryConcerns">
            <option value="acne">Acne</option>
            <option value="dryness">Dryness</option>
            <option value="oiliness">Oiliness</option>
            <option value="aging">Aging</option>
            <option value="pigmentation">Pigmentation</option>
            <option value="sensitivity">Sensitivity</option>
          </select><br>
          <label for="specificConcerns">Do you have any specific areas of concern?</label><br>
          <select id="specificConcerns" name="specificConcerns">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br>
          <label for="currentIssues">Are you currently experiencing any skin issues or conditions?</label><br>
          <select id="currentIssues" name="currentIssues">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br>
          <label for="outdoorTime">Do you spend a lot of time outdoors?</label><br>
          <select id="outdoorTime" name="outdoorTime">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br>

          <!-- Lifestyle and Habits -->
          <h3>Lifestyle and Habits</h3>
          <label for="skincareRoutine">What is your daily skincare routine like?</label><br>
          <select id="skincareRoutine" name="skincareRoutine">
            <option value="basic">Basic (cleansing, moisturizing)</option>
            <option value="extensive">Extensive (cleansing, toning, moisturizing, etc.)</option>
          </select><br>
          <label for="waterIntake">How much water do you typically drink in a day?</label><br>
          <select id="waterIntake" name="waterIntake">
            <option value="lessThan1L">Less than 1 liter</option>
            <option value="1to2L">1 to 2 liters</option>
            <option value="moreThan2L">More than 2 liters</option>
          </select><br>
          <label for="smoking">Do you smoke or spend time in environments with high levels of pollution?</label><br>
          <select id="smoking" name="smoking">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br>
          <label for="exfoliation">How often do you exfoliate your skin?</label><br>
          <select id="exfoliation" name="exfoliation">
            <option value="never">Never</option>
            <option value="onceAWeek">Once a week</option>
            <option value="2to3TimesAWeek">2 to 3 times a week</option>
            <option value="daily">Daily</option>
          </select><br>

          <!-- Product Preferences -->
          <h3>Product Preferences</h3>
          <label for="fragranceFree">Are you looking for skincare products that are fragrance-free, natural, or organic?</label><br>
          <select id="fragranceFree" name="fragranceFree">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br>
          <label for="avoidIngredients">Do you have any specific ingredients that you prefer to avoid?</label><br>
          <select id="avoidIngredients" name="avoidIngredients">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br>
          <label for="tryNew">Are you open to trying new skincare ingredients or technologies?</label><br>
          <select id="tryNew" name="tryNew">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br>
          

          <!-- Button to Complete Assessment -->
          <button type="button" onclick="completeAssessment(event)">Complete Assessment</button>
        </form>
      </div>`;
  } else if (page === 'recommended') {
    content.innerHTML = `
        <style>
            /* Float four columns side by side */
            .column {
                float: left;
                width: 33%;
                padding: 0 10px;
            }

            /* Remove extra left and right margins, due to padding */
            .row {margin: 0 -5px;}

            /* Clear floats after the columns */
            .row:after {
                content: "";
                display: table;
                clear: both;
            }
        </style>
        <h2>Based on your Sensitive skin type and Aging concerns, here is a list of products matching your needs:</h2>
        <section class="w3-row-padding w3-center w3-light-grey">
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="img/purelybyron.jpg" alt="Product name and link" style="width:100%">
                        <h3>Purely Byron</h3>
                        <p class="price">$1.99</p>
                        <p>Some text about the product..</p>
                        <p><a href="product.html"><button>View detail</button></a></p>
                        <p><a href="shoppingcart.html"><button>Add to Cart</button></a></p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <img src="img/purelybyron.jpg" alt="Product name and link" style="width:100%">
                        <h3>Purely Byron</h3>
                        <p class="price">$1.99</p>
                        <p>Some text about the product..</p>
                        <p><a href="product.html"><button>View detail</button></a></p>
                        <p><a href="shoppingcart.html"><button>Add to Cart</button></a></p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <img src="img/purelybyron.jpg" alt="Product name and link" style="width:100%">
                        <h3>Purely Byron</h3>
                        <p class="price">$1.99</p>
                        <p>Some text about the product..</p>
                        <p><a href="product.html"><button>View detail</button></a></p>
                        <p><a href="shoppingcart.html"><button>Add to Cart</button></a></p>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <img src="img/purelybyron.jpg" alt="Product name and link" style="width:100%">
                        <h3>Purely Byron</h3>
                        <p class="price">$1.99</p>
                        <p>Some text about the product..</p>
                        <p><a href="product.html"><button>View detail</button></a></p>
                        <p><a href="shoppingcart.html"><button>Add to Cart</button></a></p>
                    </div>
                </div>
            </div>
        </section>
    `;
}
  // Check if all fields are filled before enabling the Complete Assessment button
  var assessmentForm = document.getElementById("assessmentForm");
  assessmentForm.addEventListener("input", function() {
    var inputs = assessmentForm.querySelectorAll("input, select");
    var allFilled = true;
    inputs.forEach(function(input) {
      if (!input.value) {
        allFilled = false;
      }
    });
    var completeButton = document.getElementById("completeAssessmentButton");
    if (allFilled) {
      completeButton.disabled = false;
    } else {
      completeButton.disabled = true;
    }
  });
}

function completeAssessment() {
  var page = 'recommended';
  showContent(page);
}

function logout() {
  // Perform logout functionality
  alert("Logged out successfully.")
  // Redirect to home page
  window.location.href = "home.html";
};