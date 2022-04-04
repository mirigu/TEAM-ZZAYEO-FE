import React from "react";
import styled from "styled-components";
import Searchbar from "../components/Search/Searchbar";
import SearchList from "../components/Search/SearchList";
import queryString from "query-string";
import { useLocation } from "react-router";
import { ReactComponent as SvgImg } from "../shared/svg/img-none.svg";
import axios from "axios";
import { Helmet } from "react-helmet";

const Search = (props) => {
  const location = useLocation();

  const query = location.search;
  const search = queryString.parse(window.location.search);
  const keyword = search.query;

  const [feed, setFeed] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [endPage, setEndPage] = React.useState(0);
  const pageEnd = React.useRef();

  // pageNumber가 바뀔때마다 실행
  React.useEffect(() => {
    if (endPage !== 0 && pageNumber > endPage) {
      return;
    } else {
      fetchFeeds(query, pageNumber);
    }
  }, [pageNumber, query]);

  const fetchFeeds = async (query, pageNumber) => {
    setLoading(false);
    if (!query) {
      return;
    } else {
      await axios
        .get(`https://stgon.shop/api/plans/search${query}&page=${pageNumber}`)
        .then((res) => {
          setFeed((prev) => [...prev, ...res.data.plans]);
          setEndPage(res.data.endPage);
        });
    }
    setLoading(true);
  };

  //loading이 바뀔때마다 실행
  React.useEffect(() => {
    // fetchFeed 함수에서 loading 값이 true로 바뀐다면
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
          }
        },
        { threshold: 1 }
      );
      if (feed.length !== 0) {
        observer.observe(pageEnd.current);
      }
    }
  }, [loading, feed]);

  if (query) {
    return (
      <React.Fragment>
        <Helmet>
          <title>짜여 : 검색</title>
          <meta property="og:title" content="짜여 : 검색" />
          <meta property="og:description" content="우리 함께 여행 짜여✈️" />
          <meta property="og:image" content="/images/192x192.png" />
        </Helmet>
        <Container>
          <Searchbar
            query={query}
            setFeed={setFeed}
            setPageNumber={setPageNumber}
          />
          {feed.length !== 0 ? (
            <>
              <SearchKeword>
                <p>
                  <span>"{keyword}"</span>에 대한 검색 결과입니다.
                </p>
              </SearchKeword>
              <List>
                {feed.map((l, i) => {
                  return <SearchList key={i} {...l} />;
                })}
                <div ref={pageEnd}></div>
              </List>
            </>
          ) : (
            <>
              <Div>
                <SvgImg />
                <p>검색 결과가 없습니다.</p>
              </Div>
            </>
          )}
        </Container>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>짜여 : 검색</title>
        <meta property="og:title" content="짜여 : 검색" />
        <meta property="og:description" content="우리 함께 여행 짜여✈️" />
        <meta property="og:image" content="/images/192x192.png" />
      </Helmet>
      <Container>
        <Searchbar query={query} />
        <Div>
          <SvgImg />
          <p>검색 결과가 없습니다.</p>
        </Div>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 420px;
  height: 93.7%;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SearchKeword = styled.div`
  position: relative;
  top: 56px;
  font-family: "Roboto", sans-serif;
  margin: 0px 24px;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
  }
`;

const Div = styled.div`
  height: 93.7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }
`;

const List = styled.div`
  position: relative;
  top: 56px;
`;

export default Search;
