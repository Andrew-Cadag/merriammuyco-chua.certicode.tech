# 🎀 Merriam Muyco Chua Portfolio - Development Guide

**Repository:** [Andrew-Cadag/merriammuyco-chua.certicode.tech](https://github.com/Andrew-Cadag/merriammuyco-chua.certicode.tech)  
**Domain:** merriammuyco-chua.certicode.tech  
**Client:** Merriam Muyco Chua  
**Theme:** Girly/Feminine Design  
**Repository Manager:** Andrew-Cadag (Ronald Andrew D. Cadag)

---

## 🚀 **Quick Start for Team Members**

### **1. Clone & Setup**
```bash
# Clone the repository
git clone https://github.com/Andrew-Cadag/merriammuyco-chua.certicode.tech.git
cd merriammuyco-chua.certicode.tech

# Switch to dev branch (IMPORTANT!)
git checkout dev

# Install dependencies
npm install

# Start development server
npm run dev
```

### **2. Development Workflow**
```bash
# ALWAYS pull latest changes before starting work
git pull origin dev

# Make your changes...
# Test your changes: npm run dev

# Commit your changes
git add .
git commit -m "feat: describe what you changed"

# Push to dev branch
git push origin dev
```

---

## 🎯 **Project Goals & Tasks**

### **Main Objective**
Transform Tom's professional portfolio into a **girly-themed portfolio** for Merriam Muyco Chua.

### **📋 Priority Tasks**

#### **🎨 Theme & Design (HIGH PRIORITY)**
- [ ] **Color Palette**: Change from blue theme to girly colors (pinks, pastels, rose gold)
- [ ] **Typography**: Update fonts to more feminine/elegant styles
- [ ] **Background**: Replace with girly patterns or gradients
- [ ] **Buttons**: Redesign with rounded, softer styling
- [ ] **Icons**: Replace with more feminine icons

#### **📝 Content Updates (HIGH PRIORITY)**
- [ ] **Hero Section**: Replace "Tom Oliver Chua" with "Merriam Muyco Chua"
- [ ] **About Section**: Update with Merriam's information and career details
- [ ] **Contact Info**: Update email, phone, and social media links
- [ ] **Resume/CV**: Replace Tom's resume with Merriam's
- [ ] **Professional Title**: Update job titles and descriptions

#### **🖼️ Images & Assets (MEDIUM PRIORITY)**
- [ ] **Profile Photos**: Replace Tom's images with Merriam's professional photos
- [ ] **Achievement Images**: Update with Merriam's certificates and achievements
- [ ] **Portfolio Projects**: Replace with Merriam's work samples
- [ ] **Testimonials**: Update client testimonials for Merriam

#### **⚙️ Technical Updates (MEDIUM PRIORITY)**
- [ ] **Contact Form**: Update email configuration to send to Merriam's email
- [ ] **SEO Meta Tags**: Update with Merriam's information
- [ ] **Favicon**: Create girly favicon
- [ ] **Domain Setup**: Prepare for merriammuyco-chua.certicode.tech deployment

---

## 🎨 **Design Guidelines**

### **Color Palette (Suggested)**
```css
/* Primary Colors */
--girly-pink: #FF69B4;
--soft-pink: #FFB6C1;
--rose-gold: #E8B4B8;
--lavender: #E6E6FA;
--cream: #FFF8DC;

/* Accent Colors */
--gold: #FFD700;
--white: #FFFFFF;
--light-gray: #F5F5F5;
```

### **Typography Guidelines**
- **Headers**: Elegant serif fonts (like Playfair Display, Crimson Text)
- **Body Text**: Clean sans-serif (like Poppins, Montserrat)
- **Accent Text**: Script fonts for special elements (like Dancing Script)

### **Design Principles**
- **Soft & Rounded**: Use border-radius for softer edges
- **Elegant Spacing**: Generous white space and padding
- **Feminine Elements**: Subtle gradients, soft shadows
- **Professional**: Keep it girly but still professional

---

## 📁 **File Structure & Key Components**

### **Important Files to Modify**
```
src/
├── components/
│   ├── introduction/Introduction.jsx     # Hero section - UPDATE NAME
│   ├── contact/Contact.jsx              # Contact info - UPDATE EMAIL
│   ├── profile/Profile.jsx              # About section - UPDATE CONTENT
│   ├── blog/Blog.jsx                    # Achievements - UPDATE IMAGES
│   └── common/navbar/NavBar.jsx         # Navigation - UPDATE BRANDING
├── assets/
│   ├── images/person.png                # REPLACE with Merriam's photo
│   └── images/blog/                     # REPLACE achievement images
└── pages/Home.jsx                       # Main page structure
```

### **CSS Files to Update**
```
index.css                    # Global styles - UPDATE COLORS
src/components/*/**.css      # Component-specific styles
```

---

## 🔧 **Development Commands**

```bash
# Start development server
npm run dev

# Build for production (testing)
npm run build

# Preview production build
npm run preview

# Check for linting issues
npm run lint (if available)
```

---

## 🌿 **Branch Strategy**

### **Branch Rules**
- **`main`**: Production-ready code (Andrew-Cadag manages)
- **`dev`**: Team development work (everyone works here)

### **Workflow**
1. **Always work on `dev` branch**
2. **Pull latest changes** before starting: `git pull origin dev`
3. **Commit frequently** with descriptive messages
4. **Push regularly** to share progress: `git push origin dev`
5. **Andrew-Cadag merges** `dev` → `main` for releases

---

## 📞 **Communication & Coordination**

### **Commit Message Format**
```bash
feat: add girly color palette
fix: resolve navbar styling issue
update: replace Tom's photo with Merriam's
style: improve button border radius
```

### **When You Need Help**
- **GitHub Issues**: Create issues for bugs or questions
- **Team Chat**: Coordinate with other developers
- **Repository Manager**: Contact Andrew-Cadag for major decisions

### **Before Pushing Code**
- ✅ Test your changes: `npm run dev`
- ✅ Check for console errors
- ✅ Ensure responsive design works
- ✅ Verify girly theme consistency

---

## 🎯 **Current Status**

### **✅ Completed**
- [x] Repository setup and template copying
- [x] Development environment configuration
- [x] Team access and branch structure

### **🔄 In Progress**
- [ ] Team member onboarding
- [ ] Task assignment and coordination
- [ ] Design mockups and planning

### **⏳ Next Steps**
1. **Team Setup**: All members clone and set up local environment
2. **Task Assignment**: Divide work among team members
3. **Design Planning**: Finalize girly theme specifications
4. **Development Sprint**: Begin transformation work

---

## 🚨 **Important Notes**

### **DO NOT COMMIT**
- ❌ `node_modules/` (already in .gitignore)
- ❌ `.env` files (sensitive data)
- ❌ `dist/` folder (build artifacts)
- ❌ Personal IDE settings

### **ALWAYS REMEMBER**
- 🎀 **Keep it girly but professional**
- 📱 **Test on mobile devices**
- 🎨 **Maintain consistent color scheme**
- ✨ **Focus on user experience**

---

## 📚 **Resources**

### **Design Inspiration**
- [Girly Portfolio Examples](https://dribbble.com/search/girly-portfolio)
- [Feminine Color Palettes](https://coolors.co/palettes/trending)
- [Google Fonts - Elegant Fonts](https://fonts.google.com/)

### **Technical Documentation**
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

---

**Happy Coding! Let's create something beautiful for Merriam! 🎀✨**

---
*Repository managed by Andrew-Cadag | Last updated: $(date)*
