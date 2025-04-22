
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  limit?: number;
}

const FAQAccordion = ({ items, limit }: FAQAccordionProps) => {
  // If limit is provided, only show that many items
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <Accordion type="single" collapsible className="w-full">
      {displayItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
