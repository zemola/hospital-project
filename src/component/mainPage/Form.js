import "./Form.css";
import React from "react";

function FORM() {
  return (
    <div className="container">
      <div className="image">
        <img src="#logo" alt="Company logo" />
        <p>
          This is to test the current project and see our level of developemt{" "}
        </p>
      </div>
      <div className="form-container">
        <div>
          <header>BOOK AN APPOINTMENT</header>
        </div>
        <form className="form">
            <div className="name-group">
            <div className="input-field">
              <label>First Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="First Name *"
                value=""
              />
            </div>
            <div className="input-field">
              <label>Last Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Last Name *"
                value=""
              />
            </div>
            </div>

            <div className="name-group">
            <div className="input-field">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Your Email *"
                value=""
              />
            </div>
            <div className="input-field">
            <label>Phone Number</label>
            <div class="number">
              <input
                type="text"
                minlength="11"
                maxlength="11"
                name="txtEmpPhone"
                class="form-control"
                placeholder="Your Phone *"
                value=""
              />
            </div>
            </div>
            </div>

          <div class="name-group">
            <select class="form-control">
              <option class="hidden" selected disabled>
                Please select Doctor
              </option>
              <option>General Physician</option>
              <option>Gynacologist</option>
              <option>Optomologis</option>
              <option>Surgeon</option>
              <option>Dentist</option>
              <option>Orthopedic Doctor</option>
              <option>Padatric</option>
            </select>

            <select class="form-control">
              <option class="hidden" selected disabled>
                Select Purpose/...ment
              </option>
              <option>General Ilness</option>
              <option>Diabetes</option>
              <option>Athma</option>
              <option>Others</option>
            </select>
          </div>
          <div className="submitBtn">
          <input type="submit" class="submitBtn" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default FORM;
