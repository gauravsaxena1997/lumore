# 🤖 Agent-Skills Integration Guide

**Created:** January 20, 2026
**Purpose:** How to use Vercel agent-skills with Claude for Lumore development

---

## 📋 Overview

[Vercel agent-skills](https://github.com/vercel-labs/agent-skills) provides 45 React performance rules and 100+ web design guidelines structured for AI-agent consumption. This guide shows how to integrate these best practices into your Lumore development workflow with Claude.

---

## 🚀 Quick Start

### Installation

```bash
# Install agent-skills for Claude Code
npx add-skill vercel-labs/agent-skills
```

This makes the best practices available to Claude during your development session.

### Verify Installation

After installation, Claude will have access to:
- **45 React Best Practices** - Performance, rendering, state management
- **100+ Web Design Guidelines** - Accessibility, forms, animations, images
- **Vercel Deployment Automation** - CI/CD best practices

---

## 💻 Development Workflow with Agent-Skills

### 1. Planning Phase

**Before writing code, ask Claude to review your plan:**

```
"I want to build a ProductCard component that shows product images,
pricing, and an add-to-cart button. Review this against agent-skills
best practices and suggest an implementation approach."
```

**Claude will check:**
- Image optimization requirements
- Accessibility needs (aria-labels, keyboard nav)
- Animation best practices (transform/opacity only)
- Performance considerations (lazy loading, priority loading)

### 2. Implementation Phase

**While coding, reference guidelines:**

```
"I'm implementing a checkout form. What agent-skills guidelines
apply to form inputs and accessibility?"
```

**Claude will provide:**
- Proper `autocomplete` attribute values
- Correct `inputMode` for mobile keyboards
- ARIA attributes for accessibility
- Validation patterns

### 3. Review Phase

**After writing code, ask for an audit:**

```
"Review this ProductModal component for compliance with
agent-skills best practices."
```

**Claude will check:**
- Performance issues (sequential fetching, barrel imports)
- Accessibility gaps (missing aria-labels, keyboard nav)
- Animation problems (animating wrong properties)
- Image optimization (missing dimensions, wrong loading strategy)

---

## 🎯 Common Prompts for Development

### Component Planning

```
"Plan a [Component Name] component following agent-skills best practices."
```

**Example:**
```
"Plan a Navigation component with mega-menu following agent-skills
best practices."
```

**Claude will provide:**
- Accessibility requirements (skip-to-content, ARIA roles)
- Keyboard navigation plan
- Focus management strategy
- Mobile responsiveness approach

---

### Code Review

```
"Review this [Component Name] for agent-skills compliance."
```

**Example:**
```
"Review this ProductCard component for agent-skills compliance."
```

**Claude will audit:**
- Performance (data fetching, bundle size)
- Accessibility (ARIA, keyboard nav)
- Animations (properties, duration)
- Images (dimensions, loading strategy)

---

### Specific Guidelines

```
"What agent-skills guidelines apply to [specific feature]?"
```

**Examples:**

**Forms:**
```
"What agent-skills guidelines apply to checkout forms?"
```

**Response includes:**
- Autocomplete attribute values
- InputMode for mobile keyboards
- Never disable paste
- Proper ARIA labels

**Animations:**
```
"What agent-skills guidelines apply to hover animations?"
```

**Response includes:**
- Only animate transform/opacity
- Duration < 300ms
- Respect prefers-reduced-motion
- No transition: all

**Images:**
```
"What agent-skills guidelines apply to product images?"
```

**Response includes:**
- Explicit width/height (prevent layout shift)
- Priority loading strategy
- Lazy loading for below-fold
- Responsive sizes

---

### Performance Optimization

```
"Optimize this component's performance using agent-skills guidelines."
```

**Claude will:**
- Identify sequential fetching (convert to Promise.all)
- Find barrel imports (split to specific imports)
- Suggest dynamic imports for heavy components
- Optimize image loading strategy

---

### Accessibility Audit

```
"Audit this component for accessibility using agent-skills guidelines."
```

**Claude will check:**
- Icon buttons have aria-labels
- Forms have proper autocomplete
- Keyboard navigation works
- Color contrast meets WCAG AA
- Focus management is correct

---

## 📝 Code Review Process

### Step 1: Initial Implementation

Write your component code.

### Step 2: Self-Review with Claude

```
"Review this ProductCard component against agent-skills best practices.
Check for:
1. Performance issues (waterfalls, bundle size)
2. Accessibility gaps (ARIA, keyboard nav)
3. Animation problems (wrong properties, duration)
4. Image optimization (dimensions, loading)"
```

### Step 3: Address Issues

Claude will provide:
- List of issues found
- Priority level (CRITICAL → MEDIUM)
- Code fixes for each issue
- Explanation of why it matters

### Step 4: Verify Fixes

```
"Verify that this updated component now follows all applicable
agent-skills best practices."
```

---

## 🔄 Iterative Development Workflow

### Workflow Pattern:

```
1. Plan → Ask Claude to review plan against agent-skills
2. Code → Reference guidelines during implementation
3. Review → Ask Claude to audit code
4. Fix → Address issues found
5. Verify → Confirm compliance
6. Deploy → Ship with confidence
```

### Example Session:

**1. Planning:**
```
User: "I need to build a product filter component with checkboxes
for categories, price ranges, and ratings. Plan this following
agent-skills best practices."

Claude: [Provides plan including]:
- Accessibility: keyboard navigation, ARIA roles
- Performance: memoization, avoid re-renders
- UX: clear focus indicators, submit feedback
```

**2. Implementation:**
```
User: "Start implementing the ProductFilter component."

Claude: [Writes code following the plan]
```

**3. Review:**
```
User: "Review the ProductFilter component for agent-skills compliance."

Claude: [Audits code, finds]:
- ✅ Keyboard navigation implemented
- ✅ ARIA labels present
- ⚠️ Animation duration too slow (500ms → should be <300ms)
- ❌ Missing prefers-reduced-motion detection
```

**4. Fix:**
```
User: "Fix the animation issues you found."

Claude: [Updates animation duration and adds useReducedMotion]
```

**5. Verify:**
```
User: "Verify the fixes."

Claude: [Confirms all issues resolved]
```

---

## 🎨 Component-Specific Workflows

### ProductCard Workflow

**1. Planning:**
```
"Plan a ProductCard component for an e-commerce site.
Include image, name, price, rating, and add-to-cart button.
Follow agent-skills best practices."
```

**2. Implementation Questions:**
- "What priority should the product image have?"
  - Response: Above-fold = priority, below-fold = lazy

- "How should the hover animation work?"
  - Response: Only transform/opacity, <200ms duration

- "What ARIA labels are needed?"
  - Response: "Add to cart" button needs descriptive label

**3. Review:**
```
"Review this ProductCard for:
- Image optimization (layout shift prevention)
- Accessibility (ARIA labels)
- Animation performance"
```

---

### CheckoutForm Workflow

**1. Planning:**
```
"Plan a checkout form with email, shipping address, and payment.
Follow agent-skills form best practices."
```

**2. Implementation Questions:**
- "What autocomplete values should I use?"
  - Response: email, shipping address-line1, cc-number, etc.

- "What inputMode for credit card?"
  - Response: inputMode="numeric" pattern="[0-9]*"

- "Should I disable paste on password field?"
  - Response: NO - never disable paste

**3. Review:**
```
"Review this CheckoutForm for:
- Proper autocomplete attributes
- Correct inputMode values
- Accessibility compliance"
```

---

### ProductModal Workflow

**1. Planning:**
```
"Plan a product quick-view modal. Follow agent-skills modal
best practices."
```

**2. Implementation Questions:**
- "How should focus be managed?"
  - Response: Trap focus in modal, restore on close

- "What keyboard shortcuts?"
  - Response: Escape closes, Tab cycles through elements

- "How to prevent body scroll?"
  - Response: Set body overflow:hidden, use overscroll-behavior:contain

**3. Review:**
```
"Review this ProductModal for:
- Focus trap implementation
- Keyboard shortcuts
- Accessibility (ARIA roles)"
```

---

## 📊 Performance Audit Workflow

### Step 1: Request Audit

```
"Audit the [Page/Component] for performance issues using
agent-skills guidelines."
```

### Step 2: Review Findings

Claude checks:
- **Sequential Fetching:** Are there await chains? Convert to Promise.all
- **Barrel Imports:** Are imports from index files? Split to specific files
- **Bundle Size:** Are heavy components dynamically imported?
- **Image Loading:** Are dimensions explicit? Is loading strategy optimal?

### Step 3: Implement Fixes

```
"Fix the performance issues you found."
```

### Step 4: Verify Improvements

```
"Verify performance optimizations are correct."
```

---

## ♿ Accessibility Audit Workflow

### Step 1: Request Audit

```
"Audit the [Component] for accessibility using agent-skills
guidelines."
```

### Step 2: Review Findings

Claude checks:
- **Icon Buttons:** Do they have aria-labels?
- **Forms:** Are autocomplete attributes present?
- **Keyboard Nav:** Can you navigate with keyboard only?
- **Focus Management:** Is focus visible and logical?
- **ARIA Roles:** Are semantic roles used correctly?
- **Color Contrast:** Does it meet WCAG AA?

### Step 3: Implement Fixes

```
"Fix the accessibility issues you found."
```

### Step 4: Test with Checklist

Use the [Development Checklist](./development-checklist.md) to verify:
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Focus management correct
- [ ] ARIA attributes present

---

## 🎬 Animation Optimization Workflow

### Step 1: Request Audit

```
"Audit animations in [Component] using agent-skills guidelines."
```

### Step 2: Review Findings

Claude checks:
- **Properties:** Only transform/opacity animated?
- **Duration:** Is it <300ms for interactions?
- **Reduced Motion:** Is useReducedMotion implemented?
- **CSS Transitions:** Is "transition: all" avoided?

### Step 3: Implement Fixes

```
"Optimize these animations for 60fps performance."
```

### Step 4: Test Performance

- Test hover states (should be <200ms)
- Test with reduced motion preference enabled
- Verify 60fps in Chrome DevTools Performance tab

---

## 🖼️ Image Optimization Workflow

### Step 1: Request Audit

```
"Audit image usage in [Component/Page] using agent-skills guidelines."
```

### Step 2: Review Findings

Claude checks:
- **Dimensions:** Are width/height explicit?
- **Priority:** Are above-fold images priority loaded?
- **Lazy Loading:** Are below-fold images lazy loaded?
- **Alt Text:** Is it descriptive?
- **Responsive:** Are sizes configured?

### Step 3: Implement Fixes

```
"Fix image optimization issues."
```

### Step 4: Test Layout Shift

- Load page with slow network
- Check for layout shift (should be 0)
- Verify images don't cause content jumping

---

## 📚 Best Practices Reference

### Quick Reference Commands

**Before coding:**
```
"What agent-skills guidelines apply to [feature type]?"
```

**During coding:**
```
"Review this code snippet against agent-skills best practices."
```

**After coding:**
```
"Audit this component for agent-skills compliance."
```

**For specific issues:**
```
"How should I implement [specific feature] according to agent-skills?"
```

---

## 🔍 Debugging with Agent-Skills

### Performance Issues

**Problem:** Page is slow to load

**Prompt:**
```
"Analyze this page for performance issues using agent-skills guidelines."
```

**Claude checks:**
- Sequential data fetching
- Large bundle sizes
- Unoptimized images
- Inefficient animations

---

### Accessibility Issues

**Problem:** Component not keyboard accessible

**Prompt:**
```
"Why isn't this component keyboard accessible? Check against
agent-skills guidelines."
```

**Claude checks:**
- Missing tabIndex
- No keyboard event handlers
- Improper ARIA roles
- Focus not visible

---

### Animation Issues

**Problem:** Animations feel janky

**Prompt:**
```
"Why are these animations janky? Audit against agent-skills
animation guidelines."
```

**Claude checks:**
- Animating width/height/padding
- Duration too long
- Too many simultaneous animations
- Not using transform/opacity

---

## 📈 Measuring Success

### Key Metrics

After implementing agent-skills best practices, track:

**Performance:**
- Lighthouse Performance score: Target 90+
- LCP (Largest Contentful Paint): Target <2.5s
- CLS (Cumulative Layout Shift): Target <0.1
- Bundle size: Monitor and optimize

**Accessibility:**
- Lighthouse Accessibility score: Target 90+
- Keyboard navigation: 100% functional
- Screen reader compatibility: Verified
- WCAG compliance: AA or higher

**User Experience:**
- Animation smoothness: 60fps
- Mobile usability: 100% touch targets >44px
- Form completion rate: Improved
- Error recovery: Clear and helpful

---

## 💡 Pro Tips

### 1. Use Agent-Skills Early

Don't wait until code review to check guidelines. Ask Claude for guidance **before** you write code.

### 2. Be Specific

Instead of "review my code," say "review this ProductCard for image optimization and accessibility according to agent-skills."

### 3. Iterate Quickly

Use agent-skills checks throughout development, not just at the end. Fixes are easier when code is fresh.

### 4. Learn Patterns

After a few reviews, you'll internalize common patterns:
- Always explicit image dimensions
- Always aria-labels on icon buttons
- Always Promise.all for parallel fetching
- Always transform/opacity animations

### 5. Create Templates

Once you have agent-skills-compliant components, use them as templates for new components.

---

## 🚀 Integration with CI/CD

### Pre-Commit Checks

Add to your workflow:
```bash
# Before committing, ask Claude:
"Audit my changes against agent-skills best practices."
```

### Pull Request Reviews

In PR description, include:
```
## Agent-Skills Compliance
- [ ] Performance guidelines followed
- [ ] Accessibility guidelines followed
- [ ] Animation guidelines followed
- [ ] Image optimization guidelines followed

Reviewed by Claude using agent-skills
```

---

## 📖 Additional Resources

- [Vercel Agent-Skills Repository](https://github.com/vercel-labs/agent-skills)
- [React Best Practices (45 rules)](https://github.com/vercel-labs/agent-skills/blob/main/skills/react-best-practices/SKILL.md)
- [Web Design Guidelines (100+ rules)](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md)
- [Lumore Component Best Practices](./component-best-practices.md)
- [Lumore Development Checklist](./development-checklist.md)

---

## 🎯 Summary

**Agent-skills provides:**
- Structured best practices for AI agents
- Comprehensive React and web guidelines
- Performance, accessibility, and UX rules

**Use it to:**
- Plan components before coding
- Review code during development
- Audit completed components
- Debug issues systematically

**Result:**
- Higher quality code
- Better performance
- Improved accessibility
- Faster development

---

**Document Version:** 1.0
**Last Updated:** January 20, 2026
**Status:** Ready for Use 🚀
