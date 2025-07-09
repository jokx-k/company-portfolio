#!/bin/bash

# Create placeholder images using ImageMagick or simple colored rectangles
# If ImageMagick is not available, we'll create simple SVG placeholders

IMAGES_DIR="public/images"
mkdir -p "$IMAGES_DIR"

# Function to create SVG placeholder
create_svg_placeholder() {
    local filename="$1"
    local width="$2"
    local height="$3"
    local text="$4"
    local color="${5:-#4A90E2}"
    
    cat > "$IMAGES_DIR/$filename" << EOF
<svg width="$width" height="$height" viewBox="0 0 $width $height" xmlns="http://www.w3.org/2000/svg">
  <rect width="$width" height="$height" fill="$color"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="Arial, sans-serif" font-size="$(($width/20))">$text</text>
</svg>
EOF
}

# Create all needed images as SVG placeholders
echo "Creating placeholder images..."

# Logo files
create_svg_placeholder "link-expert-logo.webp" 300 150 "Link Expert" "#2C5282"
create_svg_placeholder "link-expert-mobile-logo.webp" 200 100 "LE" "#2C5282"

# Menu icon
cat > "$IMAGES_DIR/menu.svg" << 'EOF'
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <rect width="18" height="2" x="3" y="6" fill="currentColor"/>
  <rect width="18" height="2" x="3" y="11" fill="currentColor"/>
  <rect width="18" height="2" x="3" y="16" fill="currentColor"/>
</svg>
EOF

# Hero and background images
create_svg_placeholder "hero-bg.jpg" 1920 1080 "Link Expert" "#1A365D"
create_svg_placeholder "intro-image.jpg" 800 600 "About Us" "#4A90E2"
create_svg_placeholder "gateway-image.jpg" 600 400 "Gateway" "#5A67D8"
create_svg_placeholder "contact-image.jpg" 600 400 "Contact" "#48BB78"
create_svg_placeholder "office-image.jpg" 800 600 "Our Office" "#ED8936"
create_svg_placeholder "views-image.jpg" 800 600 "Views" "#38B2AC"

# Service images
for i in {1..7}; do
    create_svg_placeholder "service-$i.jpg" 400 300 "Service $i" "#805AD5"
done

# Offer images  
for i in {1..5}; do
    create_svg_placeholder "offer-$i.jpg" 400 300 "Offer $i" "#D69E2E"
done

echo "Created placeholder images in $IMAGES_DIR/"
echo "These are SVG placeholders. For production, replace with actual Link Expert brand assets."
