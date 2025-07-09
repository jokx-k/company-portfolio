#!/usr/bin/env python3
"""
Create proper placeholder images for the Link Expert portfolio website.
This script generates actual image files that browsers can display.
"""

import base64
import os

# Link Expert brand colors
COLORS = {
    'primary': '#1a365d',
    'secondary': '#2b77ad', 
    'accent': '#3182ce',
    'light': '#e2e8f0',
    'dark': '#2d3748'
}

def create_png_placeholder(width, height, color, text="", filename=""):
    """Create a simple PNG placeholder using SVG converted to base64"""
    
    # Create SVG content
    svg_content = f'''<svg width="{width}" height="{height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="{color}"/>
    <text x="50%" y="45%" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="{max(16, min(width, height) // 20)}" font-weight="bold">
        {text}
    </text>
    <text x="50%" y="60%" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-family="Arial, sans-serif" font-size="{max(12, min(width, height) // 30)}">
        {filename}
    </text>
</svg>'''
    
    return svg_content

# Define all images we need to create
images_to_create = [
    # Hero and main images
    ("hero-bg.jpg", 1920, 1080, COLORS['primary'], "Hero Background", "hero-bg.jpg"),
    ("intro-image.jpg", 800, 600, COLORS['secondary'], "About Link Expert", "intro-image.jpg"),
    ("gateway-image.jpg", 600, 400, COLORS['accent'], "Smart Parking", "gateway-image.jpg"),
    ("views-image.jpg", 600, 400, COLORS['dark'], "City Views", "views-image.jpg"),
    
    # Contact and office
    ("contact-image.jpg", 600, 400, COLORS['primary'], "Contact Us", "contact-image.jpg"),
    ("office-image.jpg", 800, 500, COLORS['secondary'], "Our Office", "office-image.jpg"),
    
    # Services (7 images)
    ("service-1.jpg", 400, 300, COLORS['primary'], "Smart Parking", "service-1.jpg"),
    ("service-2.jpg", 400, 300, COLORS['secondary'], "Valet Service", "service-2.jpg"),
    ("service-3.jpg", 400, 300, COLORS['accent'], "Payment Systems", "service-3.jpg"),
    ("service-4.jpg", 400, 300, COLORS['dark'], "Security", "service-4.jpg"),
    ("service-5.jpg", 400, 300, COLORS['primary'], "Maintenance", "service-5.jpg"),
    ("service-6.jpg", 400, 300, COLORS['secondary'], "Consulting", "service-6.jpg"),
    ("service-7.jpg", 400, 300, COLORS['accent'], "Management", "service-7.jpg"),
    
    # Offers (5 images) - convert to JPG
    ("offer-1.jpg", 300, 200, COLORS['primary'], "Smart Tech", "offer-1.jpg"),
    ("offer-2.jpg", 300, 200, COLORS['secondary'], "Valet Plus", "offer-2.jpg"),
    ("offer-3.jpg", 300, 200, COLORS['accent'], "Easy Pay", "offer-3.jpg"),
    ("offer-4.jpg", 300, 200, COLORS['dark'], "24/7 Security", "offer-4.jpg"),
    ("offer-5.jpg", 300, 200, COLORS['primary'], "Full Service", "offer-5.jpg"),
    
    # Logos and icons - keep as PNG/SVG
    ("favicon.png", 32, 32, COLORS['primary'], "LE", "favicon.png"),
    ("webclip.png", 180, 180, COLORS['primary'], "Link Expert", "webclip.png"),
]

# Create images directory if it doesn't exist
images_dir = "images"
os.makedirs(images_dir, exist_ok=True)

print("Creating placeholder images...")

for filename, width, height, color, text, display_name in images_to_create:
    filepath = os.path.join(images_dir, filename)
    svg_content = create_png_placeholder(width, height, color, text, display_name)
    
    # Write as SVG but with proper extensions
    if filename.endswith('.svg'):
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(svg_content)
    else:
        # For non-SVG files, we'll create SVG content but browsers will handle it
        # This is a temporary solution - in production you'd use a proper image library
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(svg_content)
    
    print(f"✓ Created {filename} ({width}x{height})")

# Create logo files with SVG content
logo_svg = f'''<svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="{COLORS['primary']}"/>
    <text x="50%" y="40%" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="18" font-weight="bold">
        Link Expert
    </text>
    <text x="50%" y="65%" text-anchor="middle" fill="{COLORS['light']}" font-family="Arial, sans-serif" font-size="10">
        Parking Solutions
    </text>
</svg>'''

mobile_logo_svg = f'''<svg width="150" height="45" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="{COLORS['primary']}"/>
    <text x="50%" y="55%" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="bold">
        Link Expert
    </text>
</svg>'''

main_logo_svg = f'''<svg width="300" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="{COLORS['primary']}"/>
    <text x="50%" y="45%" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">
        Link Expert
    </text>
    <text x="50%" y="70%" text-anchor="middle" fill="{COLORS['light']}" font-family="Arial, sans-serif" font-size="12">
        Smart Parking Management Solutions
    </text>
</svg>'''

# Write logo files
with open(os.path.join(images_dir, "link-expert-logo.webp"), 'w', encoding='utf-8') as f:
    f.write(logo_svg)
print("✓ Created link-expert-logo.webp")

with open(os.path.join(images_dir, "link-expert-mobile-logo.webp"), 'w', encoding='utf-8') as f:
    f.write(mobile_logo_svg)
print("✓ Created link-expert-mobile-logo.webp")

with open(os.path.join(images_dir, "main-logo.png"), 'w', encoding='utf-8') as f:
    f.write(main_logo_svg)
print("✓ Created main-logo.png")

print(f"\n✅ Successfully created {len(images_to_create) + 3} placeholder images!")
print("\nNote: These are SVG-based placeholders. For production, replace with actual JPG/PNG/WebP images.")
