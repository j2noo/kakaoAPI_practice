import { kakao } from "./KakaoLogin";

const KakaoMessageSend = () => {
  const spanStyle = {
    backgroundColor: "wheat",
    cursor: "pointer",
  };

  const onKakaoClick = () => {
    kakao.Share.sendCustom({
      templateId: 99541,
      templateArgs: {
        name: "진우",
      },
      serverCallbackArgs: {
        isSendSuccess: "no", // 사용자 정의 파라미터 설정
      },
    });
  };
  return (
    <span style={spanStyle} onClick={onKakaoClick}>
      카톡 메세지 보내기
    </span>
  );
};

export default KakaoMessageSend;
