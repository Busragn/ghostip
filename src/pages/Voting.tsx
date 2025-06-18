
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const proposals = [
    { id: 1, title: 'Implement a 4-day work week', status: 'Active', votesFor: 65, votesAgainst: 35, ends: '3 days' },
    { id: 2, title: 'Upgrade office coffee machine', status: 'Active', votesFor: 80, votesAgainst: 20, ends: '5 days' },
    { id: 3, title: 'Increase budget for team-building activities', status: 'Closed', votesFor: 90, votesAgainst: 10, ends: '-' },
];


const Voting = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-6">Voting / DAO</h1>
        <div className="space-y-6">
            {proposals.map((proposal) => (
                <Card key={proposal.id}>
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <CardTitle>{proposal.title}</CardTitle>
                            <Badge variant={proposal.status === 'Active' ? 'default' : 'outline'}>{proposal.status}</Badge>
                        </div>
                        <CardDescription>
                            {proposal.status === 'Active' ? `Voting ends in ${proposal.ends}` : 'Voting has ended'}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <div className="flex justify-between mb-1 text-sm">
                                <span>For</span>
                                <span>{proposal.votesFor}%</span>
                            </div>
                            <Progress value={proposal.votesFor} className="h-2" />
                        </div>
                         <div>
                            <div className="flex justify-between mb-1 text-sm">
                                <span>Against</span>
                                <span>{proposal.votesAgainst}%</span>
                            </div>
                            <Progress value={proposal.votesAgainst} className="h-2 [&>div]:bg-destructive" />
                        </div>
                    </CardContent>
                    {proposal.status === 'Active' && (
                        <CardFooter className="gap-4">
                            <Button>Vote For</Button>
                            <Button variant="outline">Vote Against</Button>
                        </CardFooter>
                    )}
                </Card>
            ))}
        </div>
    </div>
  );
};

export default Voting;
