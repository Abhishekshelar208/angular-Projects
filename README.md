# Student Feedback System

## 📋 Project Overview
A professional student feedback application built with Angular that allows users to enter their name and submit feedback through an intuitive multi-screen interface.

## 🎯 What We Built
- **Welcome Screen (Demo)**: Users enter their name before proceeding
- **Feedback Form**: Personalized feedback submission with real-time validation
- **Success Confirmation**: Visual feedback display after submission
- **Professional UI**: Modern blue and white theme with smooth animations

## 🚀 Angular Concepts Used

### 1. **Components**
   - Demo Component (Welcome screen)
   - Feedback Component (Feedback form)
   - App Component (Root component)

### 2. **Routing**
   - Route configuration with `Routes`
   - Navigation between components
   - Default route with redirect
   - `Router` service for programmatic navigation
   - `RouterOutlet` for component rendering

### 3. **Data Binding**
   - Two-way data binding with `[(ngModel)]`
   - Interpolation `{{ }}` for displaying data
   - Property binding `[disabled]` for dynamic attributes
   - Event binding `(click)` for user interactions

### 4. **Services & Dependency Injection**
   - `UserService` - Shared service for passing data between components
   - `inject()` function for dependency injection
   - `providedIn: 'root'` for singleton service

### 5. **Signals**
   - Reactive state management with `signal()`
   - Reading signal values with `signal()`
   - Updating signals with `.set()` method

### 6. **Forms**
   - `FormsModule` for template-driven forms
   - Input validation and disabled states
   - Form controls (input, textarea)

### 7. **Control Flow**
   - `@if` directive for conditional rendering
   - Dynamic UI updates based on state

### 8. **Styling**
   - Component-scoped CSS
   - Responsive design with media queries
   - CSS animations and transitions
   - Modern gradient themes

## 🛠️ Technologies
- **Angular 20.3.0**
- **TypeScript 5.9.2**
- **RxJS 7.8.0**
- **Angular Router**
- **Angular Forms**

## 📦 How to Run
```bash
npm install
npm start
```

## 🎨 Design Features
- Professional blue-purple gradient theme
- Smooth animations and transitions
- Card-based layout with shadows
- Responsive mobile-first design
- Interactive hover effects
- Form validation with visual feedback
