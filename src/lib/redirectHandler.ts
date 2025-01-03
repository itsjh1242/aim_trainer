import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectHandler: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const redirectPath = searchParams.get("p");
    if (redirectPath) {
      navigate(redirectPath, { replace: true }); // 쿼리 파라미터로 전달된 경로로 리다이렉트
    }
  }, [navigate]);

  return null; // 아무것도 렌더링하지 않음
};

export default RedirectHandler;
