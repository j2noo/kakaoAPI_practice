import axios from "axios";
import { useEffect } from "react";
// import { kakao } from "./KakaoLogin";
// import api from "./api";

const Oauth = () => {
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    const GRANT_TYPE = "authorization_code";
    const client_id = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const redirect_uri = "http://localhost:5173/oauth";
    const postUrl = "https://kauth.kakao.com/oauth/token";

    const getToken = async () => {
      try {
        const response = await axios.post(
          postUrl,
          {
            grant_type: GRANT_TYPE,
            client_id: client_id,
            redirect_uri: redirect_uri,
            code: code,
          },
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        console.log("getTokencomplete", response);

        //받아온 토큰을 setAcessToken하기
        // kakao.Auth.setAccessToken(response.data.access_token);

        //?
        // kakao.API.request({
        //   url: "https://kapi.kakao.com/v2/user/me",
        //   success: function (response: any) {
        //     console.log("등록 성공", response);
        //   },
        //   fail: function (error: any) {
        //     console.log("등록 실패", error);
        //   },
        // });

        //우리팀 서버로 보내주는 코드인듯
        // api
        //   .post("/api/user/account/login/kakao", {
        //     accessToken: response.data.access_token,
        //   })
        //   .then((res) => {
        //     console.log("우리팀 서버 없음", res);
        //   });
      } catch (error) {
        console.error("우리팀 서버 없음Error:", error);
      }
    };
    getToken();
  }, []);
  return <div>auth</div>;
};
export default Oauth;
