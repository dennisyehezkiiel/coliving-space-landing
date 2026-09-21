export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How much is the deposit and is it refundable?",
    answer:
      "One month's rent, held as a security deposit. It's refunded in full within 7 days of move-out, minus the cost of any damage beyond normal wear.",
  },
  {
    question: "Can I have guests stay over?",
    answer:
      "Day guests are welcome until 10 PM after signing in at the front desk. Overnight guests are allowed up to 3 nights a month with 24-hour notice to building management.",
  },
  {
    question: "What's the minimum stay duration?",
    answer:
      "Three months for a monthly plan. Yearly plans require a 12-month commitment but come with a lower effective monthly rate and a locked-in price.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Bank transfer, QRIS, and major e-wallets (GoPay, OVO, DANA). Rent is due on the 1st of each month, with a 3-day grace period.",
  },
  {
    question: "Is electricity included in the rent?",
    answer:
      "Water, Wi-Fi, and weekly cleaning are included. Electricity runs on a prepaid token system so you only pay for what you use.",
  },
];
