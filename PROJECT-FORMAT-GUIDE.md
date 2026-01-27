# 📋 Project Format Guide - How to Add/Edit Projects

## 🎯 **Project Data Structure**

To add or modify projects, you need to update the project data in **TWO locations**:

### **1. Home Page Projects** (`src/app/page.tsx`)
### **2. Work Page Projects** (`src/app/work/page.tsx`)  
### **3. Individual Project Page** (`src/app/work/[id]/page.tsx`)

---

## 📝 **Required Project Format**

```javascript
{
  id: 'project-unique-id',                    // MUST be URL-friendly (no spaces, lowercase)
  title: 'Project Display Name',              // Shown as main title
  slug: 'project-url-slug',                   // Optional: for SEO-friendly URLs
  shortDescription: 'Brief project summary',  // Used in cards and previews
  description: 'Longer project description', // Alternative to shortDescription
  fullDescription: 'Complete detailed description of the project with all features and technical details. This appears on individual project pages.',
  
  // Images (REQUIRED)
  image: 'https://example.com/main-image.jpg',     // Main project image
  images: [                                        // Gallery images for project page
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ],
  
  // Links (REQUIRED)
  liveUrl: 'https://your-project-live-url.com',    // Live project URL
  githubUrl: 'https://github.com/username/repo',   // GitHub repository URL
  
  // Technical Details (REQUIRED)
  technologies: ['React', 'Next.js', 'TypeScript'], // Array of tech stack
  features: [                                       // Key features list
    'Feature 1 description',
    'Feature 2 description',
    'Feature 3 description',
    // ... more features
  ],
  
  // Metadata (OPTIONAL but recommended)
  category: 'web',        // 'web', 'app', 'ai', 'mobile', etc.
  status: 'Live',         // 'Live', 'In Progress', 'Completed'
  year: '2024',           // Project year
  rating: 4.8,            // Optional: project rating
  views: '2.3k'           // Optional: view count
}
```

---

## 🔧 **Step-by-Step: Adding a New Project**

### **Step 1: Add to Home Page** (`src/app/page.tsx`)

Find the `projects` array around line 33 and add your project:

```javascript
const projects = [
  // ... existing projects ...
  {
    id: 'my-new-project',
    title: 'My New Amazing Project',
    shortDescription: 'A revolutionary web application that solves real problems',
    fullDescription: 'Detailed description of what this project does, its features, and technical implementation...',
    image: 'https://picsum.photos/seed/mynewproject/600/400.jpg',
    images: [
      'https://picsum.photos/seed/mynewproject/800/600.jpg',
      'https://picsum.photos/seed/mynewproject2/800/600.jpg',
      'https://picsum.photos/seed/mynewproject3/800/600.jpg'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'https://my-new-project.com',
    githubUrl: 'https://github.com/username/my-new-project',
    features: [
      'Real-time data synchronization',
      'User authentication and authorization',
      'Responsive design for all devices',
      'Advanced search functionality'
    ]
  }
]
```

### **Step 2: Add to Work Page** (`src/app/work/page.tsx`)

Find the `projects` array around line 13 and add the SAME project data:

```javascript
const projects = [
  // ... existing projects ...
  {
    id: 'my-new-project',  // MUST match home page ID
    title: 'My New Amazing Project',
    description: 'A revolutionary web application that solves real problems',
    image: 'https://picsum.photos/seed/mynewproject/600/400.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'web',
    status: 'Live',
    year: '2024',
    rating: 4.9,
    views: '1.2k',
    liveUrl: 'https://my-new-project.com',
    githubUrl: 'https://github.com/username/my-new-project'
  }
]
```

### **Step 3: Add to Individual Project Page** (`src/app/work/[id]/page.tsx`)

Find the `projects` array around line 11 and add the COMPLETE project data:

```javascript
const projects = [
  // ... existing projects ...
  {
    id: 'my-new-project',  // MUST match other pages
    title: 'My New Amazing Project',
    description: 'A revolutionary web application that solves real problems',
    fullDescription: 'Complete detailed description with all technical details, implementation notes, challenges faced, and solutions provided...',
    image: 'https://picsum.photos/seed/mynewproject/600/400.jpg',
    images: [
      'https://picsum.photos/seed/mynewproject/800/600.jpg',
      'https://picsum.photos/seed/mynewproject2/800/600.jpg',
      'https://picsum.photos/seed/mynewproject3/800/600.jpg'
    ],
    liveUrl: 'https://my-new-project.com',
    githubUrl: 'https://github.com/username/my-new-project',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: [
      'Real-time data synchronization',
      'User authentication and authorization',
      'Responsive design for all devices',
      'Advanced search functionality',
      'Email notifications',
      'Data export capabilities'
    ],
    category: 'web',
    status: 'Live',
    year: '2024',
    rating: 4.9,
    views: '1.2k'
  }
]
```

---

## ⚠️ **CRITICAL REQUIREMENTS**

### **1. Consistent Project ID**
- The `id` field MUST be identical across all three files
- Use lowercase, no spaces, hyphens for separation
- Example: `'my-awesome-project'` not `'My Awesome Project'`

### **2. Required Fields**
- `id` - Unique identifier
- `title` - Project name
- `description` or `shortDescription` - Project summary
- `image` - Main project image URL
- `technologies` - Array of tech stack
- `liveUrl` - Live project URL
- `githubUrl` - GitHub repository URL

### **3. Image Requirements**
- Use high-quality images (minimum 600x400px)
- Provide multiple images for gallery
- Use consistent aspect ratios
- Consider using placeholder services like Picsum for testing

---

## 🖼️ **Image Options**

### **Option 1: External URLs (Current)**
```javascript
image: 'https://picsum.photos/seed/projectname/600/400.jpg'
```

### **Option 2: Local Images (Recommended)**
1. Add images to `public/projects/` folder
2. Reference them like:
```javascript
image: '/projects/my-project-screenshot.jpg'
```

### **Option 3: Optimized Images**
```javascript
// Add to public/projects/ and reference
image: '/projects/my-project-main.webp',
images: [
  '/projects/my-project-1.webp',
  '/projects/my-project-2.webp',
  '/projects/my-project-3.webp'
]
```

---

## 🔄 **Editing Existing Projects**

To modify an existing project:

1. **Find the project** by its `id` in all three files
2. **Update the same fields** in all locations
3. **Keep the `id` unchanged** to maintain URL consistency
4. **Test the changes** by running `npm run build`

---

## ✅ **Testing Your Changes**

After adding/editing projects:

```bash
# 1. Test build
npm run build

# 2. Test locally
npm run dev

# 3. Check these URLs work:
# - http://localhost:3000 (home page shows new project)
# - http://localhost:3000/work (work page shows new project)
# - http://localhost:3000/work/your-project-id (individual page works)
```

---

## 📁 **File Locations Summary**

```
my-nextjs-app/
├── src/app/page.tsx                 # Home page projects (line ~33)
├── src/app/work/page.tsx            # Work page projects (line ~13)  
├── src/app/work/[id]/page.tsx       # Individual project pages (line ~11)
└── public/projects/                 # Optional: local project images
```

---

## 🎯 **Quick Checklist**

- [ ] Added project to home page (`src/app/page.tsx`)
- [ ] Added project to work page (`src/app/work/page.tsx`)
- [ ] Added project to individual page (`src/app/work/[id]/page.tsx`)
- [ ] Used consistent `id` across all files
- [ ] Provided all required fields
- [ ] Added high-quality images
- [ ] Tested with `npm run build`
- [ ] Verified URLs work locally

**Ready to add your projects!** 🚀