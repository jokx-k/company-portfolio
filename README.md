# Link Expert Company Portfolio

A professional parking management and smart solutions company portfolio website featuring modern Arabic design and user-friendly experience.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **RTL Support**: Native right-to-left layout for Arabic content
- **Modern Animations**: Smooth scroll animations and transitions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and structured data
- **Performance Optimized**: Lazy loading and optimized assets

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript
- Google Fonts (Playfair Display)
- Modern CSS animations

## Structure

```
company-portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── normalize.css       # CSS reset
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Main JavaScript file
├── images/                 # Image assets
└── README.md               # This file
```

## Setup

1. Clone or download the project files
2. Add your own images to the `images/` folder
3. Update the content in `index.html` to match your company
4. Customize colors and styling in `css/styles.css`
5. Deploy to your web server

## Image Requirements

The following images need to be added to the `images/` folder:

### Logos
- `link-expert-logo.webp` - Main company logo
- `link-expert-mobile-logo.webp` - Mobile symbol/icon
- `main-logo.png` - Hero section logo
- `favicon.png` - Favicon
- `webclip.png` - Apple touch icon

### Hero & Sections
- `hero-bg.jpg` - Hero background image
- `intro-image.jpg` - Introduction section image
- `gateway-image.jpg` - Goal section image
- `views-image.jpg` - What we offer section image
- `contact-image.jpg` - Contact section image
- `office-image.jpg` - Office location image

### What We Offer Icons
- `offer-1.png` - Save effort icon
- `offer-2.png` - Save money icon
- `offer-3.png` - Save time icon
- `offer-4.png` - Increase income icon
- `offer-5.png` - Best results icon

### Services
- `service-1.jpg` - Parking management and establishment
- `service-2.jpg` - Valet parking service
- `service-3.jpg` - Crowd management in parking areas
- `service-4.jpg` - Membership management
- `service-5.jpg` - Bus and golf cart services
- `service-6.jpg` - Electric charging and energy
- `service-7.jpg` - Parking maintenance and cleaning

## Customization

### Colors
The color scheme is defined in CSS custom properties at the top of `styles.css` and uses Link Expert's brand colors:

```css
:root {
    --primary-color: #1a365d;      /* Deep Blue */
    --secondary-color: #2b77ad;    /* Medium Blue */
    --text-dark: #1a365d;          /* Deep Blue */
    --text-light: #ffffff;         /* White */
    --accent-blue: #3182ce;        /* Bright Blue */
    --background-light: #f7fafc;   /* Light Gray */
}
```

### Fonts
The site uses Playfair Display from Google Fonts. You can change this in the HTML head section and CSS.

### Content
All text content can be updated directly in the HTML file. The site supports both Arabic and English text.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized CSS with modern features
- Lazy loading for images
- Minified assets recommended for production
- Service Worker ready for PWA

## Contact Form

The contact form includes basic client-side validation. For production use, you'll need to:

1. Set up a backend endpoint to handle form submissions
2. Update the form action URL in the JavaScript
3. Implement server-side validation
4. Set up email notifications

## Services

Link Expert specializes in:
- Parking management and establishment
- Valet parking services
- Crowd management in parking areas
- Membership management
- Bus and golf cart services
- Electric charging and energy solutions
- Parking maintenance and cleaning

## License

This project is for portfolio purposes. Customize as needed for your use case.

## Author

Created for Link Expert company portfolio project - specialized in parking management and smart solutions.
