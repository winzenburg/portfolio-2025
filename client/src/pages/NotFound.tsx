import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import PageSeo from "@/components/PageSeo";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950">
      <PageSeo
        title="Page Not Found | Ryan Winzenburg"
        description="The page you requested could not be found."
        path="/404"
        noIndex
      />
      <Card className="w-full max-w-lg mx-4 shadow-lg border border-slate-800 bg-slate-900/80 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-900/40 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-red-400" />
            </div>
          </div>

          <p className="text-4xl font-bold text-white mb-2" aria-hidden="true">
            404
          </p>

          <h1 className="text-xl font-semibold text-slate-200 mb-4">
            Page Not Found
          </h1>

          <p className="text-slate-400 mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
