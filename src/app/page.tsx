'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import yetImg from '@/assets/yet1.png';

import logoImg from '@/assets/logo2.png';

import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import bannerImg from '@/banners/banner.png';

export default function Home() {
    const [email, setEmail] = useState('');
 

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter your email address');
            return;
        }
        toast.success('Thank you for subscribing!');
        setEmail('');
    };

    return (<div className='relative'>
        <div className="relative min-h-screen overflow-hidden bg-[#181A20]">

            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#181A20] via-[#23263a] to-[#7c3aed]" />
                <div
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                        backgroundImage: "url('/patterns/grid.svg')",
                        backgroundSize: '50px 50px',
                    }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 2 }}
                    className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 rounded-full blur-3xl"
                />
            </div>

            {/* Main content */}
            <div className="relative">
                {/* Banner Image */}
                <div className="max-w-3xl mx-auto px-4 pt-8">
                    <img
                        srcSet={bannerImg.src}
                        alt="stake Banner"
                        className="w-[100%]  h-auto object-cover"
                    />
                </div>
                {/* Info Box: Deposit & Connect Wallet */}

                {/* 
                <div className="max-w-3xl mx-auto px-4 mt-5 mb-4">
                    <div className="bg-[#10131c] border border-[#63e880] shadow-xl rounded-2xl p-4 flex flex-col items-center text-center">
                        <h2
                            className="text-lg md:text-xl font-bold mb-2 font-display text-[#63e880] text-shadow-[0_0_6px_#9660ae,0_0_12px_#8d75ab]"
                        >
                            IMPORTANT PLEASE READ.
                        </h2>
                        <p
                            className="mb-1 font-body text-[#63e880] text-shadow-[0_0_6px_#9660ae,0_0_12px_#8d75ab]"
                        >
                            WALLET CONNECT IS ONLY BEING USED TO SIGN INTO THE YETbet PLATFORM.
                        </p>
                        <p
                            className="mb-1 font-body text-[#63e880] text-shadow-[0_0_6px_#9660ae,0_0_12px_#8d75ab]"
                        >
                            You will know you are logged on when your yet balance appears. This balance is your YETbet Platform balance not your phantom or solflare wallet balance.
                        </p>
                    </div>
                </div> */}

                {/* <div className="alert alert-info mt-4 max-w-xl mx-auto">
                <span>
                    <strong>Note:</strong> Connecting your wallet logs you into YETbet. Token balances shown here are stored on the platform, not in your wallet.
                </span>
                </div> */}
                {/* Hero Section */}
                <section className="flex items-center justify-center px-4 py-10 pt-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h1 className="text-4xl md:text-6xl mb-8 font-bold text-white tracking-tight leading-tight drop-shadow-xl uppercase">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 animate-gradient-x">
                                    Wildly Original,
                                </span>
                                <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary animate-gradient-x">
                                    Ridiculously Outrageous
                                </span>
                            </h1>
                            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                                The One-of-kind Parimutuel Predictions Market for Celebrity Tweets.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-14">
                                <Link
                                    href="https://yetbet.app"
                                    target="_blank"
                                    className="bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-full px-8 py-4 shadow-lg hover:scale-105 hover:from-blue-600 hover:to-primary transition-all duration-200 flex items-center justify-center"
                                >
                                    Launch App
                                    <FiArrowRight className="ml-2 text-white" />
                                </Link>
                                <Link
                                    href="https://yetbet.app/rules"
                                    target="_blank"
                                    className="border-2 border-primary text-white font-bold rounded-full px-8 py-4 bg-transparent hover:bg-primary/10 transition-all duration-200 flex items-center justify-center"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* About Section */}
                <motion.section
                    id="about"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-20 px-4"
                >
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                        {/* Left: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="flex-1 min-w-0"
                        >
                            <div className="flex flex-col items-center gap-3 mb-4">
                                <img srcSet={logoImg.src} alt="YETbet Logo" className="w-15 h-auto rounded-full" />
                                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                                    We are Talking About <span className="text-[#e879f9]">YETbet</span>
                                </h2>
                                <div className="h-1 w-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-0 mx-auto" />
                            </div>
                            <p className="text-gray-200 mb-6">
                                Welcome to <span className="font-bold text-white">YETbet</span> – the world's first pari-mutuel predictions market based entirely on the Twitter activity of the Internet's most unpredictable personalities.<br />
                                Compete against others predicting the tweets of the YUGE 3 and win $YET:
                            </p>
                            <div className="mb-6 space-y-3">
                                {[
                                    {
                                        img: '/avatars/ye.png',
                                        name: '@KanyeWest',
                                        desc: 'The artistic genius whose timeline is as unpredictable as his next album',
                                    },
                                    {
                                        img: '/avatars/elon.png',
                                        name: '@ElonMusk',
                                        desc: 'The technoking whose tweets launch rockets and cryptocurrencies',
                                    },
                                    {
                                        img: '/avatars/trump.png',
                                        name: '@DonaldJTrump',
                                        desc: 'The political firebrand whose tweets keep the internet on its toes',
                                    },
                                ].map((user, idx) => (
                                    <motion.div
                                        key={user.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="flex items-start gap-2"
                                    >
                                        <img src={user.img} alt={user.name} className="w-7 h-auto rounded-full" />
                                        <span className='text-gray-400'><span className="font-bold text-white">{user.name}</span> – {user.desc}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-gray-400">
                                In a digital landscape where tweets move markets and shape culture, we've created a platform that turns social media chaos into your winning opportunity.
                            </p>
                        </motion.div>
                        {/* Right: Tweet Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="flex-1 flex justify-center min-w-0"
                        >
                            <div className="bg-[#181A20] border border-[#23263a] rounded-2xl shadow-xl p-6 max-w-xs w-full">
                                <div className="flex items-center gap-3 mb-2">
                                    <img src="/avatars/elon.png" alt="Elon Musk" className="w-10 h-10 rounded-full" />
                                    <div>
                                        <div className="font-bold text-white">Elon Musk</div>
                                        <div className="text-gray-400 text-sm">@ElonMusk</div>
                                    </div>
                                </div>
                                <div className="text-white text-lg mb-3">Doge to the moon!! 🚀🚀🚀</div>
                                <div className="text-gray-500 text-xs">2:30 AM · Apr 18, 2025</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>


                {/* How It Works Section */}
                <motion.section
                    id="howitworks"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-20 px-4"
                >
                    <div className="max-w-7xl mx-auto">
                        {/* Section Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center gap-3 mb-4"
                        >
                            <img srcSet={logoImg.src} alt="YETbet Logo" className="w-15 h-auto rounded-full" />
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                                How It Works: <span className="text-[#38bdf8]">Yetting on the Twitterverse</span>
                            </h2>
                            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-0 mx-auto" />
                        </motion.div>

                        {/* Daily Proposition Cycle Stepper */}
                        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                            {[
                                {
                                    step: 1,
                                    title: 'Proposition Creation',
                                    desc: 'At 12:01 AM daily, fresh propositions drop',
                                },
                                {
                                    step: 2,
                                    title: 'Yetting Window',
                                    desc: 'Place your yets until 11:59 PM using $YET tokens',
                                },
                                {
                                    step: 3,
                                    title: 'Tweet Analysis',
                                    desc: 'Our system monitors and analyzes Twitter activity',
                                },
                                {
                                    step: 4,
                                    title: 'Settlement',
                                    desc: 'Winners determined at midnight, rewards distributed automatically',
                                },
                            ].map((item, idx, arr) => (
                                <React.Fragment key={item.step}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className="flex-1 bg-[#181A20] border border-[#23263a] rounded-2xl shadow-lg p-6 min-w-[220px] relative flex flex-col items-center"
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-white font-bold text-lg mb-2">
                                            {item.step}
                                        </div>
                                        <div className="font-bold text-white text-lg mb-1 text-center">{item.title}</div>
                                        <div className="text-gray-400 text-center text-sm">{item.desc}</div>
                                        {/* Horizontal line for desktop */}
                                        {idx < arr.length - 1 && (
                                            <div className="hidden md:block absolute right-[-32px] top-1/2 transform -translate-y-1/2">
                                                <svg width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="2" rx="1" fill="#38bdf8" /></svg>
                                            </div>
                                        )}
                                    </motion.div>
                                    {/* Vertical line for mobile */}
                                    {idx < arr.length - 1 && (
                                        <div className="md:hidden w-px h-8 mx-auto bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Proposition Types Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-xl font-bold text-white mb-6"
                        >
                            Proposition Types:
                        </motion.div>

                        {/* Proposition Types Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    img: '/avatars/ye.png',
                                    label: 'Boolean',
                                    labelColor: 'text-blue-400',
                                    title: 'Yes/No predictions',
                                    example: 'Example: Will Ye tweet about \'Water Bottles\' today?',
                                    tweet: {
                                        img: '/avatars/ye.png',
                                        user: '@kanyewest',
                                        text: "I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle",
                                    },
                                },
                                {
                                    img: '/avatars/elon.png',
                                    label: 'Word Count',
                                    labelColor: 'text-blue-400',
                                    title: 'Predict tweet length',
                                    example: 'Example: How many words in Elon\'s longest tweet?',
                                    tweet: {
                                        img: '/avatars/elon.png',
                                        user: '@elonmusk',
                                        text: 'Due to inflation 420 has gone up by 69',
                                    },
                                },
                                {
                                    img: '/avatars/trump.png',
                                    label: 'Word Analyzer',
                                    labelColor: 'text-pink-400',
                                    title: 'Specific word appearances',
                                    example: 'Example: Will Trump use "Nuclear" today?',
                                    tweet: {
                                        img: '/avatars/trump.png',
                                        user: '@realDonaldTrump',
                                        text: 'North Korea Leader Kim Jong Un just stated that the "Nuclear Button is on his desk at all times." Will someone from his depleted and food starved regime please inform him that I too have a Nuclear Button, but it is a much bigger & more powerful one than his, and my Button works!',
                                    },
                                },
                                {
                                    img: '/avatars/ye.png',
                                    img2: '/avatars/elon.png',
                                    label: 'First/Last Tweet',
                                    labelColor: 'text-blue-400',
                                    title: 'Timing predictions',
                                    example: 'Example: Who will tweet first this morning?',
                                    tweet: {
                                        img: '/avatars/ye.png',
                                        user: '@kanyewest',
                                        text: 'sometimes I push the door close button on people running toward the elevator. I just need my own elevator sometimes, my 1st floor sanctuary',
                                    },
                                },
                                {
                                    img: '/avatars/elon.png',
                                    label: 'Total Tweets',
                                    labelColor: 'text-pink-400',
                                    title: 'Volume predictions',
                                    example: 'Example: How many tweets will Elon post today?',
                                },
                            ].map((type, idx) => (
                                <motion.div
                                    key={type.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="bg-[#181A20] border border-[#23263a] rounded-2xl shadow-lg p-6 flex flex-col"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <img src={type.img} alt={type.label} className="w-7 h-auto rounded-full" />
                                        {type.img2 && <img src={type.img2} alt={type.label + ' 2'} className="w-7 h-auto rounded-full" />}
                                        <span className={`font-bold ${type.labelColor}`}>{type.label}</span>
                                    </div>
                                    <div className="text-white font-semibold mb-1">{type.title}</div>
                                    <div className="text-sm text-gray-400 mb-2 italic" style={{ color: '#00fff7', textShadow: '0 0 6px #00fff7, 0 0 12px #00fff7' }}>{type.example}</div>
                                    {type.tweet && (
                                        <div className="bg-[#23263a] rounded-xl p-3 mt-auto">
                                            <div className="flex items-center gap-2 mb-1">
                                                <img src={type.tweet.img} alt={type.tweet.user} className="w-6 h-auto rounded-full" />
                                                <span className="text-white text-sm">{type.tweet.user}</span>
                                            </div>
                                            <div className="text-gray-200 text-xs">{type.tweet.text}</div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Features Section */}
                <motion.section
                    id="features"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-20 px-4"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col items-center gap-3 mb-4">
                            <img srcSet={logoImg.src} alt="YETbet Logo" className="w-15 h-auto rounded-full" />
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                                Features That Make YETbet <span className="text-pink-400">F***ing Awesome</span>
                            </h2>
                            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-0 mx-auto" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: '📅',
                                    title: '8+ Daily Tweet Propositions',
                                    desc: 'Never a dull moment with fresh yetting opportunities every single day',
                                },
                                {
                                    icon: '🏆',
                                    title: 'Daily & Weekly Tournaments',
                                    desc: 'Compete for massive prize pools in special-themed competitions',
                                },
                                {
                                    icon: '⭐',
                                    title: 'Celebrity Tweet Challenges',
                                    desc: 'Special events when celebrities go head-to-head in tweet battles',
                                },
                                {
                                    icon: '📈',
                                    title: 'Leaderboards',
                                    desc: 'Climb the ranks and establish yourself as the ultimate tweet prophet',
                                },
                                {
                                    icon: '👥',
                                    title: 'Leagues',
                                    desc: 'Form teams, join private leagues, and battle for group supremacy',
                                },
                            ].map((feature, idx) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="bg-gradient-to-br from-[#23263a] to-[#181A20] border border-[#23263a] rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-3xl transition-transform duration-300"
                                >
                                    <span className="text-5xl mb-3 drop-shadow-lg">{feature.icon}</span>
                                    <div className="text-white font-bold text-lg mb-1">{feature.title}</div>
                                    <div className="text-gray-400 text-base">{feature.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* $YET Token Section */}
                <motion.section
                    id="token"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-20 px-4"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col items-center gap-3 mb-4">
                            <img srcSet={logoImg.src} alt="YETbet Logo" className="w-15 h-auto rounded-full" />
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                                The <span className="text-blue-400">$YET Token</span>: Your Key to the Twitterverse
                            </h2>
                            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-0 mx-auto" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="flex-1 min-w-0"
                            >
                                <p className="text-gray-200 mb-6 text-lg">
                                    The $YET token isn't just a yetting chip – it's your membership card to the wildest prediction community on the internet. Holders of <span className="font-bold text-white">4,000,000+ $YET</span> tokens receive a share of platform fees, creating a virtuous cycle of participation and rewards.<br />
                                    <span className="font-bold text-white">Token Utility:</span>
                                </p>
                                <ul className="space-y-3 text-base">
                                    <li className="flex items-center gap-2 text-purple-400 font-medium"><FiCheck className="text-blue-400" /> Place yets on propositions</li>
                                    <li className="flex items-center gap-2 text-purple-400 font-medium"><FiCheck className="text-blue-400" /> Enter tournaments and special events</li>
                                    <li className="flex items-center gap-2 text-purple-400 font-medium"><FiCheck className="text-blue-400" /> Receive platform fee distributions (for qualifying holders)</li>
                                    <li className="flex items-center gap-2 text-purple-400 font-medium"><FiCheck className="text-blue-400" /> Governance rights for future platform development</li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="flex-1 flex justify-center min-w-0"
                            >
                                <img src={yetImg.src} alt="$YET Token" className="w-58 h-58 object-cover rounded-full border-[#23263a] shadow-2xl" />
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Roadmap Section */}
                <motion.section
                    id="roadmap"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-20 px-4"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col items-center gap-3 mb-4">
                            <img srcSet={logoImg.src} alt="YETbet Logo" className="w-15 h-auto rounded-full" />
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                                The Future: <span className="text-pink-400">Beyond The YUGE 3</span>
                            </h2>
                            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-0 mx-auto" />
                        </div>
                        <div className="relative">
                            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full -translate-x-1/2 z-0" style={{ minHeight: '100%' }} />
                            <div className="space-y-24 relative z-10">
                                {[
                                    {
                                        quarter: 'Q2 2025: MVP Launch',
                                        color: 'text-blue-300',
                                        items: [
                                            'Launch with The YUGE 3',
                                            'Daily propositions',
                                            'Basic yetting functionality',
                                            'Wallet integration',
                                        ],
                                    },
                                    {
                                        quarter: 'Q3 2025: Expanded Celebrity Roster',
                                        color: 'text-pink-300',
                                        items: [
                                            'Add 10+ new celebrities',
                                            'Implement tournaments',
                                            'Launch mobile app',
                                            'Enhanced analytics',
                                        ],
                                    },
                                    {
                                        quarter: 'Q4 2025: Social Features',
                                        color: 'text-purple-300',
                                        items: [
                                            'Social sharing',
                                            'Friend challenges',
                                            'Custom leagues',
                                            'Expanded proposition types',
                                        ],
                                    },
                                    {
                                        quarter: 'Q1 2026: Global Expansion',
                                        color: 'text-blue-300',
                                        items: [
                                            'International celebrities',
                                            'Multi-language support',
                                            'Advanced AI prediction tools',
                                            'Cross-platform integration',
                                        ],
                                    },
                                ].map((roadmap, idx) => (
                                    <motion.div
                                        key={roadmap.quarter}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, delay: idx * 0.1 }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="bg-[#181A20] border border-[#23263a] rounded-2xl shadow-lg p-8 w-full md:w-3/4 mb-4">
                                            <div className={`text-lg font-bold mb-2 ${roadmap.color}`}>{roadmap.quarter}</div>
                                            <ul className="list-disc list-inside text-gray-200 space-y-1">
                                                {roadmap.items.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-pink-400 border-4 border-[#181A20] mb-4" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* How to Get Started Section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-20 px-4"
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Get Started in Minutes</h2>
                            <p className="text-xl text-gray-400">Follow these simple steps to begin your journey</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                {
                                    step: '01',
                                    title: 'Create Account',
                                    description: 'Connect your Solana wallet to get started',
                                },
                                {
                                    step: '02',
                                    title: 'Deposit Funds',
                                    description: 'Add YET tokens to your account',
                                },
                                {
                                    step: '03',
                                    title: 'Browse Markets',
                                    description: 'Explore available propositions',
                                },
                                {
                                    step: '04',
                                    title: 'Start Staking',
                                    description: 'Place your first stake and win!',
                                },
                            ].map((step, index, arr) => (
                                <React.Fragment key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        <div className="bg-gradient-to-br from-[#23263a] to-[#181A20] border border-[#23263a] rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-3xl transition-transform duration-300">
                                            <div className="text-4xl font-bold text-primary mb-4 drop-shadow-lg">{step.step}</div>
                                            <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                                            <p className="text-gray-400 text-base">{step.description}</p>
                                        </div>
                                        {/* Desktop arrow */}
                                        {index < arr.length - 1 && (
                                            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                                                <FiArrowRight className="w-8 h-8 text-primary" />
                                            </div>
                                        )}
                                    </motion.div>
                                    {/* Vertical line for mobile */}
                                    {index < arr.length - 1 && (
                                        <div className="md:hidden w-px h-8 mx-auto bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Newsletter Section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-20 px-4"
                >
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-br from-[#23263a] to-[#181A20] border border-[#23263a] rounded-2xl shadow-2xl p-8"
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Stay Updated</h2>
                                <p className="text-gray-400">Get notified about new propositions and platform updates</p>
                            </div>
                            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                                <div className="flex flex-col sm:flex-row gap-4 w-full">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="flex-1 bg-base-300 border border-base-400 rounded-full px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-primary to-blue-500 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:scale-105 transition-transform w-full sm:w-auto"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Enhanced CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-20 px-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Ready to Start YETTING?</h2>
                            <p className="text-xl text-gray-300">Join the most exciting prediction market on Solana</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                                <Link
                                    href="https://yetbet.app"
                                    target="_blank"
                                    className="bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-full px-8 py-4 shadow-lg hover:scale-105 hover:from-blue-600 hover:to-primary transition-all duration-200 flex items-center justify-center"
                                >
                                    Launch App
                                    <FiArrowRight className="ml-2 text-white" />
                                </Link>
                                <Link
                                    href="https://yetbet.app/rules"
                                    target="_blank"
                                    className="border-2 border-primary text-white font-bold rounded-full px-8 py-4 bg-transparent hover:bg-primary/10 transition-all duration-200 flex items-center justify-center"
                                >
                                    Read the Rules
                                </Link>
                            </div>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                {['Secure Platform', '24/7 Support', 'Instant Payouts', 'Fair Odds'].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center gap-2 text-gray-300 bg-[#23263a] rounded-full px-4 py-2 shadow"
                                    >
                                        <FiCheck className="text-primary" />
                                        <span>{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    </div>);
}
