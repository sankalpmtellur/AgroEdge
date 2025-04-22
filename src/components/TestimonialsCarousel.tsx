
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsCarousel = () => {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = {
    en: [
      {
        name: "Rajesh Kumar",
        location: "Haryana",
        quote: "I was skeptical at first, but now my dairy farm is earning me three times more than my previous job.",
        farmType: "Dairy",
        earnings: "₹42,000/month",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
      {
        name: "Priya Sharma",
        location: "Punjab",
        quote: "The training was excellent and the support team helped me set up my farm smoothly. Now I'm financially independent.",
        farmType: "Dairy",
        earnings: "₹35,000/month",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      },
      {
        name: "Amit Patel",
        location: "Gujarat",
        quote: "Biofloc farming changed my life. The initial investment was taken care of, and now I'm earning consistently.",
        farmType: "Biofloc",
        earnings: "₹38,000/month",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
      {
        name: "Sunita Devi",
        location: "Bihar",
        quote: "As a woman farmer, I found tremendous support from AgroEdge. My dairy farm is now a model for others in my village.",
        farmType: "Dairy",
        earnings: "₹40,000/month",
        image: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
    ],
    hi: [
      {
        name: "राजेश कुमार",
        location: "हरियाणा",
        quote: "शुरू में मुझे संदेह था, लेकिन अब मेरा डेयरी फार्म मुझे पिछली नौकरी से तीन गुना अधिक कमा रहा है।",
        farmType: "डेयरी",
        earnings: "₹42,000/महीना",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
      {
        name: "प्रिया शर्मा",
        location: "पंजाब",
        quote: "प्रशिक्षण उत्कृष्ट था और सपोर्ट टीम ने मेरा फार्म आसानी से स्थापित करने में मदद की। अब मैं आर्थिक रूप से स्वतंत्र हूँ।",
        farmType: "डेयरी",
        earnings: "₹35,000/महीना",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      },
      {
        name: "अमित पटेल",
        location: "गुजरात",
        quote: "बायोफ्लॉक खेती ने मेरी जिंदगी बदल दी। प्रारंभिक निवेश का ध्यान रखा गया था, और अब मैं लगातार कमा रहा हूं।",
        farmType: "बायोफ्लॉक",
        earnings: "₹38,000/महीना",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
      {
        name: "सुनीता देवी",
        location: "बिहार",
        quote: "एक महिला किसान के रूप में, मुझे एग्रोएज से जबरदस्त समर्थन मिला। मेरा डेयरी फार्म अब मेरे गांव में दूसरों के लिए एक मॉडल है।",
        farmType: "डेयरी",
        earnings: "₹40,000/महीना",
        image: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
    ],
    pa: [
      {
        name: "ਰਾਜੇਸ਼ ਕੁਮਾਰ",
        location: "ਹਰਿਆਣਾ",
        quote: "ਪਹਿਲਾਂ ਮੈਨੂੰ ਸ਼ੱਕ ਸੀ, ਪਰ ਹੁਣ ਮੇਰਾ ਡੇਅਰੀ ਫਾਰਮ ਮੇਰੀ ਪਿਛਲੀ ਨੌਕਰੀ ਤੋਂ ਤਿੰਨ ਗੁਣਾ ਜ਼ਿਆਦਾ ਕਮਾ ਰਿਹਾ ਹੈ।",
        farmType: "ਡੇਅਰੀ",
        earnings: "₹42,000/ਮਹੀਨਾ",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
      // Add more Punjabi testimonials
    ],
    mr: [
      {
        name: "राजेश कुमार",
        location: "हरयाणा",
        quote: "सुरुवातीला मला संशय होता, पण आता माझे डेअरी फार्म माझ्या आधीच्या नोकरीपेक्षा तीन पट अधिक कमवत आहे.",
        farmType: "दुग्ध व्यवसाय",
        earnings: "₹42,000/महिना",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
      // Add more Marathi testimonials
    ],
    gu: [
      {
        name: "રાજેશ કુમાર",
        location: "હરિયાણા",
        quote: "શરૂઆતમાં મને શંકા હતી, પરંતુ હવે મારું ડેરી ફાર્મ મને મારી પહેલાની નોકરી કરતાં ત્રણ ગણું વધારે કમાણી કરે છે.",
        farmType: "ડેરી",
        earnings: "₹42,000/મહિનો",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
      // Add more Gujarati testimonials
    ],
    bho: [
      {
        name: "राजेश कुमार",
        location: "हरियाणा",
        quote: "पहिले हमके शक रहल, लेकिन अब हमार डेयरी फार्म हमके पहिले के नौकरी से तीन गुना ज्यादा कमाई करावत बा।",
        farmType: "डेयरी",
        earnings: "₹42,000/महीना",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
      // Add more Bhojpuri testimonials
    ]
  };

  // Get testimonials for current language, fallback to English if not available
  const currentTestimonials = testimonials[language] && testimonials[language].length > 0 
    ? testimonials[language]
    : testimonials.en;

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentTestimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentTestimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length);
  };

  return (
    <div className="relative w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-agrodark">
        {t("testimonials")}
      </h2>
      
      <div className="overflow-hidden relative">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {currentTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="mb-4">
                      <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">{testimonial.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">{testimonial.farmType}</p>
                          <p className="font-bold text-agrodark">{testimonial.earnings}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        {currentTestimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full h-3 w-3 p-0 ${
              currentSlide === index 
                ? "bg-agrodark border-agrodark" 
                : "bg-gray-200 border-gray-300"
            }`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
