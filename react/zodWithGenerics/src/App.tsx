import React, { useCallback } from "react";
import { z } from "zod";

import useForm from "./hooks/useForm";

const FormSchema = z.object({
  username: z.string().min(5),
  email: z.string().email(),
})

const App: React.FC = () => {
  return (
    <div className="app_wrapper">
      <form className="container" onSubmit={() => {}}></form>
    </div>
  );
};

export default App;
