import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export function Layout({ children }) {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <Link>
            {" "}
            <TabsTrigger value="account">Dashboards</TabsTrigger>
          </Link>
          <Link>
            {" "}
            <TabsTrigger value="password">Courses</TabsTrigger>
          </Link>
          <Link>
            {" "}
            <TabsTrigger value="password">Batches</TabsTrigger>
          </Link>
          <Link>
            {" "}
            <TabsTrigger value="password">Trainers</TabsTrigger>
          </Link>
          <Link>
            {" "}
            <TabsTrigger value="password">Students</TabsTrigger>
          </Link>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
