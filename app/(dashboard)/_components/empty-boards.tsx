import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/Notes.svg" alt="Empty" height={110} width={110} />
      <h2 className="text-2xl font-semibold mt-6">No boards found!</h2>
      <p className="text-muted-foreground text-sm mt2">
        Start by creating a board
      </p>
      <div className="mt-6">
        <Button size="lg">Create Board</Button>
      </div>
    </div>
  );
};
