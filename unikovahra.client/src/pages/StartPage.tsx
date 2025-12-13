import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function StartPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/gamebook");
  };

  return (
    <div>
      <Button color="blue" onClick={handleStart} text="START" />
    </div>
  );
}