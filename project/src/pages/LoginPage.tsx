import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/services/apiService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const dummyCredentials = [
    { role: 'Admin', email: 'admin@foodbridge.com', password: 'admin123', path: '/admin' },
    { role: 'Donor', email: 'donor@foodbridge.com', password: 'donor123', path: '/donor' },
    { role: 'NGO', email: 'ngo@foodbridge.com', password: 'ngo123', path: '/ngo' },
    { role: 'Volunteer', email: 'volunteer@foodbridge.com', password: 'volunteer123', path: '/volunteer' },
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authService.login({ email, password });
      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.userId.toString());
      localStorage.setItem('role', response.role);
      
      const roleMap: Record<string, string> = {
        'ADMIN': '/admin',
        'DONOR': '/donor',
        'NGO': '/ngo',
        'VOLUNTEER': '/volunteer'
      };
      
      navigate(roleMap[response.role] || '/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const quickLogin = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">🍽️ FoodBridge Login</CardTitle>
            <CardDescription>Enter your credentials to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl">🔐 Quick Login</CardTitle>
            <CardDescription>Click to auto-fill credentials</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {dummyCredentials.map((cred) => (
              <Button
                key={cred.role}
                variant="outline"
                className="w-full justify-start text-left"
                onClick={() => quickLogin(cred.email, cred.password)}
              >
                <div className="flex flex-col items-start">
                  <span className="font-semibold">{cred.role}</span>
                  <span className="text-xs text-muted-foreground">{cred.email}</span>
                </div>
              </Button>
            ))}
            <div className="mt-4 p-3 bg-blue-50 rounded-md text-sm">
              <p className="font-semibold mb-2">All passwords: </p>
              <p className="text-muted-foreground">admin123, donor123, ngo123, volunteer123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
