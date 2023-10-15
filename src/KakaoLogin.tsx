const kakao = (window as any).Kakao;

const KakaoLogin = () => {
  const url = "http://localhost:5173/oauth";
  return (
    <img
      src="assets/kakao.png"
      onClick={() =>
        kakao.Auth.authorize({
          redirectUri: `${url}`,
          scope: "profile_nickname,profile_image,account_email",
        })
      }
    ></img>
  );
};
export default KakaoLogin;
