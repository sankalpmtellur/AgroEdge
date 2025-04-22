
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const MobileApplyButton = () => {
  const { t } = useLanguage();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="container-custom py-2 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <Link to="/apply">
          <Button className="w-full bg-agrodark hover:bg-agrodark/90 text-white">
            {t("apply_now")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileApplyButton;
