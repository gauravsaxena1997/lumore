# 📚 Development Guidelines

**Created:** January 20, 2026
**Purpose:** Comprehensive development guidelines for building the Lumore website

---

## 📋 Overview

This folder contains all development guidelines based on [Vercel agent-skills](https://github.com/vercel-labs/agent-skills) best practices, specifically tailored for the Lumore e-commerce website built with Next.js 14, TailwindCSS, and Framer Motion.

---

## 📖 Documentation Structure

### 1. **[Component Best Practices](./component-best-practices.md)** 🧩

**Purpose:** Production-ready implementation guides for common components

**Contents:**
- ProductCard component with image optimization and accessibility
- CheckoutForm with proper autocomplete and ARIA attributes
- ProductModal with focus management and keyboard shortcuts
- Navigation with skip-to-content links
- Animation best practices examples
- Image component patterns

**When to use:**
- Starting a new component
- Looking for code examples
- Need implementation patterns
- Reference for production-ready code

**Key sections:**
- Complete component implementations with TypeScript
- Accessibility patterns (ARIA, keyboard nav)
- Performance optimizations (lazy loading, priority loading)
- Animation examples (Framer Motion)
- Dark mode support

---

### 2. **[Development Checklist](./development-checklist.md)** ✅

**Purpose:** Comprehensive checklist for every stage of development

**Contents:**
- Before starting (planning, architecture)
- During development (code quality, performance, accessibility)
- Before completion (testing, review)
- Accessibility testing procedures
- Performance testing guidelines
- Browser compatibility checks
- Pre-deployment verification

**When to use:**
- Before starting any component
- During implementation (ongoing checks)
- Before marking work complete
- During code reviews
- Pre-deployment verification

**Key sections:**
- 100+ verification items
- Testing procedures for accessibility
- Performance optimization checks
- Common issues and fixes
- Component quality scoring rubric

---

### 3. **[Agent-Skills Integration](./agent-skills-integration.md)** 🤖

**Purpose:** How to use Vercel agent-skills with Claude for development

**Contents:**
- Quick start and installation
- Development workflow (plan → code → review)
- Common prompts for Claude
- Component-specific workflows
- Performance audit procedures
- Accessibility audit procedures
- Debugging strategies

**When to use:**
- Setting up your development environment
- Planning component implementation with Claude
- Requesting code reviews from Claude
- Debugging issues systematically
- Learning best practices

**Key sections:**
- Ready-to-use prompts for Claude
- Step-by-step workflows
- Audit procedures
- Pro tips for effective AI collaboration

---

## 🚀 Quick Start Guide

### For New Developers:

1. **Read in this order:**
   1. This README (you are here)
   2. [Agent-Skills Integration](./agent-skills-integration.md) - Set up your workflow
   3. [Component Best Practices](./component-best-practices.md) - Learn patterns
   4. [Development Checklist](./development-checklist.md) - Reference during work

2. **Install agent-skills:**
   ```bash
   npx add-skill vercel-labs/agent-skills
   ```

3. **Start with a component:**
   - Plan using Claude with agent-skills
   - Reference component best practices
   - Use development checklist throughout
   - Review with Claude before completion

### For Experienced Developers:

1. **Quick reference order:**
   - [Component Best Practices](./component-best-practices.md) for code examples
   - [Development Checklist](./development-checklist.md) for verification
   - [Agent-Skills Integration](./agent-skills-integration.md) for Claude prompts

2. **Before each component:**
   - Review relevant section in Component Best Practices
   - Keep Development Checklist open during work

3. **During code review:**
   - Use Agent-Skills Integration prompts with Claude
   - Verify against Development Checklist

---

## 🎯 Key Principles

All guidelines follow these core principles:

### Performance ⚡
- **No waterfalls:** Use `Promise.all()` for parallel fetching
- **Bundle optimization:** Specific imports, dynamic loading
- **Image optimization:** Explicit dimensions, proper loading strategy

### Accessibility ♿
- **ARIA labels:** All icon buttons labeled
- **Keyboard navigation:** Full keyboard support
- **Form attributes:** Proper autocomplete and inputMode
- **Focus management:** Visible, logical, trapped in modals

### Animations 🎬
- **Transform/opacity only:** No layout-causing animations
- **Duration < 300ms:** Fast, responsive interactions
- **Respect preferences:** Use `useReducedMotion`

### Code Quality 💎
- **TypeScript:** Full type safety
- **Consistent patterns:** Follow established templates
- **Well-documented:** Clear, maintainable code

---

## 📊 Priority Levels

Guidelines are categorized by priority:

### CRITICAL (Immediate Implementation)
- Eliminate sequential data fetching
- Explicit image dimensions
- Icon button ARIA labels
- Bundle size optimization

### HIGH (During Development)
- Server-side caching
- Form accessibility
- Keyboard navigation
- Animation performance

### MEDIUM (During Polish)
- Dark mode
- Motion preferences
- List virtualization
- Advanced optimizations

---

## 🔄 Development Workflow

### Standard Workflow:

```
1. Plan
   ↓
   Use: Agent-Skills Integration prompts
   Reference: Component Best Practices

2. Implement
   ↓
   Use: Component Best Practices code examples
   Check: Development Checklist (during work)

3. Review
   ↓
   Use: Agent-Skills Integration audit prompts
   Verify: Development Checklist

4. Test
   ↓
   Follow: Development Checklist testing procedures

5. Deploy
   ↓
   Confirm: All checklist items complete
```

---

## 🛠️ Tools & Resources

### Required Tools:
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- Vercel agent-skills

### Recommended Tools:
- Chrome DevTools (Performance, Accessibility audits)
- Lighthouse (Performance scoring)
- Screen readers (VoiceOver, NVDA)
- React DevTools

### External Resources:
- [Vercel Agent-Skills Repository](https://github.com/vercel-labs/agent-skills)
- [React Best Practices (45 rules)](https://github.com/vercel-labs/agent-skills/blob/main/skills/react-best-practices/SKILL.md)
- [Web Design Guidelines (100+ rules)](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Core Web Vitals](https://web.dev/vitals/)

---

## 📈 Success Metrics

Components following these guidelines achieve:

**Performance:**
- Lighthouse Performance: 90+
- LCP: < 2.5s
- CLS: < 0.1
- Bundle size: Optimized

**Accessibility:**
- Lighthouse Accessibility: 90+
- WCAG AA compliance
- Full keyboard navigation
- Screen reader compatible

**User Experience:**
- 60fps animations
- Mobile-friendly (44px+ touch targets)
- Dark mode support
- Reduced motion support

---

## 🤝 Contributing

When adding new guidelines:

1. **Follow existing format:**
   - Clear structure with headings
   - Code examples (good vs bad)
   - Specific, actionable advice

2. **Include priority level:**
   - CRITICAL, HIGH, or MEDIUM
   - Explain why it matters

3. **Provide examples:**
   - Production-ready code
   - Real-world use cases
   - Common pitfalls

4. **Update this README:**
   - Add to documentation structure
   - Update quick start if needed

---

## 💡 Tips for Success

1. **Don't skip planning** - Use agent-skills with Claude before coding
2. **Reference early and often** - Keep guidelines open while coding
3. **Test continuously** - Don't wait until the end
4. **Prioritize accessibility** - It's not optional
5. **Optimize for performance** - Fast is a feature
6. **Learn the patterns** - They'll become second nature

---

## 📞 Getting Help

**For guideline questions:**
- Ask Claude using prompts from Agent-Skills Integration

**For code examples:**
- Check Component Best Practices first
- Then ask Claude for specific guidance

**For verification:**
- Use Development Checklist
- Request audit from Claude

---

## 🎓 Learning Path

### Week 1: Foundations
- [ ] Read all three guideline documents
- [ ] Install agent-skills
- [ ] Try example prompts with Claude
- [ ] Build first component following guidelines

### Week 2: Practice
- [ ] Build 3-5 components using guidelines
- [ ] Use checklist for each component
- [ ] Request Claude reviews
- [ ] Optimize based on feedback

### Week 3: Mastery
- [ ] Guidelines become automatic
- [ ] Create component templates
- [ ] Help others with reviews
- [ ] Suggest guideline improvements

---

**Document Version:** 1.0
**Last Updated:** January 20, 2026
**Status:** Ready for Use 🚀
