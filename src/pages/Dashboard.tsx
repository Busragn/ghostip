import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, MessageSquare, Vote, Send, Mail, Users } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const recentActivity = [
    {
        id: 1,
        icon: Send,
        action: "Feedback Sent",
        details: "To: Management, Category: Culture",
        date: "2025-02-15"
    },
    {
        id: 2,
        icon: Users,
        action: "Community Post",
        details: "Category: Food & Cafeteria",
        date: "2025-02-15"
    },
    {
        id: 3,
        icon: Mail,
        action: "Message Received",
        details: "Category: Salary",
        date: "2025-02-14"
    },
    {
        id: 4,
        icon: Vote,
        action: "Vote Cast",
        details: "'Upgrade office coffee machine' - YES vote",
        date: "2025-01-28"
    },
    {
        id: 5,
        icon: Send,
        action: "Feedback Sent",
        details: "To: Team Lead, Category: Other",
        date: "2025-01-25"
    },
];

const Dashboard = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Feedback Sent</CardTitle>
                        <ArrowUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">42</div>
                        <p className="text-xs text-muted-foreground">+5 since last week</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Community Posts</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">18</div>
                        <p className="text-xs text-muted-foreground">+3 this week</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Replies Received</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">+2 since yesterday</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Polls</CardTitle>
                        <Vote className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">1 closing soon</p>
                    </CardContent>
                </Card>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
                <Card>
                    <CardContent className="pt-0">
                        {recentActivity.length > 0 ? (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-48">Action</TableHead>
                                        <TableHead>Details</TableHead>
                                        <TableHead className="text-right">Date</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {recentActivity.map((activity) => {
                                        const Icon = activity.icon;
                                        return (
                                            <TableRow key={activity.id}>
                                                <TableCell className="font-medium flex items-center gap-2">
                                                    <Icon className="h-4 w-4 text-muted-foreground" />
                                                    <span>{activity.action}</span>
                                                </TableCell>
                                                <TableCell>{activity.details}</TableCell>
                                                <TableCell className="text-right text-muted-foreground">{activity.date}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        ) : (
                            <div className="pt-6">
                                <p className="text-muted-foreground text-center">No recent activities.</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
