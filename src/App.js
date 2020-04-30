import React, { Component } from 'react';
import SearchForm from './composition/SearchForm';
import ResultsList from './composition/ResultsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      bookType: "ebooks",
      printType: "all",
      bookList: [],
      showResults: false
    }
  }

  filterBookType = (val) => {
    this.setState({
      bookType: val
    });
    console.log(val)
  }

  filterPrintType = (val) => {
    this.setState({
      printType: val
    });
    console.log(val)
  }

  submitSearch = (e) => {
    e.preventDefault();
    if (this.state.searchTerm === null) {
      alert('Please enter a search term');
    }
    else {
      this.setState({
        showResults: true
      })
      const searchTermRaw = this.state.searchTerm;
      const searchTerm = searchTermRaw.toLowerCase().replace(' ', '+');
      const bookType = this.state.bookType;
      console.log(this.state.bookType)
      const printType = this.state.printType;
      const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyDGIrl3U05F8sioHgtk7Md291cu9WZYJXg&q=${searchTerm}&filter=${bookType}&printType=${printType}`;
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Something went wrong...Try again later.')
          }
          return response.json();
        })
        .then(responseJson => {
          console.log(responseJson)
          this.setState({
            bookList: responseJson.items
          });
        })
        .catch(err => {
          this.setState({
            error: err.message
          });
        });
    } 
  }

  handleSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm
    })
  }

  render() {
    const resultsArea = this.state.showResults
      ? <ResultsList books={this.state.bookList} />
      : <main className="results_area_none"><h2>This is where my results would be...</h2><img src="./composition/dadmeme.jpg" alt="Timmy Turner's dad meme" /><p>IF I HAD ANY</p></main>
    return (
      <>
        <header className="app_header">
          <h1>Google Book Search</h1>
        </header>
        <SearchForm submitSearch={e => this.submitSearch(e)} handleSearchTerm={searchTerm => this.handleSearchTerm(searchTerm)} filterPrint={val => this.filterPrintType(val)} filterBook={val => this.filterBookType(val)} />
        {resultsArea}
      </>
    );
  }
}

export default App;