'use client';

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import indianStates from "@/data/indian-states.json";

type Props = {
  className?: string;
  isLoading?: boolean;
  onFormSubmit: (data: FormValues) => void;
};

const FormSchema = z.object({
  amount: z.string().min(1, {
    message: "Minimum amount is ₹1",
  }),
  name: z.string().min(1, {
    message: "Please provide a valid name",
  }),
  initiatedName: z.string().optional(),
  dob: z.date().optional(),
  anniversary: z.date().optional(),
  email: z
    .string()
    .email({
      message: "Please provide a valid email",
    })
    .optional(),
  phone: z.string().min(10).max(10, {
    message: "Please provide a valid phone number",
  }),
  street_address: z
    .string()
    .min(1, {
      message: "Please provide a valid address",
    })
    .optional(),
  city: z
    .string()
    .min(1, {
      message: "Please provide a valid city",
    })
    .optional(),
  state: z
    .string()
    .min(1, {
      message: "Please provide a valid state",
    })
    .optional(),
  postal_code: z
    .string()
    .min(6)
    .max(6, {
      message: "Please provide a valid postal code",
    })
    .optional(),
  pan_number: z
    .string()
    .min(10)
    .max(10, {
      message: "Please provide a valid PAN number",
    })
    .optional(),
});

type FormValues = z.infer<typeof FormSchema>;

const RathYatraDonationForm: React.FC<Props> = ({
  className,
  onFormSubmit,
  isLoading,
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      amount: "",
    },
  });

  const { watch, setError } = form;
  const onSubmit = (data: FormValues) => {
    if (Number(data.amount) < 1) {
      form.setError("amount", {
        message: `Minimum amount is ₹${1}`,
      });
      form.setFocus("amount");
      return;
    }
    onFormSubmit(data);
  };

  const watchAmount = watch("amount");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-6", className)}
      >
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Amount</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter your contribution amount"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {watchAmount && Number(watchAmount) < 1
                  ? `Minimum amount is ₹${1}`
                  : null}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="street_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter street address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={String(field.value)}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {indianStates.map((state) => (
                      <SelectItem
                        key={state.code}
                        value={state.code}
                        className="text-sm"
                      >
                        <span>{state.name}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="postal_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter postal code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" loading={isLoading}>
          Contribute to Rath Yatra
        </Button>

        {Number(watchAmount) > 0 ? (
          <div className="mt-4 sticky bottom-2 bg-white p-4 text-center border border-gray-400 rounded-md shadow-md ">
            <div className="flex justify-between items-center">
              <span>Your contribution</span>
              <span className="font-semibold">₹{watchAmount}</span>
            </div>
          </div>
        ) : null}
      </form>
    </Form>
  );
};

export default RathYatraDonationForm;