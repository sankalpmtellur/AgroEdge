import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  age: z.coerce.number().min(18, { message: "You must be at least 18 years old." }).max(35, { message: "You must be 35 years old or younger." }),
  phone: z.string().regex(/^[0-9]{10}$/, { message: "Phone number must be 10 digits." }),
  whatsapp: z.string().regex(/^[0-9]{10}$/, { message: "WhatsApp number must be 10 digits." }),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal("")),
  farmType: z.enum(["dairy", "biofloc"]),
  landArea: z.coerce.number().min(5000, { message: "Land area must be at least 5000 sq ft." }),
  landOwnership: z.enum(["own", "rented"]),
  state: z.string().min(1, { message: "Please select your state." }),
  district: z.string().min(1, { message: "Please enter your district." }),
  block: z.string().min(1, { message: "Please enter your block." }),
  post: z.string().min(1, { message: "Please enter your post office." }),
  pincode: z.string().regex(/^[0-9]{6}$/, { message: "PIN code must be 6 digits." }),
  village: z.string().min(1, { message: "Please enter your village name." }),
  willingnessToLearn: z.boolean().refine(val => val === true, {
    message: "You must be willing to learn.",
  }),
  noCriminalRecord: z.boolean().refine(val => val === true, {
    message: "You must not have a criminal record.",
  }),
  ageConfirmation: z.boolean().refine(val => val === true, {
    message: "You must confirm your age is between 18 and 35.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ApplyNow = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      age: undefined,
      phone: "",
      whatsapp: "",
      email: "",
      farmType: "dairy",
      landArea: undefined,
      landOwnership: "own",
      state: "",
      district: "",
      block: "",
      post: "",
      pincode: "",
      village: "",
      willingnessToLearn: false,
      noCriminalRecord: false,
      ageConfirmation: false,
    },
  });

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", 
    "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", 
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log("Form submitted successfully:", data);
      toast.success("Application submitted successfully! We will contact you soon.");
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-agrolight py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-agrodark">
            {t("apply_now")}
          </h1>
          <p className="text-center mt-4 text-gray-700 max-w-2xl mx-auto">
            Fill out the form below to apply for our farming support program.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <Card>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-agrodark">Personal Information</h2>
                    
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Enter your age" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="10-digit number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>WhatsApp Number</FormLabel>
                            <FormControl>
                              <Input placeholder="10-digit number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email (Optional)</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-agrodark">Farm Details</h2>
                    
                    <FormField
                      control={form.control}
                      name="farmType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Farming Type</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="dairy" />
                                </FormControl>
                                <FormLabel className="font-normal">Dairy</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="biofloc" />
                                </FormControl>
                                <FormLabel className="font-normal">Biofloc</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="landArea"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Land Area (sq ft)</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="Minimum 5000 sq ft" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="landOwnership"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Land Ownership</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select ownership status" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="own">Own</SelectItem>
                                <SelectItem value="rented">Rented</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-agrodark">Address Information</h2>
                    
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your state" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {indianStates.map((state) => (
                                <SelectItem key={state} value={state}>{state}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="district"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>District</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter district" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="block"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Block</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter block" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="post"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Post Office</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter post office" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="pincode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>PIN Code</FormLabel>
                            <FormControl>
                              <Input placeholder="6-digit PIN code" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="village"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Village/Town</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter village or town" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-agrodark">Declarations</h2>
                    
                    <FormField
                      control={form.control}
                      name="willingnessToLearn"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I am willing to learn modern farming techniques
                            </FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="noCriminalRecord"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I do not have any criminal record
                            </FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="ageConfirmation"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I confirm that I am between 18 to 35 years of age
                            </FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-agrodark hover:bg-agrodark/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ApplyNow;
