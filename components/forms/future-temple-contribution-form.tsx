'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import indianStates from '@/data/indian-states.json';

type Props = {
  className?: string;
  onFormSubmit: (data: FormValues) => void;
  isLoading?: boolean;
};

const schema = z.object({
  amount: z.string().optional(),
  contributionType: z.enum(['squareFeet', 'labourCharges', 'other']),
  squareFeetContribution: z.string().min(1).optional(),
  laborCharges: z.string().min(1).optional(),
  otherContribution: z.number().min(1).optional(),
  name: z.string().min(1, {
    message: 'Please provide a valid name',
  }),
  initiatedName: z.string().optional(),
  dob: z.date().optional(),
  anniversary: z.date().optional(),
  email: z
    .string()
    .email({
      message: 'Please provide a valid email',
    })
    .optional(),
  phone: z.string().min(10).max(10, {
    message: 'Please provide a valid phone number',
  }),
  street_address: z.string().min(1, {
    message: 'Please provide a valid address',
  }).optional(),
  city: z.string().min(1, {
    message: 'Please provide a valid city',
  }).optional(),
  state: z.string().min(1, {
    message: 'Please provide a valid state',
  }).optional(),
  postal_code: z.string().min(6).max(6, {
    message: 'Please provide a valid postal code',
  }).optional(),
  pan_number: z
    .string()
    .min(10)
    .max(10, {
      message: 'Please provide a valid PAN number',
    })
    .optional(),
});

type FormValues = z.infer<typeof schema>;

const squareFeetContributionOptions = [
  { value: '1', label: '1 sqft' },
  { value: '2', label: '2 sqft' },
  { value: '3', label: '3 sqft' },
  { value: '4', label: '4 sqft' },
  { value: '5', label: '5 sqft' },
  { value: '10', label: '10 sqft' },
  { value: '15', label: '15 sqft' },
  { value: '20', label: '20 sqft' },
  { value: '25', label: '25 sqft' },
  { value: '30', label: '30 sqft' },
  { value: '35', label: '35 sqft' },
  { value: '40', label: '40 sqft' },
  { value: '45', label: '45 sqft' },
  { value: '50', label: '50 sqft' },
  { value: '100', label: '100 sqft' },
];

const laborChargesOptions = [
  { value: '1', label: '1 day' },
  { value: '2', label: '2 days' },
  { value: '3', label: '3 days' },
  { value: '4', label: '4 days' },
  { value: '5', label: '5 days' },
  { value: 'Other', label: 'Other' },
];

const contributionTypeOptions = [
  { value: 'squareFeet', label: 'Square feet' },
  { value: 'labourCharges', label: 'Labour Charges' },
  { value: 'other', label: 'Other (Donate any amount you wish)' },
];

const FutureTempleContributionForm: React.FC<Props> = ({
  className,
  onFormSubmit,
  isLoading
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      laborCharges: '1',
      contributionType: 'squareFeet',
      squareFeetContribution: '1',
      name: '',
    },
  });

  const { handleSubmit, watch } = form;

  const calculateTotalCost = () => {
    const laborCharges = watch('laborCharges');
    const squareFeetContribution = watch('squareFeetContribution');
    const otherContribution = watch('otherContribution') || 0;

    const totalSquareFeetCost = Number(squareFeetContribution) * 3000;
    const totalLaborCost = Number(laborCharges) * 1750;
    const totalMaterialCost = totalLaborCost;

    if (watch('contributionType') === 'squareFeet') {
      return totalSquareFeetCost;
    }
    if (watch('contributionType') === 'labourCharges') {
      return totalMaterialCost;
    }
    if (watch('contributionType') === 'other') {
      return otherContribution;
    }
    return 0;
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    form.setValue('amount', String(calculateTotalCost()));
    onFormSubmit(form.getValues());
  };
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn('space-y-8', className)}
      >
        <FormField
          control={form.control}
          name="contributionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Contribution Type</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={String(field.value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select contribution type" />
                  </SelectTrigger>
                  <SelectContent>
                    {contributionTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                You can contribute towards the construction of the temple by
                contributing in square feet or by contributing construction
                materials.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {watch('contributionType') === 'squareFeet' && (
          <div>
            <FormField
              control={form.control}
              name="squareFeetContribution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="squareFeetContribution">
                    Square feet donation
                  </FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={String(field.value)}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sqft" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {squareFeetContributionOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    {`The cost of each square feet is ₹3000`}
                  </FormDescription>
                  <FormMessage {...field} />
                </FormItem>
              )}
            ></FormField>
          </div>
        )}

        {watch('contributionType') === 'labourCharges' && (
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="laborCharges"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Labour Charges</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={String(field.value)}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select no of days" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {laborChargesOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    {`The cost of labour is ₹1750 per day`}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

          </div>
        )}

        {watch('contributionType') === 'other' && (
          <FormField
            control={form.control}
            name="otherContribution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Other Contribution</FormLabel>
                <Input type="number" placeholder="Enter amount" {...field} />
                <FormDescription>
                  {`Enter the amount you wish to contribute towards the temple.`}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        )}

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="initiatedName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Initiated Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter initiated name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <DateInput {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="anniversary"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Anniversary</FormLabel>
                <DateInput {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div> */}

        <div className="grid md:grid-cols-2 gap-4">
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

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone" {...field} />
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

          {/* <FormField
            control={form.control}
            name="pan_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PAN Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter PAN number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
        </div>

        <Button type="submit" loading={isLoading}>Submit</Button>
      </form>

      {calculateTotalCost() > 0 && (
        <div className="mt-4 sticky bottom-2 bg-white p-4 text-center border border-gray-400 rounded-md shadow-md ">
         <div className="flex justify-between items-center">
              <span>Your contribution</span>
              <span className="font-semibold">₹{calculateTotalCost()}</span>
            </div>
        </div>
      )}
    </Form>
  );
};

export default FutureTempleContributionForm;
