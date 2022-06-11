import "./Form.css";
import React from "react";

function FORM() {
  return (
    <div>
      <div>
        <img src="#logo" alt="Company logo" />
        <p>
          This is to test the current project and see our level of developemt{" "}
        </p>
      </div>
      <div>
        <form>
          <div>
            <h3>BOOK AN APPOINTMENT</h3>
          </div>
          <div>
            <div className="firstname">
              <input
                type="text"
                class="form-control"
                placeholder="First Name *"
                value=""
              />
            </div>
            <div className="lastname">
              <input
                type="text"
                class="form-control"
                placeholder="Last Name *"
                value=""
              />
            </div>
            <div className="email">
              <input
                type="email"
                class="form-control"
                placeholder="Your Email *"
                value=""
              />
            </div>
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
          
          <div class="form-group">
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
          </div>

          <div class="form-group">
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

          <input type="submit" class="submitBtn"  value="Submit"/>
        </form>
      </div>
    </div>
  );
}

export default FORM;
