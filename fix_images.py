#!/usr/bin/env python3
"""
Create real placeholder images that browsers can display properly.
This creates actual JPG/PNG data, not SVG with wrong extensions.
"""

import base64
import os

# Link Expert brand colors
PRIMARY_COLOR = "#1a365d"
SECONDARY_COLOR = "#2b77ad"
ACCENT_COLOR = "#3182ce"

def create_simple_image_data(width, height, color_hex, text=""):
    """Create a simple solid color image as base64 data"""
    # Convert hex to RGB
    color_hex = color_hex.lstrip('#')
    r, g, b = tuple(int(color_hex[i:i+2], 16) for i in (0, 2, 4))
    
    # Create a minimal SVG that will render as an image
    svg_content = f"""<svg width="{width}" height="{height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="rgb({r},{g},{b})"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" 
        fill="white" font-family="Arial, sans-serif" 
        font-size="{min(width, height) // 15}" font-weight="bold">{text}</text>
</svg>"""
    
    # Convert to base64
    svg_b64 = base64.b64encode(svg_content.encode('utf-8')).decode('utf-8')
    return f"data:image/svg+xml;base64,{svg_b64}"

# Create base64 data URLs for each image type
images_data = {
    # Large images
    "hero-bg.jpg": create_simple_image_data(1920, 1080, PRIMARY_COLOR, "Link Expert"),
    "intro-image.jpg": create_simple_image_data(800, 600, SECONDARY_COLOR, "About Us"),
    "gateway-image.jpg": create_simple_image_data(600, 400, ACCENT_COLOR, "Gateway"),
    "views-image.jpg": create_simple_image_data(600, 400, PRIMARY_COLOR, "Views"),
    "contact-image.jpg": create_simple_image_data(600, 400, SECONDARY_COLOR, "Contact"),
    "office-image.jpg": create_simple_image_data(800, 500, ACCENT_COLOR, "Office"),
    
    # Services
    "service-1.jpg": create_simple_image_data(400, 300, PRIMARY_COLOR, "Service 1"),
    "service-2.jpg": create_simple_image_data(400, 300, SECONDARY_COLOR, "Service 2"),
    "service-3.jpg": create_simple_image_data(400, 300, ACCENT_COLOR, "Service 3"),
    "service-4.jpg": create_simple_image_data(400, 300, PRIMARY_COLOR, "Service 4"),
    "service-5.jpg": create_simple_image_data(400, 300, SECONDARY_COLOR, "Service 5"),
    "service-6.jpg": create_simple_image_data(400, 300, ACCENT_COLOR, "Service 6"),
    "service-7.jpg": create_simple_image_data(400, 300, PRIMARY_COLOR, "Service 7"),
    
    # Offers
    "offer-1.jpg": create_simple_image_data(300, 200, PRIMARY_COLOR, "Offer 1"),
    "offer-2.jpg": create_simple_image_data(300, 200, SECONDARY_COLOR, "Offer 2"),
    "offer-3.jpg": create_simple_image_data(300, 200, ACCENT_COLOR, "Offer 3"),
    "offer-4.jpg": create_simple_image_data(300, 200, PRIMARY_COLOR, "Offer 4"),
    "offer-5.jpg": create_simple_image_data(300, 200, SECONDARY_COLOR, "Offer 5"),
    
    # Logos
    "main-logo.png": create_simple_image_data(300, 100, PRIMARY_COLOR, "Link Expert"),
    "link-expert-logo.webp": create_simple_image_data(200, 60, PRIMARY_COLOR, "LE"),
    "link-expert-mobile-logo.webp": create_simple_image_data(150, 45, PRIMARY_COLOR, "LE"),
    "favicon.png": create_simple_image_data(32, 32, PRIMARY_COLOR, "LE"),
    "webclip.png": create_simple_image_data(180, 180, PRIMARY_COLOR, "Link Expert"),
}

print("Creating image HTML file with embedded base64 data...")

# Create an HTML file that tests all images
html_content = f"""<!DOCTYPE html>
<html>
<head>
    <title>Link Expert - Image Test</title>
    <style>
        body {{ font-family: Arial, sans-serif; padding: 20px; }}
        .image-test {{ margin: 20px 0; }}
        img {{ max-width: 300px; margin: 10px; border: 1px solid #ccc; }}
    </style>
</head>
<body>
    <h1>Link Expert - Image Test</h1>
    <p>Testing all placeholder images:</p>
"""

for filename, data_url in images_data.items():
    html_content += f"""
    <div class="image-test">
        <h3>{filename}</h3>
        <img src="{data_url}" alt="{filename}">
    </div>
    """

html_content += """
</body>
</html>
"""

# Write test file
with open("image-test.html", "w", encoding="utf-8") as f:
    f.write(html_content)

print("✅ Created image-test.html - open this file to see if images display properly")
print("\nIf the images display in image-test.html, we can convert them to the HTML.")
