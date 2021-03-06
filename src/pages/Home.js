import React, { Component } from 'react';

import Card from '../components/Card';
import Categories from '../components/Categories';
import SearchBox from '../components/SearchBox';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      searchValue: '',
      category: ''
    };
  }

  handleSearchChange(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  handleCategoryChange(e) {
    // if we already have a category set, CLEAR FILTEr
    // otherwise, set filter
    if(this.state.category !== '' && this.state.category === e) {
      this.setState({
        category: ''
      });
    } else {
      this.setState({
        category: e
      });
    }
  }


  render() {
    const allCategories = this.props.widgetsJson.reduce((prev, current) => {
      return prev.concat(current.categories);
    }, []);
    const uniqueCategories = [ ...new Set(allCategories) ].sort();
    
    return (
      <div className="panel panel-white panel-no-padding padding-leader-1 padding-trailer-1">
        <div className="grid-container">
          <aside className="column-6 post-1">
            <Categories categories={ uniqueCategories } categoryChange={ (e) => this.handleCategoryChange(e) } currentCategory={ this.state.category }></Categories>
          </aside>
          <main className="column-17" role="main">
            <div className="trailer-1">
              <SearchBox searchChange={ (e) => this.handleSearchChange(e)}></SearchBox>
            </div>

            <div className="block-group block-group-3-up tablet-block-group-2-up phone-block-group-1-up">
              {this.props.widgetsJson.filter((c) => {
                return (c.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1 || 
                  c.description.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1 || 
                  c.author.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1) && 

                  // If cateogry is not blank, filter also on category:
                  (this.state.category === '' || c.categories.indexOf(this.state.category) > -1) ;
              }).map((c, i) => {
                return <Card title={c.name} description={c.description} author={c.author} thumbnail={c.thumbnail} link={'widget/' + c.slug} repoUrl={c.url} categories={c.categories} key={i}></Card>;
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;
