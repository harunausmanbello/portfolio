import * as Schema from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactInfoUseForm = () => {
  return useForm<Schema.contactInfoType>({
    resolver: zodResolver(Schema.contactInfo),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
  });
};

export { contactInfoUseForm };
