'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Rules page component
 * Displays the platform rules and guidelines
 */
const RulesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto relative px-2 md:px-0">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10">Platform Rules</h1>
      <div className="bg-[#23263a]/80 border border-base-300 shadow-2xl rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-primary mb-8">YETbet Rules &amp; Guidelines</h2>
        <div className="space-y-10">
          <section>
            <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">1. Introduction</h3>
            <p className="text-gray-300 md:text-lg leading-relaxed">
              YETbet is a Pari-Mutuel Tweet-Based Futures Market platform that allows users to bet 
              YET tokens on predicting future tweets from high-profile Twitter accounts. This document 
              outlines the rules and guidelines for using the platform.
            </p>
          </section>
          <section>
            <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">2. Account &amp; Wallet</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-400 marker:text-primary">
              <li>User accounts are tied to Solana wallet addresses connected via Phantom or Solflare.</li>
              <li>Each user receives a unique PDA-derived deposit address for sending YET tokens.</li>
              <li>All platform funds are stored in a secure escrow wallet.</li>
              <li>Users are responsible for maintaining the security of their wallet credentials.</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">3. Deposits &amp; Withdrawals</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-400 marker:text-primary">
              <li>Minimum deposit amount: {process.env.NEXT_PUBLIC_MIN_DEP_AMOUNT} YET</li>
              <li>Deposits require a minimum of 2 network confirmations before being credited.</li>
              <li>Minimum withdrawal amount: {process.env.NEXT_PUBLIC_MIN_WD_AMOUNT} YET</li>
              <li>Maximum daily withdrawal amount: {process.env.NEXT_PUBLIC_MAX_WD_AMOUNT} YET</li>
              <li>First-time withdrawals may require additional verification for security purposes.</li>
              <li>Withdrawal processing is automatic but may take up to 24 hours during high-volume periods.</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">4. Propositions &amp; Betting</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-400 marker:text-primary">
              <li>8 new propositions are created daily about future tweets from high-profile accounts.</li>
              <li>Propositions have a specified start and end time for accepting bets.</li>
              <li>Minimum bet amount: {process.env.NEXT_PUBLIC_MIN_BET_AMOUNT} YET</li>
              <li>Maximum bet amount: {process.env.NEXT_PUBLIC_MAX_BET_AMOUNT} YET</li>
              <li>All bets follow the parimutuel betting model, where payouts are calculated based on the total pool size and distribution of bets.</li>
              <li>Once a bet is placed, it cannot be canceled or modified.</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">5. Fees</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-400 marker:text-primary">
              <li>Standard platform fee: 5% of the total betting pool</li>
              <li>Reduced fee for YET token holders: 5% (applies to users holding 4,000,000+ YET tokens)</li>
              <li>No fees on deposits</li>
              <li>Network fees may apply to withdrawals (deducted from the withdrawal amount)</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">6. Settlement &amp; Payouts</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-400 marker:text-primary">
              <li>Proposition outcomes are determined based on the actual tweets posted by the specified Twitter accounts within the defined timeframe.</li>
              <li>The platform administrators have final authority on determining outcomes based on the published criteria.</li>
              <li>In case a proposition cannot be settled due to unforeseen circumstances (account suspension, technical issues, etc.), all bets will be refunded in full.</li>
              <li>Winnings are automatically credited to user balances upon settlement.</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">7. Prohibited Activities</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-400 marker:text-primary">
              <li>Creating multiple accounts to circumvent limits or manipulate odds</li>
              <li>Any form of collusion to manipulate betting outcomes</li>
              <li>Exploiting technical vulnerabilities or bugs in the platform</li>
              <li>Using the platform for money laundering or other illegal activities</li>
              <li>Attempts to reverse-engineer or bypass platform security measures</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">8. Dispute Resolution</h3>
            <p className="text-gray-300 md:text-lg leading-relaxed">
              Any disputes regarding proposition outcomes, bet settlement, or platform operation should be submitted to the platform administrators via the official support channels. The administrators will review all evidence and make a final determination based on the platform rules and the specific circumstances of the case.
            </p>
          </section>
          <section>
            <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-2">9. Amendments</h3>
            <p className="text-gray-300 md:text-lg leading-relaxed">
              These rules may be amended from time to time at the discretion of the platform administrators. Users will be notified of significant changes, and continued use of the platform after such notification constitutes acceptance of the modified rules.
            </p>
          </section>
        </div>
        <div className="mt-12 pt-8 border-t border-base-300">
          <p className="text-base text-gray-400 mb-8">
            By using the YETbet platform, you acknowledge that you have read, understood, and agree to abide by these rules and guidelines.
          </p>
          <Link href="/propositions" className="bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-full px-8 py-4 shadow-lg hover:scale-105 transition text-lg flex items-center justify-center">
            View Propositions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;