import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/notice/Header";
import OneNotice from "../components/notice/OneNotice";
import { actionCreators as noticeActions } from "../redux/modules/notice";
import { Helmet } from "react-helmet";

const NoticePage = (props) => {
  const dispatch = useDispatch();

  const noticeList = useSelector((state) => state.notice.list);

  React.useEffect(() => {
    dispatch(noticeActions.getNoticeListFB());
  }, [dispatch]);

  return (
    <Container>
      <Helmet>
        <title>짜여 : 알림</title>
        <meta property="og:title" content="짜여 : 알림" />
        <meta property="og:description" content="우리 함께 여행 짜여✈️" />
        <meta property="og:image" content="/images/192x192.png" />
      </Helmet>
      <Header title="알림" showBack={true} />
      {noticeList.map((item, i) => {
        return <OneNotice key={item._id} {...item} />;
      })}
    </Container>
  );
};

export default NoticePage;

const Container = styled.div`
  width: 100%;
  height: 93.7%;
  /* background-color: orange; */
  padding-bottom: 25px;
  box-sizing: border-box;
  border-radius: 10px;

  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;
