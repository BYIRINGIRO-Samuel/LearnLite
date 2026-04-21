import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, BookOpen, Clock, Users, Star, ArrowRight, Shield, Zap, Sparkles, GraduationCap, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      title: 'Smart Note Organization',
      description: 'Automatically categorize and tag your notes with our AI-powered organization system.',
      icon: <Sparkles className="w-6 h-6 text-[#349156]" />
    },
    {
      title: 'Real-time Collaboration',
      description: 'Work together with classmates on shared assignments and projects in real-time.',
      icon: <Users className="w-6 h-6 text-[#349156]" />
    },
    {
      title: 'Instant Resource Sharing',
      description: 'Upload and share PDFs, videos, and study guides with your community instantly.',
      icon: <BookOpen className="w-6 h-6 text-[#349156]" />
    },
    {
      title: 'Secure Progress Tracking',
      description: 'Monitor your learning journey with end-to-end encrypted progress analytics.',
      icon: <Shield className="w-6 h-6 text-[#349156]" />
    }
  ];

  const faqs = [
    {
      question: "What exactly is NotoSpace?",
      answer: "NotoSpace is a collaborative digital workspace designed specifically for students and educators. It combines note-taking, file sharing, and project management in one seamless platform."
    },
    {
      question: "Is my data secure on the platform?",
      answer: "Absolutely. We use industry-standard encryption for all your notes and shared files. Your private study space remains private."
    },
    {
      question: "Can I use NotoSpace for group projects?",
      answer: "Yes! NotoSpace's core feature is real-time collaboration. You can create shared notebooks and work together with your team synchronously."
    }
  ];

  const partners = ["Stanford University", "MIT", "Oxford", "Harvard", "Cambridge"];

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-900 overflow-x-hidden">
      
      {/* Fixed Navbar - Slightly gray with glass effect */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 pointer-events-none">
        <nav className="max-w-7xl w-full bg-gray-100/90 backdrop-blur-xl border border-gray-200 rounded-3xl px-8 py-4 flex items-center justify-between shadow-lg pointer-events-auto animate-in fade-in slide-in-from-top duration-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#349156] rounded-full flex items-center justify-center shadow-md shadow-[#349156]/20">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-extrabold text-gray-900 tracking-tighter">NotoSpace</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#hero" className="text-[#349156] font-bold text-sm tracking-tight hover:opacity-80">Home</a>
            <a href="#features" className="text-gray-500 font-semibold text-sm hover:text-[#349156] transition">Features</a>
            <a href="#social-proof" className="text-gray-500 font-semibold text-sm hover:text-[#349156] transition">Community</a>
            <a href="#faq" className="text-gray-500 font-semibold text-sm hover:text-[#349156] transition">Q&A</a>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/login" className="text-gray-600 font-bold text-sm hover:text-[#349156] transition">Sign In</Link>
            <Link to="/signup" className="px-8 py-3 bg-white text-[#349156] border border-[#349156]/20 rounded-2xl font-bold text-sm hover:bg-[#349156] hover:text-white transition shadow-sm">
              Get Started
            </Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-white">
        {/* Background Innovative Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f7faf9] -z-10 rounded-l-[100px] overflow-hidden">
           <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#349156]/5 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-orange-400/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div id="hero" className="flex flex-col md:flex-row items-center gap-16 relative">
            
            {/* Left Content */}
            <div className="flex-1 space-y-8 z-10 animate-in fade-in slide-in-from-left duration-1000">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1 bg-[#349156]/10 text-[#349156] rounded-full font-bold text-xs tracking-widest uppercase">The future of study</span>
                <h1 className="text-5xl md:text-6xl font-black leading-tight text-gray-900 tracking-tight">
                  Master Your <br />
                  <span className="text-[#349156]">Education</span> with <br />
                  NotoSpace.
                </h1>
                <p className="text-lg text-gray-500 max-w-md leading-relaxed font-medium opacity-80">
                  Join the most innovative collaborative workspace built for students to share, learn, and excel together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="w-full sm:w-auto px-10 py-4 bg-[#349156] text-white rounded-2xl font-black text-lg hover:bg-[#2a7a45] transition-all hover:translate-y-[-4px] hover:shadow-2xl shadow-xl shadow-[#349156]/30 flex items-center justify-center gap-3 group">
                  Start Learning Free <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="flex items-center gap-4 group">
                   <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-lg group-hover:border-[#349156] transition-colors">
                      <div className="w-8 h-8 rounded-full border border-[#349156]/20 flex items-center justify-center group-hover:bg-[#349156]/10 transition-colors">
                         <Play className="w-3 h-3 fill-[#349156] text-[#349156] ml-0.5" />
                      </div>
                   </div>
                   <span className="font-bold text-gray-600 group-hover:text-[#349156] transition-colors">Watch Tour</span>
                </button>
              </div>
            </div>

            {/* Right Innovative UI Section */}
            <div className="flex-1 relative animate-in fade-in slide-in-from-right duration-1000">
              {/* Main Student Image */}
              <div className="relative z-10">
                <img 
                  src="/hero.png" 
                  alt="Student Studying" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.05)]"
                />
              </div>

              {/* Innovative Floating UI Elements */}
              
              {/* Note Shared Tag */}
              <div className="absolute top-10 right-[-10px] bg-white p-4 rounded-2xl shadow-2xl z-20 animate-bounce max-w-[180px] border border-gray-50" style={{ animationDuration: '4s' }}>
                <div className="font-black text-lg text-gray-900 flex items-center gap-2 tracking-tight">
                  <div className="w-2 h-2 bg-[#349156] rounded-full animate-pulse" />
                  Note Shared!
                </div>
                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-50" />
              </div>

              {/* Resource Added Tag */}
              <div className="absolute bottom-32 right-[20px] bg-gray-900 p-4 rounded-2xl shadow-2xl z-20 animate-bounce delay-700 border border-gray-800" style={{ animationDuration: '5s' }}>
                <div className="font-bold text-white text-sm flex items-center gap-2">
                  <BookOpen className="w-3 h-3" />
                  Resource Added!
                </div>
                <div className="absolute -top-2 left-6 w-4 h-4 bg-gray-900 rotate-45" />
              </div>

              {/* Floating Collaborators List */}
              <div className="absolute bottom-10 left-[-20px] bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-2xl z-20 border border-gray-100 space-y-4 animate-in slide-in-from-bottom duration-1000">
                 <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest block mb-2">Collaborators</span>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                       <img src="https://i.pravatar.cc/100?img=32" alt="User" />
                    </div>
                    <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                       <div className="w-full h-full bg-[#349156] rounded-full" />
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                       <img src="https://i.pravatar.cc/100?img=45" alt="User" />
                    </div>
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                       <div className="w-[70%] h-full bg-[#349156] rounded-full" />
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                       <img src="https://i.pravatar.cc/100?img=12" alt="User" />
                    </div>
                    <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                       <div className="w-[40%] h-full bg-[#349156] rounded-full" />
                    </div>
                 </div>
              </div>

              {/* Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-24 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-black text-gray-400 uppercase tracking-[0.5em] mb-4">Trusted Worldwide</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {partners.map(p => (
                <span key={p} className="text-2xl font-black text-gray-900 hover:text-[#349156] cursor-default transition-colors">{p}</span>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-12">
             <div className="bg-gray-100/50 px-8 py-4 rounded-full flex items-center gap-6 border border-gray-200 shadow-sm">
                <div className="flex -space-x-3">
                   {[1,2,3,4,5].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i+30}`} alt="User" />
                     </div>
                   ))}
                </div>
                <span className="text-sm font-bold text-gray-500">Join over <span className="text-gray-900 border-b-2 border-[#349156]">50,000+</span> active learners</span>
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
            <div className="max-w-3xl">
               <span className="text-[#349156] font-black text-sm tracking-[0.2em] uppercase">Core Features</span>
               <h2 className="text-5xl md:text-7xl font-black mt-6 leading-tight tracking-tight">Tools built to <br /> make you <span className="text-[#349156]">Unstoppable</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, i) => (
              <div key={i} className="group relative p-10 rounded-[3rem] bg-[#f7faf9] border border-transparent hover:border-[#349156]/20 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center mb-8 shadow-xl shadow-[#349156]/5 group-hover:scale-110 transition-transform group-hover:bg-[#349156] group-hover:text-white">
                  <div className="group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-[#349156] transition-colors">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section id="faq" className="py-32 bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-20">
             <span className="text-[#349156] font-black text-sm tracking-widest uppercase">Q&A</span>
             <h2 className="text-5xl font-black mt-4 tracking-tight">Common Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`group border-2 bg-white rounded-[2rem] overflow-hidden transition-all duration-500 ${openFaq === i ? 'border-[#349156] shadow-2xl' : 'border-gray-100 hover:border-gray-200'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left"
                >
                  <span className={`text-xl font-black transition-colors ${openFaq === i ? 'text-[#349156]' : 'text-gray-800'}`}>{faq.question}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-[#349156] text-white rotate-180 shadow-lg' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
                    {openFaq === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-10 pb-10 text-gray-500 text-lg leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 max-w-7xl mx-auto px-4">
         <div className="bg-[#349156] rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-[0_50px_50px_rgba(52,145,86,0.2)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]" />
            
            <div className="relative z-10 space-y-12">
               <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">Start your journey <br /> with excellence.</h2>
               <p className="text-white/80 text-2xl max-w-2xl mx-auto font-medium">Join NotoSpace today and transform how you study forever.</p>
               <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <button className="w-full md:w-auto px-16 py-6 bg-white text-[#349156] rounded-3xl font-black text-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-2xl">Create Free Account</button>
                  <button className="w-full md:w-auto px-16 py-6 bg-transparent border-2 border-white/40 text-white rounded-3xl font-black text-xl hover:bg-white/10 transition">Contact Sales</button>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-20">
            <div className="space-y-8">
               <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#349156] rounded-2xl flex items-center justify-center rotate-3 shadow-lg shadow-[#349156]/20">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-black tracking-tighter">NotoSpace</span>
               </div>
               <p className="text-gray-500 text-lg leading-relaxed font-medium">
                  Empowering the next generation of global learners through collaboration.
               </p>
            </div>
            <div>
               <h4 className="text-xl font-black mb-8 border-b-2 border-[#349156] w-fit">Platform</h4>
               <ul className="space-y-6 text-gray-500 text-lg font-bold">
                  <li><a href="#features" className="hover:text-white transition">Features</a></li>
                  <li><a href="#hero" className="hover:text-white transition">Dashboard</a></li>
                  <li><a href="#social-proof" className="hover:text-white transition">Community</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-xl font-black mb-8 border-b-2 border-[#349156] w-fit">Support</h4>
               <ul className="space-y-6 text-gray-500 text-lg font-bold">
                  <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
                  <li><Link to="#" className="hover:text-white transition">Contact</Link></li>
                  <li><Link to="#" className="hover:text-white transition">Legal</Link></li>
               </ul>
            </div>
            <div>
               <h4 className="text-xl font-black mb-8 border-b-2 border-[#349156] w-fit">Join Us</h4>
               <p className="text-gray-500 text-lg mb-6 font-medium">Get the latest updates first.</p>
               <div className="flex bg-white/5 rounded-2xl p-2 border border-white/10">
                  <input type="email" placeholder="Email" className="bg-transparent border-none focus:outline-none px-4 text-lg flex-1" />
                  <button className="px-6 py-3 bg-[#349156] rounded-xl text-md font-black hover:bg-[#2a7a45] transition">Sub</button>
               </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-32 pt-12 border-t border-white/5 text-center text-gray-600 font-bold">
           &copy; 2026 NotoSpace. Pure Innovation.
        </div>
      </footer>
    </div>
  );
};

export default Home;
