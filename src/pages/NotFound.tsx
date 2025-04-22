
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-agrolight">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4 text-agrodark">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! We couldn't find the page you were looking for.
        </p>
        <Link to="/">
          <Button className="bg-agrodark hover:bg-agrodark/90">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
