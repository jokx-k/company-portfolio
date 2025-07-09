#!/usr/bin/env python3
"""
Create placeholder images for the Link Expert website
"""
import os
from PIL import Image, ImageDraw, ImageFont
import colorsys

def create_placeholder_image(filename, width=400, height=300, text="Link Expert"):
    """Create a placeholder image with text"""
    # Create a gradient background
    img = Image.new('RGB', (width, height), '#f0f0f0')
    draw = ImageDraw.Draw(img)
    
    # Create a gradient effect
    for y in range(height):
        r = int(72 + (y / height) * 50)  # Dark blue to lighter blue
        g = int(128 + (y / height) * 50)
        b = int(200 + (y / height) * 55)
        color = (min(255, r), min(255, g), min(255, b))
        draw.line([(0, y), (width, y)], fill=color)
    
    # Add text
    try:
        font = ImageFont.truetype("Arial.ttf", size=min(width//10, 40))
    except:
        font = ImageFont.load_default()
    
    # Calculate text position to center it
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Add text with shadow
    draw.text((x+2, y+2), text, fill='#333333', font=font)
    draw.text((x, y), text, fill='white', font=font)
    
    return img

def main():
    # Create public/images directory if it doesn't exist
    images_dir = 'public/images'
    os.makedirs(images_dir, exist_ok=True)
    
    # List of images needed
    images_to_create = [
        # Logo files
        ('link-expert-logo.webp', 300, 150, 'Link Expert'),
        ('link-expert-mobile-logo.webp', 200, 100, 'LE'),
        ('menu.svg', 24, 24, '☰'),
        
        # Hero and background images
        ('hero-bg.jpg', 1920, 1080, 'Link Expert'),
        ('intro-image.jpg', 800, 600, 'About Us'),
        ('gateway-image.jpg', 600, 400, 'Gateway'),
        ('contact-image.jpg', 600, 400, 'Contact'),
        ('office-image.jpg', 800, 600, 'Our Office'),
        ('views-image.jpg', 800, 600, 'Views'),
        
        # Service images
        ('service-1.jpg', 400, 300, 'Service 1'),
        ('service-2.jpg', 400, 300, 'Service 2'),
        ('service-3.jpg', 400, 300, 'Service 3'),
        ('service-4.jpg', 400, 300, 'Service 4'),
        ('service-5.jpg', 400, 300, 'Service 5'),
        ('service-6.jpg', 400, 300, 'Service 6'),
        ('service-7.jpg', 400, 300, 'Service 7'),
        
        # Offer images
        ('offer-1.jpg', 400, 300, 'Offer 1'),
        ('offer-2.jpg', 400, 300, 'Offer 2'),
        ('offer-3.jpg', 400, 300, 'Offer 3'),
        ('offer-4.jpg', 400, 300, 'Offer 4'),
        ('offer-5.jpg', 400, 300, 'Offer 5'),
    ]
    
    print("Creating placeholder images...")
    
    for filename, width, height, text in images_to_create:
        filepath = os.path.join(images_dir, filename)
        
        if filename.endswith('.svg'):
            # Create simple SVG for menu icon
            svg_content = f'''<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="{width}" height="3" y="5" fill="#333"/>
  <rect width="{width}" height="3" y="11" fill="#333"/>
  <rect width="{width}" height="3" y="17" fill="#333"/>
</svg>'''
            with open(filepath, 'w') as f:
                f.write(svg_content)
        else:
            img = create_placeholder_image(filename.split('.')[0], width, height, text)
            # Convert to appropriate format
            if filename.endswith('.webp'):
                img.save(filepath, 'WEBP', quality=80)
            else:
                img.save(filepath, 'JPEG', quality=85)
        
        print(f"Created: {filepath}")
    
    print(f"\nCreated {len(images_to_create)} placeholder images in {images_dir}/")
    print("These are temporary placeholders. Replace with actual Link Expert brand assets.")

if __name__ == "__main__":
    main()
