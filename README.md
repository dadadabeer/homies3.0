# 🏠 Homies - Roommate Matching App

> **Find your perfect roommate based on lifestyle preferences and home aesthetic vision**

StreamMatch is a modern roommate matching application that goes beyond basic compatibility by incorporating lifestyle preferences and visual home aesthetics. Built with Next.js 15, TypeScript, and Supabase, it provides an intuitive platform for students and young professionals to find compatible roommates.

## 🎯 **Project Goal**

Create a roommate matching app that considers:
- **Lifestyle Compatibility**: Daily routines, cleanliness habits, social preferences
- **Home Aesthetic Vision**: Visual preferences for home design and decoration
- **Practical Compatibility**: Budget, location preferences, move-in timelines
- **Communication**: Built-in chat system for potential roommates

## ✨ **Features**

### 🔐 **Authentication System**
- User registration and login with Supabase Auth
- Secure password management
- Email verification for new accounts
- Protected routes and user sessions

### 👥 **User Profiles**
- Personal information and preferences
- Lifestyle questionnaire (sleep schedule, cleanliness, social habits)
- Budget range and location preferences
- Photo uploads for home aesthetic preferences

### 🏡 **Home Aesthetic Matching**
- Image-based preference selection
- Style categories (minimalist, bohemian, modern, vintage, etc.)
- Room layout preferences
- Color scheme and furniture style choices

### 🔍 **Smart Matching Algorithm**
- Compatibility scoring based on multiple factors
- Lifestyle preference weighting
- Aesthetic preference matching
- Location and budget filtering

### 💬 **Communication Tools**
- In-app messaging system
- Match notifications
- Profile sharing and comparison

### 📱 **Responsive Design**
- Mobile-first approach
- Dark/light mode support
- Tailwind CSS for modern UI
- Optimized for all device sizes

## 🛠 **Tech Stack**

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **State Management**: React Context API
- **Deployment**: Vercel-ready

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dadadabeer/homies3.0.git
   cd homies3.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 **Project Structure**

```
homies3.0/
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # Reusable UI components
│   └── Navbar.tsx         # Navigation component
├── contexts/               # React Context providers
│   └── auth-context.tsx   # Authentication context
├── lib/                    # Utility libraries
│   └── supabase/          # Supabase client/server
├── public/                 # Static assets
└── package.json            # Dependencies and scripts
```

## 🔧 **Configuration**

### Supabase Setup
1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key
3. Set up authentication providers
4. Configure database tables for users, preferences, and matches

### Database Schema (Planned)
```sql
-- Users table
users (
  id, email, name, avatar_url, 
  created_at, updated_at
)

-- User preferences
user_preferences (
  user_id, lifestyle_data, 
  aesthetic_preferences, budget_range
)

-- Matches
matches (
  user1_id, user2_id, 
  compatibility_score, status
)

-- Messages
messages (
  sender_id, receiver_id, 
  content, timestamp
)
```

## 🎨 **UI/UX Features**

- **Modern Design**: Clean, intuitive interface
- **Visual Preference Selection**: Image-based aesthetic choices
- **Responsive Layout**: Works on all devices
- **Accessibility**: WCAG compliant components
- **Dark Mode**: User preference support

## 🚧 **Development Status**

### ✅ **Completed**
- [x] Next.js 15 project setup
- [x] Authentication system with Supabase
- [x] Basic UI components and layout
- [x] User authentication flow
- [x] Responsive navigation

### 🚧 **In Progress**
- [ ] User profile creation
- [ ] Preference questionnaire
- [ ] Matching algorithm
- [ ] Chat system

### 📋 **Planned Features**
- [ ] Image upload for aesthetic preferences
- [ ] Advanced matching algorithm
- [ ] Real-time messaging
- [ ] Mobile app (React Native)
- [ ] Push notifications
- [ ] Room listing integration

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 **Author**

**Dabeer** - [GitHub](https://github.com/dadadabeer)

## 🙏 **Acknowledgments**

- Next.js team for the amazing framework
- Supabase for backend services
- Tailwind CSS for styling utilities
- The open-source community for inspiration

---

**StreamMatch** - Where lifestyle meets home aesthetics for perfect roommate matches! 🏠✨
