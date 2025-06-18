
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const messages = [
    { 
        id: 1, 
        category: 'Salary', 
        date: '2025-06-14', 
        encrypted: true, 
        content: 'Maaş değerlendirmesi olasılığını sormak istiyorum. Sorumluluklarımın arttığına ve performansımın bir ücret ayarlamasını hak ettiğine inanıyorum.',
        senderNickname: 'SilentWorker'
    },
    { 
        id: 2, 
        category: 'Culture', 
        date: '2025-06-12', 
        encrypted: true, 
        content: 'Daha fazla ekip kurma etkinliğinin şirket kültürü için faydalı olacağını düşünüyorum. Bu, bir ekip olarak daha iyi bağ kurmamıza yardımcı olacaktır.',
        senderNickname: 'TeamPlayer'
    },
    { 
        id: 3, 
        category: 'Other', 
        date: '2025-06-10', 
        encrypted: true, 
        content: 'Mola odasındaki kahve sürekli olarak kötü. Lütfen daha iyi bir kahve makinesi veya farklı kahve çekirdekleri almayı düşünür müsünüz?',
        senderNickname: 'CoffeeLover'
    },
];

const ReceivedMessages = () => {
    const [decryptedMessageId, setDecryptedMessageId] = useState<number | null>(null);
    const { toast } = useToast();

    const handleDecrypt = (id: number) => {
        setDecryptedMessageId(id);
        toast({
            title: "Message Decrypted",
            description: "The message has been decrypted using your private key.",
        });
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Received Messages</h1>
            <div className="space-y-4">
                {messages.map((message) => (
                    <Card key={message.id}>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="flex items-center gap-2">
                                        <Mail className="w-5 h-5"/>
                                        From: {message.senderNickname}
                                    </CardTitle>
                                    <CardDescription>Received on {message.date}</CardDescription>
                                </div>
                                <Badge variant="secondary">{message.category}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            {decryptedMessageId === message.id ? (
                                <p>{message.content}</p>
                            ) : (
                                <div className="flex items-center justify-center text-muted-foreground p-8 bg-muted/50 rounded-lg">
                                    <p>This message is encrypted.</p>
                                </div>
                            )}
                        </CardContent>
                        <CardFooter>
                            {decryptedMessageId !== message.id && (
                                <Button onClick={() => handleDecrypt(message.id)}>
                                    <Lock className="w-4 h-4 mr-2" />
                                    Decrypt Message
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ReceivedMessages;
