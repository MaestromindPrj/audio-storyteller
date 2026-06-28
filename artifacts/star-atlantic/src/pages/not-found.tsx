import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-4 px-8 py-16">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="h-10 w-10 text-red-500" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-3">404</h1>
        <p className="text-xl font-semibold text-gray-700 mb-3">Page Not Found</p>
        <p className="text-gray-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button
          onClick={() => setLocation("/")}
          className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base gap-2"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Button>
      </div>
    </div>
  );
}

