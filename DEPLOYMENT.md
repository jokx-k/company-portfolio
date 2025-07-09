# Deployment Guide - Oud Reserve Portfolio

This guide will help you deploy your company portfolio website to various hosting platforms.

## Prerequisites

1. All images should be added to the `images/` folder (see `images/IMAGE_REQUIREMENTS.md`)
2. Update content in HTML files to match your company information
3. Test the website locally before deployment

## Local Development

### Option 1: Simple Local Server
```bash
# Using Python (if Python is installed)
python -m http.server 8000

# Using Node.js (if Node.js is installed)
npx live-server --port=8000
```

### Option 2: Using npm
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Hosting Options

### 1. GitHub Pages (Free)

1. Create a new repository on GitHub
2. Upload your files to the repository
3. Go to Settings > Pages
4. Select source: Deploy from a branch
5. Choose main branch
6. Your site will be available at: `https://username.github.io/repository-name`

### 2. Netlify (Free tier available)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder to deploy
3. Or connect your GitHub repository for automatic deployments
4. Your site will get a random URL, which you can customize

### 3. Vercel (Free tier available)

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with zero configuration
4. Automatic deployments on every push

### 4. Traditional Web Hosting

Upload all files via FTP to your hosting provider:
1. Connect to your hosting via FTP client
2. Upload all files to the public_html or www folder
3. Ensure index.html is in the root directory

## Custom Domain Setup

### For GitHub Pages:
1. Add a CNAME file with your domain name
2. Configure DNS records with your domain provider

### For Netlify/Vercel:
1. Go to domain settings in your dashboard
2. Add your custom domain
3. Update DNS records as instructed

## Performance Optimization

Before deployment, consider:

1. **Image Optimization**
   ```bash
   npm run optimize-images
   ```

2. **CSS/JS Minification**
   ```bash
   npm run build
   ```

3. **Enable Compression**
   - Most hosting providers enable gzip automatically
   - For custom servers, ensure gzip compression is enabled

## SEO and Analytics Setup

1. **Google Analytics**
   - Replace the Google Analytics ID in the HTML files
   - Current placeholder: `G-1X36EHYVCB`

2. **Google Search Console**
   - Add your domain to Google Search Console
   - Submit your sitemap (create one if needed)

3. **Meta Tags**
   - Update Open Graph images
   - Customize meta descriptions for each page

## SSL Certificate

- GitHub Pages: Automatic HTTPS
- Netlify: Automatic Let's Encrypt SSL
- Vercel: Automatic SSL
- Traditional hosting: May need to configure manually

## Environment-Specific Configuration

### Production Checklist:
- [ ] Replace all placeholder images
- [ ] Update contact information
- [ ] Test all forms and links
- [ ] Verify Google Analytics tracking
- [ ] Check mobile responsiveness
- [ ] Test loading speed
- [ ] Validate HTML/CSS
- [ ] Test across different browsers

### Form Submission Setup

The contact form currently uses a placeholder endpoint. For production:

1. **Netlify Forms** (if using Netlify):
   ```html
   <form netlify>
   ```

2. **Formspree** (external service):
   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST">
   ```

3. **Custom Backend**: 
   - Set up your own server endpoint
   - Update the form action URL in the JavaScript

## Maintenance

### Regular Updates:
- Update content as needed
- Monitor form submissions
- Check for broken links
- Update images and gallery
- Monitor site performance

### Security:
- Keep any dependencies updated
- Monitor for suspicious activity
- Regular backups (if using traditional hosting)

## Troubleshooting

### Common Issues:

1. **Images not loading**
   - Check file paths are correct
   - Ensure images exist in the images folder
   - Verify file extensions match references

2. **Styles not applying**
   - Check CSS file paths
   - Verify no syntax errors in CSS
   - Clear browser cache

3. **Form not submitting**
   - Set up proper form handling
   - Check network requests in browser dev tools
   - Verify endpoint URL is correct

4. **Mobile layout issues**
   - Test on actual devices
   - Use browser dev tools device emulation
   - Check viewport meta tag

## Support

For technical support with this template:
- Check the README.md file
- Review the code comments
- Test in a local environment first

## Monitoring and Analytics

Set up monitoring for:
- Site uptime
- Page load speeds
- Form submission rates
- User behavior (via Google Analytics)
- Search engine rankings

Remember to comply with privacy laws (GDPR, CCPA) if collecting user data through forms or analytics.
