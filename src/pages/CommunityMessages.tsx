
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const formSchema = z.object({
    category: z.string({ required_error: "Please select a category." }),
    message: z.string().min(1, "Message cannot be empty."),
});

const messageCategories = [
    { value: "food", label: "Food & Cafeteria" },
    { value: "shift-planning", label: "Shift Planning" },
    { value: "physical-environment", label: "Physical Environment" },
    { value: "working-conditions", label: "Working Conditions" },
    { value: "benefits", label: "Benefits & Compensation" },
    { value: "transportation", label: "Transportation" },
    { value: "equipment", label: "Equipment & Tools" },
    { value: "other", label: "Other" },
];

const recentCommunityMessages = [
    {
        id: 1,
        category: "Food & Cafeteria",
        message: "The new salad bar is great! More vegetarian options would be appreciated.",
        date: "2025-02-16",
        replies: 3
    },
    {
        id: 2,
        category: "Working Conditions",
        message: "Could we get better lighting in the manufacturing area?",
        date: "2025-02-15",
        replies: 7
    },
    {
        id: 3,
        category: "Shift Planning",
        message: "Suggestion: Allow shift swaps through the company app",
        date: "2025-02-14",
        replies: 12
    }
];

const CommunityMessages = () => {
    const { toast } = useToast();
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            category: "",
            message: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Community message values:", values);
        toast({
            title: "Message Posted!",
            description: "Your message has been shared with the community.",
        });
        form.reset();
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
                <Users className="h-8 w-8 text-primary" />
                <h1 className="text-3xl font-bold">Community Messages</h1>
            </div>
            
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Post New Message */}
                <Card>
                    <CardHeader>
                        <CardTitle>Share with Community</CardTitle>
                        <CardDescription>Post your thoughts, suggestions, or concerns for everyone to see and discuss.</CardDescription>
                    </CardHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <CardContent className="space-y-4">
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
                                                    {messageCategories.map(category => (
                                                        <SelectItem key={category.value} value={category.value}>
                                                            {category.label}
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
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Message</FormLabel>
                                            <FormControl>
                                                <Textarea 
                                                    placeholder="Share your thoughts, suggestions, or concerns..." 
                                                    rows={4} 
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormDescription className="text-sm text-muted-foreground flex items-center gap-1">
                                                <MessageSquare className="w-3 h-3"/> Your message will be visible to all community members.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                
                                <Button type="submit" className="w-full">Post to Community</Button>
                            </CardContent>
                        </form>
                    </Form>
                </Card>

                {/* Recent Community Messages */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Community Posts</CardTitle>
                        <CardDescription>See what your colleagues are discussing</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {recentCommunityMessages.length > 0 ? (
                            <div className="space-y-4">
                                {recentCommunityMessages.map((msg) => (
                                    <div key={msg.id} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                                                {msg.category}
                                            </span>
                                            <span className="text-xs text-muted-foreground">{msg.date}</span>
                                        </div>
                                        <p className="text-sm mb-2">{msg.message}</p>
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <MessageSquare className="h-3 w-3" />
                                            <span>{msg.replies} replies</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-muted-foreground text-center">No community messages yet.</p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CommunityMessages;
