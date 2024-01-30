import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const EmptyOrg = () => {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center">
        <Image src="/sample31.svg" alt="empty" height={400} width={400} />
        <h2 className="text-2xl font-semibold mt-6">Welcome to DrawBoard</h2>
        <p className="text-muted-foreground text-sm mt-2">
          Create an organization to get started
        </p>
        <div className="mt-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" size="lg">
                Create organization
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
              <CreateOrganization />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};
