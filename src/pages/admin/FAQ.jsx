import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  ChevronDown,
  ChevronUp,
  ArrowLeft,
} from "lucide-react";

function FAQ() {
  const [openIndex, setOpenIndex] =
    useState(0);

  const faqs = [
    {
      question:
        "How can I place an order?",
      answer:
        "Browse products, add items to cart, proceed to checkout, and confirm your order using available payment methods.",
    },
    {
      question:
        "What payment methods are accepted?",
      answer:
        "We accept credit cards, debit cards, UPI, net banking and cash on delivery for eligible orders.",
    },
    {
      question:
        "How long does delivery take?",
      answer:
        "Standard delivery usually takes 3 to 7 business days depending on your location.",
    },
    {
      question:
        "Can I return or exchange products?",
      answer:
        "Yes, eligible products can be returned or exchanged within the allowed return window after delivery.",
    },
    {
      question:
        "How do I track my order?",
      answer:
        "Go to Your Orders from your account dashboard to track current shipment status.",
    },
    {
      question:
        "How can I contact support?",
      answer:
        "Visit the Contact Us page and submit your query or reach us via phone/email.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(
      openIndex === index
        ? -1
        : index
    );
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Back */}
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-6"
          >
            <ArrowLeft size={16} />
            back
          </NavLink>

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">
              Frequently Asked Questions
            </h1>

            <p className="text-gray-500 mt-3">
              Find answers about orders, shipping,
              returns, payments and support.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border overflow-hidden"
                >
                  <button
                    onClick={() =>
                      toggleFaq(
                        index
                      )
                    }
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-medium pr-4">
                      {
                        item.question
                      }
                    </span>

                    {openIndex ===
                    index ? (
                      <ChevronUp
                        size={20}
                      />
                    ) : (
                      <ChevronDown
                        size={20}
                      />
                    )}
                  </button>

                  {openIndex ===
                    index && (
                    <div className="px-5 pb-5 text-sm text-gray-600 leading-6 border-t">
                      <div className="pt-4">
                        {
                          item.answer
                        }
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default FAQ;