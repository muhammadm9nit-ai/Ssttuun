
import React, { useState } from 'react';
import { AuthLayout } from './components/Layouts';
import { GameMode, Screen } from './types';
import SupportChat from './components/SupportChat';
import { 
  Gamepad2, 
  ListChecks, 
  TrendingUp, 
  User as UserIcon,
  Bell,
  Search,
  ChevronRight,
  Wallet,
  ArrowUpToLine,
  UserSquare2,
  ScrollText,
  Trophy,
  Code2,
  LogOut
} from 'lucide-react';

const GAME_MODES: GameMode[] = [
  { id: '1', title: 'BR MATCH', matches: 57, image: 'https://picsum.photos/seed/freefire1/400/400', tag: 'BR' },
  { id: '2', title: 'BR SURVIVAL / SQUAD', matches: 0, image: 'https://picsum.photos/seed/freefire2/400/400', tag: 'SURVIVAL' },
  { id: '3', title: 'CLASH SQUAD', matches: 41, image: 'https://picsum.photos/seed/freefire3/400/400', tag: 'CS' },
  { id: '4', title: 'CS 1v1 2v2', matches: 12, image: 'https://picsum.photos/seed/freefire4/400/400', tag: 'CS' },
];

interface ResultItem {
  id: string;
  matchId: string;
  title: string;
  dateTime: string;
  winPrize: string;
  perKill: string;
  entryFee: string;
  type: string;
  map: string;
  platform: string;
  image: string;
}

const MOCK_RESULTS: ResultItem[] = [
  {
    id: '1',
    matchId: '21953',
    title: 'Duo Time | Mobile | Regular 💥✅',
    dateTime: '2026-01-21 at 04:40 PM',
    winPrize: '800 TK',
    perKill: '10',
    entryFee: '20',
    type: 'SOLO',
    map: 'Bermuda',
    platform: 'MOBILE',
    image: 'https://picsum.photos/seed/ffres1/150/150'
  },
  {
    id: '2',
    matchId: '21952',
    title: 'Duo Time | Mobile | Regular 💥✅',
    dateTime: '2026-01-21 at 04:20 PM',
    winPrize: '800 TK',
    perKill: '10',
    entryFee: '20',
    type: 'SOLO',
    map: 'Bermuda',
    platform: 'MOBILE',
    image: 'https://picsum.photos/seed/ffres2/150/150'
  },
  {
    id: '3',
    matchId: '21951',
    title: 'Solo Time | Mobile | Regular 💥✅',
    dateTime: '2026-01-21 at 04:00 PM',
    winPrize: '800 TK',
    perKill: '10',
    entryFee: '20',
    type: 'SOLO',
    map: 'Bermuda',
    platform: 'MOBILE',
    image: 'https://picsum.photos/seed/ffres3/150/150'
  }
];

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('login');
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [activeCategory, setActiveCategory] = useState('FF FULLMAP');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setScreen('dashboard');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setScreen('dashboard');
  };

  const ProfileScreen = () => (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header with Gradient */}
      <div className="bg-gradient-to-b from-[#4facfe] to-[#0061ff] pt-12 pb-8 px-6 text-white text-center">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full border-4 border-white/30 bg-yellow-400 overflow-hidden shadow-xl">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=sani6666" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-8">sani6666</h2>
        
        <div className="flex justify-between items-center px-4">
          <div className="text-center">
            <p className="text-2xl font-bold">0</p>
            <p className="text-[10px] uppercase font-bold opacity-90">Match Played</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black">BDT 0</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">0</p>
            <p className="text-[10px] uppercase font-bold opacity-90">Won</p>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar">
        <ProfileMenuItem icon={<Wallet className="text-blue-500" />} label="Wallet" />
        <ProfileMenuItem icon={<ArrowUpToLine className="text-blue-400" />} label="Withdraw" />
        <ProfileMenuItem icon={<UserSquare2 className="text-blue-500" />} label="My Profile" />
        <ProfileMenuItem icon={<ScrollText className="text-cyan-500" />} label="All Rules" showChevron />
        <ProfileMenuItem icon={<Trophy className="text-blue-400" />} label="Top Players" />
        <ProfileMenuItem icon={<Code2 className="text-blue-600" />} label="Developer Profile" />
      </div>

      {/* Logout Button */}
      <div className="p-6 mt-auto">
        <button 
          onClick={() => setScreen('login')}
          className="w-full bg-[#4facfe] text-white font-bold py-4 rounded-2xl shadow-lg hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          Logout
        </button>
      </div>
    </div>
  );

  const MyMatchesScreen = () => (
    <div className="flex-1 flex flex-col bg-[#faf9ff]">
      <div className="pt-12 pb-6 px-6 text-center">
        <h2 className="text-2xl font-black text-neutral-700 tracking-tight uppercase">MY MATCHES</h2>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p className="text-xl text-neutral-400 font-medium">No Matches Found</p>
      </div>
    </div>
  );

  const ResultsScreen = () => (
    <div className="flex-1 flex flex-col bg-[#faf9ff]">
      <div className="pt-12 pb-4 px-6 text-center">
        <h2 className="text-3xl font-black text-neutral-700 tracking-tight">Result</h2>
      </div>

      {/* Horizontal Filter Chips */}
      <div className="flex overflow-x-auto gap-3 px-6 py-4 no-scrollbar">
        {['FF FULLMAP', 'FF Clash Squad', 'LoneWolf', 'Classic'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-6 py-2 rounded-xl font-bold text-sm transition-all border-2 ${
              activeCategory === cat 
                ? 'bg-[#ffc107] border-[#ffc107] text-neutral-800' 
                : 'bg-[#d0d7f0] border-transparent text-neutral-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Content */}
      <div className="flex-1 overflow-y-auto px-6 py-2 space-y-6 no-scrollbar pb-10">
        {MOCK_RESULTS.map((result) => (
          <div key={result.id} className="bg-white rounded-[32px] p-6 shadow-sm relative overflow-hidden border border-gray-100">
            {/* Match ID Badge */}
            <div className="absolute top-0 right-0 bg-[#8bc34a] text-white px-5 py-1.5 rounded-bl-[20px] font-bold text-sm">
              #{result.matchId}
            </div>

            {/* Top Section */}
            <div className="flex gap-4 mb-6 pr-12">
              <img src={result.image} alt="game" className="w-16 h-16 rounded-2xl object-cover shadow-sm" />
              <div>
                <h3 className="font-bold text-neutral-800 leading-tight mb-1 text-[15px]">{result.title}</h3>
                <p className="text-orange-500 font-semibold text-xs">{result.dateTime}</p>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white border border-gray-100 rounded-2xl p-3 text-center shadow-sm">
                <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">WIN PRIZE</p>
                <p className="text-lg font-black text-neutral-800 leading-none">{result.winPrize}</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-3 text-center shadow-sm">
                <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">PER KILL</p>
                <p className="text-lg font-black text-neutral-800 leading-none">{result.perKill}</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-3 text-center shadow-sm">
                <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">ENTRY FEE</p>
                <p className="text-lg font-black text-neutral-800 leading-none">{result.entryFee}</p>
              </div>
            </div>

            {/* Footer Attributes */}
            <div className="flex justify-between items-center text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              <span>{result.type}</span>
              <span>{result.map}</span>
              <span>{result.platform}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const DashboardScreen = () => (
    <>
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 text-white p-4 shadow-md flex items-center gap-3 relative animate-pulse-slow">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          <Bell size={18} />
        </div>
        <div className="flex-1 overflow-hidden">
          <p className="text-sm font-medium whitespace-nowrap animate-scroll">
            📢 NOTICE: আমাদের টেলিগ্রামে জয়েন করুন এবং এডমিনকে ইনবক্স করুন। সকল টুর্নামেন্টের আপডেট সেখানে পাবেন।
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 max-w-lg mx-auto w-full overflow-y-auto no-scrollbar">
        {/* Carousel Placeholder */}
        <div className="w-full h-44 bg-neutral-800 rounded-3xl mb-8 relative overflow-hidden flex items-center justify-center">
          <img src="https://picsum.photos/seed/carousel/800/400" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="banner" />
          <div className="relative text-center p-6">
            <h2 className="text-white text-2xl font-black italic tracking-tighter">THE ULTIMATE<br/>CHAMPIONSHIP</h2>
            <div className="flex gap-2 justify-center mt-3">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-black text-neutral-900 tracking-wide uppercase">Free Fire</h3>
          <button className="text-indigo-600 font-bold text-sm flex items-center gap-1">
            View All <ChevronRight size={16} />
          </button>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-2 gap-4 pb-4">
          {GAME_MODES.map((game) => (
            <div 
              key={game.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-[0.98] group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img src={game.image} alt={game.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute top-2 right-2 bg-pink-500 text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-wider">
                  {game.tag}
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-neutral-900 leading-tight mb-1">{game.title}</h4>
                <p className="text-xs text-gray-500 font-medium">{game.matches} matches found</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderContent = () => {
    switch (screen) {
      case 'dashboard':
        return <DashboardScreen />;
      case 'matches':
        return <MyMatchesScreen />;
      case 'results':
        return <ResultsScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  if (screen === 'login') {
    return (
      <AuthLayout title="Welcome Back" subtitle="Sign in to your account">
        <form onSubmit={handleLogin} className="space-y-6 mt-4">
          <input 
            type="text" 
            placeholder="UserName"
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
            required
          />
          <input 
            type="password" 
            placeholder="Password"
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
            required
          />
          
          <button 
            type="submit" 
            className="w-full bg-neutral-900 text-white font-bold py-4 rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all"
          >
            Sign In
          </button>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-5 h-5 accent-indigo-600 rounded"
              />
              <span className="text-gray-600">Remember me</span>
            </label>
            <button type="button" className="text-gray-600 font-medium hover:underline">
              Forgot your password?
            </button>
          </div>

          <div className="text-center pt-8">
            <button 
              type="button" 
              onClick={() => setScreen('register')}
              className="text-gray-800 font-semibold hover:underline"
            >
              I'm a new user. <span className="text-neutral-900">Register</span>
            </button>
          </div>
        </form>
      </AuthLayout>
    );
  }

  if (screen === 'register') {
    return (
      <AuthLayout 
        title="Let's Start" 
        subtitle="Create an account"
        onBack={() => setScreen('login')}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-500">Sign Up</h2>
        </div>
        <form onSubmit={handleRegister} className="space-y-4">
          <input 
            type="text" 
            placeholder="UserName"
            className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none"
            required
          />
          <input 
            type="email" 
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none"
            required
          />
          <input 
            type="tel" 
            placeholder="Mobile Number"
            className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none"
            required
          />
          <input 
            type="password" 
            placeholder="Password"
            className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none"
            required
          />

          <label className="flex gap-3 text-sm text-gray-600 py-2 cursor-pointer">
            <input 
              type="checkbox" 
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              className="w-5 h-5 accent-indigo-600 flex-shrink-0"
              required
            />
            <span>I agree to the <button type="button" className="underline">Terms and Conditions</button> and <button type="button" className="underline">Privacy Policy</button></span>
          </label>

          <button 
            type="submit" 
            className="w-full bg-neutral-900 text-white font-bold py-4 rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all mt-4"
          >
            Create Account
          </button>

          <div className="text-center py-4">
            <button 
              type="button" 
              onClick={() => setScreen('login')}
              className="text-gray-600 font-semibold"
            >
              Already have an account? <span className="text-neutral-900 underline">Sign In</span>
            </button>
          </div>
        </form>
      </AuthLayout>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      {renderContent()}

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-40 w-full max-w-lg mx-auto shrink-0">
        <NavItem 
          icon={<Gamepad2 size={24} />} 
          label="Play" 
          active={screen === 'dashboard'} 
          onClick={() => setScreen('dashboard')} 
        />
        <NavItem 
          icon={<ListChecks size={24} />} 
          label="My Matches" 
          active={screen === 'matches'}
          onClick={() => setScreen('matches')}
        />
        <NavItem 
          icon={<TrendingUp size={24} />} 
          label="Results" 
          active={screen === 'results'}
          onClick={() => setScreen('results')}
        />
        <NavItem 
          icon={<UserIcon size={24} />} 
          label="Profile" 
          active={screen === 'profile'} 
          onClick={() => setScreen('profile')} 
        />
      </div>

      {/* AI Support Chat */}
      <SupportChat />

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          display: inline-block;
          animation: scroll 15s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }
      `}</style>
    </div>
  );
};

interface ProfileMenuItemProps {
  icon: React.ReactNode;
  label: string;
  showChevron?: boolean;
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({ icon, label, showChevron }) => (
  <button className="flex items-center justify-between px-6 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors w-full text-left">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center">
        {React.cloneElement(icon as React.ReactElement, { size: 28 })}
      </div>
      <span className="text-lg text-gray-800 font-medium">{label}</span>
    </div>
    {showChevron && <ChevronRight size={20} className="text-gray-300" />}
  </button>
);

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1 group">
      <div className={`p-2 rounded-2xl transition-all duration-300 ${
        active 
          ? 'bg-indigo-100 text-indigo-600 scale-110' 
          : 'text-gray-400 group-hover:text-gray-600'
      }`}>
        {icon}
      </div>
      <span className={`text-[10px] font-bold transition-colors ${
        active ? 'text-indigo-600' : 'text-gray-400'
      }`}>
        {label}
      </span>
    </button>
  );
};

export default App;
