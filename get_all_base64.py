#!/usr/bin/env python3
"""
Generate all base64 image data for the Link Expert website
"""

import base64

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

# Print all the base64 data we need
print("=== HERO & MAIN IMAGES ===")
print("hero-bg.jpg:", create_simple_image_data(1920, 1080, PRIMARY_COLOR, "Link Expert"))
print()
print("intro-image.jpg:", create_simple_image_data(800, 600, SECONDARY_COLOR, "About Us"))
print()
print("gateway-image.jpg:", create_simple_image_data(600, 400, ACCENT_COLOR, "Gateway"))
print()
print("views-image.jpg:", create_simple_image_data(600, 400, PRIMARY_COLOR, "Views"))
print()
print("contact-image.jpg:", create_simple_image_data(600, 400, SECONDARY_COLOR, "Contact"))
print()
print("office-image.jpg:", create_simple_image_data(800, 500, ACCENT_COLOR, "Office"))
print()

print("=== OFFER IMAGES ===")
print("offer-1.jpg:", create_simple_image_data(300, 200, PRIMARY_COLOR, "Smart Tech"))
print()
print("offer-2.jpg:", create_simple_image_data(300, 200, SECONDARY_COLOR, "Valet Plus"))
print()
print("offer-3.jpg:", create_simple_image_data(300, 200, ACCENT_COLOR, "Easy Pay"))
print()
print("offer-4.jpg:", create_simple_image_data(300, 200, PRIMARY_COLOR, "24/7 Security"))
print()
print("offer-5.jpg:", create_simple_image_data(300, 200, SECONDARY_COLOR, "Full Service"))
print()

print("=== SERVICE IMAGES ===")
services = ["Parking Mgmt", "Valet Service", "Payment Systems", "Security", "Maintenance", "Consulting", "Management"]
colors = [PRIMARY_COLOR, SECONDARY_COLOR, ACCENT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, ACCENT_COLOR, PRIMARY_COLOR]

for i, (service, color) in enumerate(zip(services, colors), 1):
    print(f"service-{i}.jpg:", create_simple_image_data(400, 300, color, service))
    print()
