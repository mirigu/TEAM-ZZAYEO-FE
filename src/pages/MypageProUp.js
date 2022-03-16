import React from 'react';
import styled from 'styled-components';
import Header from '../components/Mypage/Header';
import {actionCreators as userActions} from '../redux/modules/user';
import { useDispatch, useSelector } from 'react-redux';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ClearIcon from '@mui/icons-material/Clear';

const MypageProUp = () => {

    const dispatch = useDispatch();

    const checkUser = useSelector(state => state.user.user);

    const [upNickName, setNickName] = React.useState("");

    React.useEffect(() => {
        dispatch(userActions.checkUserDB());
    }, [dispatch]);

    React.useEffect(() => {
        setNickName(checkUser.nickname);
    }, [checkUser])

    return (
        <MypageCon>
            <Header title="프로필 수정" showBack={true}/>
            <UserCon >
                <div>
                    <UserImg userImg={checkUser.userImg} />
                </div>
            </UserCon>

            <InputBar>
                <InputRe placeholder='닉네임을 입력해주세요.' value={upNickName ? upNickName : ""} onChange={(e) => setNickName(e.target.value)}/>
                <ClearIconRe onClick={() => setNickName("")}/>
            </InputBar>
            <Text>
                <ErrorOutlineOutlinedIcon/>닉네임은 한글, 영어, 숫자로 00자까지 입력해주세요.
            </Text>
            
            <BtnCon>
                <SaveBtn style={{backgroundColor: upNickName && upNickName.length !== 0 ? "#4E49E2" : null }}>저장하기</SaveBtn>
            </BtnCon>
            
        </MypageCon>
    );
};

const MypageCon = styled.div`
    width: 100%;
    height: 92%;
    /* background-color: orange; */
    padding: 25px 0;
    box-sizing: border-box;
`;

const UserCon = styled.div`
    /* background-color: orange; */
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UserImg = styled.div`
    background-image: url(${(props) => (props.userImg ? props.userImg : "https://opgg-com-image.akamaized.net/attach/images/20200225141203.297146.jpg?image=w_200")});
    background-position: center;
    background-size: cover;
    /* box-shadow: 0 7px 5px 0 #BFBFBF; */
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

const InputBar = styled.div`
    /* background-color: orange; */
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
`;

const ClearIconRe = styled(ClearIcon)`
    position: absolute;
    right: 30px;
    top: 25px;
    cursor: pointer;
`;

const InputRe = styled.input`
    width: 90%;
    padding: 20px 0;
    text-align: center;
    border: none;
    border-bottom: 2px solid #BDBDBD;
    font-size: 20px;

    &:focus {
        outline: none;
    }

`;

const Text = styled.div`
    margin-top: 10px;
    color: #BDBDBD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`;

const BtnCon = styled.div`
    /* background-color: orange; */
    width: 100%;
    height: 46vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const SaveBtn = styled.div`
    background-color: #BDBDBD;
    color: white;
    width: 80%;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
`;

export default MypageProUp;