//Auth.js

//카카오 로그인
const CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
//REDIRECT_URI 주소 백엔드랑 주소일치시키기

// const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

const REDIRECT_URI =
  //   "http://jjayeo.s3-website.ap-northeast-2.amazonaws.com/api/auth/kakao/callback";
  // "http://localhost:3000/api/auth/kakao/callback";
"https://zzayeo.com/api/auth/kakao/callback";


export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
