import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function useInactivityRedirect(timeoutMs = 5000) { // 5 seg
  const navigate = useNavigate();
  const timer = useRef();

  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        navigate("/");
      }, timeoutMs);
    };

    const events = ["mousemove", "keydown", "mousedown", "touchstart", "scroll"];
    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      clearTimeout(timer.current);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [navigate, timeoutMs]);
}