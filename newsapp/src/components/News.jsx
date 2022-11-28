import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `AKS NEWS-${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }
  async updatenews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updatenews();
  }
   fetchMoreData=async()=>{
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles:this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
      loading: false,
      page:this.state.page+1
    });
  };
  render() {
    return (
      <>
        <div className="container my-3 ">
          <h1 className="text-center" style={{color:'#00fffd'}}>
            Top {this.capitalizeFirstLetter(this.props.category)} Headlines
          </h1>
          {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={this.state.loading&&<Spinner />}
          >
            <div className="container">
            <div className="row">
              {this.state.articles.map((elements) => {
                  return (
                    <div key={elements.url} className="col col-lg-4 my-4">
                      <NewsItem
                        title={
                          elements.title ? elements.title : ""
                        }
                        description={
                          elements.description
                            ? elements.description.slice(0, 88)
                            : ""
                        }
                        author={elements.source.name}
                        date={elements.publishedAt}
                        imageUrl={elements.urlToImage}
                        newsUrl={elements.url}
                      />
                    </div>
                  );
                })}
            </div>
            </div>
          </InfiniteScroll>
        </div>
        
      </>
    );
  }
}

export default News;
