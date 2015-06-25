'use strict';

import React from 'react';
import NewsItem from './NewsItem';
import request from 'superagent';

import defaultNewsItems from '../text/static-news';

class Newsfeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {newsList: null};
    this.listStyle = {
      boxSizing: 'border-box',
      listStyle: 'none outside none',
      margin: '0px',
      padding: '0px'
    };
  }

  componentDidMount() {
    request
      .get('http://localhost:8080/newslist')
      .set('Accept', 'application/json')
      .end((err, res)=> {
        if (err) {
          
        }
        else {
          this.setState({newsList: JSON.parse(res.text).items});
        }
      });
  }

  render() {
    var right = false;
    if (this.state.newsList == null) {
      return <NewsItem title="Veuillez patienter"
        publicationDate=""
        imageUrl=""
        content="Les dernières nouvelles sont en cours de chargement. Veuillez patienter."
        source={null}
        align={true}
      />
    }
    else {
      return (
        <ul style={this.listStyle}>
         {
           this.state.newsList.map(function(news) {
             right = !right;
             return <NewsItem title={news.title}
               publicationDate={news.date}
               imageUrl={news.image}
               content={news.content}
               source={news.linkToSource}
                              key={news.linkToSource}
               align={right}
             />
           })
           }
        </ul>
      );
    }
  }
}

module.exports = Newsfeed;