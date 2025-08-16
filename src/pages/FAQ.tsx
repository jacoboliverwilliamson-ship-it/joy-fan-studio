import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Are the fans hand-made?",
      answer: "Yes—made by women artisans in Nigeria; small-batch finishes vary."
    },
    {
      question: "How big are they?",
      answer: "Compact when folded (≈23–25 cm); open to a full circle (≈38–42 cm)."
    },
    {
      question: "Do you ship outside the UK?",
      answer: "UK-first. International coming soon."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Add a gift note at checkout (coming soon)."
    },
    {
      question: "What materials are used?",
      answer: "Premium Ankara cotton fabrics with genuine leather handles, hand-stitched for durability."
    },
    {
      question: "How do I care for my fan?",
      answer: "Spot clean fabric with a damp cloth. Condition leather handle sparingly. Keep dry."
    },
    {
      question: "Can I return my fan?",
      answer: "Yes, we offer 30-day returns for unused items in original condition."
    },
    {
      question: "How long does shipping take?",
      answer: "We ship within 2-4 business days across the UK via tracked delivery."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-kola mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our Nigerian folding fans and ordering process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-kola">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;