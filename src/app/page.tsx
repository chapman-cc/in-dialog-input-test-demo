import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Button,
  Select as DFDSSelect,
  SelectContent as DFDSSelectContent,
  SelectItem as DFDSSelectItem,
  SelectTrigger as DFDSSelectTrigger,
  SelectValue as DFDSSelectValue,
} from "@dfds-frontend/compass-ui";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Drawer>
        <DrawerTrigger>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <SelectDemos />
        </DrawerContent>
      </Drawer>

      <p>Demo</p>
      <SelectDemos />
    </div>
  );
}

function SelectDemos() {
  return (
    <div className="flex justify-center">
      <div>
        <p>Select</p>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <Input placeholder="type here" />
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <DFDSSelect label="DFDS Select">
          <DFDSSelectTrigger className="w-[180px]">
            <DFDSSelectValue placeholder="Theme" />
          </DFDSSelectTrigger>
          <DFDSSelectContent>
            <Input placeholder="type here" />
            <DFDSSelectItem value="light">Light</DFDSSelectItem>
            <DFDSSelectItem value="dark">Dark</DFDSSelectItem>
            <DFDSSelectItem value="system">System</DFDSSelectItem>
          </DFDSSelectContent>
        </DFDSSelect>
      </div>
    </div>
  );
}
