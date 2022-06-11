import 'main.css';
import React from 'react'

 function main() {
  return (
    <div>
      <div>
        <img src='#logo' alt='Company logo'/>
        <p>This is to test the current project and see our level of developemt </p>
      </div>
      <div>
        <form>
          <div><h3>BOOK AN APPOINTMENT</h3></div>
        <div>
        <div className='firstname'>
        <input type="text" class="form-control" placeholder="First Name *" value="" />
        </div>
        <div className='lastname'>
        <input type="text" class="form-control" placeholder="Last Name *" value="" />
        </div>
        <div className='email'>
        <input type="email" class="form-control" placeholder="Your Email *" value="" />
        </div>
        <div class="number">
        <input type="text" minlength="11" maxlength="11" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value="" />
        </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default main;