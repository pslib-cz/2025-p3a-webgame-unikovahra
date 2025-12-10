import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/gamebook");
  };

  return (
    <div>
      <button onClick={handleStart}>START</button>
    </div>
  );
}