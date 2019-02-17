import React from 'react';
import Pagination from '../Pagination';

class DisplayPhoneNumbers extends React.Component {
  state = {
    paginatedPhoneNumbers: {},
    generatedPhoneNumbers: [],
    totalPages: 0,
    currentPage: 1,
    phoneNumbersPerPage: 10
  }

  static getPhoneNumbers = (phoneNumbers, page, phoneNumbersPerPage) => {
    const offset = (page - 1) * phoneNumbersPerPage;

    const paginatedPhoneNumbers = phoneNumbers.slice(offset).slice(0, phoneNumbersPerPage);
    const totalPages = Math.ceil(phoneNumbers.length / phoneNumbersPerPage);

    const items = {
      page,
      phoneNumbersPerPage,
      totalPages,
      nextPage: (totalPages > page) ? page + 1 : null,
      previousPage: page - 1 ? page - 1 : null,
      total: phoneNumbers.length,
      phoneNumberData: paginatedPhoneNumbers
    };

    return items;
  }

  componentDidMount() {
    const { phoneNumbers } = this.props;
    const { currentPage } = this.state;
    const paginatedPhoneNumbers = DisplayPhoneNumbers.getPhoneNumbers(phoneNumbers, currentPage, 10);
    const { totalPages } = paginatedPhoneNumbers;
    this.setState({
      paginatedPhoneNumbers,
      totalPages,
      generatedPhoneNumbers: phoneNumbers,
      currentPage
    })
  }

  static getDerivedStateFromProps(props, state) {
    const { phoneNumbers, hasGeneratedNumbers } = props;
    const { currentPage } = state;
    if (hasGeneratedNumbers) {
      const paginatedPhoneNumbers = DisplayPhoneNumbers.getPhoneNumbers(phoneNumbers, currentPage, 10);
      const { totalPages } = paginatedPhoneNumbers;
      return {
        paginatedPhoneNumbers,
        totalPages,
        phoneNumbers,
        currentPage
      }
    }

    return null;
  }

  onPageChange = (data) => {
    const { selected } = data;
    const { generatedPhoneNumbers } = this.state;
    const currentPage = Math.ceil(selected) + 1;
    const paginatedPhoneNumbers = DisplayPhoneNumbers.getPhoneNumbers(generatedPhoneNumbers, currentPage, 10);
    const { totalPages } = paginatedPhoneNumbers;
    this.setState({
      paginatedPhoneNumbers,
      totalPages,
      generatedPhoneNumbers,
      currentPage
    })
  }

  render() {
    const { paginatedPhoneNumbers, totalPages } = this.state;
    return (
      <div className="container mt-5 d-flex justify-content-center">
        <table className="table table-bordered" style={{ width: "50%" }}>
          <thead>
            {
              (paginatedPhoneNumbers.phoneNumberData && paginatedPhoneNumbers.phoneNumberData.length > 0) &&
              (
                <tr>
                  <th>#</th>
                  <th className="text-center">Generated Phone Numbers</th>
                </tr>
              )
            }
          </thead>
          <tbody className="scroll_body">
            {
              (
                paginatedPhoneNumbers.phoneNumberData && paginatedPhoneNumbers.phoneNumberData.length > 0) &&
              paginatedPhoneNumbers.phoneNumberData.map((phoneNumbers, index) => (
                <tr
                  key={`tableRow${index}`} // eslint-disable-line
                >
                  <td>{index + 1}</td>
                  <td className="text-center">{phoneNumbers.randomPhoneNumber}</td>
                </tr>
              ))
            }
            {
              (paginatedPhoneNumbers.phoneNumberData && paginatedPhoneNumbers.phoneNumberData.length < 1) &&
              (
                <tr>
                  <td colSpan="3" className="text-center">No Generated Phone Numbers Yet</td>
                </tr>
              )
            }
          </tbody>
        </table>
        {
          paginatedPhoneNumbers.phoneNumberData && paginatedPhoneNumbers.phoneNumberData.length >= 1
          && (
            <Pagination
              pages={totalPages}
              onPageChange={this.onPageChange}
            />
          )
        }
      </div>
    )
  }
}

export default DisplayPhoneNumbers;
