import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";

const LoginSection  = () => {
  const navigate = useNavigate();
  return <section className="w-[343px] items-start gap-3 top-[546px] left-6 flex flex-col absolute">
  <Button className="flex h-[51px] items-center justify-center gap-2.5 px-[75px] py-[15px] relative self-stretch w-full bg-[#111111] rounded-[14px]">
    <img
      className="absolute w-[22px] h-[23px] left-[25px]"
      alt="Apple logo"
      src="https://c.animaapp.com/mcemxrpsR2EFbb/img/-----------1.png"
    />
    <span className="relative w-fit [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-white text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
      Apple로 로그인
    </span>
  </Button>

  <Button className="bg-[#fee500] flex h-[51px] items-center justify-center gap-2.5 px-[75px] py-[15px] relative self-stretch w-full rounded-[14px]">
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
    className="border border-solid border-[#767676] flex h-[51px] items-center justify-center gap-2.5 px-[75px] py-[15px] relative self-stretch w-full rounded-[14px]"
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
</section>
};

export default LoginSection;
