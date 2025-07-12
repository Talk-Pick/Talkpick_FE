import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";

const LoginSection  = ({className}: {className?: string}) => {
  const navigate = useNavigate();

  const socialLogin = (social: 'kakao' | 'apple' | 'google') => {
    switch (social) {
      case 'kakao':
        console.log('카카오 로그인');
        fetch('https://kauth.kakao.com/oauth/authorize')
        break;
      case 'apple':
        console.log('애플 로그인');
        break;
      case 'google':
        console.log('구글 로그인');
        break;
    }
  };

  

  return (
  <section className={`gap-3 flex flex-col ${className}`}>
  <Button className="flex h-12 items-center justify-center gap-2.5 px-[75px] py-[15px] relative self-stretch w-full bg-[#111111] rounded-xl">
    <img
      className="absolute w-[22px] h-[23px] left-[25px]"
      alt="Apple logo"
      src="https://c.animaapp.com/mcemxrpsR2EFbb/img/-----------1.png"
    />
    <span className="relative w-fit [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-white text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
      Apple로 로그인
    </span>
  </Button>

  <Button 
  onClick={() => socialLogin('kakao')}
  className="bg-[#fee500] flex h-12 items-center justify-center gap-2.5 px-[75px] py-[15px] relative self-stretch w-full rounded-xl">
    <img
      className="absolute w-[29px] h-[31px] left-[22px]"
      alt="KakaoTalk logo"
      src="https://c.animaapp.com/mcemxrpsR2EFbb/img/----------.png"
    />
    <span className="text-[#111111] relative w-fit [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
      카카오톡으로 로그인
    </span>
  </Button>

  <Button
    variant="outline"
    className="border border-solid border-[#767676] flex h-12 items-center justify-center gap-2.5 px-[75px] py-[15px] relative self-stretch w-full rounded-xl"
    onClick={() => navigate("/main")}
  >
    <img
      className="absolute w-[22px] h-[22px] left-[26px]"
      alt="Email icon"
      src="https://c.animaapp.com/mcemxrpsR2EFbb/img/communication---mail.svg"
    />
    <span className="text-[#767676] relative w-fit [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
      이메일 로그인
    </span>
  </Button>
</section>)
};

export default LoginSection;
