import { Button } from "@/components/ui/button";

import {
  BarChart,
  FileText,
  LayoutDashboard,
  LayoutDashboardIcon,
  Link,
  MessageCircle,
  Settings,
  Sheet,
} from "lucide-react";
import { SheetTrigger } from "../ui/sheet";

const LeftSidebar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"}>
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
      </Sheet>
    </div>
  );
};

export default LeftSidebar;

const DashboardSidebar = () => {
  return (
    <div className="h-full px-4 py-6">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Link href="/dashboard">
          <span className="text-xl font-bold">ByteCode</span>
        </Link>
      </div>

      <nav>
        <Link href="/dashboard">
          <Button variant={"ghost"} className="w-full justify-start">
            <FileText className="w-5 h-5 mr-2" />
            Articles
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button variant={"ghost"} className="w-full justify-start">
            <LayoutDashboardIcon className="w-5 h-5 mr-2" />
            Overview
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button variant={"ghost"} className="w-full justify-start">
            <BarChart className="w-5 h-5 mr-2" />
            Analytic
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button variant={"ghost"} className="w-full justify-start">
            <MessageCircle className="w-5 h-5 mr-2" />
            Comments
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button variant={"ghost"} className="w-full justify-start">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </Button>
        </Link>
      </nav>
    </div>
  );
};
