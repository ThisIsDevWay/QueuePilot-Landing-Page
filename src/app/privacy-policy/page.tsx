import PrivacyPolicyContent from '@/components/legal/PrivacyPolicyContent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
            <PrivacyPolicyContent />
        </CardContent>
      </Card>
    </div>
  );
}
