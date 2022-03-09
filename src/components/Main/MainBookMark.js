import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { history } from "../../redux/ConfigureStore";

const MainBookMark = (props) => {
  const planId = props.planId;

  const plans = useSelector((store) => store.plan.list);
  const plan = plans.find((p) => p.planId === planId);

  // React.useEffect(() => {
  //   dispatch(planActions.getPlanDB());
  // }, []);

  return (
    <React.Fragment>
      <Container>
        <BookMarkCard
          onClick={() => {
            history.push(`detail/${planId}`);
          }}
        >
          <UserImg>
            <img src={plan?.userId.profile_img} alt="" />
          </UserImg>
          <UserName>{plan?.userId.nickname}</UserName>
        </BookMarkCard>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 8px;
`;

const BookMarkCard = styled.div`
  position: relative;
  font-family: "Roboto", sans-serif;
  width: 120px;
  height: 200px;
  background-color: #e6e6e6;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
`;

const UserImg = styled.div`
  margin: 10px 0px 0px 10px;
  img {
    width: 34px;
    height: 34px;
    border-radius: 34px;
  }
`;

const UserName = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: #ffffff;
`;

export default MainBookMark;
