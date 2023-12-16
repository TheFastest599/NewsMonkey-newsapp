import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = props => {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = capitalizeFirstLetter(props.category) + '-NewsMonkey';
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center " style={{ marginTop: '90px' }}>
        {`NewsMonkey - Top  
          ${capitalizeFirstLetter(props.category)} Headlines`}
      </h1>
      {loading && <Spinner></Spinner>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner></Spinner>}
      >
        <div className="container-xl my-3 ">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div
                  className="col-md-4 col-sm-6 col-lg-3"
                  key={element.url + index}
                >
                  <NewsItem
                    title={
                      element.title
                        ? element.title.length > 50
                          ? element.title.slice(0, 47) + '...'
                          : element.title
                        : ''
                    }
                    description={
                      element.description
                        ? element.description.length > 103
                          ? element.description.slice(0, 100) + '...'
                          : element.description
                        : ''
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : 'https://t3.ftcdn.net/jpg/01/75/17/46/360_F_175174631_fZWpQKTkvuuXxZN6rz7x7mzjwCrhJq0o.jpg'
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  ></NewsItem>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 12,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
