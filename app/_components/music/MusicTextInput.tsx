import { Input } from "@mui/base";

interface MusicTextInputProps {
  value: string;
  onChange: (value: string) => void;
}
export default function MusicTextInput({
  value,
  onChange,
}: MusicTextInputProps) {
  return (
    <div className="flex w-full flex-col gap-[0.5rem] pr-[4rem]">
      <p className="text-[1.75rem] font-semibold text-white">Music Title</p>
      <Input
        type="text"
        required
        autoFocus
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="제목을 입력하세요."
        slotProps={{
          input: {
            className:
              "placeholder-[#52525B] placeholder text-[#A1A1AA] text-[1.25rem] w-full px-[1.5rem] py-[0.5rem] bg-black border-none rounded-[1.5rem] focus:border-none focus:box-shadow-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent",
          },
        }}
      />
    </div>
  );
}
