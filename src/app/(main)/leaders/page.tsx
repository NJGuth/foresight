import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Disclosure } from "@/components/ui/disclosure";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multi-select";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function LeadersPage() {
  return (
    <div>
      <div className="space-y-4">
        <h2>Inputs</h2>
        <Input placeholder="Input" />
        <Textarea placeholder="Textarea" />
        <DatePicker />
        <MultiSelect />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Disclosure>
          <div className="flex items-center justify-between w-full h-10 gap-2 ">
            <p>Test Row</p>
          </div>
        </Disclosure>
      </div>
    </div>
  );
}
