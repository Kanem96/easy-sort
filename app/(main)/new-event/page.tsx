import { Input } from "@/components/ui/input";
import React from "react";

const CreateEventForm = () => {
  return (
    <div className="flex flex-col mx-[auto] mt-6 w-[600px] h-[800px] bg-slate-600 rounded-md">
      <form className="m-auto">
        <Input placeholder="Event Name"/>
      </form>
    </div>
  );
};

export default CreateEventForm;
