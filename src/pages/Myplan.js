import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as planActions } from "../redux/modules/plan";
import { actionCreators as styleActions } from "../redux/modules/style";
import BeforeRegister from "../components/Mypaln/BeforeRegister";
import AfterRegister from "../components/Mypaln/AfterRegister";
import Filter from "../components/Mypaln/Filter";
import queryString from "query-string";
import { Helmet } from "react-helmet";

const Myplan = (props) => {
  const dispatch = useDispatch();
  const { history } = props;

  const is_token = localStorage.getItem("token") ? true : false;
  const myplans = useSelector((store) => store.plan.myplans);
  const filter = queryString.parse(window.location.search).filter;

  React.useEffect(() => {
    dispatch(planActions.getMyPlanDB());
  }, [dispatch]);

  const onAddPlan = () => {
    // if (is_token) {
    history.push("/addplan");
    dispatch(styleActions.resetStyle([]));
    // }
    // window.alert("로그인 후 이용가능합니다.");
    // history.push("/login");
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>짜여 : 여행기 작성</title>
        <meta property="og:title" content="짜여 : 여행기 작성" />
        <meta property="og:description" content="우리 함께 여행 짜여✈️" />
        <meta property="og:image" content="/images/192x192.png" />
      </Helmet>
      <Container>
        <Top>
          <TText>여행기 작성</TText>
        </Top>
        <Bottom>
          <AddPlanBtn onClick={onAddPlan}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#4E49E2" />
              <path
                d="M16.3232 10.667V21.9807"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M21.9795 16.3237H10.6658"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <P>새로운 여행을 작성해주세요</P>
          </AddPlanBtn>
          {myplans?.length === 0 ? (
            <BeforeRegister />
          ) : (
            <ListContainer>
              <Title>
                <TitleText>여행 리스트</TitleText>
                <Filter />
              </Title>
              {myplans
                ?.filter((p) => {
                  if (!filter) {
                    return p;
                  } else if (filter === "전체") {
                    return p;
                  } else if (p.status === filter) {
                    return p;
                  }
                })
                ?.map((p, i) => {
                  return <AfterRegister key={i} {...p} />;
                })}
            </ListContainer>
          )}
        </Bottom>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  height: 93.7%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Top = styled.div`
  position: fixed;
  height: 56px;
  width: 100%;
  max-width: 420px;
  padding-left: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  z-index: 1;
  background-color: white;
`;

const TText = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

const Bottom = styled.div`
  position: relative;
  top: 56px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 19px;
`;

const AddPlanBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 128px;
  margin: 0px 24px;
  background-color: #f5f5f5;
  border-radius: 8px;
  cursor: pointer;
  svg {
    margin-bottom: 16px;
  }
`;

const P = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #212121;
  margin: 0;
`;

const ListContainer = styled.div`
  margin-top: 40px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleText = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-left: 24px;
`;

export default Myplan;
