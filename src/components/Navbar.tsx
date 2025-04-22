import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Languages } from "lucide-react";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    // { name: t("home"), path: "/" },
    { name: t("apply_now"), path: "/apply" },
    { name: t("profit_calculator"), path: "/calculator" },
    { name: t("farm_layout"), path: "/farm-layout" },
    { name: t("success_stories"), path: "/success-stories" },
    { name: t("who_can_apply"), path: "/who-can-apply" },
    { name: t("faq"), path: "/faq" },
  ];

  const languages = [
    // Indian Languages
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी (Hindi)" },
    { code: "bho", name: "भोजपुरी (Bhojpuri)" },
    { code: "maith", name: "मैथिली (Maithili)" },
    { code: "bn", name: "বাংলা (Bengali)" },
    { code: "mr", name: "मराठी (Marathi)" },
    { code: "te", name: "తెలుగు (Telugu)" },
    { code: "ta", name: "தமிழ் (Tamil)" },
    { code: "gu", name: "ગુજરાતી (Gujarati)" },
    { code: "ur", name: "اردو (Urdu)" },
    { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
    { code: "or", name: "ଓଡ଼ିଆ (Odia)" },
    { code: "ml", name: "മലയാളം (Malayalam)" },
    { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)" },
    { code: "as", name: "অসমীয়া (Assamese)" },
    { code: "mai", name: "मैथिली (Maithili)" },
    { code: "sat", name: "संताली (Santali)" },
    { code: "ks", name: "कश्मीरी (Kashmiri)" },
    { code: "ne", name: "नेपाली (Nepali)" },
    { code: "kok", name: "कोंकणी (Konkani)" },
    { code: "sd", name: "سنڌي (Sindhi)" },
    { code: "doi", name: "डोगरी (Dogri)" },
    { code: "mni", name: "মৈতৈলোন্ (Manipuri)" },
    // International Languages
    { code: "zh", name: "中文 (Chinese)" },
    { code: "es", name: "Español (Spanish)" },
    { code: "pt", name: "Português (Portuguese)" },
    { code: "ru", name: "Русский (Russian)" },
    { code: "ja", name: "日本語 (Japanese)" },
    { code: "fr", name: "Français (French)" },
    { code: "de", name: "Deutsch (German)" },
    { code: "jv", name: "Basa Jawa (Javanese)" },
    { code: "ko", name: "한국어 (Korean)" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <nav className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-agrodark">AgroEdge</span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-2 flex items-center gap-1"
              >
                <Languages size={16} />
                <span className="text-sm font-medium">
                  {language.toUpperCase()}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="h-[300px] overflow-y-auto"
            >
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={language === lang.code ? "bg-secondary" : ""}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 text-agrodark"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-agrodark hover:bg-agrolight rounded-md transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="ml-4 flex items-center gap-1"
              >
                <Languages size={16} />
                <span className="text-sm font-medium">
                  {language.toUpperCase()}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="h-[300px] overflow-y-auto"
            >
              {/* Indian Languages */}
              {languages.slice(0, 21).map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={language === lang.code ? "bg-secondary" : ""}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              {/* International Languages */}
              {languages.slice(21).map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={language === lang.code ? "bg-secondary" : ""}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-agrodark hover:bg-agrolight rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
