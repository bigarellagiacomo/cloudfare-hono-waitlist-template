import { Mail } from "lucide-react";
import Button from "./Button";

export default function SignupButton() {
  return (
    <div className="flex w-sm items-center justify-center rounded-xl border shadow">
      <Mail className="ml-4" />
      <input
        placeholder="example@mail.com"
        required
        type="email"
        name="email"
        id="email"
        className="flex-1 border-none px-4 py-2 focus:outline-none"
      />
      <Button text="Join" />
    </div>
  );
}
