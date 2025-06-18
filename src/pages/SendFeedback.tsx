
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
    recipientPublicKey: z.string({ required_error: "Please select a recipient." }),
    category: z.string({ required_error: "Please select a category." }),
    message: z.string().min(1, "Message cannot be empty."),
});

const employeeData = [
    {
        department: "Management",
        employees: [
            { name: "Ali Koç", publicKey: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t" },
        ],
    },
    {
        department: "HR (Human Resources)",
        employees: [
            { name: "Ayşe Ak", publicKey: "0x2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u" },
        ],
    },
    {
        department: "IT",
        employees: [
            { name: "Erkan Bahat", publicKey: "0x3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v" },
            { name: "Can Yılmaz", publicKey: "0x4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w" },
        ]
    }
];

const SendFeedback = () => {
    const { toast } = useToast();
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            recipientPublicKey: "",
            category: "",
            message: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Form values:", values);
        toast({
            title: "Feedback Sent!",
            description: "Your encrypted message has been sent successfully.",
        });
        form.reset();
    }

  return (
    <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Send Feedback</h1>
        <Card>
            <CardHeader>
                <CardTitle>Create Anonymous Message</CardTitle>
                <CardDescription>Your message will be encrypted and sent anonymously.</CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="recipientPublicKey"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Recipient</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a recipient" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {employeeData.map(group => (
                                                <SelectGroup key={group.department}>
                                                    <SelectLabel>{group.department}</SelectLabel>
                                                    {group.employees.map(employee => (
                                                        <SelectItem key={employee.publicKey} value={employee.publicKey}>
                                                            <div className="flex items-center justify-between w-full">
                                                                <span>{employee.name}</span>
                                                                <span className="ml-4 text-xs text-muted-foreground font-mono opacity-75">{employee.publicKey.substring(0, 10)}...</span>
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="hr">HR</SelectItem>
                                            <SelectItem value="cafeteria">Cafeteria</SelectItem>
                                            <SelectItem value="salary">Salary</SelectItem>
                                            <SelectItem value="management">Management</SelectItem>
                                            <SelectItem value="culture">Culture</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Encrypted Message</FormLabel>
                                    <FormControl>
                                        <Textarea id="message" placeholder="Write your feedback here..." rows={6} {...field} />
                                    </FormControl>
                                    <FormDescription className="text-sm text-muted-foreground flex items-center gap-1">
                                        <Lock className="w-3 h-3"/> Your message is end-to-end encrypted.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter>
                         <Button type="submit">Send Anonymously</Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    </div>
  );
};

export default SendFeedback;
