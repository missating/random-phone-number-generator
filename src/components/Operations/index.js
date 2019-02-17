// react libraries
import React from 'react';

const Operations = (props) => {
  const phoneNumbers = props.phoneNumbers.length > 0 ? props.phoneNumbers.map(phoneNumber => phoneNumber.randomPhoneNumber) : 0;
  const maxNumber = phoneNumbers === 0 ? 0 : Math.max(...phoneNumbers);
  const minNumber = phoneNumbers === 0 ? 0 : Math.min(...phoneNumbers);
  
  return (
    <div className="minimax-container">
      <div class="card" style={{ width: "18rem" }}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Maximum Generated Phone Number: {phoneNumbers === 0 ? '000' : `0${maxNumber}`}
          </li>
          <li class="list-group-item">
            Minimum Generated Phone Number: {phoneNumbers === 0 ? '000' : `0${minNumber}`}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Operations;
