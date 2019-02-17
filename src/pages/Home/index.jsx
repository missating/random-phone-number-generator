// react libraries
import React, { Component } from 'react';

// third party libraries
import { connect } from 'react-redux';
import toastr from 'toastr';
import FileSaver from 'file-saver';

// actions 
import { generatePhoneNumbers, sortPhoneNumbersAscending, sortPhoneNumbersDescending } from '../../actions/phoneNumbersAction';

// components
import Button from '../../components/Button';
import DisplayPhoneNumbers from "../../components/DisplayPhoneNumbers";
import Operations from '../../components/Operations';

// styles
import './Home.css';

export class Home extends Component {
  state = {
    generatingValue: '',
    currentPage: 1,
    hasGeneratedNumbers: false,
  }

  onChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ generatingValue: inputValue, hasGeneratedNumbers: true });
  }

  onAddGeneratingValue = () => {
    let arr = []
    const { generatingValue } = this.state;
    const numberLength = 9;
    while (arr.length < generatingValue) {
      const createdPhoneNumber = `0${Math.floor(Math.pow(10, numberLength - 1) + Math.random() * 9 * Math.pow(10, numberLength - 1))}`;
      arr.push({ randomPhoneNumber: createdPhoneNumber })
    }
    toastr.options = {
      closeButton: true,
      extendedTimeOut: '1000',
      positionclassName: 'toast-bottom-right',
      hideMethod: 'fadeOut'
    };
    toastr.success('Phone Numbers Successfully Generated');
    this.props.generatePhoneNumbers(arr);
  }

  onDownloadPhoneNumbers = () => {
    const phoneNumbers = this.props.phoneNumbers.map(phoneNumber => phoneNumber.randomPhoneNumber);
    const blob = new Blob([phoneNumbers], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "PhoneNumbers.txt")
    toastr.options = {
      closeButton: true,
      extendedTimeOut: '1000',
      positionclassName: 'toast-bottom-right',
      hideMethod: 'fadeOut'
    };
    toastr.success('Phone Numbers Successfully Downloaded');
  }

  onSortPhoneNumbers = (event) => {
    const optionValue = event.target.value;
    if (optionValue === "Ascending") {
      this.props.sortPhoneNumbersAscending()
    } else {
      this.props.sortPhoneNumbersDescending()
    }
  }

  render() {
    return (
      <div className="home__container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Phone Number Generator</a> {/* eslint-disable-line */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {
                this.props.phoneNumbers.length > 1 && (
                  <div className="select-sort">
                    <select onChange={this.onSortPhoneNumbers}>
                      <option>Sort By...</option>
                      <option value="Ascending">Ascending</option>
                      <option value="Descending">Descending</option>
                    </select>
                  </div>
                )
              }
            </ul>
            <div className="form-inline">
              <input
                value={this.state.generatingValue}
                onChange={this.onChange}
                className="form-control mr-sm-2"
                type="number"
                placeholder="Input a number"
              />
              <Button
                name="Generate"
                className="Home__btn"
                onClick={this.onAddGeneratingValue}
                disabled={this.state.generatingValue.trim() === ''}
              />
              <Button
                name="Download"
                className="ml-3"
                onClick={this.onDownloadPhoneNumbers}
                disabled={this.props.phoneNumbers.length === 0}
              />
            </div>
          </div>
        </nav>
        <div>
          {this.props.phoneNumbers.length > 2 && <Operations phoneNumbers={this.props.phoneNumbers} />}
          <DisplayPhoneNumbers
            phoneNumbers={this.props.phoneNumbers}
            hasGeneratedNumbers={this.state.hasGeneratedNumbers}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  phoneNumbers: state.phoneNumbers.data
})

export default connect(mapStateToProps, { generatePhoneNumbers, sortPhoneNumbersAscending, sortPhoneNumbersDescending })(Home);
