import React, { Component } from 'react';
import './App.css';
import SearchForm from './composition/SearchForm';
import ResultsList from './composition/ResultsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      bookType: 'ebooks',
      printType: 'all'
    }
  }

  submitSearch = () => {
    const searchTerm = this.state.searchTerm;
    const bookType = this.state.bookType;
    const printType = this.state.printType;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=${bookType}&printType=${printType}&key=AIzaSyDGIrl3U05F8sioHgtk7Md291cu9WZYJXg`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong...Try again later.')
        }
        return response.json();
      })
      .then(responseJson => console.log(responseJson))
  }

  filterBookType = (bookType) => {
    this.setState({
      bookType
    });
  }

  filterPrintType = (printType) => {
    this.setState({
      printType
    })
  }

  handleSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm
    })
  }

  render() {
    const resultsArea = this.state.showResults
      ? <ResultsList />
      : <main className="results_area_none"><h2>This is where my results would be...</h2><img src="dadmeme.jpg" alt="Timmy Turner's dad meme" /><p>IF I HAD ANY</p></main>
    return (
      <>
        <header className="app_header">
          <h1>Google Book Search</h1>
        </header>
        <SearchForm submitSearch={this.submitSearch()} handleSearchTerm={this.handleSearchTerm(searchTerm)} filterPrint={this.filterPrintType(printType)} filterBook={this.filterBookType(bookType)} />
        {resultsArea}
      </>
    );
  }
}

export default App;