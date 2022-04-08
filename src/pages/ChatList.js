import React from "react";
import styled from "styled-components";

import Header from "../components/Chat/Header";
import Onechat from "../components/Chat/Onechat";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as SvgImg } from "../shared/svg/img-none.svg";
import { Helmet } from "react-helmet";

// import io from "socket.io-client";

// 서버와 클라이언트 연결
// const socket = io.connect("http://3.36.50.53:3000");
// const socket = io.connect("http://localhost:5000");

const ChatList = (props) => {
  const dispatch = useDispatch();

  const chat_list = useSelector((state) => state.chat.list);

  const is_token = localStorage.getItem("token") ? true : false;

  React.useEffect(() => {
    if (is_token) {
      dispatch(chatActions.getChatListFB());
      // dispatch(chatActions.getNewChatFB());
    }
  }, []);

  return (
    <ListContainer>
      <Helmet>
        <title>짜여 : 메세지</title>
        <meta property="og:title" content="짜여 : 메세지" />
        <meta property="og:description" content="우리 함께 여행 짜여✈️" />
        <meta property="og:image" content="/images/192x192.png" />
      </Helmet>
      <Header />
      {is_token ? (
        <ListWrap>
          <OneChatWrap>
            {chat_list.length === 0 ? (
              <NotMsg>
                <SvgImg />
                <p>메세지가 없습니다.</p>
              </NotMsg>
            ) : (
              chat_list.map((item, i) => {
                // if(typeof item.roomNum !== "undefined"){
                return <Onechat key={item._id} {...item} />;
                // }else {
                //   return null;
                // }
              })
            )}
          </OneChatWrap>
        </ListWrap>
      ) : (
        <NotMsg>
          <SvgImg />
          <p>로그인을 해주세요.</p>
        </NotMsg>
      )}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 100%;
  height: 93.7%;
  padding-bottom: 25px;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const NotMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93.7%;
  flex-direction: column;
  p {
    margin-top: 16px;
  }
`;

const ListWrap = styled.div`
  position: relative;
  top: 56px;
  width: 100%;
`;

const OneChatWrap = styled.div`
  padding: 0 15px;
`;

export default ChatList;
